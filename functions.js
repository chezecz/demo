const db = require('db.js');

var sum = 0;
var k = 0;

function save_name(first_name, last_name) {
	name = first_name + ' ' + last_name;
	translate_to_ascii(name);
	return db.Users.create({
		first_name: first_name,
		last_name: last_name
	});
}

function translate_to_ascii(name) {
	sum = 0;
	for (var letter in name) {
		calculate_sum(letter);
	}
}

function calculate_sum(letter) {
	sum = sum + letter;
}

function translate_to_binary(sum) {

}

function calculate_consecutive_zero(binary_number) {
	for (var bit_number in binary_number) {
		if (bit_number == 0) {
			k++;
		}
	}
}