(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["space"],{"02f4":function(e,t,i){var a=i("4588"),u=i("be13");e.exports=function(e){return function(t,i){var s,r,n=String(u(t)),c=a(i),o=n.length;return c<0||c>=o?e?"":void 0:(s=n.charCodeAt(c),s<55296||s>56319||c+1===o||(r=n.charCodeAt(c+1))<56320||r>57343?e?n.charAt(c):s:e?n.slice(c,c+2):r-56320+(s-55296<<10)+65536)}}},"0bfb":function(e,t,i){"use strict";var a=i("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},3846:function(e,t,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"5df3":function(e,t,i){"use strict";var a=i("02f4")(!0);i("01f9")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,i=this._i;return i>=t.length?{value:void 0,done:!0}:(e=a(t,i),this._i+=e.length,{value:e,done:!1})})},"6b54":function(e,t,i){"use strict";i("3846");var a=i("cb7c"),u=i("0bfb"),s=i("9e1e"),r="toString",n=/./[r],c=function(e){i("2aba")(RegExp.prototype,r,e,!0)};i("79e5")(function(){return"/a/b"!=n.call({source:"a",flags:"b"})})?c(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!s&&e instanceof RegExp?u.call(e):void 0)}):n.name!=r&&c(function(){return n.call(this)})},"760a":function(e,t,i){"use strict";var a=i("a6c0"),u=i.n(a);u.a},a6c0:function(e,t,i){},ac6a:function(e,t,i){for(var a=i("cadf"),u=i("0d58"),s=i("2aba"),r=i("7726"),n=i("32e9"),c=i("84f2"),o=i("2b4c"),l=o("iterator"),m=o("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=u(p),f=0;f<v.length;f++){var g,h=v[f],b=p[h],q=r[h],S=q&&q.prototype;if(S&&(S[l]||n(S,l,d),S[m]||n(S,m,h),c[h]=d,b))for(g in a)S[g]||s(S,g,a[g],!0)}},c24f:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"space"},[i("b-container",[i("b-row",[i("b-col",{attrs:{cols:"auto"}},[i("h3",{staticClass:"mb-4"},[e._v("Space address: ("+e._s(e.$route.query.contract)+"):")])])],1),i("b-row",{attrs:{"align-h":"center"}},[i("b-col",{attrs:{cols:"auto"}},[i("ad-space",{attrs:{ad:e.currentAd,loading:e.loading},on:{updateAd:e.onUpdate}})],1)],1),i("b-row",{attrs:{"align-h":"center"}},[i("b-col",{attrs:{cols:"12",md:"6"}},[e.balance>0?i("section",[i("h3",[e._v("Balance")]),i("p",[e._v(e._s(e.currentBalance)+" NULS")])]):e._e(),i("section",[i("h3",[e._v("Lorem ipsum dolor sit amet")]),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec commodo turpis. Suspendisse lorem justo, sollicitudin eget tortor ac, ornare lobortis ligula. Morbi elit augue, viverra sed massa sed, mollis dictum lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus efficitur risus in quam tempus, posuere tristique sem efficitur. Nulla auctor elit convallis, pellentesque nisl nec, porta quam. Ut accumsan quis nisi vel feugiat. Duis justo augue, pretium quis venenatis cursus, semper eu sem. Donec interdum pretium ultricies.")]),i("p",[e._v("Integer eleifend nunc scelerisque, euismod ante et, aliquet turpis. Etiam ut mi elit. Sed lacus quam, feugiat interdum eros sit amet, feugiat congue nisl. Phasellus quam ligula, tristique eget posuere in, sodales non est. Phasellus et accumsan elit. Ut sed lacinia sapien, eget accumsan urna. Etiam id tincidunt neque, vel pretium elit. Nulla facilisi. Nullam nec lectus quis lacus congue finibus id ut ipsum. Proin accumsan efficitur orci, non vehicula mi ullamcorper a. Proin faucibus metus nec sapien ullamcorper suscipit. Etiam vitae dapibus diam. Sed interdum pretium nisi, vel pharetra erat mollis quis. Duis placerat purus finibus, auctor justo in, tincidunt tortor.")])]),i("section",[i("h3",[e._v("Sed quis aliquet turpis")]),i("p",[e._v("Sed quis aliquet turpis. Maecenas tempus lorem porta orci gravida tincidunt. Proin rutrum eget nisi in convallis. Nulla feugiat, diam at dapibus euismod, magna tortor elementum eros, nec posuere erat quam quis justo. Pellentesque neque purus, aliquam id nibh non, pellentesque interdum libero. Fusce non est urna. Proin iaculis tellus sed orci mattis, ut congue magna fermentum. Aenean feugiat maximus mi, eget dictum lacus cursus non. Praesent eleifend orci lacus. Suspendisse potenti. Integer id sem a ligula varius pharetra. Pellentesque vehicula nec tellus id luctus. Mauris scelerisque sem nec lectus porttitor placerat.")]),i("p",[e._v("Suspendisse sit amet posuere lacus, nec ullamcorper dui. Suspendisse suscipit turpis lacus, aliquet volutpat ex iaculis a. Pellentesque vel felis eros. Maecenas ac iaculis sem. Morbi ultricies dictum fermentum. Vestibulum nec blandit mauris. Curabitur id leo nibh. Cras vehicula ante ut augue cursus finibus. Morbi volutpat quam elit, et ullamcorper lacus luctus id. Vestibulum varius ut dui vel laoreet. Donec vel placerat est. Donec eu quam mattis, sagittis est ac, sagittis turpis. Sed accumsan, ligula quis lobortis cursus, est nibh feugiat quam, eget eleifend tortor felis non nibh. Curabitur fermentum augue at nisl placerat congue. Integer diam eros, tincidunt eget arcu quis, finibus iaculis metus. Vivamus id est aliquam, consequat nibh sed, convallis dolor.")]),i("p",[e._v("Pellentesque placerat lorem id ex feugiat elementum. Vestibulum ut mi urna. Morbi metus tortor, condimentum molestie leo at, rutrum suscipit arcu. Pellentesque ullamcorper id orci sit amet commodo. Duis urna sapien, iaculis vitae metus id, bibendum aliquet dolor. Pellentesque semper lacinia hendrerit. Cras aliquet placerat massa malesuada bibendum.")])])]),i("b-col",{attrs:{cols:"12",md:"6"}},[e.providers.length>0?i("section",[i("h3",[e._v("Registered providers")]),e._l(e.providers,function(t){return i("p",{key:t},[i("router-link",{staticClass:"provider-link",attrs:{tag:"div",to:{name:"provider",query:{contract:t}}}},[e._v("\n              "+e._s(t)+"\n            ")])],1)})],2):e._e(),i("section",[i("h3",[e._v("Nam condimentum neque")]),i("p",[e._v("Nam condimentum neque eget felis fermentum, quis varius ex eleifend. Praesent sit amet velit justo. Maecenas condimentum, est vitae feugiat blandit, erat ex egestas tortor, at sagittis dolor turpis sit amet lectus. Morbi accumsan purus vitae pharetra molestie. Nunc placerat hendrerit lacus, eu consectetur tellus bibendum sit amet. Nulla pharetra sit amet tortor non tristique. Nulla facilisi. Proin elementum molestie augue, a elementum quam aliquet vel. Curabitur a facilisis lectus, sit amet volutpat elit. Donec dictum, ligula et volutpat feugiat, quam ipsum egestas lorem, ut dignissim turpis magna et sem. Donec ultricies nisi quis purus pharetra congue.")]),i("p",[e._v("Suspendisse quis mi eu ante ornare elementum id id diam. Etiam mollis commodo leo, et euismod purus dictum eget. Suspendisse gravida purus et mi auctor, id semper nisi congue. Proin tristique interdum ipsum, a fringilla ligula dictum et. Praesent viverra purus quis tristique posuere. Aliquam venenatis metus et mauris lobortis mattis. Quisque id lectus sollicitudin purus sagittis vehicula sit amet sit amet est.")])]),i("section",[i("h3",[e._v("Vivamus sodales dui in ex maximus")]),i("p",[e._v("Vivamus sodales dui in ex maximus, non facilisis lectus fermentum. Suspendisse volutpat pharetra justo id sodales. Donec eu tristique massa, eu commodo neque. Quisque tempus est justo, a pretium ipsum semper a. Nulla sodales lobortis erat quis tempus. Sed nisi ipsum, tempor vel iaculis tincidunt, malesuada sed magna. Fusce malesuada rutrum ligula gravida rutrum. In fringilla convallis convallis. Aenean quis justo ut mi pellentesque feugiat vitae tempus metus. In mollis accumsan ipsum, non consequat nisi sollicitudin in. Etiam hendrerit turpis vel sollicitudin mattis. Phasellus massa massa, finibus sit amet mollis id, molestie non dui.")]),i("p",[e._v("Curabitur semper magna neque, ut hendrerit purus elementum sit amet. Integer ultricies fringilla rhoncus. Mauris dapibus mauris felis, et aliquam erat sagittis id. Pellentesque malesuada laoreet neque, vitae ultrices urna volutpat sit amet. Sed ac lectus neque. Praesent condimentum hendrerit venenatis. In rutrum suscipit massa, vitae accumsan erat ultricies id. Sed id convallis erat. Sed at ex sapien. Nullam id libero at purus rutrum consequat. Aliquam velit magna, porttitor ut iaculis in, venenatis sit amet odio. Integer placerat erat sed leo faucibus dapibus. Quisque id enim tempus, rutrum lectus eget, pharetra massa.")])])])],1)],1)],1)},u=[],s=i("795b"),r=i.n(s),n=(i("ac6a"),i("5df3"),i("6b54"),i("96cf"),i("3b8d")),c=i("932e"),o=i("be6f"),l=i("7d46"),m={name:"Space",components:{AdSpace:l["a"]},data:function(){return{contract:null,currentAd:null,account:null,loading:!1,balance:0,providers:[]}},computed:{currentBalance:function(){return this.balance/1e8}},created:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,t=this.$route.query.contract,i=this.$route.query.privateKey,this.account=(new c["Account"]).import(i,void 0,c["AddressType"].Default,c["ChainIdType"].Testnet),a={api:o.app.api.explorer},e.prev=5,e.next=8,c["Contract"].at(t,a);case 8:return this.contract=e.sent,e.next=11,this.fetchData();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](5),alert(e.t0);case 16:this.loading=!1;case 17:case"end":return e.stop()}},e,this,[[5,13]])}));function t(){return e.apply(this,arguments)}return t}(),methods:{viewCurrentAd:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.contract.viewCurrentAd();case 2:this.currentAd=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),updateAd:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.fetchData();case 3:return t=this.contract.updateAd({sender:this.account.address,privateKey:this.account.prikey}),t.on("txHash",function(e){return console.log(e)}),e.prev=5,e.next=8,t;case 8:return e.sent,e.next=11,this.fetchData();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](5),-1===e.t0.toString().indexOf("Update not needed")&&alert(e.t0);case 16:this.loading=!1,setTimeout(function(){return i.updateAd()},5e3);case 18:case"end":return e.stop()}},e,this,[[5,13]])}));function t(){return e.apply(this,arguments)}return t}(),viewBalance:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.contract.viewBalance();case 2:this.balance=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),viewProviders:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.contract.viewProviders();case 2:this.providers=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetchData:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.a.all([this.viewCurrentAd(),this.viewBalance(),this.viewProviders()]);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onUpdate:function(){this.updateAd()}}},d=m,p=(i("760a"),i("2877")),v=Object(p["a"])(d,a,u,!1,null,"540c67aa",null);t["default"]=v.exports}}]);
//# sourceMappingURL=space.b5934d12.js.map