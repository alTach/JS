// window.addEventListener('DOMContentLoaded', function(){
// 	alert('hi')
// 	document.querySelector('a[href="/premiere/ru/"]').click()
// 	document.addEventListener('DOMContentLoaded', function(){
// 		document.getElementsByClassName('selectBox')[0].children[0].querySelector('option[selected="selected"]').removeAttribute('selected');
// 		document.getElementsByClassName('selectBox')[0].children[0].querySelector('option[value="/premiere/ru/2017/"]').setAttribute('selected',"selected");

// 	})
// })
// document.querySelector('#index_news > div > div > div:nth-child(2)').style.color = "red"



let i = 0;
window.onload = ()=>{
    let timerId = setInterval(function(){
        if(i == 2){
            document.getElementById('lst-ib')
        }
        if(i == 4){
            document.getElementById('lst-ib').value = 'eurohomespb';
            i+=1;
        }
        if(i == 5) {
            document.querySelector('input[name="btnK"]').click();
            i-=1;
        }
        if(i == 6) {
            document.querySelector('a[href="http://www.eurohomespb.ru/"]').target = "";
            document.querySelector('a[href="http://www.eurohomespb.ru/"]').click();
            document.querySelector('a[href="http://www.eurohomespb.ru/"]').click();
        }
        if(i==8){
            document.body.style.backgroundColor = "green";
        }
        if(i==18){
            alert(chrome.tabs.url)
            //chrome.tabs.executeScript(null, {file: "injected2.js"});
            clearInterval(timerId);
        }
        i+=2;
    }, 2000)
}
