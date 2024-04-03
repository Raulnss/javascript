function aFunction() {
    let n1 = window.document.getElementById("a")
      n1 = Number(a.value)
      if (n1==80) {
        re.innerHTML =("tudo certo")
      } else if (n1>80) {
        let r = (n1-80)*5
        re.innerHTML =("multado em + ")+ r
      } else if (n1>40&&n1<79) {
        re.innerHTML =("abaixo do limite")
      } else {
        re.innerHTML =("multado")
      }
    }