"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof"));function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,s=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw s}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var isNode="object"===("undefined"==typeof process?"undefined":(0,_typeof2.default)(process))&&"function"==typeof require&&"object"!==("undefined"==typeof window?"undefined":(0,_typeof2.default)(window))&&"function"!=typeof importScripts,rootScope=isNode?global:self,bitcore={bitcoin:{address:require("bitcore-lib/lib/address"),BitcorePrivateKey:require("bitcore-lib/lib/privatekey"),BitcoreTransaction:require("bitcore-lib/lib/transaction")},bitcoinCash:{address:require("bitcore-lib-cash/lib/address"),BitcorePrivateKey:require("bitcore-lib-cash/lib/privatekey"),BitcoreTransaction:require("bitcore-lib-cash/lib/transaction")}},FormData=require("form-data"),_require=require("rxjs"),Observable=_require.Observable,ReplaySubject=_require.ReplaySubject,Subject=_require.Subject,_require2=require("rxjs/operators"),map=_require2.map,mergeMap=_require2.mergeMap,fetch="function"==typeof rootScope.fetch?rootScope.fetch:isNode?function(){var _ref=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function _callee(url,options){return _regenerator.default.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,eval('import("node-fetch")');case 2:return _context.abrupt("return",_context.sent.default(url,options));case 3:case"end":return _context.stop()}}),_callee)})));return function(e,t){return _ref.apply(this,arguments)}}():require("whatwg-fetch"),sleep=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(){var t,r=arguments;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:250,e.abrupt("return",new Promise((function(e){setTimeout(e,t)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),locks={},lock=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t,r){var n,a,s=arguments;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>2&&void 0!==s[2]?s[2]:0,locks[t]||(locks[t]=Promise.resolve()),a=locks[t].then((0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r());case 1:case"end":return e.stop()}}),e)})))),locks[t]=a.catch((function(){})).then((0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",sleep(n));case 1:case"end":return e.stop()}}),e)})))),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),request=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t,r){var n,a,s,o=arguments;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>2&&void 0!==o[2]?o[2]:0,a=o.length>3&&void 0!==o[3]?o[3]:2,s=o.length>4&&void 0!==o[4]?o[4]:0,e.abrupt("return",new Promise(function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(o,i){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",lock("request:".concat(t.split("/")[2]),(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(){var c;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,r);case 3:if(200===(c=e.sent).status){e.next=6;break}throw new Error("Request failure: status ".concat(c.status.toString()));case 6:return o(c),e.abrupt("return");case 10:if(e.prev=10,e.t0=e.catch(0),!(s>=a)){e.next=15;break}return i(e.t0),e.abrupt("return");case 15:return e.prev=15,e.next=18,sleep(n);case 18:return e.finish(15);case 19:return e.next=21,sleep(1e3);case 21:o(request(t,r,n,a,s+1));case 22:case"end":return e.stop()}}),e,null,[[0,10,15,19]])})))));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),bitcoinCashAddresses={},getBitcoinCashAddress=function(e){return bitcoinCashAddresses[e]||(bitcoinCashAddresses[e]=bitcore.bitcoinCash.address.fromPublicKeyHash(bitcore.bitcoin.address.fromString(e).hashBuffer).toString()),bitcoinCashAddresses[e]},satoshiConversion=1e8,transactionFeesSatoshi={bitcoin:12e3,bitcoinCash:500},transactionFees={bitcoin:transactionFeesSatoshi.bitcoin/satoshiConversion,bitcoinCash:transactionFeesSatoshi.bitcoinCash/satoshiConversion},blockchainAPIKey=void 0,blockchainAPIURL="https://blockchain.info/",blockchainWebSocketURL="wss://ws.blockchain.info/inv",bitcoinCashAPIURL="https://rest.bitcoin.com/v2/",blockchainAPI=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!1!==t.cors&&(t.cors=!0),blockchainAPIKey&&(t.key=blockchainAPIKey),"".concat(blockchainAPIURL+e,"?").concat(Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&"))},blockchainAPIRequest=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t,r){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request(blockchainAPI(t,r),void 0,1e4).then(function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),bitcoinCashAPI=function(e){return bitcoinCashAPIURL+e},bitcoinCashAPIRequest=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request(bitcoinCashAPI(t),void 0,1e3).then(function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getExchangeRates=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t){var r,n,a,s,o,i,c;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([request("https://blockchain.info/ticker").then(function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t?(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,request("https://api.coingecko.com/api/v3/exchange_rates").then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent.rates.bch.value);case 3:case"end":return e.stop()}}),e)})))():1]);case 2:for(r=e.sent,n=(0,_slicedToArray2.default)(r,2),a=n[0],s=n[1],o=0,i=Object.keys(a);o<i.length;o++)c=i[o],a[c]=a[c].last,t&&(a[c]=parseFloat((a[c]/s).toFixed(2)));return a.BTC=1,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setBlockchainAPIKey=function(e){blockchainAPIKey=e},Wallet=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,_classCallCheck2.default)(this,e),this.apiKey=t.apiKey,this.bitcoinCash=!0===t.bitcoinCash,this.bitcore=this.bitcoinCash?bitcore.bitcoinCash:bitcore.bitcoin,this.transactionFee=this.bitcoinCash?transactionFees.bitcoinCash:transactionFees.bitcoin,this.transactionFeeSatoshi=this.bitcoinCash?transactionFeesSatoshi.bitcoinCash:transactionFeesSatoshi.bitcoin,t instanceof e)return this.address=t.address,this.isReadOnly=t.isReadOnly,this.localCurrency=t.localCurrency,this.key=t.key,this.originatingTransactions=t.originatingTransactions,void(this.observables={});this.localCurrency=t.localCurrency||"BTC";var r="string"==typeof t.key?new this.bitcore.BitcorePrivateKey(t.key,"livenet").toBuffer():t.key instanceof Uint8Array?t.key:void 0;if(void 0!==r?this.key=this.bitcore.BitcorePrivateKey.fromObject({bn:r,compressed:!t.uncompressedPublicKey,network:"livenet"}):t.address||(this.key=new this.bitcore.BitcorePrivateKey(void 0,"livenet")),this.isReadOnly=void 0===this.key,this.address=this.isReadOnly?t.address:this.key.toAddress().toString(),this.originatingTransactions={},this.observables={},!this.bitcore.address.isValid(this.address)){if(!this.bitcoinCash||!bitcore.bitcoin.address.isValid(this.address))throw new Error("Invalid Address: ".concat(this.address,"."));this.address=getBitcoinCashAddress(this.address)}}var t,r,n,a,s,o;return(0,_createClass2.default)(e,[{key:"_friendlyTransaction",value:function(e,t,r){if("baseTransaction"in e)return e;var n={},a={},s=this.bitcoinCash?e.vin:e.inputs.map((function(e){return e.prev_out})),o=this.bitcoinCash?e.vout:e.out,i=function(e){return"number"==typeof e.valueSat?e.valueSat:"string"==typeof e.value?parseFloat(e.value)*satoshiConversion:e.value},c={amount:void 0,valueInLocal:s.map(i).reduce((function(e,t){return e+t}),0)*r,valueOutLocal:o.map(i).reduce((function(e,t){return e+t}),0)*r,wasSentByMe:!1};c.amount=c.valueOutLocal;var u,l=_createForOfIteratorHelper(s);try{for(l.s();!(u=l.n()).done;){var f=u.value,d=this.bitcoinCash?f.cashAddress||getBitcoinCashAddress(f.addr):f.addr,h=i(f);c.wasSentByMe=c.wasSentByMe||d===this.address,f.valueLocal=h*r,n[d]=!0}}catch(e){l.e(e)}finally{l.f()}var p,b=_createForOfIteratorHelper(o);try{for(b.s();!(p=b.n()).done;){var y=p.value,v=this.bitcoinCash?(y.scriptPubKey.cashAddrs||y.scriptPubKey.addresses.map(getBitcoinCashAddress))[0]:[y.addr],_=i(y);y.valueLocal=_*r,v&&(n[v]?c.amount-=y.valueLocal:a[v]=!0)}}catch(e){b.e(e)}finally{b.f()}var g=this.bitcoinCash?e.confirmations||0:t-(e.block_height||t),m=this.bitcoinCash?e.txid:e.hash||e.txid;return{amount:parseFloat((c.amount/satoshiConversion).toFixed(8)),baseTransaction:e,id:m,isConfirmed:g>=6,recipients:Object.keys(a),senders:Object.keys(n),timestamp:1e3*e.time,wasSentByMe:c.wasSentByMe}}},{key:"_friendlyTransactions",value:(o=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t){var r,n,a,s,o,i,c=this;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t,this.bitcoinCash?void 0:request(blockchainAPI("q/getblockcount")).then(function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.text());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){return parseInt(e,10)})),this._getExchangeRates()]);case 2:return r=e.sent,n=(0,_slicedToArray2.default)(r,3),a=n[0],s=n[1],o=n[2],i=o[this.localCurrency],e.abrupt("return",a.map((function(e){return c._friendlyTransaction(e,s,i)})));case 9:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"_getExchangeRates",value:(s=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","BTC"===this.localCurrency?{BTC:1}:getExchangeRates());case 1:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"_watchTransactions",value:function(){var e=this,t="_watchTransactions ".concat(this.address);if(!this.observables[t])if(this.bitcoinCash)this.observables[t]=new Observable((function(t){var r=!0;return(0,_asyncToGenerator2.default)(_regenerator.default.mark((function n(){var a,s,o,i,c;return _regenerator.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=17;break}return n.next=3,e.getTransactionHistory();case 3:s=n.sent,o=a?s.length-a.length:0,i=_regenerator.default.mark((function e(){var r;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=s[c],t.next((function(){return r}));case 2:case"end":return e.stop()}}),e)})),c=0;case 7:if(!(c<o)){n.next=12;break}return n.delegateYield(i(),"t0",9);case 9:++c,n.next=7;break;case 12:return a=s,n.next=15,sleep(3e5);case 15:n.next=0;break;case 17:case"end":return n.stop()}}),n)})))(),function(){r=!1}}));else{var r=new Subject;this.observables[t]=r;var n=new WebSocket(blockchainWebSocketURL);n.onopen=function(){n.send(JSON.stringify({op:"addr_sub",addr:e.address}))},n.onmessage=function(t){var n;try{n=JSON.parse(t.data).x.hash}catch(e){}n&&r.next((0,_asyncToGenerator2.default)(_regenerator.default.mark((function t(){return _regenerator.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._friendlyTransactions(blockchainAPIRequest("rawtx/".concat(n)).then((function(e){return[e]})));case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)}))))}}return this.observables[t]}},{key:"createTransaction",value:(a=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t,r){var n,a,s,o,i,c,u,l,f=this;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isReadOnly){e.next=2;break}throw new Error("Read-only wallet");case 2:return e.next=4,Promise.all([this.getBalance(),this.bitcoinCash?bitcoinCashAPIRequest("address/utxo/".concat(this.address)).catch((function(){})).then((function(e){return((e||{}).utxos||[]).map((function(t){return{outputIndex:t.vout,satoshis:t.satoshis,scriptPubKey:e.scriptPubKey,txid:t.txid}}))})):blockchainAPIRequest("unspent",{active:this.address}).catch((function(){})).then((function(e){return((e||{}).unspent_outputs||[]).map((function(e){return{outputIndex:e.tx_output_n,satoshis:e.value,scriptPubKey:e.script,txid:e.tx_hash_big_endian}}))}))]);case 4:if(n=e.sent,a=(0,_slicedToArray2.default)(n,2),s=a[0],o=a[1],!((r/=s._exchangeRates[this.localCurrency])>s.btc)){e.next=11;break}throw new Error("Insufficient funds");case 11:i=_createForOfIteratorHelper(o);try{for(i.s();!(c=i.n()).done;)u=c.value,this.originatingTransactions[u.txid]&&!u.confirmations&&(u.confirmations=1)}catch(e){i.e(e)}finally{i.f()}return l=function e(n){try{return(new f.bitcore.BitcoreTransaction).from(o.map((function(e){return new f.bitcore.BitcoreTransaction.UnspentOutput(e)}))).to(t.address?t.address:t.getAddress?t.getAddress().toString():t,Math.floor(r*satoshiConversion)).change(f.address).fee(f.transactionFeeSatoshi).sign(f.key)}catch(t){if(n<100&&t.message.includes("totalNeededAmount"))return r-=5e-6,e(n+1);throw t}},e.abrupt("return",l(0));case 15:case"end":return e.stop()}}),e,this)}))),function(e,t){return a.apply(this,arguments)})},{key:"getBalance",value:(n=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(){var t,r,n,a,s=this;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.bitcoinCash?bitcoinCashAPIRequest("address/details/".concat(this.address)).catch((function(){})).then((function(e){return(e||{}).balance||0})):blockchainAPIRequest("balance",{active:this.address}).then((function(e){var t=0;try{t=e[s.address].final_balance/satoshiConversion}catch(e){}return t})),this._getExchangeRates()]);case 2:return t=e.sent,r=(0,_slicedToArray2.default)(t,2),n=r[0],a=r[1],e.abrupt("return",{_exchangeRates:a,btc:n,local:parseFloat((n*(a[this.localCurrency]||0)).toFixed(2))});case 7:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"getTransactionHistory",value:(r=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._friendlyTransactions((this.bitcoinCash?bitcoinCashAPIRequest("address/transactions/".concat(this.address)):blockchainAPIRequest("rawaddr/".concat(this.address))).then((function(e){return(e||{}).txs||[]}))));case 1:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"send",value:(t=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t,r){var n,a,s,o;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.createTransaction(t,r);case 2:if(n=e.sent,a=n.id,this.originatingTransactions[a]=!0,s=n.serialize(),!this.bitcoinCash){e.next=8;break}return e.abrupt("return",request(bitcoinCashAPI("rawtransactions/sendRawTransaction/".concat(s))).then(function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.text());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:return(o=new FormData).append("tx",s),e.abrupt("return",request(blockchainAPI("pushtx"),{body:o,method:"POST"}).then(function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(t){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.text());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})},{key:"watchNewTransactions",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t="watchNewTransactions ".concat(this.address);return this.observables[t]||(this.observables[t]=this._watchTransactions().pipe(mergeMap(function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(r){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",lock(t,r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))),e?this.observables[t]:this.observables[t].pipe(map((function(e){return e.filter((function(e){return e.isConfirmed}))})))}},{key:"watchTransactionHistory",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r="watchTransactionHistory ".concat(this.address);if(!this.observables[r]){var n=new ReplaySubject(1);this.observables[r]=n,this.getTransactionHistory().then((function(t){n.next(t),e._watchTransactions().pipe(mergeMap((0,_asyncToGenerator2.default)(_regenerator.default.mark((function t(){return _regenerator.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",lock(r,(0,_asyncToGenerator2.default)(_regenerator.default.mark((function t(){return _regenerator.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.getTransactionHistory());case 1:case"end":return t.stop()}}),t)})))));case 1:case"end":return t.stop()}}),t)}))))).subscribe(n)})).catch((function(t){e.observables[r].error(t)}))}return t?this.observables[r]:this.observables[r].pipe(map((function(e){return e.filter((function(e){return e.isConfirmed}))})))}}]),e}(),simplebtc={getExchangeRates:getExchangeRates,minimumTransactionAmount:bitcore.bitcoin.BitcoreTransaction.DUST_AMOUNT/satoshiConversion,setBlockchainAPIKey:setBlockchainAPIKey,transactionFees:transactionFees,transactionFeesSatoshi:transactionFeesSatoshi,Wallet:Wallet};simplebtc.simplebtc=simplebtc,module.exports=simplebtc;