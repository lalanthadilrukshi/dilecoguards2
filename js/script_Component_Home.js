//const { galleryPics } = require('./projects.js');
//import { galleryPics} from "./projects"; //es6

/*gallery area*/
const  galleryPics =[
    
    {"class":"horizontal",
    "path":"3.webp"},
      {"class":"horizontal",
    "path":"6.jpg"},
     {"class":"horizontal",
    "path":"7.jpg"},
     {"class":"vertical",
    "path":"8.jpg"},
     {"class":"horizontal",
    "path":"9.jpg"},
     {"class":"vertical",
    "path":"10.jpg"},
     {"class":"square",
    "path":"11.jpg"},
     {"class":"square",
    "path":"12.jpg"},
     {"class":"horizontal",
    "path":"13.jpg"},
     {"class":"horizontal",
    "path":"14.jpg"},
     {"class":"square",
    "path":"15.jpg"},
    {"class":"horizontal",
    "path":"16.jpg"},
    {"class":"horizontal",
    "path":"17.jpg"},
    {"class":"horizontal",
    "path":"18.jpg"},
    {"class":"horizontal",
    "path":"19.jpg"},
    {"class":"horizontal",
    "path":"20.jpg"},
   
    {"class":"square",
    "path":"21.jpg"},
    {"class":"horizontal",
    "path":"22.jpg"},
    
  ];

  var vgalleryPageImageCount =10;
var vgalleryCurrentPage=0;


/*end of gallery area*/





setGalleryNextPage()



/*----gallery area-----*/


function galleryNextPage(){
   
    vgalleryCurrentPage +=1;
    if ((vgalleryPageImageCount * vgalleryCurrentPage)>=galleryPics.length ){
      vgalleryCurrentPage=0
    }
    setGalleryNextPage()
  }
  
  function galleryPrevPage(){
    
    vgalleryCurrentPage -=1;
    if ((vgalleryPageImageCount * vgalleryCurrentPage)<0 ){
      vgalleryCurrentPage=Math.ceil(galleryPics.length/vgalleryPageImageCount)-1
    }
    setGalleryNextPage()
  }
  
  function setGalleryNextPage(){
   /* alert("test2")*/
  let imagePath="./images/gallery/";
  let parentDIV  = document.getElementById("gallery");
  Array.from(parentDIV.children).forEach(c => c.remove())
  
  for (let i = 0; i < vgalleryPageImageCount ; i++) {
    let imageIndex=  (vgalleryPageImageCount * vgalleryCurrentPage) + i
   const element=galleryPics[imageIndex]

   let tempDIV= document.createElement('div');
     tempDIV.setAttribute('class',element.class);
     let innerHTML= `<img src='`+(imagePath+element.path)+`' ></img>`
     parentDIV.appendChild(tempDIV); 
  tempDIV.innerHTML=innerHTML;
    
     }
    } 






 
   




