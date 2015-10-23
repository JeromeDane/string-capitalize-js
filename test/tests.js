var capitalize = require('../src/capitalize');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe("capitalize", function() {
	it('should throw an error if parameter is not a string', function() {
		expect(function() { capitalize(false); }).to.throw(Error);
	});
	it('should capitalize the first letter of each word in a string', function() {
		assert.strictEqual(capitalize("hello you **beautiful** world!"), "Hello You **Beautiful** World!");
	});
});