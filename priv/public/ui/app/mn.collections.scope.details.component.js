import {Component, ChangeDetectionStrategy} from '/ui/web_modules/@angular/core.js'
import {pluck} from '/ui/web_modules/rxjs/operators.js';
import {shareReplay} from '/ui/web_modules/rxjs/operators.js';

import {MnLifeCycleHooksToStream} from './mn.core.js';
import {MnHelperService} from './mn.helper.service.js';

export {MnCollectionsScopeDetailsComponent};

class MnCollectionsScopeDetailsComponent extends MnLifeCycleHooksToStream {
  static get annotations() { return [
    new Component({
      selector: "mn-collections-scope-details",
      templateUrl: "app/mn.collections.scope.details.html",
      changeDetection: ChangeDetectionStrategy.OnPush,
      inputs: [
        "scope",
        "scopeName",
        "bucketName",
        "statusClass"
      ]
    })
  ]}

  static get parameters() { return [
    MnHelperService
  ]}

  constructor(mnHelperService) {
    super();
    this.mnHelperService = mnHelperService;
    this.filter = mnHelperService.createFilter("name");
    this.sorter = mnHelperService.createSorter("name");
  }

  ngOnInit() {
    this.collections =
      this.mnOnChanges.pipe(pluck("scope", "currentValue", "collections"),
                            this.filter.pipe,
                            this.sorter.pipe,
                            shareReplay({refCount: true, bufferSize: 1}));
    this.paginator =
      this.mnHelperService.createPagenator(this,
                                           this.collections,
                                           "collsPage",
                                           this.scopeName);
  }

  trackByFn(_, collection) {
    return collection.uid;
  }
}
