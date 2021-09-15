document.write("<script src=\"https://unpkg.com/vue@2.6.14/dist/vue.js\"></script>");
document.write("<script src=\"https://unpkg.com/element-ui@2.15.5/lib/index.js\"></script>");

document.write("<script language=javascript src='./js/data.js'></script>");
document.write("<script language=javascript src='./js/tips.js'></script>");

new Vue({
  el: '#app',
  data: function() {
    return { visible: false }
  },
  created() {
    console.log(11111111111111111)
    this.showTips();
  },
  methods: {
    showTips(){
      let list = this.tips;
      if(!list || list.length == 0){
        return
      }
      let newDom = ""
      for (let item of list) {
        if(!item){
          continue
        }
        console.log(item)
        newDom += "<p>" + item + "</p>"
      }
      if(newDom){
        newDom = "<div class=\"title\">公告</div>" + newDom
      }
      document.getElementById("express_tips").innerHTML = newDom
    },
    searchButton(){}
  },
})
// window.onload=function(){
//   showTips();
// }
// /** 初始化公告 */
// function showTips() {
//   let list = this.tips;
//   if(!list || list.length == 0){
//     return
//   }
//   let newDom = ""
//   for (let item of list) {
//     if(!item){
//       continue
//     }
//     console.log(item)
//     newDom += "<p>" + item + "</p>"
//   }
//   if(newDom){
//     newDom = "<div class=\"title\">公告</div>" + newDom
//   }
//   document.getElementById("express_tips").innerHTML = newDom
// }
// /**  */
// function searchButton(){
//   var ipValue = document.getElementById("study").value;
//   if(!/^(1(([38]\d)|(4[57])|(5[0-35-9])|66|(7[0135-8])|(9[89]))\d{8})$/.test(ipValue)){
//     return;
//   }
// }