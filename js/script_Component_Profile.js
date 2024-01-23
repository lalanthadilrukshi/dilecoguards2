/*----------------set dark/light theme------------------ -*/
setInitialColorTheme() ;


function setInitialColorTheme() {

  //alert("themeclick")
  let localStorageTheme = localStorage.getItem("colortheme");
 if  (localStorageTheme  == null)
 {localStorageTheme ="light"
 
}
  document.querySelector("html").setAttribute("data-theme", localStorageTheme );
 
}
