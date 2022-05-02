const form = document.getElementById('form')
const first = document.getElementById('first_q')
const second = document.getElementById('second_q')
const third = document.getElementById('third_q')
const answer = document.getElementById('answer')

form.addEventListener('submit', e=> {
	e.preventDefault();

	var f = first.value
	var s = second.value
	var t = third.value
	var a = answer.value

	if (f === "8") {
		document.getElementById('first_correct').innerHTML = "Correct Answer";
		document.getElementById('first_wrong').innerHTML = "";
	}
	else {
		document.getElementById('first_wrong').innerHTML = "Wrong Answer";
		document.getElementById('first_correct').innerHTML = "";
	}

	if (s === "long") {
		document.getElementById('second_correct').innerHTML = "Correct Answer";
		document.getElementById('second_wrong').innerHTML = "";
	}
	else {
		document.getElementById('second_wrong').innerHTML = "Wrong Answer";
		document.getElementById('second_correct').innerHTML = "";
	}

	if (t === "\\n") {
		document.getElementById('third_correct').innerHTML = "Correct Answer";
		document.getElementById('third_wrong').innerHTML = "";
	}
	else {
		document.getElementById('third_wrong').innerHTML = "Wrong Answer";
		document.getElementById('third_correct').innerHTML = "";
	}

	if (a === "3.75") {
		document.getElementById('problem_correct').innerHTML = "Correct Answer";
		document.getElementById('problem_wrong').innerHTML = "";
	}
	else {
		document.getElementById('problem_wrong').innerHTML = "Wrong Answer";
		document.getElementById('problem_correct').innerHTML = "";
	}
});
