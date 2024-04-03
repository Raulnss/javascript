function aFunction() {
    var n1 = window.document.getElementById("a")
    var n2 = window.document.getElementById("b")
      n1 = (a.value)
      n2 = Number(b.value)
      if (n1=="masculino") {
        let r = (72.7*n2)-58
        re.innerHTML =("peso ideal =  ")+" "+r
      } else if (n1=="femea") {
        let r = (62.1*n2)-44.7
        re.innerHTML =("peso ideal = ")+" "+ r
      } else {
        re.innerHTML =("deu ruim")
      }
    }