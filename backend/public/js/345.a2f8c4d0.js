"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[345],{245:function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("글을 수정하는 곳입니다")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.memo.title,expression:"memo.title"}],attrs:{type:"text"},domProps:{value:e.memo.title},on:{input:function(t){t.target.composing||e.$set(e.memo,"title",t.target.value)}}}),e._v(" "),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo.memo,expression:"memo.memo"}],attrs:{cols:"30",rows:"10"},domProps:{value:e.memo.memo},on:{input:function(t){t.target.composing||e.$set(e.memo,"memo",t.target.value)}}}),e._v(" "),o("br"),o("button",{on:{click:e.updateMemo}},[e._v("수정")])])},a=[],n={data(){return{memo:{title:"",memo:""}}},created(){this.$http.get(`/api/memo/${this.$route.params.id}`).then((e=>{this.memo=e.data}))},methods:{updateMemo(){const e=this.memo;this.$http.put("/api/memo/update",e).then((e=>{console.log(e.data)})),this.$router.push("/")}}},r=n,s=o(1),i=(0,s.Z)(r,m,a,!1,null,null,null),u=i.exports}}]);
//# sourceMappingURL=345.a2f8c4d0.js.map