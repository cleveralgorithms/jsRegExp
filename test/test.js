var assert = require('chai').assert;

var jsregexp = require('../index');
var beverages = {tea: ['chai', 'matcha', 'oolong']};
describe('test jsregexp app', () => {
	describe("test jsregexp.password_deep()",()=>{
		it(' it should be false', () => {
			assert.equal(jsregexp.password_deep({string:123456}), false); //?
		})
	})
    describe("test jsregexp.custom()",()=>{
        it(' it should be true', () => {
            assert.equal(jsregexp.custom(/^\d{5}$/,123456), false); //?
        })
    })
    describe("test jsregexp.replace()",()=>{
        it(' it should be non blank in pre or after', () => {
        	var result = jsregexp.replace("   a   b  c  ",/(^\s*)|(\s*$)/g)
        	console.log(result+'string');
            assert.isNotEmpty(result); //?
        })
    })

});


