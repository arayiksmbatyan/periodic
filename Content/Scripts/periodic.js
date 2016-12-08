$(function() {

var $strong = $('#strong'), 
$rt = $('#rt'), 
$rb = $('#rb'), 
$tt = $('#tt'), 
myVarRt,
myVarRb,
myVarStrong,
myVarTt;

$('td a').hover(
function() {

    $strong.html(String.EMPTY);
    $rt.html(String.EMPTY);
    $rb.html(String.EMPTY);
    $tt.html(String.EMPTY);

var $rtText = $(this).find('rt').attr('textcontent'),
    $rbText = $(this).find('rb').attr('textcontent'),
    $strongText = $(this).find('strong').attr('textcontent'),
    $ttText = $(this).find('tt').attr('textcontent'),
    i = j = x = y = 0;

    myVarRt = setInterval(setik1, 300);

    function setik1() {

        if($rtText.length == x) {
            clearInterval(myVarRt);
            myVarRb = setInterval(setik2, 300);
        }else {
            $rt[0].innerHTML  += $rtText[x];
        }
        x++;
    };

    function setik2() {

        if($rbText.length == y) {
            clearInterval(myVarRb);
            myVarStrong = setInterval(setik3, 300);
        }else {
            $rb[0].innerHTML  += $rbText[y];
        }
        y++;
    };

    function setik3() {

        if($strongText.length == j) {
            clearInterval(myVarStrong);
            myVarTt = setInterval(setik4, 300);
        }else {            
            $strong[0].innerHTML  += $strongText[j];
        }
        j++;
    };

    function setik4() {

        if($ttText.length == i) {
            clearInterval(myVarTt);
        }else {                
            $tt[0].innerHTML  += $ttText[i];
        }
        i++;
    };
},

function() {
    $strong.html(String.EMPTY);
    $rt.html(String.EMPTY);
    $rb.html(String.EMPTY);
    $tt.html(String.EMPTY);
    clearInterval(myVarStrong);
    clearInterval(myVarRt);
    clearInterval(myVarRb);
    clearInterval(myVarTt);
});
});