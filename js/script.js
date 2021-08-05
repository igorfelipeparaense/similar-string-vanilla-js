var btn = document.getElementById('btn');

const comparar = () => {
	var n1 = document.getElementById('name1').value; // valor1.value;
	var n2 = document.getElementById('name2').value; // valor2.value;
	var divErroN1 = document.getElementById('errorName1');
	var divErroN2 = document.getElementById('errorName2');
	var res = similar(n1, n2);

	if (n1 != "" && n2 != "") {
		document.getElementById('name1').value = "";
		document.getElementById('name2').value = "";
		result.textContent = `${res}`;
		btn.textContent = "Comparar Novamente";
		divErroN1.textContent = "";
		divErroN2.textContent = "";
	} else {
		divErroN1.textContent = "campo obrigatório*";
		divErroN2.textContent = "campo obrigatório*";
	}
};

btn.addEventListener('click', comparar);

function similar(n1,n2) {
	var equivalency = 0;
	var minLength = (n1.length > n2.length) ? n2.length : n1.length;
	var maxLength = (n1.length < n2.length) ? n2.length : n1.length;

	for(var i = 0; i < minLength; i++) {
		if(n1[i] == n2[i]) { equivalency++; }
	}

	var weight = equivalency / maxLength;

	return (weight * 100).toFixed(1) + "% de igualdade!";
}