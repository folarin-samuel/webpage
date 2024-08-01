let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
btn.addEventListener('click', () => {location.href="index.html"});
btn2.addEventListener('click', () => {location.href="second.html"});
btn3.addEventListener('click', () => {location.href="third.html"});
btn4.addEventListener('click', () => {location.href="fourth.html"});
btn5.addEventListener('click', () => {location.href="fifth.html"});
function pre(){
				if(location.href=="file:///storage/emulated/0/webpages/index.html"){
								alert("This is the first page");
				} else if(location.href=="file:///storage/emulated/0/webpages/second.html"){
								location.href="index.html";
				} else if(location.href=="file:///storage/emulated/0/webpages/third.html"){
								location.href="second.html";
				} else if(location.href=="file:///storage/emulated/0/webpages/fourth.html"){
								location.href="third.html";
				} else if(location.href=="file:///storage/emulated/0/webpages/fifth.html"){
								location.href="fourth.html";
				}
				
}
function nexts(){
				if(location.href=="file:///storage/emulated/0/webpages/index.html"){
								location.href="second.html"
				} else if(location.href=="file:///storage/emulated/0/webpages/second.html"){
								location.href="third.html";
				} else if(location.href=="file:///storage/emulated/0/webpages/third.html"){
								location.href="fourth.html";
				} else if(location.href=="file:///storage/emulated/0/webpages/fourth.html"){
								location.href="fifth.html";
				} else if(location.href=="file:///storage/emulated/0/webpages/fifth.html"){
								alert('This is the end of the page');
				}
}
prev.addEventListener('click', pre);
next.addEventListener('click', nexts);
//alert(location.href)