"use strict";(self["webpackChunkbs"]=self["webpackChunkbs"]||[]).push([[661],{5380:function(e,t){t.ee=t.hK=void 0;var a=function(){var e=new Date,t=function(e){return e>10?e:"0".concat(e)};return"".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate()," ").concat(t(e.getHours()),":").concat(t(e.getMinutes()))};t.hK=a;var n=function(e,t){var a=[];if(e.length<=t)a.push(e);else for(var n=0;n<Math.floor(e.length/t);n++)a.push(e.slice(n*t,(n+1)*t)),n+1==Math.floor(e.length/t)&&0!=e.slice((n+1)*t).length&&a.push(e.slice((n+1)*t));return a};t.ee=n},8686:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(3396);const s={class:"w-bread-item"},l={key:1};var i={__name:"w-bread-item",props:{to:{type:String,default:""}},setup(e){return(t,a)=>{const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",s,[e.to?((0,n.wg)(),(0,n.j4)(i,{key:0,to:e.to},{default:(0,n.w5)((()=>[(0,n.WI)(t.$slots,"default")])),_:3},8,["to"])):((0,n.wg)(),(0,n.iD)("span",l,[(0,n.WI)(t.$slots,"default")]))])}}},r=a(89);const c=(0,r.Z)(i,[["__scopeId","data-v-00995324"]]);var o=c},7224:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(3396),s={name:"w-bread",props:{sp:{type:String},icon:{type:Object}},render(){const e=this.$slots.default(),t=this.$props.sp,a=this.$props.icon,s=[];return e.forEach(((e,l)=>{"w-bread-item"==e.type["__name"]?(s.push(e),1==Boolean(t)?s.push((0,n.h)("span",{class:"sp"},t)):s.push((0,n.h)(a))):e.children.forEach(((e,l)=>{s.push(e),1==Boolean(t)?s.push(t):s.push((0,n.h)(a))}))})),s.pop(),(0,n.h)("div",{class:"w-bread"},s)}},l=a(89);const i=(0,l.Z)(s,[["__scopeId","data-v-7d251198"]]);var r=i},659:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(3396),s=a(4870),l=a(7139);const i=e=>((0,n.dD)("data-v-31d818de"),e=e(),(0,n.Cn)(),e),r={class:"pagination"},c=i((()=>(0,n._)("a",{class:"page-link",href:"javascript:;"},"上一页",-1))),o=[c],u={key:1,class:"page-item disabled"},d=i((()=>(0,n._)("a",{class:"page-link",href:"javascript:;"},"上一页",-1))),p=[d],v=["onClick"],g={class:"page-link",href:"javascript:;"},h=i((()=>(0,n._)("a",{class:"page-link",href:"javascript:;"},"下一页",-1))),f=[h],m={key:3,class:"page-item disabled"},_=i((()=>(0,n._)("a",{class:"page-link",href:"javascript:;"},"下一页",-1))),w=[_];var b={__name:"index",props:{total:{type:Number},pageSize:{type:Number},currentPage:{type:Number}},emits:["getCurrentPage"],setup(e,{emit:t}){const a=e,i=5,c=(0,s.iH)(a.currentPage),d=(0,s.iH)(a.total),h=(0,s.iH)(a.pageSize),_=(0,n.Fl)((()=>{const e=Math.ceil(d.value/h.value);let t=Math.floor(i/2),a=c.value-t,n=a+i-1;a<1&&(a=1,n=a+i-1>e?e:a+i-1),n>e&&(n=e,a=n-i+1<1?1:n-i+1);const s=[];for(let l=a;l<=n;l++)s.push(l);return{pageCount:e,btnArr:s,start:a,end:n}})),b=e=>{c.value=e,t("getCurrentPage",c.value)};return(e,t)=>((0,n.wg)(),(0,n.iD)("ul",r,[c.value>1?((0,n.wg)(),(0,n.iD)("li",{key:0,onClick:t[0]||(t[0]=e=>b(c.value-1)),class:"page-item"},o)):((0,n.wg)(),(0,n.iD)("li",u,p)),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(_).btnArr,(e=>((0,n.wg)(),(0,n.iD)("li",{onClick:t=>b(e),class:(0,l.C_)([{active:e===c.value},"page-item"])},[(0,n._)("a",g,(0,l.zw)(e),1)],10,v)))),256)),c.value<(0,s.SU)(_).pageCount?((0,n.wg)(),(0,n.iD)("li",{key:2,onClick:t[1]||(t[1]=e=>b(c.value+1)),class:"page-item"},f)):((0,n.wg)(),(0,n.iD)("li",m,w))]))}},k=a(89);const D=(0,k.Z)(b,[["__scopeId","data-v-31d818de"]]);var y=D},4243:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(3396),s=a(4870),l=a(6062),i=(0,l.a1)("star",!1,(function(e){return(0,n.Wm)("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[(0,n.Wm)("path",{d:"M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null)])}));const r={class:"star"};var c={__name:"index",props:{star:{type:Number,default:3,validator(e){return[1,2,3,4,5].includes(e)}}},setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("div",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.star,(e=>((0,n.wg)(),(0,n.j4)((0,s.SU)(i),{size:"18",fill:"#ff9240",theme:"filled"})))),256)),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(5-e.star,(e=>((0,n.wg)(),(0,n.j4)((0,s.SU)(i),{size:"18",fill:"#ff9240",theme:"outline"})))),256))]))}};const o=c;var u=o},3661:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var n=a(3396),s=a(4870),l=a(7139),i=a(65),r=a(5380),c=a(7224),o=a(8686),u=a(659),d=a(4243),p=a(2483);const v=e=>((0,n.dD)("data-v-1a4888c6"),e=e(),(0,n.Cn)(),e),g=v((()=>(0,n._)("div",{class:"img"},null,-1))),h={class:"handmade container"},f=(0,n.Uk)("首页"),m=(0,n.Uk)("特色产品"),_=(0,n.Uk)("特色手工"),w=v((()=>(0,n._)("h2",{class:"title m-4"},"特色手工",-1))),b={class:"row"},k={class:"handmade-card col-lg-4 col-sm-6"},D={class:"ct1"},y=["src"],C={class:"ct1-body"},Z={class:"title-info"},H={class:"score"},L={class:"description"},S=v((()=>(0,n._)("p",null,"地址：尧坝古镇旅游景区",-1))),j={class:"btn-info"},z=["onClick"];var W={__name:"index",setup(e){const t=(0,p.tv)(),a=(0,i.oR)();let v=a.getters["handmade/handmadeList"](),W=v.length;const U=(0,s.iH)(1),K=4;v=(0,r.ee)(v,K);const M=e=>{console.log(e),U.value=e},P=e=>{t.push({name:"SpecialHandmadeDetail",params:{id:e}}),console.log(e)};return(0,n.bv)((()=>{a.dispatch("handmade/getHandmade")})),(e,t)=>{const a=(0,n.Q2)("viewer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[g,(0,n._)("div",h,[(0,n.Wm)(c.Z,{class:"bread",sp:">"},{default:(0,n.w5)((()=>[(0,n.Wm)(o.Z,{to:"/",class:"bread-item"},{default:(0,n.w5)((()=>[f])),_:1}),(0,n.Wm)(o.Z,{to:"/special",class:"bread-item"},{default:(0,n.w5)((()=>[m])),_:1}),(0,n.Wm)(o.Z,{class:"bread-item"},{default:(0,n.w5)((()=>[_])),_:1})])),_:1}),w,(0,n._)("div",b,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(v)[U.value-1],((e,t)=>((0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("div",D,[(0,n.wy)((0,n._)("img",{src:e.img_preview,alt:""},null,8,y),[[a,{navbar:!1}]]),(0,n._)("div",C,[(0,n._)("div",Z,[(0,n._)("span",null,(0,l.zw)(e.name),1),(0,n._)("span",null,"￥"+(0,l.zw)(e.price),1)]),(0,n._)("div",H,[(0,n.Wm)(d.Z,{star:e.star},null,8,["star"])]),(0,n._)("div",L,[(0,n._)("p",null,(0,l.zw)(e.description),1),S]),(0,n._)("div",j,[(0,n._)("button",{onClick:t=>P(e.id),type:"button",class:"btn btn-primary"}," 查看详情 ",8,z)])])])])))),256))]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(v)[U.value-1],((e,t)=>((0,n.wg)(),(0,n.iD)("div")))),256)),(0,n.Wm)(u.Z,{class:"m-5 justify-content-center",onGetCurrentPage:t[0]||(t[0]=e=>M(e)),total:(0,s.SU)(W),pageSize:K,currentPage:U.value},null,8,["total","currentPage"])])],64)}}},U=a(89);const K=(0,U.Z)(W,[["__scopeId","data-v-1a4888c6"]]);var M=K}}]);
//# sourceMappingURL=661.2d824ba9.js.map