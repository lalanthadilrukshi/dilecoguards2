

  
  
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

  function ShowPageOnRightBoard(url){
    document.getElementById("Ifram_subWindow_right").src = url
     // window.location.reload();/* this is necessary to refresh child pages in iframe*/
     }