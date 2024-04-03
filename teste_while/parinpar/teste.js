var n1;
var d;
var p = 0;
var i = 1;
function nada() {
    do {
        n1 = Number(prompt("numero: "));
        d=n1%2;
        if (d==0) {
            p=n1+p;
        } else {
            i=n1*i;
        }
    } while (n1!=0);
    exib.innerHTML= "soma dos pares= "+p+" <br><br>multiplicação dos impar= "+i;
}   