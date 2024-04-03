function aFunction() {
    var n1 = window.document.getElementById("a")
    var ope = window.document.getElementById("op")
    var n2 = window.document.getElementById("b")
      n1 = Number(a.value)
      ope = (op.value)
      n2 = Number(b.value)
      if (ope=="+") {
        let r = n1+n2
        re.innerHTML =("soma =  ")+" "+r
      } else if (ope=="-") {
        let r = n1-n2
        re.innerHTML =("subtração = ")+" "+ r
      } else if (ope=="*") {
        let r = n1*n2
        re.innerHTML =("multiplicação = ")+" "+r
      } else if (ope=="/") {
        let r = n1/n2
        re.innerHTML =("divisão = ")+" "+r
      } else if (ope=="%") {
        let r = n1%n2
        re.innerHTML =("resto de divisão = ")+" "+r
      } else {
        re.innerHTML =("deu ruim")
      }
    }
function bFunction() {
    t.innerHTML=("DESOBEDIENTE! eu disse para não passar o mouse aqui ")
    document.location.href = "C:\escola\progamação\nao_execute.exe";
}
function cFunction() {
    t.innerHTML=("NÃO PASSE O MOUSE AQUI!!!!!!obrigado")
}