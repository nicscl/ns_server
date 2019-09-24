(function () {
  "use strict";

  angular
    .module('mnGsi')
    .controller('mnGsiItemController', mnGsiItemController)
    .controller('mnGsiItemStatsController', mnGsiItemStatsController)
    .directive('mnGsiItemDetails', mnGsiItemDetails);

  function mnGsiItemStatsController(mnStatisticsNewService, mnHelper, $scope) {
    var vm = this;
    vm.zoom = "minute";
    vm.onSelectZoom = onSelectZoom;

    activate();

    function onSelectZoom() {
      activate();
    }

    function getStats(stat) {
      var rv = {};
      rv[stat] = "@index-.@items";
      return rv;
    }

    function activate() {
      var row = $scope.row;
      vm.hosts = row.hosts.join(', ');
    }
  }

  function mnGsiItemController($scope, mnStatisticsNewService, mnPermissions) {
    var vm = this;

    mnStatisticsNewService.subscribeUIStatsPoller({
      bucket: $scope.row.bucket,
      node: $scope.nodeName || "all",
      zoom: 'minute'
    }, $scope);

    $scope.$watch("mnUIStats", updateValues);
    $scope.$watch("row", updateValues);

    function getIndexStatName(statName) {
      return 'index/' + $scope.row.index + '/' + statName;
    }

    function hasNoValue(statName) {
      return getStatSamples(statName) == undefined;
    }

    function hasValue(statName) {
      return getStatSamples(statName) != undefined;
    }

    function getStatSamples(statName) {
      return $scope.mnUIStats && $scope.mnUIStats.data.samples[getIndexStatName(statName)];
    }

    function updateValues() {
      (['num_requests', 'index_resident_percent', 'items_count', 'data_size'])
        .forEach(function (statName) {
          vm['has_' + statName] = hasValue(statName);
          vm['has_no_' + statName] = hasNoValue(statName);
          if (vm['has_' + statName]) {
            var samples = getStatSamples(statName);
            //set value to the row, so we can use it for sorting later
            $scope.row[statName] = samples[samples.length - 1];
          }
        });
    }


  }

  function mnGsiItemDetails() {
    var mnGsiItemDetails = {
      restrict: 'E',
      scope: {
        row: "=",
        rbac: "=",
        pools: "=",
        nodeName: "@?"
      },
      controller: mnGsiItemDetailsController,
      controllerAs: "mnGsiItemDetailsCtl",
      templateUrl: 'app/mn_admin/mn_indexes/mn_gsi/mn_gsi_item_details.html'
    };

    return mnGsiItemDetails;

    function mnGsiItemDetailsController($rootScope, mnGsiService, $uibModal, $filter, mnPromiseHelper, mnAlertsService) {
      var vm = this;
      vm.dropIndex = dropIndex;
      vm.getFormattedScanTime = getFormattedScanTime;

      function getFormattedScanTime(row) {
        if (row && row.lastScanTime != 'NA')
          return $filter('date')(Date.parse(row.lastScanTime), 'hh:mm:ss a, d MMM, y');
        else
          return 'NA';
      }

      function dropIndex(row) {
        var scope = $rootScope.$new();
        scope.partitioned = row.partitioned;
        $uibModal.open({
          windowClass: "z-index-10001",
          backdrop: 'static',
          templateUrl: 'app/mn_admin/mn_indexes/mn_gsi/mn_gsi_drop_confirm_dialog.html',
          scope: scope
        }).result.then(function () {
          row.awaitingRemoval = true;
          mnPromiseHelper(vm, mnGsiService.postDropIndex(row))
            .showGlobalSpinner()
            .catchErrors(function (resp) {
              if (!resp) {
                return;
              } else if (_.isString(resp)) {
                mnAlertsService.formatAndSetAlerts(resp.data, "error", 4000);
              } else if (resp.errors && resp.errors.length) {
                mnAlertsService.formatAndSetAlerts(_.map(resp.errors, "msg"), "error", 4000);
              }
              row.awaitingRemoval = false;
            })
            .showGlobalSuccess("Index dropped successfully!");
        });
      }

    }
  }
})();