/*user btn click --------------------------------*/


function toggleTopBarRight_ProfileBox(){
let profile=document.querySelector('.TopBar_Right_icons .profile');
/*
document.querySelector('#user-btn').onclick=()=>{
    profile.classList.toggle('active');
 }*/
 profile.classList.toggle('active');

}









/*----------------set dark/light theme-------------------*/
setInitialColorTheme() ;

const button = document.getElementById("ColorThemeToggle-btn");

function setInitialColorTheme() {

  //alert("themeclick")
  let localStorageTheme = localStorage.getItem("colortheme");
 if  (localStorageTheme  == null)
 {localStorageTheme ="light"
 localStorage.setItem("colortheme", localStorageTheme );
}
  document.querySelector("html").setAttribute("data-theme", localStorageTheme );
 
}

function onClick_ColorTheme() {
  //alert("themeclick")
  let localStorageTheme = localStorage.getItem("colortheme");
  const newTheme = localStorageTheme === "light" ? "dark" : "light"; /* if === "dark" then return light and vise versa*/
  document.querySelector("html").setAttribute("data-theme", newTheme);
  localStorage.setItem("colortheme", newTheme);
  window.location.reload(); //###---------------### to refresh all sub windows/Iframes with other htmlpages and make their color theme also same.

}


function addColorThemButtonEventListener(){
button.addEventListener("click", () => {
  //alert("themeclick")
  let localStorageTheme = localStorage.getItem("colortheme");
  const newTheme = localStorageTheme === "light" ? "dark" : "light"; /* if === "dark" then return light and vise versa*/

  document.querySelector("html").setAttribute("data-theme", newTheme);
  /*
  document.body.setAttribute("data-theme", newTheme);
  const root =document.querySelector(':root');
   alert(newTheme)
   root.setAttribute("data-theme", newTheme);
   */
  localStorage.setItem("colortheme", newTheme);
  window.location.reload();/* this is necessary to refresh child pages in iframe*/
 
});
}

function ShowPageOnBoard(url){
  document.getElementById("Ifram_subWindow").src = url
   // window.location.reload();/* this is necessary to refresh child pages in iframe*/
   }
  


/*keep for reference not in use*/
function addProfileButtonEventListener(url){
  const button = document.getElementById("profilebtn");
  button.addEventListener("click", () => {
    const btn = document.getElementById("Ifram_subWindow");
btn.src = "URL"
   // window.location.reload();/* this is necessary to refresh child pages in iframe*/
   });
  }

 