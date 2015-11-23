(function(){"use strict";var e=window,t={};t.ajax=function(){var t={},n=function(e){var t;try{t=JSON.parse(e.responseText)}catch(n){t=e.responseText}return[t,e]},r=function(t,r){var o={success:function(){},error:function(){}},i=function(){try{return new window.XMLHttpRequest||ActiveXObject}catch(e){}},a=new i("MSXML2.XMLHTTP.3.0");if("string"==typeof r){var c=r;r={},r.url=c}if(r.url=((r.url||location.href)+"").replace(/#.*$/,"").replace(/^\/\//,location.protocol+"//"),r.params){var s=r.url.match(/\?/g)?"&":"?";r.url=r.url+s+e.__.string.serialize(r.params)}if(a.open(t,r.url,!0),t.match(/POST|PUT/g)&&a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.headers)for(var l in r.headers)a.setRequestHeader(l,r.headers[l]);a.onreadystatechange=function(){4===a.readyState&&(a.status>=200&&a.status<300?o.success.apply(o,n(a)):o.error.apply(o,n(a)))},a.send(r.data);var u={success:function(e){return o.success=e,u},error:function(e){return o.error=e,u}};return u};return t.get=function(e){return r("GET",e)},t.post=function(e){return r("POST",e)},t.put=function(e){return r("PUT",e)},t["delete"]=function(e){return r("DELETE",e)},t}(),e.__=e._.extend(e.__,t)}).call(this),function(){"use strict";var e=window,t={};t.array=function(){for(var t={},n=["chunk","compact","difference","drop","dropRight","dropRightWhile","dropWhile","fill","findIndex","findLastIndex","first","flatten","flattenDeep","head","indexOf","initial","intersection","last","lastIndexOf","object","pull","pullAt","remove","rest","slice","sortedIndex","sortedLastIndex","tail","take","takeRight","takeRightWhile","takeWhile","union","uniq","unique","unzip","unzipWith","without","xor","zip","zipObject","zipWith"],r=0;r<n.length;r++)t[n[r]]=e._[n[r]];return t}(),e.__=e._.extend(e.__,t),e.__.arr=e.__.array}.call(this),function(){"use strict";var e=window,t={};t.chain=function(){for(var t={},n=["chain","tap","thru"],r=0;r<n.length;r++)t[n[r]]=e._[n[r]];return t}(),e.__=e._.extend(e.__,t)}.call(this),function(){"use strict";var e=window,t={};t.collection=function(){for(var t={},n=["all","any","at","collect","contains","countBy","detect","each","eachRight","every","filter","find","findlast","findWhere","foldl","foldr","forEach","forEachRight","groupBy","include","includes","indexBy","inject","invoke","map","partition","pluck","reduce","reduceRight","reject","sample","select","shuffle","size","some","sortBy","sortByAll","sortByOrder","where"],r=0;r<n.length;r++)t[n[r]]=e._[n[r]];return t}(),e.__=e._.extend(e.__,t),e.__.col=e.__.collection}.call(this),function(){"use strict";var e=window,t={};t.date=function(){for(var t={},n=["now"],r=0;r<n.length;r++)t[n[r]]=e._[n[r]];return t}(),e.__=e._.extend(e.__,t)}.call(this),function(){"use strict";var e=window,t={};t.dom=function(){var e={};e.get=function(e){if(e){var t=document.querySelectorAll(e);return t.length>1?t:t[0]}};var t=function(e,t,n){n=n.trim().split(" ");for(var r=0;r<n.length;r++)e[t](n[r])};DOMTokenList.prototype.addMany=function(e){t(this,"add",e)},DOMTokenList.prototype.removeMany=function(e){t(this,"remove",e)};var n=function(e){this.collection=e},r=function(){return new n(this)},o=function(e){""===e.getAttribute("class")&&e.removeAttribute("class")},i=function(e,t,n){for(var r=0;r<e.length;r++)e[r]instanceof Element&&e[r].classList[t](n),o(e[r])};if(n.prototype.add=function(e){i(this.collection,"add",e)},n.prototype.addMany=function(e){i(this.collection,"addMany",e)},n.prototype.remove=function(e){i(this.collection,"remove",e)},n.prototype.removeMany=function(e){i(this.collection,"removeMany",e)},n.prototype.toggle=function(e,t){for(var n=0;n<this.collection.length;n++)if(this.collection[n]instanceof Element){var r=this.collection[n].classList.contains(e),i=r?t!==!0&&"remove":t!==!1&&"add";i&&this.collection[n].classList[i](e),o(this.collection[n])}},Object.defineProperty){var a={get:r,enumerable:!0,configurable:!0};try{Object.defineProperty(Object.prototype,"classList",a)}catch(c){-2146823252===c.number&&(a.enumerable=!1,Object.defineProperty(Object.prototype,"classList",a))}}else Object.prototype.__defineGetter__&&Object.prototype.__defineGetter__("classList",r);return e}(),e.__=e._.extend(e.__,t)}.call(this),function(){"use strict";var e=window,t={};t["function"]=function(){for(var t={},n=["after","ary","backflow","before","bind","bindAll","bindKey","compose","curry","curryRight","debounce","defer","delay","flow","flowRight","memoize","modArgs","negate","once","partial","partialRight","rearg","restParam","spread","throttle","wrap"],r=0;r<n.length;r++)t[n[r]]=e._[n[r]];return t}(),e.__=e._.extend(e.__,t),e.__.func=e.__["function"]}.call(this),function(){"use strict";var e=window,t={};t.lang=function(){for(var t={},n=["clone","cloneDeep","eq","gt","gte","isArguments","isArray","isBoolean","isDate","isElement","isEmpty","isEqual","isError","isFinite","isFunction","isMatch","isNaN","isNative","isNull","isNumber","isObject","isPlainObject","isRegExp","isString","isTypeArray","isUndefined","lt","lte","toArray","toPlainObject"],r=0;r<n.length;r++)t[n[r]]=e._[n[r]];return t}(),e.__=e._.extend(e.__,t)}.call(this),function(){"use strict";var e=window,t={};t.log=function(){for(var e,t={},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],r=n.length,o=function(){},i=window.console||{};r--;)e=n[r],i[e]||(i[e]=o);var a=window.localStorage.getItem("DEV_MODE"),c=a&&JSON.parse(a).value||!1;return t.enable=function(){__.memory.localStorage.set("DEV_MODE",!0,1,"day"),c=!0},t.disable=function(){__.memory.localStorage["delete"]("DEV_MODE"),c=!1},t.info=function(e){c&&e&&i.info(e)},t.trace=function(e){c&&e&&i.trace(e)},t.warn=function(e){c&&e&&i.warn(e)},t.error=function(e){c&&e&&i.error(e)},t.group=function(e){c&&e&&i.group(e)},t.ungroup=function(){c&&i.groupEnd()},t}(),e.__=e._.extend(e.__,t)}.call(this),function(){"use strict";var e=window,t={};t.math=function(){for(var t={},n=["add","ceil","floor","max","min","round","sum"],r=0;r<n.length;r++)t[n[r]]=e._[n[r]];return t}(),e.__=e._.extend(e.__,t)}.call(this),function(){"use strict";var e=window,t={};t.memory=function(){var e={},t="localStorage"in window&&null!==window.localStorage?"localStorage":"cookie",n=function(e,t){return moment().add(e,t).unix()};return e.set=function(n,r,o,i){return r?void e[t].set(n,r,o,i):(__.log.warn("LONGDASH: Memory: Can't store empty data."),!1)},e.get=function(n,r){var o=e[t].get(n,!0);if(r=r||!0,o){var i=moment.locale();return moment.locale("en"),r&&__.log.info('LONGDASH: Memory: "'+n+'" will expire '+moment().add(o.timestamp-moment().unix(),"seconds").fromNow()+" from "+t+"."),moment.locale(i),o.value}return null},e["delete"]=function(n){e[t]["delete"](n)},e.cookie={set:function(e,t,r,o){var i;i=r?"; expires="+n(r,o):"",document.cookie=e+"-expires="+n(r,o)+"; path=/",document.cookie=e+"="+t+i+"; path=/",__.log.info('LONGDASH: Memory: "'+e+'" [CREATED with cookies]')},get:function(e,t){var n,r={},o=e+"-expires=",i=e+"=",a=document.cookie.split(";");for(n=0;n<a.length;n++){for(var c=a[n];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(o)&&(r.timestamp=c.substring(o.length,c.length)),0===c.indexOf(i))return r.value=c.substring(i.length,c.length),t?r:r.value}return null},"delete":function(t){e.set(t+"-expires","",-1),e.set(t,"",-1),__.log.warn('LONGDASH: Memory: "'+t+'" [DELETED from cookies]')}},e.localStorage={set:function(e,t,r,o){try{window.localStorage.setItem(e,JSON.stringify({value:t,timestamp:n(r,o)}))}catch(i){}__.log.info('LONGDASH: Memory: "'+e+'" [CREATED with localStorage]')},get:function(t){var n=window.localStorage.getItem(t);if(n){n=JSON.parse(n);var r=moment().unix(),o=n.timestamp;return o>r?n:(__.log.warn('LONGDASH: Memory: "'+t+'" has expired.'),e["delete"](t),null)}return null},"delete":function(e){window.localStorage.removeItem(e),__.log.warn('LONGDASH: Memory: "'+e+'" [DELETED from localStorage]')}},e}(),e.__=e._.extend(e.__,t),e.__.mem=e.__.memory}.call(this),function(){"use strict";var e=window,t={};t.number=function(){for(var t={},n=["inRange","random"],r=0;r<n.length;r++)t[n[r]]=e._[n[r]];return t}(),e.__=e._.extend(e.__,t),e.__.num=e.__.number}.call(this),function(){"use strict";var e=window,t={};t.object=function(){for(var t={},n=["assign","create","defaults","defaultsDeep","extend","findKey","findLastKey","forIn","forInRight","forOwn","forOwnRight","functions","get","has","invert","keys","keysIn","mapKeys","mapValues","merge","methops","omit","pairs","pick","result","set","transform","values","valuesIn"],r=0;r<n.length;r++)t[n[r]]=e._[n[r]];return t}(),e.__=e._.extend(e.__,t),e.__.obj=e.__.object}.call(this),function(){"use strict";var e=window,t={};t.string=function(){var t={},n=["camelCase","capitalize","deburr","endsWith","escape","escapeRegExp","kebabCase","pad","padLeft","padRight","parseInt","repeat","snakeCase","startCase","startsWith","template","trim","trimLeft","trimRight","trunc","unescape","words"],r=function(e){return null==e?"":""+e},o=function(e){return r(e).split("")};t.camelcase=function(t){return t=r(t),e._.trim(t).replace(/[-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})},t.count=function(e,t,n){e=r(e),t=r(t),n=n||!1;var o;return 0===e.length||0===t.length?0:o=n?e.toLowerCase().split(t.toLowerCase()).length-1:e.split(t).length-1},t.md5=function(e){var t="0123456789abcdef",n={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15},r=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],o=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745],i=function(e){for(var n="",r=0;4>r;r++){var o=r<<3;n+=t.charAt(e>>o+4&15)+t.charAt(e>>o&15)}return n},a=function(e){for(var t=e.length;t--;)if(e.charCodeAt(t)>127)return!0;return!1},c=function(e){var t,n=e.length,r=(n+8>>6)+1,o=r<<4,i=[];for(t=0;o>t;++t)i[t]=0;for(t=0;n>t;++t)i[t>>2]|=e.charCodeAt(t)<<(t%4<<3);return i[t>>2]|=128<<(t%4<<3),i[o-2]=n<<3,i},s=function(e){for(var t=encodeURIComponent(e),r=[],o=0,i=0,a=t.length;a>o;++o){var c=t.charCodeAt(o);37==c?r[i>>2]|=(n[t.charAt(++o)]<<4|n[t.charAt(++o)])<<(i%4<<3):r[i>>2]|=c<<(i%4<<3),++i}var s=(i+8>>6)+1,l=s<<4,u=i>>2;for(r[u]|=128<<(i%4<<3),o=u+1;l>o;++o)r[o]=0;return r[l-2]=i<<3,r},l=function(){for(var t=a(e)?new s(e):new c(e),n=1732584193,l=4023233417,u=2562383102,f=271733878,d=0,p=t.length;p>d;d+=16){for(var h,m,g,_,v,w=n,y=l,b=u,x=f,k=0;64>k;++k)16>k?(h=x^y&(b^x),m=k):32>k?(h=b^x&(y^b),m=(5*k+1)%16):48>k?(h=y^b^x,m=(3*k+5)%16):(h=b^(y|~x),m=7*k%16),g=x,x=b,b=y,_=w+h+o[k]+t[d+m],v=r[k],y+=_<<v|_>>>32-v,w=g;n=n+w|0,l=l+y|0,u=u+b|0,f=f+x|0}return i(n)+i(l)+i(u)+i(f)};return l()},t.quote=function(e,n){return t.surround(e,n||'"')},t.reverse=function(e){return o(e).reverse().join("")},t.serialize=function(e){var t="";for(var n in e)t+=n+"="+encodeURIComponent(e[n])+"&";return t=t.slice(0,-1)},t.slugfy=function(t){var n="ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž",o="aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";n+=n.toUpperCase(),o+=o.toUpperCase();var i=e._.trim(r(t)).toLowerCase();return i=i.replace(/.{1}/g,function(e){var t=n.indexOf(e);return-1===t?e:o[t]}),i=i.replace(/[-_\s]+/g,"-").replace(/[^\w\s-]/g,"-").replace(/-+/g,"-"),e._.endsWith(t,"-")&&(i=i.slice(0,i.length-1)),i},t.surround=function(e,t){return e=r(e),[t,e,t].join("")},t.swapcase=function(e){return e=r(e),e.replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},t.unquote=function(t){return e._.startsWith(t,'"')&&e._.endsWith(t,'"')?t.slice(1,t.length-1):t};for(var i=0;i<n.length;i++)t[n[i]]=e._[n[i]];return t}(),e.__=e._.extend(e.__,t)}.call(this),function(){"use strict";var e=window,t={};t.timer=function(){var e={},t=function(e,t){var n=this,r=n.tack;n.enabled=!0,n.enabled&&(n.id=setInterval(r,moment.duration(e,t)._milliseconds))},n=function(){var e=this;e.enabled=!1,clearInterval(e.id)},r=function(e){this.tack=e};return e.set=function(e,o){this[e]=function(){var e={};return e.start=t,e.stop=n,e.tick=r,e.tack=o||null,e}()},e}(),e.__=e._.extend(e.__,t)}.call(this),function(){"use strict";var e=window,t={};t.url=function(){var e={},t=window.location,n=new RegExp(/\.(asia|aero|arpa|biz|com|co|edu|gov|guru|info|int|jobs|mil|mobi|name|net|org|pro|site|tel|work|web)(?:\.|$)/g),r=new RegExp(/\.(ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cw|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|krd|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zr|zw)$/g),o=new RegExp(/\.(([a-z]{2,4})|()\.[a-z]{2,3})(?:\.|$)/g);return e.address=function(){return t.href},e.domain=function(e){var i=t.hostname;return e=e||!0,i.split(".").length<3?i.split(".")[0]:(i=e?i.replace(r,"").replace(n,""):i.replace(o,"").replace(o,""),i=i.split("."),i.length>0?i[i.length-1]:i[0])},e.hash=function(){return t.hash},e.isExternal=function(e){return e.match(t.hostname)?!0:!1},e.param=function(e,n){var r,o=t.search,i=o.substring(1).split("&"),n=n||!1;for(n&&i.reverse(),r=0;r<i.length;r++){var a=i[r].split("=");if(e===a[0])return a[1]}return null},e.path=function(){return t.pathname},e.protocol=function(){return t.protocol},e.search=function(){return t.search},e.subdomain=function(){var e=t.hostname;return e.split(".").length<3?e.split(".")[0]:(e=e.replace(r,"").replace(n,""),e=e.split(".").shift())},e.tld=function(e){var i,a,c=t.hostname,s=[];if(e=e||!0,c.split(".").length<3)return c.split(".")[0];var l=c.split(".").reverse();if(e)for(i=0;i<l.length;i++){var u="."+l[i];if(a=u.match(r)||u.match(n),a&&s.push(a[0].replace(".","")),s.length>1)break}else for(i=0;i<l.length&&(a=("."+l[i]).match(o),a&&s.push(a[0].replace(".","")),!(s.length>1||l[i].length>4));i++);return s},e}(),e.__=e._.extend(e.__,t)}.call(this),function(){"use strict";var e=window,t={};t.utility=function(){for(var t={},n=["attempt","callback","constant","identity","iteratee","matches","matchesProperty","method","methodOf","mixin","noConflict","noop","property","propertyOf","range","runInContext","times","uniqueId"],r=0;r<n.length;r++)t[n[r]]=e._[n[r]];return t}(),e.__=e._.extend(e.__,t),e.__.util=e.__.utility}.call(this);
//# sourceMappingURL=longdash.js.map
