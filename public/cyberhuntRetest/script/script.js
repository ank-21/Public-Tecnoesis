document.onkeydown = KeyCheck;
function KeyCheck() {
    var KeyID = event.keyCode;
    
    if((KeyID == 123) || (KeyID == 116)){
        return false;
    }
    //alert(KeyID)
}
document.body.addEventListener('keydown', event => {
    if (event.ctrlKey && 'cvxspwuazr'.indexOf(event.key) !== -1) {
      event.preventDefault()
    }
  })
/*start of index html */

function skipButton(){
    console.log("hello");
    document.getElementsByClassName("star-wars")[0].style.display = "none";
    document.getElementsByClassName("fade")[0].style.display = "none";
    document.getElementById("skip-button").style.display = "none";
    document.getElementsByClassName("rules")[0].style.display = "inline";
    //document.getElementsByClassName("initialDetails")[0].style.display = "inline";
}
function rules(){
  console.log("hello");
  document.getElementsByClassName("star-wars")[0].style.display = "none";
  document.getElementsByClassName("fade")[0].style.display = "none";
  document.getElementById("skip-button").style.display = "none";
  document.getElementsByClassName("rules")[0].style.display = "none";
  document.getElementsByClassName("initialDetails")[0].style.display = "inline";
}

/* end of index html*/

console.log(screen.width);
console.log(screen.availWidth);
console.log(window.innerHeight);
/*start of luckydraw html*/

/* end of luckydraw html*/
/* start of yoda html*/

var aText = new Array(
    "Up next, Ahead of you are some paths unknown", 
    "You will see three diffetrent paths which will",
    "lead you to three different journey",
    "One of them will lead you to a shortcut",
    "One will lead you through a longer journey",
    "While one will provide a little assistance.","",
    "Choose Your path Wisely","",
    "May the force be with you"
    );
    var iSpeed = 50; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }else{
        console.log("hi");
        document.getElementById("proceed-button").style.display = "flex";
      }
     } else {
      setTimeout("typewriter()", iSpeed);
      
     }
    }
    
    function proceedButton(){
      let url=window.location.href;
		let urlArr=url.split('?');
      window.location.href="luckydraw.html?"+urlArr[1];
    }

function skipButton1(){
  document.getElementById("removedText").style.display = "flex";
  document.getElementById("proceed-button").style.display = "flex";
  document.getElementById("typedtext").style.display = "none";
  document.getElementById("skip-button").style.display = "none";

}

/* end of yoda html*/

/* trying */


/* trying ends here */
history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };