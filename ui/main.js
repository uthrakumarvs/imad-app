console.log('Loaded!');


//var ele=document.getElementById('title');
//ele.innerHTML='yov yo';
var img=document.getElementById('pic');

var marginLeft=0;
function moveright(){
  marginLeft=marginLeft+1;
  img.style.marginLeft= marginLeft+ 'px';
}
img.onclick = function() {
    var interval = setInterval(moveright,50);
};
