function aFunction() {
    let n1 = window.document.getElementById("a")
    let n2 = window.document.getElementById("b")
    let n3 = window.document.getElementById("c")
    let n4 = window.document.getElementById("d")
      n1 = Number(a.value)
      n2 = Number(b.value)
      n3 = Number(c.value)
      n4 = Number(d.value)
      let r = (n1+n2+n3+n4)/4
      if (r>=7) {
        re.innerHTML =("aprovado ")
      } else {
        re.innerHTML =("reprovado ")
      }
}