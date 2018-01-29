targetPage = "https://www.google.com";

function onExtensionClick(tab){
	//open new tab with target page
	chrome.tabs.create({ url : targetPage}, ()=>{
		chrome.tabs.executeScript(null, {file: "injected.js"});
	});
}

chrome.browserAction.onClicked.addListener( onExtensionClick );

// setTimeout(()=>{
// 	//programming injection js
// 	chrome.tabs.executeScript(null, {file: "injected.js"});
// }, 4000);

