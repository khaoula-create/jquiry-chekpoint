


function gras() {
    if (document.getElementById("texterea").style.fontWeight == "bold") {
        document.getElementById("texterea").style.fontWeight = "normal";
    }

    else {

        document.getElementById("texterea").style.fontWeight = "bold";
    }
}

function test() {

    if (document.getElementById("texterea").style.fontStyle == "italic") {
        document.getElementById("texterea").style.fontStyle = "normal"
    }
    else {
        document.getElementById("texterea").style.fontStyle = "italic"
    }
}



function underli() {
    if (document.getElementById("texterea").style.textDecoration == "underline") {
       document.getElementById("texterea").style.textDecoration="none"
    }

    else {
        document.getElementById("texterea").style.textDecoration = "underline";
    }
}
function siz(){
    document.getElementById("texterea").style.fontSize=document.getElementById("taille").value ;
}
function taill() {
    document.getElementById("texterea").style.fontFamily=document.getElementById("text").value ;
}
$(document).ready(function () {
    $("button").click(function () {
        $("p").toggele();
    });
}
);