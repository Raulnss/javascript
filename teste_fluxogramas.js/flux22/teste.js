function aFunction() {
    var n1 = window.document.getElementById("a")
    var n2 = window.document.getElementById("b")
      n1 = Number(a.value)
      n2 = Number(b.value)
      var r = (n1+n2)/2
      if (r>=7) {
        re.innerHTML =("passol")
      } else if (r<=4) {
        re.innerHTML =("reprovol")
      } else {
        re.innerHTML =("regular")
      }
    }