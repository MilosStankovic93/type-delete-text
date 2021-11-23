const words = ["World", "There!", "Hello"]
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");

	let loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('text').innerHTML += word.shift();
		} 
        else {
			deletingEffect();
			return;
		};
		timer = setTimeout(loopTyping, 200);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	
	let loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('text').innerHTML = word.join("");
		}
        else {
			if (words.length > (i + 1)) {
				i++;
			} 
			else {
				i = 0;
			};
			typingEffect();
			return;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

typingEffect();