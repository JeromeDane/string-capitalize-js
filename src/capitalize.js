// Implementing code found code as a modular function 
// rather monkey patching String
// 
// Source: http://codereview.stackexchange.com/questions/77614/capitalize-the-first-character-of-all-words-even-when-following-a

module.exports = function(source) {
	if(typeof(source) !== 'string') {
		throw new Error("parameter must be a string");
	}
	return source.toLowerCase().replace(/\b\w/g, function(m) {
		return m.toUpperCase();
	});
};