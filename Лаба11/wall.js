let tel = document.querySelector("input[rel=phone]")

tel.oninput = function(){
    let number =this.value.replace(/[\D]/g,"");
    this.value="+";
    if (number.substr(0,1)!=7) {  this.value+="7"; }
    else this.value+=number.substr(0,1);
    if(number.length>1) {  this.value += " ("+number.substr(1,3); }
    if(number.length>4) {  this.value += ") "+number.substr(4,3); }
    if(number.length>7) {  this.value += "-"+number.substr(7,2); }
    if(number.length>9) {  this.value += "-"+number.substr(9,2); }
    if(number.length==0) {  this.value=""; }
}