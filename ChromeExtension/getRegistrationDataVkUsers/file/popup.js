document.addEventListener('DOMContentLoaded', function(){
	chrome.tabs.create({ url : "https://vkc.om")});
	// chrome.tabs.executeScript( null, { "code" : "window.getSelection().toString(); console.log('hello')"}, function(selection){
	// })
})