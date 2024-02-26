function makeid() {

    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!/%&()=-_+#';
    var charactersLength = characters.length;
    var length =  Number(document.getElementById("felt2").value);
	if(isNum(length)){
		for ( var i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength)); 
		}
		document.getElementById("felt").value = result;
	}else{
		length = 20;
		 for ( var i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength)); 
		}
		document.getElementById("felt").value = result;
	}
    console.log(result)
    return true;
}
function isNum(val){
  return !isNaN(val)
}
document.getElementById('knap').addEventListener('click', makeid);