var n = 0;
var n2;
function clic() {
    var n1 = window.document.getElementById("a");
      n1=Number(a.value);
        window.document.getElementById("a"). value=""
        n = n1+n;
        if (n1==0) {
            rep.innerHTML="soma="+n;
        }
}
function nam() {
    n2 = window.document.getElementById("a");
      n2=Number(a.value);
    do {
        n = n2+n;
        window.document.getElementById("a").value="" 
    } while (n2!=0);
    rep.innerHTML="soma="+n;
}