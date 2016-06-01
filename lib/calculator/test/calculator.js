'use strict';

const assert = require('assert');
const calculator = require('./../calculator');

describe('#add', () => {
	it('assert result to be a number', done => {
		const result = calculator.add(1, 1);
		assert.equal(typeof result, "number");
		done();
	})

	it('assert 1 + 1 to be equal 2', done => {
		const result = calculator.add(1, 1);
		assert.equal(result, 2);
		done();
	});
});