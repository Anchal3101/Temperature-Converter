let cel = document.getElementById('cel');
let fa = document.getElementById('fah');

cel.addEventListener("input",function(){
let c = this.value;
let a = (c * 9/5) + 32;
if(!Number.isInteger(a)){
 a = a.toFixed(3);
}

fa.value = a ;

});


fa.addEventListener("input",function(){
    let c = this.value;
    let a = (c-32)*5/9 ;
    if(!Number.isInteger(a)){
 a = a.toFixed(3);
}
    cel.value = a ;
    
    });

