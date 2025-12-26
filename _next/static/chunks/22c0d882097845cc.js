(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41410,(e,t,r)=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},84086,(e,t,r)=>{let o,i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];r.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},r.getSymbolTotalCodewords=function(e){return i[e]},r.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},r.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');o=e},r.isKanjiModeEnabled=function(){return void 0!==o},r.toSJIS=function(e){return o(e)}},69993,(e,t,r)=>{r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2},r.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},r.from=function(e,t){if(r.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw Error("Unknown EC Level: "+e)}}catch(e){return t}}},54818,(e,t,r)=>{function o(){this.buffer=[],this.length=0}o.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=o},5920,(e,t,r)=>{function o(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}o.prototype.set=function(e,t,r,o){let i=e*this.size+t;this.data[i]=r,o&&(this.reservedBit[i]=!0)},o.prototype.get=function(e,t){return this.data[e*this.size+t]},o.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},o.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=o},16830,(e,t,r)=>{let o=e.r(84086).getSymbolSize;r.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=o(e),i=145===r?26:2*Math.ceil((r-13)/(2*t-2)),n=[r-7];for(let e=1;e<t-1;e++)n[e]=n[e-1]-i;return n.push(6),n.reverse()},r.getPositions=function(e){let t=[],o=r.getRowColCoords(e),i=o.length;for(let e=0;e<i;e++)for(let r=0;r<i;r++)(0!==e||0!==r)&&(0!==e||r!==i-1)&&(e!==i-1||0!==r)&&t.push([o[e],o[r]]);return t}},69436,(e,t,r)=>{let o=e.r(84086).getSymbolSize;r.getPositions=function(e){let t=o(e);return[[0,0],[t-7,0],[0,t-7]]}},48130,(e,t,r)=>{r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};r.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},r.from=function(e){return r.isValid(e)?parseInt(e,10):void 0},r.getPenaltyN1=function(e){let t=e.size,r=0,o=0,i=0,n=null,l=null;for(let s=0;s<t;s++){o=i=0,n=l=null;for(let a=0;a<t;a++){let t=e.get(s,a);t===n?o++:(o>=5&&(r+=3+(o-5)),n=t,o=1),(t=e.get(a,s))===l?i++:(i>=5&&(r+=3+(i-5)),l=t,i=1)}o>=5&&(r+=3+(o-5)),i>=5&&(r+=3+(i-5))}return r},r.getPenaltyN2=function(e){let t=e.size,r=0;for(let o=0;o<t-1;o++)for(let i=0;i<t-1;i++){let t=e.get(o,i)+e.get(o,i+1)+e.get(o+1,i)+e.get(o+1,i+1);(4===t||0===t)&&r++}return 3*r},r.getPenaltyN3=function(e){let t=e.size,r=0,o=0,i=0;for(let n=0;n<t;n++){o=i=0;for(let l=0;l<t;l++)o=o<<1&2047|e.get(n,l),l>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|e.get(l,n),l>=10&&(1488===i||93===i)&&r++}return 40*r},r.getPenaltyN4=function(e){let t=0,r=e.data.length;for(let o=0;o<r;o++)t+=e.data[o];return 10*Math.abs(Math.ceil(100*t/r/5)-10)},r.applyMask=function(e,t){let o=t.size;for(let i=0;i<o;i++)for(let n=0;n<o;n++)t.isReserved(n,i)||t.xor(n,i,function(e,t,o){switch(e){case r.Patterns.PATTERN000:return(t+o)%2==0;case r.Patterns.PATTERN001:return t%2==0;case r.Patterns.PATTERN010:return o%3==0;case r.Patterns.PATTERN011:return(t+o)%3==0;case r.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(o/3))%2==0;case r.Patterns.PATTERN101:return t*o%2+t*o%3==0;case r.Patterns.PATTERN110:return(t*o%2+t*o%3)%2==0;case r.Patterns.PATTERN111:return(t*o%3+(t+o)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,n,i))},r.getBestMask=function(e,t){let o=Object.keys(r.Patterns).length,i=0,n=1/0;for(let l=0;l<o;l++){t(l),r.applyMask(l,e);let o=r.getPenaltyN1(e)+r.getPenaltyN2(e)+r.getPenaltyN3(e)+r.getPenaltyN4(e);r.applyMask(l,e),o<n&&(n=o,i=l)}return i}},81774,(e,t,r)=>{let o=e.r(69993),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];r.getBlocksCount=function(e,t){switch(t){case o.L:return i[(e-1)*4+0];case o.M:return i[(e-1)*4+1];case o.Q:return i[(e-1)*4+2];case o.H:return i[(e-1)*4+3];default:return}},r.getTotalCodewordsCount=function(e,t){switch(t){case o.L:return n[(e-1)*4+0];case o.M:return n[(e-1)*4+1];case o.Q:return n[(e-1)*4+2];case o.H:return n[(e-1)*4+3];default:return}}},92790,(e,t,r)=>{let o=new Uint8Array(512),i=new Uint8Array(256),n=1;for(let e=0;e<255;e++)o[e]=n,i[n]=e,256&(n<<=1)&&(n^=285);for(let e=255;e<512;e++)o[e]=o[e-255];r.log=function(e){if(e<1)throw Error("log("+e+")");return i[e]},r.exp=function(e){return o[e]},r.mul=function(e,t){return 0===e||0===t?0:o[i[e]+i[t]]}},27476,(e,t,r)=>{let o=e.r(92790);r.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let n=0;n<t.length;n++)r[i+n]^=o.mul(e[i],t[n]);return r},r.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let i=0;i<t.length;i++)r[i]^=o.mul(t[i],e);let i=0;for(;i<r.length&&0===r[i];)i++;r=r.slice(i)}return r},r.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let i=0;i<e;i++)t=r.mul(t,new Uint8Array([1,o.exp(i)]));return t}},62351,(e,t,r)=>{let o=e.r(27476);function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(e){this.degree=e,this.genPoly=o.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=o.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=i},76198,(e,t,r)=>{r.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},20596,(e,t,r)=>{let o="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(i=i.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";r.KANJI=RegExp(i,"g"),r.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),r.BYTE=RegExp(n,"g"),r.NUMERIC=RegExp(o,"g"),r.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let l=RegExp("^"+i+"$"),s=RegExp("^"+o+"$"),a=RegExp("^[A-Z0-9 $%*+\\-./:]+$");r.testKanji=function(e){return l.test(e)},r.testNumeric=function(e){return s.test(e)},r.testAlphanumeric=function(e){return a.test(e)}},98670,(e,t,r)=>{let o=e.r(76198),i=e.r(20596);r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!o.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},r.getBestModeForData=function(e){return i.testNumeric(e)?r.NUMERIC:i.testAlphanumeric(e)?r.ALPHANUMERIC:i.testKanji(e)?r.KANJI:r.BYTE},r.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},r.isValid=function(e){return e&&e.bit&&e.ccBits},r.from=function(e,t){if(r.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw Error("Unknown mode: "+e)}}catch(e){return t}}},608,(e,t,r)=>{let o=e.r(84086),i=e.r(81774),n=e.r(69993),l=e.r(98670),s=e.r(76198),a=o.getBCHDigit(7973);function c(e,t){return l.getCharCountIndicator(e,t)+4}r.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},r.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=l.BYTE);let n=(o.getSymbolTotalCodewords(e)-i.getTotalCodewordsCount(e,t))*8;if(r===l.MIXED)return n;let a=n-c(r,e);switch(r){case l.NUMERIC:return Math.floor(a/10*3);case l.ALPHANUMERIC:return Math.floor(a/11*2);case l.KANJI:return Math.floor(a/13);case l.BYTE:default:return Math.floor(a/8)}},r.getBestVersionForData=function(e,t){let o,i=n.from(t,n.M);if(Array.isArray(e)){if(e.length>1){for(let t=1;t<=40;t++)if(function(e,t){let r=0;return e.forEach(function(e){let o=c(e.mode,t);r+=o+e.getBitsLength()}),r}(e,t)<=r.getCapacity(t,i,l.MIXED))return t;return}if(0===e.length)return 1;o=e[0]}else o=e;return function(e,t,o){for(let i=1;i<=40;i++)if(t<=r.getCapacity(i,o,e))return i}(o.mode,o.getLength(),i)},r.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;o.getBCHDigit(t)-a>=0;)t^=7973<<o.getBCHDigit(t)-a;return e<<12|t}},93368,(e,t,r)=>{let o=e.r(84086),i=o.getBCHDigit(1335);r.getEncodedBits=function(e,t){let r=e.bit<<3|t,n=r<<10;for(;o.getBCHDigit(n)-i>=0;)n^=1335<<o.getBCHDigit(n)-i;return(r<<10|n)^21522}},98080,(e,t,r)=>{let o=e.r(98670);function i(e){this.mode=o.NUMERIC,this.data=e.toString()}i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let o=this.data.length-t;o>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*o+1))},t.exports=i},49768,(e,t,r)=>{let o=e.r(98670),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(e){this.mode=o.ALPHANUMERIC,this.data=e}n.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*i.indexOf(this.data[t]);r+=i.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},t.exports=n},2729,(e,t,r)=>{"use strict";t.exports=function(e){for(var t=[],r=e.length,o=0;o<r;o++){var i=e.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var n=e.charCodeAt(o+1);n>=56320&&n<=57343&&(i=(i-55296)*1024+n-56320+65536,o+=1)}if(i<128){t.push(i);continue}if(i<2048){t.push(i>>6|192),t.push(63&i|128);continue}if(i<55296||i>=57344&&i<65536){t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128);continue}if(i>=65536&&i<=1114111){t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},83144,(e,t,r)=>{let o=e.r(2729),i=e.r(98670);function n(e){this.mode=i.BYTE,"string"==typeof e&&(e=o(e)),this.data=new Uint8Array(e)}n.getBitsLength=function(e){return 8*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},t.exports=n},70241,(e,t,r)=>{let o=e.r(98670),i=e.r(84086);function n(e){this.mode=o.KANJI,this.data=e}n.getBitsLength=function(e){return 13*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=i.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},t.exports=n},45759,(e,t,r)=>{"use strict";var o={single_source_shortest_paths:function(e,t,r){var i,n,l,s,a,c,d,h={},u={};u[t]=0;var p=o.PriorityQueue.make();for(p.push(t,0);!p.empty();)for(l in n=(i=p.pop()).value,s=i.cost,a=e[n]||{})a.hasOwnProperty(l)&&(c=s+a[l],d=u[l],(void 0===u[l]||d>c)&&(u[l]=c,p.push(l,c),h[l]=n));if(void 0!==r&&void 0===u[r])throw Error("Could not find a path from "+t+" to "+r+".");return h},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],o=t;o;)r.push(o),e[o],o=e[o];return r.reverse(),r},find_path:function(e,t,r){var i=o.single_source_shortest_paths(e,t,r);return o.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t,r=o.PriorityQueue,i={};for(t in e=e||{},r)r.hasOwnProperty(t)&&(i[t]=r[t]);return i.queue=[],i.sorter=e.sorter||r.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=o},93490,(e,t,r)=>{let o=e.r(98670),i=e.r(98080),n=e.r(49768),l=e.r(83144),s=e.r(70241),a=e.r(20596),c=e.r(84086),d=e.r(45759);function h(e){return unescape(encodeURIComponent(e)).length}function u(e,t,r){let o,i=[];for(;null!==(o=e.exec(r));)i.push({data:o[0],index:o.index,mode:t,length:o[0].length});return i}function p(e){let t,r,i=u(a.NUMERIC,o.NUMERIC,e),n=u(a.ALPHANUMERIC,o.ALPHANUMERIC,e);return c.isKanjiModeEnabled()?(t=u(a.BYTE,o.BYTE,e),r=u(a.KANJI,o.KANJI,e)):(t=u(a.BYTE_KANJI,o.BYTE,e),r=[]),i.concat(n,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function g(e,t){switch(t){case o.NUMERIC:return i.getBitsLength(e);case o.ALPHANUMERIC:return n.getBitsLength(e);case o.KANJI:return s.getBitsLength(e);case o.BYTE:return l.getBitsLength(e)}}function m(e,t){let r,a=o.getBestModeForData(e);if((r=o.from(t,a))!==o.BYTE&&r.bit<a.bit)throw Error('"'+e+'" cannot be encoded with mode '+o.toString(r)+".\n Suggested mode is: "+o.toString(a));switch(r===o.KANJI&&!c.isKanjiModeEnabled()&&(r=o.BYTE),r){case o.NUMERIC:return new i(e);case o.ALPHANUMERIC:return new n(e);case o.KANJI:return new s(e);case o.BYTE:return new l(e)}}r.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(m(t,null)):t.data&&e.push(m(t.data,t.mode)),e},[])},r.fromString=function(e,t){let i=function(e,t){let r={},i={start:{}},n=["start"];for(let l=0;l<e.length;l++){let s=e[l],a=[];for(let e=0;e<s.length;e++){let c=s[e],d=""+l+e;a.push(d),r[d]={node:c,lastCount:0},i[d]={};for(let e=0;e<n.length;e++){let l=n[e];r[l]&&r[l].node.mode===c.mode?(i[l][d]=g(r[l].lastCount+c.length,c.mode)-g(r[l].lastCount,c.mode),r[l].lastCount+=c.length):(r[l]&&(r[l].lastCount=c.length),i[l][d]=g(c.length,c.mode)+4+o.getCharCountIndicator(c.mode,t))}}n=a}for(let e=0;e<n.length;e++)i[n[e]].end=0;return{map:i,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case o.NUMERIC:t.push([i,{data:i.data,mode:o.ALPHANUMERIC,length:i.length},{data:i.data,mode:o.BYTE,length:i.length}]);break;case o.ALPHANUMERIC:t.push([i,{data:i.data,mode:o.BYTE,length:i.length}]);break;case o.KANJI:t.push([i,{data:i.data,mode:o.BYTE,length:h(i.data)}]);break;case o.BYTE:t.push([{data:i.data,mode:o.BYTE,length:h(i.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),t),n=d.find_path(i.map,"start","end"),l=[];for(let e=1;e<n.length-1;e++)l.push(i.table[n[e]].node);return r.fromArray(l.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},r.rawSplit=function(e){return r.fromArray(p(e,c.isKanjiModeEnabled()))}},54118,(e,t,r)=>{let o=e.r(84086),i=e.r(69993),n=e.r(54818),l=e.r(5920),s=e.r(16830),a=e.r(69436),c=e.r(48130),d=e.r(81774),h=e.r(62351),u=e.r(608),p=e.r(93368),g=e.r(98670),m=e.r(93490);function f(e,t,r){let o,i,n=e.size,l=p.getEncodedBits(t,r);for(o=0;o<15;o++)i=(l>>o&1)==1,o<6?e.set(o,8,i,!0):o<8?e.set(o+1,8,i,!0):e.set(n-15+o,8,i,!0),o<8?e.set(8,n-o-1,i,!0):o<9?e.set(8,15-o-1+1,i,!0):e.set(8,15-o-1,i,!0);e.set(n-8,8,1,!0)}r.create=function(e,t){let r,p;if(void 0===e||""===e)throw Error("No input text");let w=i.M;return void 0!==t&&(w=i.from(t.errorCorrectionLevel,i.M),r=u.from(t.version),p=c.from(t.maskPattern),t.toSJISFunc&&o.setToSJISFunction(t.toSJISFunc)),function(e,t,r,i){let p;if(Array.isArray(e))p=m.fromArray(e);else if("string"==typeof e){let o=t;if(!o){let t=m.rawSplit(e);o=u.getBestVersionForData(t,r)}p=m.fromString(e,o||40)}else throw Error("Invalid data");let w=u.getBestVersionForData(p,r);if(!w)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<w)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+w+".\n")}else t=w;let b=function(e,t,r){let i=new n;r.forEach(function(t){i.put(t.mode.bit,4),i.put(t.getLength(),g.getCharCountIndicator(t.mode,e)),t.write(i)});let l=(o.getSymbolTotalCodewords(e)-d.getTotalCodewordsCount(e,t))*8;for(i.getLengthInBits()+4<=l&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);let s=(l-i.getLengthInBits())/8;for(let e=0;e<s;e++)i.put(e%2?17:236,8);return function(e,t,r){let i,n,l=o.getSymbolTotalCodewords(t),s=l-d.getTotalCodewordsCount(t,r),a=d.getBlocksCount(t,r),c=l%a,u=a-c,p=Math.floor(l/a),g=Math.floor(s/a),m=g+1,f=p-g,w=new h(f),b=0,y=Array(a),v=Array(a),C=0,x=new Uint8Array(e.buffer);for(let e=0;e<a;e++){let t=e<u?g:m;y[e]=x.slice(b,b+t),v[e]=w.encode(y[e]),b+=t,C=Math.max(C,t)}let $=new Uint8Array(l),E=0;for(i=0;i<C;i++)for(n=0;n<a;n++)i<y[n].length&&($[E++]=y[n][i]);for(i=0;i<f;i++)for(n=0;n<a;n++)$[E++]=v[n][i];return $}(i,e,t)}(t,r,p),y=new l(o.getSymbolSize(t));!function(e,t){let r=e.size,o=a.getPositions(t);for(let t=0;t<o.length;t++){let i=o[t][0],n=o[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1)&&!(r<=i+t))for(let o=-1;o<=7;o++)n+o<=-1||r<=n+o||(t>=0&&t<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===t||6===t)||t>=2&&t<=4&&o>=2&&o<=4?e.set(i+t,n+o,!0,!0):e.set(i+t,n+o,!1,!0))}}(y,t);let v=y.size;for(let e=8;e<v-8;e++){let t=e%2==0;y.set(e,6,t,!0),y.set(6,e,t,!0)}return!function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let o=r[t][0],i=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(o+t,i+r,!0,!0):e.set(o+t,i+r,!1,!0)}}(y,t),f(y,r,0),t>=7&&function(e,t){let r,o,i,n=e.size,l=u.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),o=t%3+n-8-3,i=(l>>t&1)==1,e.set(r,o,i,!0),e.set(o,r,i,!0)}(y,t),!function(e,t){let r=e.size,o=-1,i=r-1,n=7,l=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(i,s-r)){let o=!1;l<t.length&&(o=(t[l]>>>n&1)==1),e.set(i,s-r,o),-1==--n&&(l++,n=7)}if((i+=o)<0||r<=i){i-=o,o=-o;break}}}(y,b),isNaN(i)&&(i=c.getBestMask(y,f.bind(null,y,r))),c.applyMask(i,y),f(y,r,i),{modules:y,version:t,errorCorrectionLevel:r,maskPattern:i,segments:p}}(e,r,w,p)}},79082,(e,t,r)=>{function o(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}r.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:t,color:{dark:o(e.color.dark||"#000000ff"),light:o(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},r.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},r.getImageWidth=function(e,t){let o=r.getScale(e,t);return Math.floor((e+2*t.margin)*o)},r.qrToImageData=function(e,t,o){let i=t.modules.size,n=t.modules.data,l=r.getScale(i,o),s=Math.floor((i+2*o.margin)*l),a=o.margin*l,c=[o.color.light,o.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let d=(t*s+r)*4,h=o.color.light;t>=a&&r>=a&&t<s-a&&r<s-a&&(h=c[+!!n[Math.floor((t-a)/l)*i+Math.floor((r-a)/l)]]),e[d++]=h.r,e[d++]=h.g,e[d++]=h.b,e[d]=h.a}}},98325,(e,t,r)=>{let o=e.r(79082);r.render=function(e,t,r){var i;let n=r,l=t;void 0!==n||t&&t.getContext||(n=t,t=void 0),t||(l=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),n=o.getOptions(n);let s=o.getImageWidth(e.modules.size,n),a=l.getContext("2d"),c=a.createImageData(s,s);return o.qrToImageData(c.data,e,n),i=l,a.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px",a.putImageData(c,0,0),l},r.renderToDataURL=function(e,t,o){let i=o;void 0!==i||t&&t.getContext||(i=t,t=void 0),i||(i={});let n=r.render(e,t,i),l=i.type||"image/png",s=i.rendererOpts||{};return n.toDataURL(l,s.quality)}},98639,(e,t,r)=>{let o=e.r(79082);function i(e,t){let r=e.a/255,o=t+'="'+e.hex+'"';return r<1?o+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':o}function n(e,t,r){let o=e+t;return void 0!==r&&(o+=" "+r),o}r.render=function(e,t,r){let l=o.getOptions(t),s=e.modules.size,a=e.modules.data,c=s+2*l.margin,d=l.color.light.a?"<path "+i(l.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",h="<path "+i(l.color.dark,"stroke")+' d="'+function(e,t,r){let o="",i=0,l=!1,s=0;for(let a=0;a<e.length;a++){let c=Math.floor(a%t),d=Math.floor(a/t);c||l||(l=!0),e[a]?(s++,a>0&&c>0&&e[a-1]||(o+=l?n("M",c+r,.5+d+r):n("m",i,0),i=0,l=!1),c+1<t&&e[a+1]||(o+=n("h",s),s=0)):i++}return o}(a,s,l.margin)+'"/>',u='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+('viewBox="0 0 '+c+" ")+c+'" shape-rendering="crispEdges">'+d+h+"</svg>\n";return"function"==typeof r&&r(null,u),u}},9626,(e,t,r)=>{let o=e.r(41410),i=e.r(54118),n=e.r(98325),l=e.r(98639);function s(e,t,r,n,l){let s=[].slice.call(arguments,1),a=s.length,c="function"==typeof s[a-1];if(!c&&!o())throw Error("Callback required as last argument");if(c){if(a<2)throw Error("Too few arguments provided");2===a?(l=r,r=t,t=n=void 0):3===a&&(t.getContext&&void 0===l?(l=n,n=void 0):(l=n,n=r,r=t,t=void 0))}else{if(a<1)throw Error("Too few arguments provided");return 1===a?(r=t,t=n=void 0):2!==a||t.getContext||(n=r,r=t,t=void 0),new Promise(function(o,l){try{let l=i.create(r,n);o(e(l,t,n))}catch(e){l(e)}})}try{let o=i.create(r,n);l(null,e(o,t,n))}catch(e){l(e)}}r.create=i.create,r.toCanvas=s.bind(null,n.render),r.toDataURL=s.bind(null,n.renderToDataURL),r.toString=s.bind(null,function(e,t,r){return l.render(e,r)})},31904,e=>{"use strict";e.i(95126);var t=e.i(19696),r=e.i(65520);e.i(75353);var o=e.i(1908),i=e.i(10844),n=e.i(24370),l=e.i(81427),s=e.i(4948);e.i(11626);var a=e.i(38080);e.i(55483);var c=t,d=e.i(72072);e.i(83601);var h=e.i(28850),u=e.i(86038),p=e.i(12238),g=e.i(86221),m=e.i(48636),f=e.i(85259),w=t;e.i(37061),e.i(65852),e.i(4745);var b=e.i(77436),y=t,v=t;e.i(70071);var C=e.i(39050);let x=C.css`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var $=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let E=class extends v.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="1";return"lg"===this.size?e="4":"md"===this.size?e="2":"sm"===this.size&&(e="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${e});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),r.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?r.html`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:r.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};E.styles=[b.resetStyles,x],$([(0,d.property)()],E.prototype,"size",void 0),$([(0,d.property)()],E.prototype,"name",void 0),$([(0,d.property)()],E.prototype,"imageSrc",void 0),$([(0,d.property)()],E.prototype,"walletIcon",void 0),$([(0,d.property)({type:Boolean})],E.prototype,"installed",void 0),$([(0,d.property)()],E.prototype,"badgeSize",void 0),E=$([(0,a.customElement)("wui-wallet-image")],E);let k=C.css`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var R=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let I=class extends y.LitElement{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return r.html`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>r.html`
          <wui-wallet-image
            size="sm"
            imageSrc=${e}
            name=${(0,h.ifDefined)(t)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(4-this.walletImages.length)].map(()=>r.html` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};I.styles=[b.resetStyles,k],R([(0,d.property)({type:Array})],I.prototype,"walletImages",void 0),I=R([(0,a.customElement)("wui-all-wallets-image")],I),e.i(15859);let A=C.css`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }
`;var S=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let T=class extends w.LitElement{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,r.html`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${(0,h.ifDefined)(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?r.html` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?r.html` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?r.html`<wui-wallet-image
        size=${(0,h.ifDefined)("sm"===this.size?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:r.html`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?r.html`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?r.html`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};T.styles=[b.resetStyles,b.elementStyles,A],S([(0,d.property)({type:Array})],T.prototype,"walletImages",void 0),S([(0,d.property)()],T.prototype,"imageSrc",void 0),S([(0,d.property)()],T.prototype,"name",void 0),S([(0,d.property)()],T.prototype,"size",void 0),S([(0,d.property)()],T.prototype,"tagLabel",void 0),S([(0,d.property)()],T.prototype,"tagVariant",void 0),S([(0,d.property)()],T.prototype,"walletIcon",void 0),S([(0,d.property)()],T.prototype,"tabIdx",void 0),S([(0,d.property)({type:Boolean})],T.prototype,"disabled",void 0),S([(0,d.property)({type:Boolean})],T.prototype,"showAllWallets",void 0),S([(0,d.property)({type:Boolean})],T.prototype,"loading",void 0),S([(0,d.property)({type:String})],T.prototype,"loadingSpinnerColor",void 0),T=S([(0,a.customElement)("wui-list-wallet")],T);var P=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let L=class extends c.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=g.ConnectorController.state.connectors,this.count=i.ApiController.state.count,this.filteredCount=i.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=i.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(g.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),i.ApiController.subscribeKey("count",e=>this.count=e),i.ApiController.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),i.ApiController.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=l.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!n.CoreHelperUtil.isMobile())return null;let o=i.ApiController.state.featured.length,s=this.count+o,a=s<10?s:10*Math.floor(s/10),c=this.filteredCount>0?this.filteredCount:a,d=`${c}`;this.filteredCount>0?d=`${this.filteredCount}`:c<s&&(d=`${c}+`);let g=p.ConnectionController.hasAnyConnection(u.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return r.html`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${d}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,h.ifDefined)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${g}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){m.EventsController.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),f.RouterController.push("AllWallets")}};P([(0,d.property)()],L.prototype,"tabIdx",void 0),P([(0,o.state)()],L.prototype,"connectors",void 0),P([(0,o.state)()],L.prototype,"count",void 0),P([(0,o.state)()],L.prototype,"filteredCount",void 0),P([(0,o.state)()],L.prototype,"isFetchingRecommendedWallets",void 0),L=P([(0,a.customElement)("w3m-all-wallets-widget")],L);var O=t,U=t,j=e.i(56086),z=e.i(1564),D=e.i(61693),B=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let N=class extends U.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=g.ConnectorController.state.connectors,this.connections=p.ConnectionController.state.connections,this.unsubscribe.push(g.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),p.ConnectionController.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"ANNOUNCED"===e.type);return e?.length?r.html`
      <wui-flex flexDirection="column" gap="2">
        ${e.filter(D.ConnectorUtil.showConnector).map(e=>{let t=(this.connections.get(e.chain)??[]).some(t=>z.HelpersUtil.isLowerCaseMatch(t.connectorId,e.id));return r.html`
            <wui-list-wallet
              imageSrc=${(0,h.ifDefined)(j.AssetUtil.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant=${t?"info":"success"}
              tagLabel=${t?"connected":"installed"}
              size="sm"
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
              tabIdx=${(0,h.ifDefined)(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?n.CoreHelperUtil.isMobile()?f.RouterController.push("AllWallets"):f.RouterController.push("ConnectingWalletConnect"):f.RouterController.push("ConnectingExternal",{connector:e})}};B([(0,d.property)()],N.prototype,"tabIdx",void 0),B([(0,o.state)()],N.prototype,"connectors",void 0),B([(0,o.state)()],N.prototype,"connections",void 0),N=B([(0,a.customElement)("w3m-connect-announced-widget")],N);var W=t,_=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let M=class extends W.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=g.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(g.ConnectorController.subscribeKey("connectors",e=>this.connectors=e)),n.CoreHelperUtil.isTelegram()&&n.CoreHelperUtil.isIos()&&(this.loading=!p.ConnectionController.state.wcUri,this.unsubscribe.push(p.ConnectionController.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{customWallets:e}=l.OptionsController.state;if(!e?.length)return this.style.cssText="display: none",null;let t=this.filterOutDuplicateWallets(e),o=p.ConnectionController.hasAnyConnection(u.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return r.html`<wui-flex flexDirection="column" gap="2">
      ${t.map(e=>r.html`
          <wui-list-wallet
            imageSrc=${(0,h.ifDefined)(j.AssetUtil.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            size="sm"
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,h.ifDefined)(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${o}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){let t=s.StorageUtil.getRecentWallets(),r=this.connectors.map(e=>e.info?.rdns).filter(Boolean),o=t.map(e=>e.rdns).filter(Boolean),i=r.concat(o);if(i.includes("io.metamask.mobile")&&n.CoreHelperUtil.isMobile()){let e=i.indexOf("io.metamask.mobile");i[e]="io.metamask"}return e.filter(e=>!i.includes(String(e?.rdns)))}onConnectWallet(e){this.loading||f.RouterController.push("ConnectingWalletConnect",{wallet:e})}};_([(0,d.property)()],M.prototype,"tabIdx",void 0),_([(0,o.state)()],M.prototype,"connectors",void 0),_([(0,o.state)()],M.prototype,"loading",void 0),M=_([(0,a.customElement)("w3m-connect-custom-widget")],M);var H=t,K=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let q=class extends H.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=g.ConnectorController.state.connectors,this.unsubscribe.push(g.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"EXTERNAL"===e.type).filter(D.ConnectorUtil.showConnector).filter(e=>e.id!==u.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK);if(!e?.length)return this.style.cssText="display: none",null;let t=p.ConnectionController.hasAnyConnection(u.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return r.html`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>r.html`
            <wui-list-wallet
              imageSrc=${(0,h.ifDefined)(j.AssetUtil.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,h.ifDefined)(this.tabIdx)}
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){f.RouterController.push("ConnectingExternal",{connector:e})}};K([(0,d.property)()],q.prototype,"tabIdx",void 0),K([(0,o.state)()],q.prototype,"connectors",void 0),q=K([(0,a.customElement)("w3m-connect-external-widget")],q);var V=t,F=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let Y=class extends V.LitElement{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;let e=p.ConnectionController.hasAnyConnection(u.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return r.html`
      <wui-flex flexDirection="column" gap="2">
        ${this.wallets.map(t=>r.html`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,h.ifDefined)(j.AssetUtil.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,h.ifDefined)(this.tabIdx)}
              size="sm"
              ?disabled=${e}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){g.ConnectorController.selectWalletConnector(e)}};F([(0,d.property)()],Y.prototype,"tabIdx",void 0),F([(0,d.property)()],Y.prototype,"wallets",void 0),Y=F([(0,a.customElement)("w3m-connect-featured-widget")],Y);var J=t,G=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let Q=class extends J.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=p.ConnectionController.state.connections,this.unsubscribe.push(p.ConnectionController.subscribeKey("connections",e=>this.connections=e))}render(){let e=this.connectors.filter(D.ConnectorUtil.showConnector);return 0===e.length?(this.style.cssText="display: none",null):r.html`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>{let t=(this.connections.get(e.chain)??[]).some(t=>z.HelpersUtil.isLowerCaseMatch(t.connectorId,e.id));return r.html`
            <wui-list-wallet
              imageSrc=${(0,h.ifDefined)(j.AssetUtil.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant=${t?"info":"success"}
              tagLabel=${t?"connected":"installed"}
              data-testid=${`wallet-selector-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,h.ifDefined)(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){g.ConnectorController.setActiveConnector(e),f.RouterController.push("ConnectingExternal",{connector:e})}};G([(0,d.property)()],Q.prototype,"tabIdx",void 0),G([(0,d.property)()],Q.prototype,"connectors",void 0),G([(0,o.state)()],Q.prototype,"connections",void 0),Q=G([(0,a.customElement)("w3m-connect-injected-widget")],Q);var X=t,Z=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let ee=class extends X.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=g.ConnectorController.state.connectors,this.unsubscribe.push(g.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name);return e?.length?r.html`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>r.html`
            <wui-list-wallet
              imageSrc=${(0,h.ifDefined)(j.AssetUtil.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="info"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,h.ifDefined)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){g.ConnectorController.setActiveConnector(e),f.RouterController.push("ConnectingMultiChain")}};Z([(0,d.property)()],ee.prototype,"tabIdx",void 0),Z([(0,o.state)()],ee.prototype,"connectors",void 0),ee=Z([(0,a.customElement)("w3m-connect-multi-chain-widget")],ee);var et=t,er=e.i(7528),eo=e.i(37682),ei=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let en=class extends et.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=g.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(g.ConnectorController.subscribeKey("connectors",e=>this.connectors=e)),n.CoreHelperUtil.isTelegram()&&n.CoreHelperUtil.isIos()&&(this.loading=!p.ConnectionController.state.wcUri,this.unsubscribe.push(p.ConnectionController.subscribeKey("wcUri",e=>this.loading=!e)))}render(){let e=s.StorageUtil.getRecentWallets().filter(e=>!eo.WalletUtil.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));if(!e.length)return this.style.cssText="display: none",null;let t=p.ConnectionController.hasAnyConnection(u.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return r.html`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>r.html`
            <wui-list-wallet
              imageSrc=${(0,h.ifDefined)(j.AssetUtil.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="info"
              size="sm"
              tabIdx=${(0,h.ifDefined)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||g.ConnectorController.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(t=>t.id===e.id||t.name===e.name)}isWalletCompatibleWithCurrentChain(e){let t=er.ChainController.state.activeChain;return!t||!e.chains||e.chains.some(e=>t===e.split(":")[0])}};ei([(0,d.property)()],en.prototype,"tabIdx",void 0),ei([(0,o.state)()],en.prototype,"connectors",void 0),ei([(0,o.state)()],en.prototype,"loading",void 0),en=ei([(0,a.customElement)("w3m-connect-recent-widget")],en);var el=t,es=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let ea=class extends el.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,n.CoreHelperUtil.isTelegram()&&n.CoreHelperUtil.isIos()&&(this.loading=!p.ConnectionController.state.wcUri,this.unsubscribe.push(p.ConnectionController.subscribeKey("wcUri",e=>this.loading=!e)))}render(){let{connectors:e}=g.ConnectorController.state,{customWallets:t,featuredWalletIds:o}=l.OptionsController.state,i=s.StorageUtil.getRecentWallets(),n=e.find(e=>"walletConnect"===e.id),a=e.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type).filter(e=>"Browser Wallet"!==e.name);if(!n)return null;if(o||t||!this.wallets.length)return this.style.cssText="display: none",null;let c=Math.max(0,2-(a.length+i.length)),d=eo.WalletUtil.filterOutDuplicateWallets(this.wallets).slice(0,c);if(!d.length)return this.style.cssText="display: none",null;let m=p.ConnectionController.hasAnyConnection(u.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return r.html`
      <wui-flex flexDirection="column" gap="2">
        ${d.map(e=>r.html`
            <wui-list-wallet
              imageSrc=${(0,h.ifDefined)(j.AssetUtil.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              size="sm"
              tabIdx=${(0,h.ifDefined)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${m}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;let t=g.ConnectorController.getConnector({id:e.id,rdns:e.rdns});t?f.RouterController.push("ConnectingExternal",{connector:t}):f.RouterController.push("ConnectingWalletConnect",{wallet:e})}};es([(0,d.property)()],ea.prototype,"tabIdx",void 0),es([(0,d.property)()],ea.prototype,"wallets",void 0),es([(0,o.state)()],ea.prototype,"loading",void 0),ea=es([(0,a.customElement)("w3m-connect-recommended-widget")],ea);var ec=t,ed=e.i(23505),eh=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let eu=class extends ec.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=g.ConnectorController.state.connectors,this.connectorImages=ed.AssetController.state.connectorImages,this.unsubscribe.push(g.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),ed.AssetController.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(n.CoreHelperUtil.isMobile())return this.style.cssText="display: none",null;let e=this.connectors.find(e=>"walletConnect"===e.id);if(!e)return this.style.cssText="display: none",null;let t=e.imageUrl||this.connectorImages[e?.imageId??""],o=p.ConnectionController.hasAnyConnection(u.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return r.html`
      <wui-list-wallet
        imageSrc=${(0,h.ifDefined)(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="accent"
        tabIdx=${(0,h.ifDefined)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        size="sm"
        ?disabled=${o}
      >
      </wui-list-wallet>
    `}onConnector(e){g.ConnectorController.setActiveConnector(e),f.RouterController.push("ConnectingWalletConnect")}};eh([(0,d.property)()],eu.prototype,"tabIdx",void 0),eh([(0,o.state)()],eu.prototype,"connectors",void 0),eh([(0,o.state)()],eu.prototype,"connectorImages",void 0),eu=eh([(0,a.customElement)("w3m-connect-walletconnect-widget")],eu);let ep=C.css`
  :host {
    margin-top: ${({spacing:e})=>e["1"]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1)
      ${({spacing:e})=>e["2"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var eg=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let em=class extends O.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=g.ConnectorController.state.connectors,this.recommended=i.ApiController.state.recommended,this.featured=i.ApiController.state.featured,this.unsubscribe.push(g.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),i.ApiController.subscribeKey("recommended",e=>this.recommended=e),i.ApiController.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r.html`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){let{custom:e,recent:t,announced:o,injected:i,multiChain:n,recommended:l,featured:s,external:a}=D.ConnectorUtil.getConnectorsByType(this.connectors,this.recommended,this.featured);return D.ConnectorUtil.getConnectorTypeOrder({custom:e,recent:t,announced:o,injected:i,multiChain:n,recommended:l,featured:s,external:a}).map(e=>{switch(e){case"injected":return r.html`
            ${n.length?r.html`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,h.ifDefined)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${o.length?r.html`<w3m-connect-announced-widget
                  tabIdx=${(0,h.ifDefined)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${i.length?r.html`<w3m-connect-injected-widget
                  .connectors=${i}
                  tabIdx=${(0,h.ifDefined)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return r.html`<w3m-connect-walletconnect-widget
            tabIdx=${(0,h.ifDefined)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return r.html`<w3m-connect-recent-widget
            tabIdx=${(0,h.ifDefined)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return r.html`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${(0,h.ifDefined)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return r.html`<w3m-connect-custom-widget
            tabIdx=${(0,h.ifDefined)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return r.html`<w3m-connect-external-widget
            tabIdx=${(0,h.ifDefined)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return r.html`<w3m-connect-recommended-widget
            .wallets=${l}
            tabIdx=${(0,h.ifDefined)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${e}`),null}})}};em.styles=ep,eg([(0,d.property)()],em.prototype,"tabIdx",void 0),eg([(0,o.state)()],em.prototype,"connectors",void 0),eg([(0,o.state)()],em.prototype,"recommended",void 0),eg([(0,o.state)()],em.prototype,"featured",void 0),em=eg([(0,a.customElement)("w3m-connector-list")],em);var ef=t,ew=e.i(56074),eb=e.i(84963),ey=e.i(27266),ev=t,eC=t,ex=t;let e$=C.css`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var eE=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let ek={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},eR={lg:"md",md:"sm",sm:"sm"},eI=class extends ex.LitElement{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return r.html`
      <button data-active=${this.active}>
        ${this.icon?r.html`<wui-icon size=${eR[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${ek[this.size]}> ${this.label} </wui-text>
      </button>
    `}};eI.styles=[b.resetStyles,b.elementStyles,e$],eE([(0,d.property)()],eI.prototype,"icon",void 0),eE([(0,d.property)()],eI.prototype,"size",void 0),eE([(0,d.property)()],eI.prototype,"label",void 0),eE([(0,d.property)({type:Boolean})],eI.prototype,"active",void 0),eI=eE([(0,a.customElement)("wui-tab-item")],eI);let eA=C.css`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var eS=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let eT=class extends eC.LitElement{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{let o=t===this.activeTab;return r.html`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};eT.styles=[b.resetStyles,b.elementStyles,eA],eS([(0,d.property)({type:Array})],eT.prototype,"tabs",void 0),eS([(0,d.property)()],eT.prototype,"onTabChange",void 0),eS([(0,d.property)()],eT.prototype,"size",void 0),eS([(0,o.state)()],eT.prototype,"activeTab",void 0),eT=eS([(0,a.customElement)("wui-tabs")],eT);var eP=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let eL=class extends ev.LitElement{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return r.html`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>{if("browser"===e)return{label:"Browser",icon:"extension",platform:"browser"};if("mobile"===e)return{label:"Mobile",icon:"mobile",platform:"mobile"};if("qrcode"===e)return{label:"Mobile",icon:"mobile",platform:"qrcode"};if("web"===e)return{label:"Webapp",icon:"browser",platform:"web"};if("desktop"===e)return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};eP([(0,d.property)({type:Array})],eL.prototype,"platforms",void 0),eP([(0,d.property)()],eL.prototype,"onSelectPlatfrom",void 0),eL=eP([(0,a.customElement)("w3m-connecting-header")],eL);var eO=t,eU=e.i(42121),ej=t;e.i(93180);let ez=C.css`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var eD=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let eB={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},eN={lg:"md",md:"md",sm:"sm"},eW=class extends ej.LitElement{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;let e=this.textVariant??eB[this.size];return r.html`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){let e=eN[this.size],t="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return r.html`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return null}};eW.styles=[b.resetStyles,b.elementStyles,ez],eD([(0,d.property)()],eW.prototype,"size",void 0),eD([(0,d.property)({type:Boolean})],eW.prototype,"disabled",void 0),eD([(0,d.property)({type:Boolean})],eW.prototype,"fullWidth",void 0),eD([(0,d.property)({type:Boolean})],eW.prototype,"loading",void 0),eD([(0,d.property)()],eW.prototype,"variant",void 0),eD([(0,d.property)()],eW.prototype,"textVariant",void 0),eW=eD([(0,a.customElement)("wui-button")],eW),e.i(77725),e.i(34081);var e_=t;let eM=C.css`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var eH=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let eK=class extends e_.LitElement{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return r.html`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};eK.styles=[b.resetStyles,eM],eH([(0,d.property)({type:Number})],eK.prototype,"radius",void 0),eK=eH([(0,a.customElement)("wui-loading-thumbnail")],eK),e.i(91978);var eq=t,eV=e.i(40835),eF=t;e.i(80648);let eY=C.css`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var eJ=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let eG=class extends eF.LitElement{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return r.html`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eG.styles=[b.resetStyles,b.elementStyles,eY],eJ([(0,d.property)({type:Boolean})],eG.prototype,"disabled",void 0),eJ([(0,d.property)()],eG.prototype,"label",void 0),eJ([(0,d.property)()],eG.prototype,"buttonLabel",void 0),eG=eJ([(0,a.customElement)("wui-cta-button")],eG);let eQ=C.css`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e["5"]} ${({spacing:e})=>e["5"]};
  }
`;var eX=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let eZ=class extends eq.LitElement{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:o,chrome_store:i,homepage:l}=this.wallet,s=n.CoreHelperUtil.isMobile(),a=n.CoreHelperUtil.isIos(),c=n.CoreHelperUtil.isAndroid(),d=[t,o,l,i].filter(Boolean).length>1,h=eV.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!s?r.html`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>f.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&l?r.html`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?r.html`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&c?r.html`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&n.CoreHelperUtil.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.CoreHelperUtil.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.CoreHelperUtil.openHref(this.wallet.homepage,"_blank")}};eZ.styles=[eQ],eX([(0,d.property)({type:Object})],eZ.prototype,"wallet",void 0),eZ=eX([(0,a.customElement)("w3m-mobile-download-links")],eZ);let e0=C.css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var e1=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};class e3 extends eO.LitElement{constructor(){super(),this.wallet=f.RouterController.state.data?.wallet,this.connector=f.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=j.AssetUtil.getWalletImage(this.wallet)??j.AssetUtil.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=p.ConnectionController.state.wcUri,this.error=p.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(p.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),p.ConnectionController.subscribeKey("wcError",e=>this.error=e)),(n.CoreHelperUtil.isTelegram()||n.CoreHelperUtil.isSafari())&&n.CoreHelperUtil.isIos()&&p.ConnectionController.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),p.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),r.html`
      <wui-flex
        data-error=${(0,h.ifDefined)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,h.ifDefined)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?r.html`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?r.html`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){p.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=eU.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return r.html`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(n.CoreHelperUtil.copyToClopboard(this.uri),eb.SnackController.showSuccess("Link copied"))}catch{eb.SnackController.showError("Failed to copy")}}}e3.styles=e0,e1([(0,o.state)()],e3.prototype,"isRetrying",void 0),e1([(0,o.state)()],e3.prototype,"uri",void 0),e1([(0,o.state)()],e3.prototype,"error",void 0),e1([(0,o.state)()],e3.prototype,"ready",void 0),e1([(0,o.state)()],e3.prototype,"showRetry",void 0),e1([(0,o.state)()],e3.prototype,"label",void 0),e1([(0,o.state)()],e3.prototype,"secondaryBtnLabel",void 0),e1([(0,o.state)()],e3.prototype,"secondaryLabel",void 0),e1([(0,o.state)()],e3.prototype,"isLoading",void 0),e1([(0,d.property)({type:Boolean})],e3.prototype,"isMobile",void 0),e1([(0,d.property)()],e3.prototype,"onRetry",void 0);let e2=class extends e3{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),m.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=g.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(t)await p.ConnectionController.connectExternal(t,t.chain);else throw Error("w3m-connecting-wc-browser: No connector found");ew.ModalController.close(),m.EventsController.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){m.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};e2=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l}([(0,a.customElement)("w3m-connecting-wc-browser")],e2);let e4=class extends e3{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),m.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:o}=n.CoreHelperUtil.formatNativeUrl(e,this.uri);p.ConnectionController.setWcLinking({name:t,href:o}),p.ConnectionController.setRecentWallet(this.wallet),n.CoreHelperUtil.openHref(r,"_blank")}catch{this.error=!0}}};e4=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l}([(0,a.customElement)("w3m-connecting-wc-desktop")],e4);var e5=e.i(96832),e8=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let e6=class extends e3{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=l.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,link_mode:t,name:r}=this.wallet,{redirect:o,redirectUniversalLink:i,href:l}=n.CoreHelperUtil.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=i,this.target=n.CoreHelperUtil.isIframe()?"_top":"_self",p.ConnectionController.setWcLinking({name:r,href:l}),p.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?n.CoreHelperUtil.openHref(this.redirectUniversalLink,this.target):n.CoreHelperUtil.openHref(this.redirectDeeplink,this.target)}catch(e){m.EventsController.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=e5.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(p.ConnectionController.subscribeKey("wcUri",()=>{this.onHandleURI()})),m.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){p.ConnectionController.setWcError(!1),this.onConnect?.()}};e8([(0,o.state)()],e6.prototype,"redirectDeeplink",void 0),e8([(0,o.state)()],e6.prototype,"redirectUniversalLink",void 0),e8([(0,o.state)()],e6.prototype,"target",void 0),e8([(0,o.state)()],e6.prototype,"preferUniversalLinks",void 0),e8([(0,o.state)()],e6.prototype,"isLoading",void 0),e6=e8([(0,a.customElement)("w3m-connecting-wc-mobile")],e6);var e9=t,e7=e.i(9626);function te(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let tt={generate({uri:e,size:t,logoSize:o,padding:i=8,dotColor:n="var(--apkt-tokens-theme-textInvert)"}){let l,s,a=[],c=(s=Math.sqrt((l=Array.prototype.slice.call(e7.default.create(e,{errorCorrectionLevel:"Q"}).modules.data,0)).length),l.reduce((e,t,r)=>(r%s==0?e.push([t]):e[e.length-1].push(t))&&e,[])),d=(t-2*i)/c.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:e,y:t})=>{let o=(c.length-7)*d*e+i,l=(c.length-7)*d*t+i;for(let e=0;e<h.length;e+=1){let t=d*(7-2*e);a.push(r.svg`
            <rect
              fill=${2===e?"var(--apkt-tokens-theme-textInvert)":"var(--apkt-tokens-theme-textPrimary)"}
              width=${0===e?t-10:t}
              rx= ${0===e?(t-10)*.45:.45*t}
              ry= ${0===e?(t-10)*.45:.45*t}
              stroke=${n}
              stroke-width=${10*(0===e)}
              height=${0===e?t-10:t}
              x= ${0===e?l+d*e+5:l+d*e}
              y= ${0===e?o+d*e+5:o+d*e}
            />
          `)}});let u=Math.floor((o+25)/d),p=c.length/2-u/2,g=c.length/2+u/2-1,m=[];c.forEach((e,t)=>{e.forEach((e,r)=>{!c[t][r]||t<7&&r<7||t>c.length-8&&r<7||t<7&&r>c.length-8||t>p&&t<g&&r>p&&r<g||m.push([t*d+d/2+i,r*d+d/2+i])})});let f={};return m.forEach(([e,t])=>{f[e]?f[e]?.push(t):f[e]=[t]}),Object.entries(f).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!te(e,t,d)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{a.push(r.svg`<circle cx=${e} cy=${t} fill=${n} r=${d/2.5} />`)})}),Object.entries(f).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>te(e,t,d)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>te(e,t,d)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,o])=>{a.push(r.svg`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${o}
                stroke=${n}
                stroke-width=${d/1.25}
                stroke-linecap="round"
              />
            `)})}),a}},tr=C.css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var to=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let ti=class extends e9.LitElement{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,r.html`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return r.svg`
      <svg height=${this.size} width=${this.size}>
        ${tt.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?r.html`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:r.html`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ti.styles=[b.resetStyles,tr],to([(0,d.property)()],ti.prototype,"uri",void 0),to([(0,d.property)({type:Number})],ti.prototype,"size",void 0),to([(0,d.property)()],ti.prototype,"theme",void 0),to([(0,d.property)()],ti.prototype,"imageSrc",void 0),to([(0,d.property)()],ti.prototype,"alt",void 0),to([(0,d.property)({type:Boolean})],ti.prototype,"arenaClear",void 0),to([(0,d.property)({type:Boolean})],ti.prototype,"farcaster",void 0),ti=to([(0,a.customElement)("wui-qr-code")],ti);var tn=t;let tl=C.css`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var ts=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let ta=class extends tn.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",r.html`<slot></slot>`}};ta.styles=[tl],ts([(0,d.property)()],ta.prototype,"width",void 0),ts([(0,d.property)()],ta.prototype,"height",void 0),ts([(0,d.property)()],ta.prototype,"variant",void 0),ts([(0,d.property)({type:Boolean})],ta.prototype,"rounded",void 0),ta=ts([(0,a.customElement)("wui-shimmer")],ta),e.i(14011);let tc=C.css`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,td=class extends e3{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),m.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),r.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return p.ConnectionController.setWcLinking(void 0),p.ConnectionController.setRecentWallet(this.wallet),r.html` <wui-qr-code
      size=${e}
      theme=${eU.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,h.ifDefined)(j.AssetUtil.getWalletImage(this.wallet))}
      color=${(0,h.ifDefined)(eU.ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,h.ifDefined)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return r.html`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};td.styles=tc,td=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l}([(0,a.customElement)("w3m-connecting-wc-qrcode")],td);var th=t;let tu=class extends th.LitElement{constructor(){if(super(),this.wallet=f.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");m.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}render(){return r.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,h.ifDefined)(j.AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};tu=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l}([(0,a.customElement)("w3m-connecting-wc-unsupported")],tu);var tp=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let tg=class extends e3{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=e5.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(p.ConnectionController.subscribeKey("wcUri",()=>{this.updateLoadingState()})),m.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:o}=n.CoreHelperUtil.formatUniversalUrl(e,this.uri);p.ConnectionController.setWcLinking({name:t,href:o}),p.ConnectionController.setRecentWallet(this.wallet),n.CoreHelperUtil.openHref(r,"_blank")}catch{this.error=!0}}};tp([(0,o.state)()],tg.prototype,"isLoading",void 0),tg=tp([(0,a.customElement)("w3m-connecting-wc-web")],tg);var tm=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let tf=class extends ef.LitElement{constructor(){super(),this.wallet=f.RouterController.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!l.OptionsController.state.siwx,this.remoteFeatures=l.OptionsController.state.remoteFeatures,this.displayBranding=!0,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(l.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r.html`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?r.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!l.OptionsController.state.manualWCControl||e))try{let{wcPairingExpiry:t,status:r}=p.ConnectionController.state;if(e||l.OptionsController.state.enableEmbedded||n.CoreHelperUtil.isPairingExpired(t)||"connecting"===r){let e=p.ConnectionController.getConnections(er.ChainController.state.activeChain),t=this.remoteFeatures?.multiWallet,r=e.length>0;await p.ConnectionController.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(r&&t?(f.RouterController.replace("ProfileWallets"),eb.SnackController.showSuccess("New Wallet Added")):ew.ModalController.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!l.OptionsController.state.enableNetworkSwitch&&er.ChainController.state.activeChain){er.ChainController.setActiveCaipNetwork(ey.CaipNetworksUtil.getUnsupportedNetwork(`${er.ChainController.state.activeChain}:${er.ChainController.state.activeCaipNetwork?.id}`)),er.ChainController.showUnsupportedChainUI();return}m.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),p.ConnectionController.setWcError(!0),eb.SnackController.showError(e.message??"Connection error"),p.ConnectionController.resetWcConnection(),f.RouterController.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:o,rdns:i}=this.wallet,s=o?.map(({injected_id:e})=>e).filter(Boolean),a=[...i?[i]:s??[]],c=!l.OptionsController.state.isUniversalProvider&&a.length,d=p.ConnectionController.checkInstalled(a),h=c&&d,u=t&&!n.CoreHelperUtil.isMobile();h&&!er.ChainController.state.noAdapters&&this.platforms.push("browser"),e&&this.platforms.push(n.CoreHelperUtil.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),h||!c||er.ChainController.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return r.html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return r.html`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return r.html`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return r.html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return r.html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return r.html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?r.html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};tm([(0,o.state)()],tf.prototype,"platform",void 0),tm([(0,o.state)()],tf.prototype,"platforms",void 0),tm([(0,o.state)()],tf.prototype,"isSiwxEnabled",void 0),tm([(0,o.state)()],tf.prototype,"remoteFeatures",void 0),tm([(0,d.property)({type:Boolean})],tf.prototype,"displayBranding",void 0),tf=tm([(0,a.customElement)("w3m-connecting-wc-view")],tf);var tw=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let tb=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.isMobile=n.CoreHelperUtil.isMobile(),this.remoteFeatures=l.OptionsController.state.remoteFeatures,this.unsubscribe.push(l.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){let{featured:e,recommended:t}=i.ApiController.state,{customWallets:o}=l.OptionsController.state,n=s.StorageUtil.getRecentWallets(),a=e.length||t.length||o?.length||n.length;return r.html`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${a?r.html`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return r.html`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?r.html` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};tw([(0,o.state)()],tb.prototype,"isMobile",void 0),tw([(0,o.state)()],tb.prototype,"remoteFeatures",void 0),tb=tw([(0,a.customElement)("w3m-connecting-wc-basic-view")],tb),e.s(["W3mConnectingWcBasicView",()=>tb],69568);var ty=t,tv=t,tC=t;let{I:tx}=r._$LH;var t$=e.i(72853);let tE=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),tE(e,t);return!0},tk=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},tR=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),tS(t)}};function tI(e){void 0!==this._$AN?(tk(this),this._$AM=e,tR(this)):this._$AM=e}function tA(e,t=!1,r=0){let o=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(o))for(let e=r;e<o.length;e++)tE(o[e],!1),tk(o[e]);else null!=o&&(tE(o,!1),tk(o));else tE(this,e)}let tS=e=>{e.type==t$.PartType.CHILD&&(e._$AP??=tA,e._$AQ??=tI)};class tT extends t$.Directive{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),tR(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(tE(this,e),tk(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let tP=()=>new tL;class tL{}let tO=new WeakMap,tU=(0,t$.directive)(class extends tT{render(e){return r.nothing}update(e,[t]){let o=t!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r.nothing}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,r=tO.get(t);void 0===r&&(r=new WeakMap,tO.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ht,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?tO.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),tj=C.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var tz=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let tD=class extends tC.LitElement{constructor(){super(...arguments),this.inputElementRef=tP(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return r.html`
      <label data-size=${this.size}>
        <input
          ${tU(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};tD.styles=[b.resetStyles,b.elementStyles,tj],tz([(0,d.property)({type:Boolean})],tD.prototype,"checked",void 0),tz([(0,d.property)({type:Boolean})],tD.prototype,"disabled",void 0),tz([(0,d.property)()],tD.prototype,"size",void 0),tD=tz([(0,a.customElement)("wui-toggle")],tD);let tB=C.css`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["3"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var tN=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let tW=class extends tv.LitElement{constructor(){super(...arguments),this.checked=!1}render(){return r.html`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};tW.styles=[b.resetStyles,b.elementStyles,tB],tN([(0,d.property)({type:Boolean})],tW.prototype,"checked",void 0),tW=tN([(0,a.customElement)("wui-certified-switch")],tW);var t_=t,tM=t;let tH=C.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var tK=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let tq=class extends tM.LitElement{constructor(){super(...arguments),this.inputElementRef=tP(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return r.html` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${tU(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,h.ifDefined)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?r.html`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?r.html`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?r.html`<wui-icon name="spinner" size="md"></wui-icon>`:r.html`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?r.html`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?r.html`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};tq.styles=[b.resetStyles,b.elementStyles,tH],tK([(0,d.property)()],tq.prototype,"icon",void 0),tK([(0,d.property)({type:Boolean})],tq.prototype,"disabled",void 0),tK([(0,d.property)({type:Boolean})],tq.prototype,"loading",void 0),tK([(0,d.property)()],tq.prototype,"placeholder",void 0),tK([(0,d.property)()],tq.prototype,"type",void 0),tK([(0,d.property)()],tq.prototype,"value",void 0),tK([(0,d.property)()],tq.prototype,"errorText",void 0),tK([(0,d.property)()],tq.prototype,"warningText",void 0),tK([(0,d.property)()],tq.prototype,"onSubmit",void 0),tK([(0,d.property)()],tq.prototype,"size",void 0),tK([(0,d.property)({attribute:!1})],tq.prototype,"onKeyDown",void 0),tq=tK([(0,a.customElement)("wui-input-text")],tq);let tV=C.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var tF=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let tY=class extends t_.LitElement{constructor(){super(...arguments),this.inputComponentRef=tP(),this.inputValue=""}render(){return r.html`
      <wui-input-text
        ${tU(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?r.html`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};tY.styles=[b.resetStyles,tV],tF([(0,d.property)()],tY.prototype,"inputValue",void 0),tY=tF([(0,a.customElement)("wui-search-bar")],tY);var tJ=t,tG=t;let tQ=r.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,tX=C.css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var tZ=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let t0=class extends tG.LitElement{constructor(){super(...arguments),this.type="wallet"}render(){return r.html`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?r.html` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${tQ}`:r.html`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};t0.styles=[b.resetStyles,b.elementStyles,tX],tZ([(0,d.property)()],t0.prototype,"type",void 0),t0=tZ([(0,a.customElement)("wui-card-select-loader")],t0);var t1=t,t3=e.i(84357);let t2=t3.css`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var t4=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let t5=class extends t1.LitElement{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&eV.UiHelperUtil.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&eV.UiHelperUtil.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&eV.UiHelperUtil.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&eV.UiHelperUtil.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&eV.UiHelperUtil.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&eV.UiHelperUtil.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&eV.UiHelperUtil.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&eV.UiHelperUtil.getSpacingStyles(this.margin,3)};
    `,r.html`<slot></slot>`}};t5.styles=[b.resetStyles,t2],t4([(0,d.property)()],t5.prototype,"gridTemplateRows",void 0),t4([(0,d.property)()],t5.prototype,"gridTemplateColumns",void 0),t4([(0,d.property)()],t5.prototype,"justifyItems",void 0),t4([(0,d.property)()],t5.prototype,"alignItems",void 0),t4([(0,d.property)()],t5.prototype,"justifyContent",void 0),t4([(0,d.property)()],t5.prototype,"alignContent",void 0),t4([(0,d.property)()],t5.prototype,"columnGap",void 0),t4([(0,d.property)()],t5.prototype,"rowGap",void 0),t4([(0,d.property)()],t5.prototype,"gap",void 0),t4([(0,d.property)()],t5.prototype,"padding",void 0),t4([(0,d.property)()],t5.prototype,"margin",void 0),t5=t4([(0,a.customElement)("wui-grid")],t5);var t8=t;let t6=C.css`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["3"]} ${({spacing:e})=>e["0"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e["4"]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var t9=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let t7=class extends t8.LitElement{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type==="certified";return r.html`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,h.ifDefined)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?r.html`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?r.html`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,h.ifDefined)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return r.html`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){!this.wallet||(this.imageSrc=j.AssetUtil.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await j.AssetUtil.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};t7.styles=t6,t9([(0,o.state)()],t7.prototype,"visible",void 0),t9([(0,o.state)()],t7.prototype,"imageSrc",void 0),t9([(0,o.state)()],t7.prototype,"imageLoading",void 0),t9([(0,d.property)()],t7.prototype,"wallet",void 0),t7=t9([(0,a.customElement)("w3m-all-wallets-list-item")],t7);let re=C.css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e["4"]};
    padding-bottom: ${({spacing:e})=>e["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var rt=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let rr="local-paginator",ro=class extends tJ.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!i.ApiController.state.wallets.length,this.wallets=i.ApiController.state.wallets,this.recommended=i.ApiController.state.recommended,this.featured=i.ApiController.state.featured,this.filteredWallets=i.ApiController.state.filteredWallets,this.unsubscribe.push(i.ApiController.subscribeKey("wallets",e=>this.wallets=e),i.ApiController.subscribeKey("recommended",e=>this.recommended=e),i.ApiController.subscribeKey("featured",e=>this.featured=e),i.ApiController.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return r.html`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector("wui-grid");e&&(await i.ApiController.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>r.html`
        <wui-card-select-loader type="wallet" id=${(0,h.ifDefined)(t)}></wui-card-select-loader>
      `)}getWallets(){let e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);let t=n.CoreHelperUtil.uniqueBy(e,"id"),r=eo.WalletUtil.markWalletsAsInstalled(t);return eo.WalletUtil.markWalletsWithDisplayIndex(r)}walletsTemplate(){return this.getWallets().map(e=>r.html`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:o}=i.ApiController.state,n=window.innerWidth<352?3:4,l=e.length+t.length,s=Math.ceil(l/n)*n-l+n;return(s-=e.length?r.length%n:0,0===o&&r.length>0)?null:0===o||[...r,...e,...t].length<o?this.shimmerTemplate(s,rr):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${rr}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:r}=i.ApiController.state;r.length<t&&i.ApiController.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){g.ConnectorController.selectWalletConnector(e)}};ro.styles=re,rt([(0,o.state)()],ro.prototype,"loading",void 0),rt([(0,o.state)()],ro.prototype,"wallets",void 0),rt([(0,o.state)()],ro.prototype,"recommended",void 0),rt([(0,o.state)()],ro.prototype,"featured",void 0),rt([(0,o.state)()],ro.prototype,"filteredWallets",void 0),ro=rt([(0,a.customElement)("w3m-all-wallets-list")],ro);var ri=t;let rn=t3.css`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var rl=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let rs=class extends ri.LitElement{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?r.html`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await i.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=i.ApiController.state,t=eo.WalletUtil.markWalletsAsInstalled(e);return e.length?r.html`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${t.map(e=>r.html`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:r.html`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){g.ConnectorController.selectWalletConnector(e)}};rs.styles=rn,rl([(0,o.state)()],rs.prototype,"loading",void 0),rl([(0,d.property)()],rs.prototype,"query",void 0),rl([(0,d.property)()],rs.prototype,"badge",void 0),rs=rl([(0,a.customElement)("w3m-all-wallets-search")],rs);var ra=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let rc=class extends ty.LitElement{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=n.CoreHelperUtil.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return r.html`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?r.html`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:r.html`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",eb.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return n.CoreHelperUtil.isMobile()?r.html`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){f.RouterController.push("ConnectingWalletConnect")}};ra([(0,o.state)()],rc.prototype,"search",void 0),ra([(0,o.state)()],rc.prototype,"badge",void 0),rc=ra([(0,a.customElement)("w3m-all-wallets-view")],rc),e.s(["W3mAllWalletsView",()=>rc],88353);var rd=t,rh=t;let ru=C.css`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var rp=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let rg=class extends rh.LitElement{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",r.html`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,h.ifDefined)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?r.html`<wui-image
        icon=${this.icon}
        iconColor=${(0,h.ifDefined)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:r.html`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?r.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:r.html`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};rg.styles=[b.resetStyles,b.elementStyles,ru],rp([(0,d.property)()],rg.prototype,"imageSrc",void 0),rp([(0,d.property)()],rg.prototype,"icon",void 0),rp([(0,d.property)()],rg.prototype,"iconColor",void 0),rp([(0,d.property)({type:Boolean})],rg.prototype,"loading",void 0),rp([(0,d.property)()],rg.prototype,"tabIdx",void 0),rp([(0,d.property)({type:Boolean})],rg.prototype,"disabled",void 0),rp([(0,d.property)({type:Boolean})],rg.prototype,"rightIcon",void 0),rp([(0,d.property)({type:Boolean})],rg.prototype,"rounded",void 0),rp([(0,d.property)({type:Boolean})],rg.prototype,"fullSize",void 0),rg=rp([(0,a.customElement)("wui-list-item")],rg);let rm=class extends rd.LitElement{constructor(){super(...arguments),this.wallet=f.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return r.html`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?r.html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?r.html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?r.html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?r.html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&n.CoreHelperUtil.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&n.CoreHelperUtil.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.CoreHelperUtil.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.CoreHelperUtil.openHref(this.wallet.homepage,"_blank")}};rm=function(e,t,r,o){var i,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(l=(n<3?i(l):n>3?i(t,r,l):i(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l}([(0,a.customElement)("w3m-downloads-view")],rm),e.s(["W3mDownloadsView",()=>rm],81631),e.s([],35614),e.i(35614),e.i(69568),e.i(88353),e.i(81631),e.s(["W3mAllWalletsView",()=>rc,"W3mConnectingWcBasicView",()=>tb,"W3mDownloadsView",()=>rm],31904)}]);