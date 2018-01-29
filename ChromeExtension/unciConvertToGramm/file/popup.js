function convert(n){
	let parts = n.split("/");
	let gramm = ((parts.length == 1 ? parseInt(parts[0]) : parseInt(parts[0])/parseInt(parts[1]))*28.3495231).toFixed(2);
	return isNaN(gramm) ? "--" : gramm;
}



document.addEventListener('DOMContentLoaded', function(){
	chrome.tabs.executeScript( null, { "code" : "window.getSelection().toString()"}, function(selection){
		let selectedText = selection[0];
		let result = "";
		if(selectedText != ""){
			selectedText = selectedText.replace(/\s+/g, '');
			let numbers = selectedText.split('-');
			result = convert(numbers[0]);

			if(numbers.length == 2)
				result += "-" + convert(numbers[1])
			result += 'г'
		}
		else result = "-----"
		document.getElementById('output').innerHTML = result;
	})
})