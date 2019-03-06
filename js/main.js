var data;
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function createGraph(){
	console.log("hi");
	var center=document.getElementsByTagName("center")[1];
	graphContainer = document.createElement("div");
	graphContainer.setAttribute("id","graph");
	graphContainer.setAttribute("class", "container");
	center.insertBefore(graphContainer,center.children[1]);
	
}
function getData(){
	setTimeout(function () {
		data = document.getElementsByClassName("ace_content")[0].innerText;
		console.log(data);
},5000);

}
function ininitate()
{
	getData();
	createGraph();
}
	
window.onload=ininitate