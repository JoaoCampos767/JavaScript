function tabuada(){
    var num = document.getElementById('txtnum');
    var res = document.getElementById('res');
    var tab = '';
    var calc = Number(num.value);

    if(num.value.length == 0){
        res.innerHTML = 'Digite um valor!';
    } else {       
        for(i = 1; i <= 10; i++){
            tab += calc +" x "+ i +" = "+ calc * i +"<br />";
        }
        res.innerHTML = tab;
    }
}