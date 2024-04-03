function aFunction() {
    let n1 = window.document.getElementById("a")
    let n2 = window.document.getElementById("b")
      n1 = Number(a.value)
      n2 = Number(b.value)
      if (n1>n2) {
        let r = n1-n2
        re.innerHTML =("diferença = ")+ r
      } else {
        let r = n2-n1
        re.innerHTML =("diferença = ")+ r
      }
}