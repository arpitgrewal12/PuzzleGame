//JAVASCRIPT file for the puzzle game
//Created by:Arpit Kaur
//SFU ID:301367803
//Date:7 June 2020

var table = document.getElementsByTagName("table")[0];
var cells = table.getElementsByTagName("td");
var blackColor = [];
for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
        cell.onclick = function () {
            var cellIndex = this.cellIndex;
            var rowIndex = this.parentNode.rowIndex;

             if (document.getElementById("tableId").rows[rowIndex].cells[cellIndex].style.backgroundColor == 'black') {
                document.getElementById("tableId").rows[rowIndex].cells[cellIndex].style.backgroundColor = 'white';
             }
             else {
                document.getElementById("tableId").rows[rowIndex].cells[cellIndex].style.backgroundColor = 'black';
             }
        }

}
function toggleInstructions(){
  alert("Your aim in the puzzle is to colour the whole grid in to black and white squares. Beside each row of the grid are listed the lengths of the runs of black squares on that row. Above each column are listed the lengths of the runs of black squares in that column.The numbers tell you the runs of black squares in that row/column.So, if you see 10 1, that tells you that there will be a run of exactly 10 black squares, followed by one or more white square, followed by a single black square. There may be more white squares before/after this sequence.");
}

function restartButton(){
  alert("You have restarted the game.")
  var tag=document.getElementById("tableId");
    for(var r=1,n=tag.rows.length;r<n;r++){
      for(var c=1,m=tag.rows[r].cells.length;c<m;c++){
        tag.rows[r].cells[c].style.backgroundColor = 'white';
      }
    }
}

function reveal(src){
   alert("The solution is revealed on the right side of the page. To hide the solution, you will have to reload the page.")
   var img=document.createElement("img");
   img.src=src;
   document.body.appendChild(img);
}

function checkGame(){
   var a;
   var i;
   var j;
  for (i=1; (i < cells.length)&& (j=1) && (j=2) && (j=3)
       && (j=4) && (j=5) && (j=6)
        &&(j=15) && (j=16) && (j=17)
        && (j=20) && (j=21) && (j=22)
         && (j=25) && (j=26) && (j=30)
          && (j=31) && (j=36) && (j=37)
          && (j=40) && (j=41) && (j=42)
           && (j=43) && (j=45) && (j=46)
            && (j=47) && (j=50) && (j=51)
             && (j=52) && (j=55) && (j=56)
              && (j=57) && (j=58) && (j=61)
               && (j=62) && (j=63) && (j=64)
                && (j=65) && (j=66)&&(j=70)
                 && (j=71) && (j=72) && (j=78)
                 && (j=79) && (j=85) && (j=86)
                 && (j=87) && (j=88) && (j=93)
                  && (j=101) && (j=108) && (j=109)
                   && (j=115) && (j=116) && (j=123)
                   && (j=124) && (j=130) && (j=131)
                    && (j=136) && (j=137) && (j=138)
                     && (j=139) && (j=145) && (j=146)
                      && (j=152) && (j=153) && (j=154)
                       && (j=158) && (j=159) && (j=160)
                        && (j=161) && (j=162) && (j=163)
                         && (j=166) && (j=167)&& (j=94)
                         && (j=168) && (j=169) && (j=172)
                          && (j=173) && (j=174) && (j=177)
                           && (j=178) && (j=179) && (j=181)
                            && (j=182) && (j=183) && (j=184)
                             && (j=187) && (j=188)&&(j=193)
                              && (j=194) && (j=198) && (j=199)
                              && (j=202) && (j=203) && (j=204)
                              && (j=207) && (j=208)&& (j=100)
                              && (j=209) && (j=218) && (j=219)
                               && (j=220) && (j=221) && (j=222)
                                && (j=223) ; i++){
        if(cells[j].style.backgroundColor == 'black'){
            a=true;
           }
      }

      if(a==true){
          alert("Congratulations!!!You win");
         }
        else {
          alert("Sorry. Try again");
        }
}
