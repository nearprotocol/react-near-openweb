(this["webpackJsonpreact-near-openweb-example"]=this["webpackJsonpreact-near-openweb-example"]||[]).push([[0],{118:function(e,t){},123:function(e,t){},143:function(e,t,r){"use strict";r.r(t);var n=r(15),a=r.n(n),i=r(61),o=r.n(i),c=(r(71),r(24)),s=r(25),u=r(64),p=r(62),l=r(65),f=r(63),h=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(f.Profile,{accountId:"eugenethedream"}))}}]),t}(n.Component);o.a.render(a.a.createElement(h,null),document.getElementById("root"))},63:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Profile=void 0;var n,a=r(72),i=(n=a)&&n.__esModule?n:{default:n};t.Profile=i.default},66:function(e,t,r){e.exports=r(143)},71:function(e,t,r){},72:function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=s(r(74)),o=r(77),c=s(r(140));function s(e){return e&&e.__esModule?e:{default:e}}var u={accountId:c.default.string.isRequired,defaultProfileUrl:c.default.string,displayName:c.default.string,profileUrl:c.default.string,bio:c.default.string,onFetch:c.default.func,forceShow:c.default.bool},p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={displayName:"",profileUrl:null,bio:"",loading:!1,found:!1};var n=r.props.nearConfig||window.nearConfig||{networkId:"default",nodeUrl:"https://rpc.nearprotocol.com",walletUrl:"https://wallet.nearprotocol.com"};return window.profileComponentCache||(window.profileComponentCache={profileCache:{},app:new o.OpenWebApp("profile",null,n)},window.profileComponentCache.app.init()),r.profileCache=window.profileComponentCache.profileCache,r.app=window.profileComponentCache.app,r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this;this.props.accountId&&this.app.init().then((function(){return e.updateProfile(e.props.accountId)}))}},{key:"fetchProfile",value:function(){var e,t=(e=n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t in this.profileCache)){e.next=6;break}return e.next=3,this.profileCache[t];case 3:return e.abrupt("return",e.sent);case 6:return console.log("Fetching profile for "+t),this.profileCache[t]=Promise.all([this.app.getFrom(t,"displayName"),this.app.getFrom(t,"profileUrl"),this.app.getFrom(t,"bio")]).then((function(e){return{accountId:t,displayName:e[0]||"",profileUrl:e[1],bio:e[2]||""}})).catch((function(e){return!1})),e.next=10,this.profileCache[t];case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e,this)})),function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(a,i){try{var o=t[a](i),c=o.value}catch(s){return void r(s)}if(!o.done)return Promise.resolve(c).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(c)}("next")}))});return function(e){return t.apply(this,arguments)}}()},{key:"updateProfile",value:function(e){var t=this;this.setState({displayName:"",profileUrl:null,bio:"",loading:!0,found:!1}),this.fetchProfile(this.props.accountId).then((function(e){e?t.setState({displayName:e.displayName,profileUrl:e.profileUrl,bio:e.bio,loading:!1,found:!0}):t.setState({loading:!1,found:!1}),t.props.onFetch&&t.props.onFetch(e)}))}},{key:"componentDidUpdate",value:function(e){this.props.accountId!==e.accountId&&this.updateProfile(this.props.accountId)}},{key:"render",value:function(){var e=this.props.displayName||this.state.displayName,t=this.props.profileUrl||this.state.profileUrl||this.props.defaultProfileUrl,r=this.props.bio||this.state.bio,n=this.props.accountId,a=this.props.styles;return this.state.loading?i.default.createElement("div",{style:a.profile},i.default.createElement("div",{className:"spinner-grow",role:"status"},i.default.createElement("span",{className:"sr-only"},"Loading..."))):this.state.found||this.props.forceShow?i.default.createElement("div",{style:a.profile,title:r},i.default.createElement("img",{style:a.profileImage,src:t,alt:"Profile @"+n}),i.default.createElement("span",{style:a.profileName},i.default.createElement("span",{style:a.profileDisplayName},e),i.default.createElement("span",{style:a.profileAccountId},"(@"+n+")"))):null}}]),t}(i.default.Component);p.propTypes=u,p.defaultProps={defaultProfileUrl:null,styles:{profile:{whiteSpace:"nowrap",display:"inline-block"},profileImage:{height:"3em",width:"3em",borderRadius:"50%",verticalAlign:"middle"},profileName:{overflowY:"hidden",marginLeft:"0.5em",verticalAlign:"middle"},profileDisplayName:{},profileAccountId:{color:"#999"}}},t.default=p},77:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"encryptionKey",(function(){return p})),r.d(t,"OpenWebApp",(function(){return l}));var n=r(0),a=r.n(n),i=r(3),o=r(24),c=r(25),s=r(11),u=r(1),p="encryptionKey",l=function(){function t(r,n,a){Object(o.a)(this,t),this.appId=r,this.accountId=n,this._nearConfig=a,this.blocking=Promise.resolve(),this.parseEncryptionKey(),window.nacl=u,window.Buffer=e}return Object(c.a)(t,[{key:"parseEncryptionKey",value:function(){var t="enc_key:"+this.accountId+":"+this.appId+":",r=localStorage.getItem(t);r?r=u.box.keyPair.fromSecretKey(e.from(r,"base64")):(r=new u.box.keyPair,localStorage.setItem(t,e.from(r.secretKey).toString("base64"))),this._key=r}},{key:"updateEncryptionKey",value:function(t){if(e.from(t,"base64").length!==u.box.secretKeyLength)throw new Error("Given secret key has wrong length");var r=u.box.keyPair.fromSecretKey();this._key=r;var n="enc_key:"+this.accountId+":"+this.appId+":";localStorage.setItem(n,e.from(r.secretKey).toString("base64"))}},{key:"_innerInit",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._keyStore=new s.keyStores.BrowserLocalStorageKeyStore(localStorage,"app:"+this.appId+":"),e.next=3,s.connect(Object.assign({deps:{keyStore:this._keyStore}},this._nearConfig));case 3:return this._near=e.sent,this._account=new s.Account(this._near.connection,this.accountId),this._contract=new s.Contract(this._account,this.accountId,{viewMethods:["get","apps","num_messages"],changeMethods:["set","remove","pull_message","send_message"],sender:this.accountId}),this._networkId=this._nearConfig.networkId,e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"init",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._init||(this._init=this._innerInit()));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"ready",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return e.next=4,this._keyStore.getKey(this._networkId,this.accountId);case 4:if(!e.sent){e.next=7;break}return e.abrupt("return",!0);case 7:return e.abrupt("return",this._ready||(this._ready=new Promise((function(e){t._keyAwait=e}))));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAccessPublicKey",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._keyStore.getKey(this._networkId,this.accountId);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t.getPublicKey());case 5:if(!this._tmpKey){e.next=7;break}return e.abrupt("return",this._tmpKey.getPublicKey());case 7:return r=s.KeyPair.fromRandom("ed25519"),this._tmpKey=r,e.abrupt("return",r.getPublicKey());case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSerializedAccessPublicKey",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s.utils.serialize,e.t1=s.transactions.SCHEMA,e.next=4,this.getAccessPublicKey();case 4:return e.t2=e.sent,e.abrupt("return",e.t0.serialize.call(e.t0,e.t1,e.t2));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getEncryptionPublicKey",value:function(){return e.from(this._key.publicKey).toString("base64")}},{key:"storeEncryptionPublicKey",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.set(p,this.getEncryptionPublicKey()));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onKeyAdded",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._tmpKey){e.next=2;break}throw new Error("The key is not initialized yet");case 2:return e.next=4,this._keyStore.setKey(this._networkId,this.accountId,this._tmpKey);case 4:this._tmpKey=null,this._keyAwait&&this._keyAwait();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"forceReady",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ready();case 2:if(e.sent){e.next=4;break}throw new Error("Not ready yet");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"wrappedCall",value:function(e){return this.blocking=this.blocking.then((function(){return e()})).catch((function(){return e()})),this.blocking}},{key:"decryptSecretBox",value:function(t){var r=e.from(t,"base64"),n=new Uint8Array(u.secretbox.nonceLength);r.copy(n,0,0,n.length);var a=new Uint8Array(r.length-u.secretbox.nonceLength);r.copy(a,0,n.length);var i=u.secretbox.open(a,n,this._key.secretKey);return e.from(i).toString()}},{key:"encryptSecretBox",value:function(t){var r=e.from(t),n=u.randomBytes(u.secretbox.nonceLength),a=u.secretbox(r,n,this._key.secretKey),i=new Uint8Array(a.length+u.secretbox.nonceLength);return i.set(n),i.set(a,u.secretbox.nonceLength),e.from(i).toString("base64")}},{key:"decryptBox",value:function(t,r){if(r.length!==u.box.publicKeyLength)throw new Error("Given encryption public key is invalid.");var n=e.from(t,"base64"),a=new Uint8Array(u.box.nonceLength);n.copy(a,0,0,a.length);var i=new Uint8Array(n.length-u.box.nonceLength);n.copy(i,0,a.length);var o=u.box.open(i,a,r,this._key.secretKey);return e.from(o).toString()}},{key:"encryptBox",value:function(t,r){if(r.length!==u.box.publicKeyLength)throw new Error("Given encryption public key is invalid.");var n=e.from(t),a=u.randomBytes(u.box.nonceLength),i=u.box(n,a,r,this._key.secretKey),o=new Uint8Array(i.length+u.box.nonceLength);return o.set(a),o.set(i,u.box.nonceLength),e.from(o).toString("base64")}},{key:"get",value:function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.assign({encrypted:!1,appId:this.appId},r),e.next=3,this._contract.get({app_id:r.appId,key:t});case 3:return(n=e.sent)&&(n=JSON.parse(r.encrypted?this.decryptSecretBox(n):n)),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getFrom",value:function(){var e=Object(i.a)(a.a.mark((function e(t,r,n){var i,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({encrypted:!1,appId:this.appId},n),i=new s.Account(this._near.connection,t),o=new s.Contract(i,t,{viewMethods:["get"],changeMethods:[],sender:this.accountId}),e.next=5,o.get({app_id:n.appId,key:r});case 5:return(c=e.sent)&&(c=JSON.parse(n.encrypted?this.decryptSecretBox(c):c)),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"apps",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._contract.apps();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"set",value:function(){var e=Object(i.a)(a.a.mark((function e(t,r,n){var i=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.forceReady();case 2:return n=Object.assign({encrypted:!1},n),e.next=5,this.wrappedCall((function(){return i._contract.set({key:t,value:n.encrypted?i.encryptSecretBox(JSON.stringify(r)):JSON.stringify(r)},2e15)}));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var r=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.forceReady();case 2:return e.next=4,this.wrappedCall((function(){return r._contract.remove({key:t},2e15)}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"pullMessage",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.forceReady();case 2:return e.next=4,this._contract.num_messages({app_id:this.appId});case 4:if(e.t0=e.sent,!(e.t0>0)){e.next=11;break}return e.next=8,this.wrappedCall((function(){return t._contract.pull_message({},2e15)}));case 8:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTheirPublicKey",value:function(){var t=Object(i.a)(a.a.mark((function t(r){var n,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=Object.assign({accountId:null,theirPublicKey:null,theirPublicKey64:null,encryptionKey:p,appId:this.appId},r)).theirPublicKey){t.next=3;break}return t.abrupt("return",r.theirPublicKey);case 3:if(r.theirPublicKey64){t.next=9;break}if(r.accountId){t.next=6;break}throw new Error("Either accountId or theirPublicKey64 has to be provided");case 6:return t.next=8,this.getFrom(r.accountId,r.encryptionKey,{appId:r.appId});case 8:r.theirPublicKey64=t.sent;case 9:if(r.theirPublicKey64){t.next=11;break}throw new Error("Their app doesn't provide the encryption public key.");case 11:if((n=e.from(r.theirPublicKey64,"base64")).length===u.box.publicKeyLength){t.next=14;break}throw new Error("Their encryption public key is invalid.");case 14:return(i=new Uint8Array(u.box.publicKeyLength)).set(n),t.abrupt("return",i);case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"encryptMessage",value:function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTheirPublicKey(r);case 2:return n=e.sent,e.abrupt("return",this.encryptBox(t,n));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"decryptMessage",value:function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTheirPublicKey(r);case 2:return n=e.sent,e.abrupt("return",this.decryptBox(t,n));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"sendMessage",value:function(){var e=Object(i.a)(a.a.mark((function e(t,r,n){var i=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.forceReady(),n=Object.assign({appId:this.appId},n),e.next=4,this.wrappedCall((function(){return i._contract.send_message({receiver_id:t,app_id:n.appId,message:r},2e15)}));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()}]),t}()}.call(this,r(8).Buffer)},93:function(e,t){},95:function(e,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.7d3ae30a.chunk.js.map