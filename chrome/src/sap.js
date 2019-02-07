// Author:	Muhammad Ilyas
// Date: 	Feb 7, 2019
// SCN:		https://people.sap.com/muhammad.ilyas/

// A generic onclick callback function.
function genericOnClick(info, tab) {
  // console.log("item " + info.menuItemId + " was clicked");
  // console.log("info: " + JSON.stringify(info));
  // console.log("tab: " + JSON.stringify(tab));
  if(!isNaN(info.selectionText))
	window.open("https://launchpad.support.sap.com/#/notes/" + info.selectionText);
}

var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "SAP Note/KBA'";
		var id = chrome.contextMenus.create({"title": title, "contexts":[context],
										   "onclick": genericOnClick});
}
