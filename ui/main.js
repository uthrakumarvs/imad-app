console.log('Loaded!');
var ele=document.getElementById('title');
ele.innerHTML='yov yo';
var img=document.getElementById('pic');
var moveright = function(){
  moveLeft=moveLeft+10;
  img.style.marginLeft= marginLeft+ px;
};
img.onclick = function() {
    var interval = setInterval(moveright,100);
};
