var n1 = [];
var n2;
var f;
var n3 = [];
var n4 = [];
function adicionarFunction() {
    n2 = window.document.getElementById("a");
    f = Number(n2.value)
    let r=f%2
    if (r==0) {
        n3.push(n2.value);
      } else {
        n4.push(n2.value);
      }
      n1.push(n2.value);
      window.document.getElementById("a").value = ""
}
function exibirFunction() {
  n1.forEach(function (item, indice, array) {
     var resp = " ";
    resp=resp+" "+item;
    resp.innerHTML =("<li>")+resp+("</li>");
  });
  // Maçã 0
  // Banana 1
}
function parFunction() {
  resp.innerHTML = ("<li>")+n3+("</li>");
}
function inparFunction() {
  resp.innerHTML = ("<li>")+n4+("</li>");
}
function testes(params) {
        /*function parFunction() {
   /* var arrayNomes = ["João","Maria", "Paulo", "Pedro"];
arrayNomes.forEach((elemento, indice) => console.log("O item " + indice + " é " + elemento ));
/* saída:
O item 0 é João
O item 1 é Maria
O item 2 é Paulo
O item 3 é Pedro
// resp.innerHTML = n1[0]
}
function inparFunction() {
    //  n1.forEach(element => {//
        
 //  });//
   // resp.innerHTML = elemento//
       //resp.innerHTML=  n2.length//
}*/ /*  var n1 = []
    var n2 = new Array ()
    var c = 0
      n1[c] = window.document.getElementById("a").value
      c=c+1*/
      //for (let i = 0; i <= n1.length; i++) {
  //let r = n1[i]%2
  //if (r==0) {
    //let p = [];
    //p.push(n1.value)
    //resp.innerHTML = p;
  //} 
 // n1[i];
 /* n1.forEach(element => {
    let r = n1%2
    if (r==0) {
      resp.innerHTML = r;
    }
  });*/

  
//}
//}
 
      
}