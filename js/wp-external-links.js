/* WP External Links */
(function(){"use strict";function t(e,t,n){if(e.attachEvent){e.attachEvent("on"+t,n)}else if(e.addEventListener){e.addEventListener(t,n,false)}}function n(e,t,n){var r=t||wpExtLinks,i=e.href?e.href.toLowerCase():"",s=e.rel?e.rel.toLowerCase():"",o;if(e.href&&(r.excludeClass.length===0||e.className.indexOf(r.excludeClass))&&(s.indexOf("external")>-1||i.indexOf(r.baseUrl)===-1&&(i.substr(0,7)==="http://"||i.substr(0,8)==="https://"||i.substr(0,6)==="ftp://"||i.substr(0,2)==="//"))){o=window.open(e.href,r.target);o.focus();if(n){if(n.preventDefault){n.preventDefault()}else{n.returnValue=false}}}}var e=jQuery===undefined?null:jQuery;if(e){e(function(){e("a").live("click",function(e){n(this,null,e)})})}else{t(window,"load",function(){var e=window.document.getElementsByTagName("a"),r=function(e){n(e.target,null,e)},i,s;for(s=0;s<e.length;s+=1){i=e[s];t(i,"click",r)}})}})()