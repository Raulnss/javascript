function aFunction() {
    var a = 0
    var b = 1
    var resp=" "
    for (let i = 0; i <= 39; i++) {
       var n1 = a+b
       a=b
       b=n1
       window.document.write(n1+" ;") 
    }
}