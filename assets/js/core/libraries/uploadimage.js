$(function(){
$('#mimg').hide();
var fileDiv = document.getElementById("upload");
var fileInput = document.getElementById("upload-image");
console.log(fileInput);
fileInput.addEventListener("change",function(e){
  files = this.files
  showThumbnail(files)
},false)

fileDiv.addEventListener("click",function(e){
  $(fileInput).show().focus().click().hide();
  e.preventDefault();
},false)

fileDiv.addEventListener("dragenter",function(e){
  e.stopPropagation();
  e.preventDefault();
},false);

fileDiv.addEventListener("dragover",function(e){
  e.stopPropagation();
  e.preventDefault();
},false);

fileDiv.addEventListener("drop",function(e){
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  showThumbnail(files)
},false);

function showThumbnail(files){
$('#dimg').hide();
$('#mimg').show();
  for(var i=0;i<files.length;i++){
    var file = files[i]
    var imageType = /image.*/
    if(!file.type.match(imageType)){
      console.log("Not an Image");
      continue;
    }

    var image = document.createElement("img");
    // image.classList.add("")
    var thumbnail = document.getElementById("thumbnail");

    var children = thumbnail.childNodes;
    for(var i = 0; i < children.length; i++){
        thumbnail.removeChild(children[i]);
    }
    image.file = file;
    thumbnail.appendChild(image)

    var reader = new FileReader()
    reader.onload = (function(aImg){
      return function(e){
        aImg.src = e.target.result;
      };
    }(image))
    var ret = reader.readAsDataURL(file);
    var canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    image.onload= function(){
      ctx.drawImage(image,100,100)
    }
  }
}
          });