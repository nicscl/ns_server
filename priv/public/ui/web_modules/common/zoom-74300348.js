var t=Math.SQRT2;function r(t){return((t=Math.exp(t))+1/t)/2}function a(a,n){var e,h,u=a[0],M=a[1],o=a[2],i=n[0],f=n[1],c=n[2],p=i-u,s=f-M,x=p*p+s*s;if(x<1e-12)h=Math.log(c/o)/t,e=function(r){return[u+r*p,M+r*s,o*Math.exp(t*r*h)]};else{var l=Math.sqrt(x),v=(c*c-o*o+4*x)/(2*o*2*l),g=(c*c-o*o-4*x)/(2*c*2*l),q=Math.log(Math.sqrt(v*v+1)-v),d=Math.log(Math.sqrt(g*g+1)-g);h=(d-q)/t,e=function(a){var n,e=a*h,i=r(q),f=o/(2*l)*(i*(n=t*e+q,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(q));return[u+f*p,M+f*s,o*i/r(t*e+q)]}}return e.duration=1e3*h,e}export{a as i};
//# sourceMappingURL=zoom-74300348.js.map
