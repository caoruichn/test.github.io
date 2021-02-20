document.write("<script language=javascript src='./js/manualflower.js'></script>");
document.write("<script language=javascript src='./js/flower.js'></script>");
document.write("<script language=javascript src='./js/other.js'></script>");
var nowDiv = "manualflower"
window.onload=function(){
  showFiles("manualflower-container","manualflower");
}
//替换元素
function showFiles(domId,fileList) {
  let newDom = ""
  for (let item of this[fileList]) {
    newDom += "<table class='detailTable waterfall-item'>"
    newDom += "<tr><td class='valueTd' colspan='2'><img class='img' src='" + item.pic + "' alt='" + item.name + "'></td></tr>"
    newDom += "<tr><td class='titleTd' style='width:100px'>名称</td><td class='valueTd'>" + item.name + "</td></tr>"
    newDom += "<tr><td class='titleTd''>编号</td><td class='valueTd'>" + item.code + "</td></tr>"
    newDom += "<tr><td class='titleTd''>价格</td><td class='valueTd'>" + item.price + "</td></tr>"
    newDom += "<tr><td class='titleTd''>描述</td><td class='valueTd'>" + item.remark + "</td></tr>"
    newDom += "</table>"
  }
  document.getElementById(domId).innerHTML = newDom
}

function showdiv(ida,idb,idc){
  if(nowDiv == ida){
    return;
  }
  nowDiv = ida
  modifyStyle(ida,"block","aliceblue")
  modifyStyle(idb,"none","blue")
  modifyStyle(idc,"none","blue")
  showFiles(ida+"-container",ida);
}
function modifyStyle(id,display,color){
  document.getElementById(id+"-container").style.display=display;
  document.getElementById(id+"-title").style.color=color;
}

//备份-追加元素
function showFiles_bak(domId,fileList) {
  let mianDiv = document.getElementById(domId)
  let dom = ""
  for (let item of this[fileList]) {
    let table = document.createElement('table')
    table.className = "detailTable waterfall-item"
    let newDom = "<tr><td class='valueTd' colspan='2'><img class='img' src='" + item.pic + "' alt='" + item.name + "'></td></tr>"
    newDom += "<tr><td class='titleTd' style='width:100px'>名称</td><td class='valueTd'>" + item.name + "</td></tr>"
    newDom += "<tr><td class='titleTd''>编号</td><td class='valueTd'>" + item.code + "</td></tr>"
    newDom += "<tr><td class='titleTd''>价格</td><td class='valueTd'>" + item.price + "</td></tr>"
    newDom += "<tr><td class='titleTd''>描述</td><td class='valueTd'>" + item.remark + "</td></tr>"
    table.innerHTML = newDom
    mianDiv.appendChild(table)
  }
}