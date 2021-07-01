function clicar(){
	var val1 = document.getElementById('valor1').value; // valor1.value;
	var val2 = document.getElementById('valor2').value; // valor2.value;
	var res = similar(val1, val2);

	result.innerHTML = `${res}`;
}

function similar(val1,val2) {
	var equivalency = 0;
	var minLength = (val1.length > val2.length) ? val2.length : val1.length;
	var maxLength = (val1.length < val2.length) ? val2.length : val1.length;

	for(var i = 0; i < minLength; i++) {
		if(val1[i] == val2[i]) { equivalency++; }
	}

	var weight = equivalency / maxLength;

	return (weight * 100) + "%";
}

//alert(similar("test","tes"));
// 75% alert(similar("test","test"));
// 100% alert(similar("test","testt"));
// 80% alert(similar("test","tess"));
// 75%