

  
  
setInitialColorTheme() ;


function setInitialColorTheme() {

  //alert("themeclick")
  let localStorageTheme = localStorage.getItem("colortheme");
 
 if  (localStorageTheme  == null)
 {localStorageTheme ="light"
 
}
  document.querySelector("html").setAttribute("data-theme", localStorageTheme );
  
 
}


/******close leftside nave */
/*
let leftsidebar = document.querySelector('.leftside-bar');
document.querySelector('#menu-btn_leftBar').onclick = () =>{
  leftsidebar.classList.toggle('active');
}
*/ 

function toggleLeftSideNav_Active(){
  let leftsidebar=document.querySelector('.leftside-bar');
  leftsidebar.classList.toggle('active');
  
  }
