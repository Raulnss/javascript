function aFunction() {
    alert("ola")
    let n1 = Number(prompt("numero"))                                                    
    let n2 = Number(prompt("numero"))  
    alert(n1+n2)                                                  
}
function bFunction() {
   // window.document.getElementsByTagName()[] pega por tag    
   // window.document.getElementsByName()[] pega por nome
    // window.document.getElementById("")  pega por id
    //  window.document.getElementsByClassName() pega por class
    //  window.document.querySelector()   coloca o nome e o id
    let n1 = window.document.getElementById("p")
    window.document.write("esta escrito "+n1.innerText)
}
function dFunction() {
    let n1 = window.document.getElementById("n1")
    let n2 = window.document.getElementById("n2")
     n1 = Number(n1.value)
     n2 = Number(n2.value)
    var resp = n1+n2
    res.innerHTML = resp
}