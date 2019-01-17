const db = require('../demo/db.js');

var sum = 0;
var k = 0;

function save_name(first_name, last_name) {
	k=0;
	name = first_name + ' ' + last_name;
	db.Users.create({
		first_name: first_name,
		last_name: last_name
	});
	return translate_to_ascii(name);
}

function translate_to_ascii(name) {
	sum = 0;
	for (var letter in name) {
		calculate_sum(name[letter].charCodeAt());
	}
	return translate_to_binary();
}

function calculate_sum(lettercode) {
	sum = sum + lettercode;
}

function translate_to_binary() {
	return calculate_consecutive_zero(sum.toString(2));
}

function calculate_consecutive_zero(binary_number) {
	var i = 0;
	for (var bit_number in binary_number) {
		if (binary_number[bit_number] == 0) {
			i++;
		} else {
			if (k <= i) {
				k = i;
			} 
			i = 0;
		}
	}
	return k;
}

module.exports = save_name;