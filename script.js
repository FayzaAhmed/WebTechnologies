function insert(num){
    var myString = document.getElementById("result").value;
    var lastChar = myString[myString.length - 1];
    if (myString.length < 30) {
     if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
      document.getElementById("result").value = myString + num;
     }else if(num != lastChar){
      document.getElementById("result").value = myString.replace(lastChar, num);
     }
    }
}
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    if(x)
    {
        document.getElementById("result").value = y
    }
}
function clean(){
    document.getElementById("result").value = '';
}
function back(){
    var exp = document.getElementById("result").value;
    document.getElementById("result").value = exp.substring(0,exp.length - 1);
}