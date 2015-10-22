// implementing code found on http://codereview.stackexchange.com/questions/77614/capitalize-the-first-character-of-all-words-even-when-following-a

module.exports = function(source) {
	return source.toLowerCase().replace(/\b\w/g, function(m) {
		return m.toUpperCase();
	});
};