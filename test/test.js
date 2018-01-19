var assert = require('chai').assert;
var foo = 'bar';
var beverages = {tea: ['chai', 'matcha', 'oolong']};
describe('test jsregexp app', () => {
	describe('testing foo should be string',()=>{
		it(' foo should be string', () => {
			assert.typeOf(foo, 'string'); //?
		})
	})
	it(' foo should equal bar',()=>{
		assert.equal(foo, 'bar', 'foo equal `bar`');//?
	})
	it(' value  has a length of 3 ',()=>{
		assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
	})
	it('beverages has 3 types of tea',()=>{
		assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
	})
})


