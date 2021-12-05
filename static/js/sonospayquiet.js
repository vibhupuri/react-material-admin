document.querySelector('.jss114').innerText = "Sonos Pay";
document.querySelector('.jss118').innerText ="Vibhu Puri";
document.querySelector('.jss117').firstElementChild.src="https://avatars.githubusercontent.com/u/19325317?v=4";
document.querySelector('.jss14').lastElementChild.remove();
document.querySelector(".jss1").firstElementChild.querySelectorAll(".MuiGrid-container")[1].remove();

document.querySelector(".jss1").firstElementChild.querySelectorAll(".MuiGrid-root")[1].remove()
document.querySelector(".jss1").firstElementChild.querySelectorAll(".MuiGrid-root")[3].remove()
document.querySelector(".jss1").firstElementChild.querySelectorAll(".MuiGrid-root")[5].remove()

document.querySelector(".jss1").firstElementChild.querySelectorAll(".MuiGrid-root")[1].querySelector('path').outerHTML = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>'

document.querySelector(".jss1").firstElementChild.querySelectorAll(".MuiGrid-root")[2].remove()
document.querySelector('.MuiGrid-container').appendChild(document.querySelector(".jss1").firstElementChild.querySelectorAll(".MuiGrid-root")[1].cloneNode(true));

[...document.querySelectorAll("span")].filter((i)=>i.innerText=="Likes").map((i)=>i.style.visibility="hidden");
var sendSpan = document.querySelectorAll(".MuiPaper-rounded")[0].querySelectorAll('div')[2]//[...document.querySelectorAll("span")].filter((i)=>i.innerText=="4,231")[0];
var recSpan = document.querySelectorAll(".MuiPaper-rounded")[1].querySelectorAll('div')[2]//[...document.querySelectorAll("span")].filter((i)=>i.innerText=="4,231")[1];
sendSpan.innerText = "SEND PAYMENT";
recSpan.innerText = "RECEIVE PAYMENT";
sendSpan.style.fontSize = "22px";
sendSpan.style.fontWeight = "200";
recSpan.style.fontSize = "22px";
recSpan.style.fontWeight = "200";
document.querySelectorAll(".MuiGrid-item")[1].querySelector('path').outerHTML = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.46 14.45l-1.36-.62c.28-.61.41-1.24.4-1.86-.01-.63-.14-1.24-.4-1.8l1.36-.63c.35.75.53 1.56.54 2.4.01.86-.17 1.7-.54 2.51zm3.07 1.56-1.3-.74c.52-.92.78-1.98.78-3.15 0-1.19-.27-2.33-.8-3.4l1.34-.67c.64 1.28.96 2.65.96 4.07 0 1.43-.33 2.74-.98 3.89zm3.14 1.32-1.35-.66c.78-1.6 1.18-3.18 1.18-4.69 0-1.51-.4-3.07-1.18-4.64l1.34-.67c.9 1.78 1.34 3.56 1.34 5.31 0 1.74-.44 3.54-1.33 5.35z"></path>';

document.querySelector('.MuiGrid-container').lastElementChild.classList.value = 'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-6';
document.querySelector('.MuiGrid-container').firstElementChild.classList.value = 'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-6';
document.querySelectorAll('.MuiGrid-container')[1].firstElementChild.classList.value = 'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12';
document.querySelector('.MuiListSubheader-root').innerText= 'Supported Providers';
document.querySelector('.MuiButtonBase-root.jss3').remove();

//[...document.querySelectorAll("a")].map((i)=>i.remove());
  

//[...document.querySelectorAll(".jss316")].map((i)=>i.remove());


[...document.querySelectorAll("a")].map((i)=>i.style.pointerEvents="none");

var SideBarElems =  document.querySelectorAll("li.MuiButtonBase-root");
[...SideBarElems].map((i)=>i.style.pointerEvents="none");
console.log(SideBarElems[0].querySelector('path').outerHTML)
SideBarElems[0].querySelector('path').outerHTML = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>';
SideBarElems[1].querySelector('path').outerHTML = '<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>';
SideBarElems[2].querySelector('path').outerHTML = '<path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"></path>';

 
//document.querySelectorAll(".jss316").length?document.querySelectorAll(".jss316")[2].remove():document.querySelectorAll(".jss318")[2].remove()

var allSpan = [...document.querySelectorAll("span")];
allSpan.find((i)=>i.innerText=="Samsung TV").innerText="Google Pay";
allSpan.find((i)=>i.innerText=="Google Pay").nextSibling.innerText="pay.google.com";
allSpan.find((i)=>i.innerText=="Playstation 4").innerText="Paytm";
allSpan.find((i)=>i.innerText=="Paytm").nextSibling.innerText="paytm.com";
allSpan.find((i)=>i.innerText=="Apple iPhone 6").innerText="Phone Pe";
allSpan.find((i)=>i.innerText=="Phone Pe").nextSibling.innerText="phonepe.com";
allSpan.find((i)=>i.innerText=="Apple MacBook").innerText="BHIM UPI";
allSpan.find((i)=>i.innerText=="BHIM UPI").nextSibling.innerText="bhimupi.org.in";

document.querySelector('.MuiDrawer-root').style.pointerEvents="none"