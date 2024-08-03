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
				if(location.href=="https://folarin-samuel.github.io/index.html"){
								alert("This is the first page");
				} else if(location.href=="https://folarin-samuel.github.io/second.html"){
								location.href="https://folarin-samuel.github.io/index.html";
				} else if(location.href=="https://folarin-samuel.github.io/third.html"){
								location.href="https://folarin-samuel.github.io/second.html";
				} else if(location.href=="https://folarin-samuel.github.io/fourth.html"){
								location.href="https://folarin-samuel.github.io/third.html";
				} else if(location.href=="https://folarin-samuel.github.io/fifth.html"){
								location.href="https://folarin-samuel.github.io/fourth.html";
				}
				
}
function nexts(){
				if(location.href=="https://folarin-samuel.github.io/index.html"){
								location.href="https://folarin-samuel.github.io/second.html"
				} else if(location.href=="https://folarin-samuel.github.io/second.html"){
								location.href="https://folarin-samuel.github.io/third.html";
				} else if(location.href=="https://folarin-samuel.github.io/third.html"){
								location.href="https://folarin-samuel.github.io/fourth.html";
				} else if(location.href=="https://folarin-samuel.github.io/fourth.html"){
								location.href="https://folarin-samuel.github.io/fifth.html";
				} else if(location.href=="https://folarin-samuel.github.io/fifth.html"){
								alert('This is the end of the page');
				}
}
prev.addEventListener('click', pre);
next.addEventListener('click', nexts);
//alert(location.href)
