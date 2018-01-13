var $_ = require('../common');
var _ = require('lodash');
var $F = require('../common/functions')
const REGEXP = {
	// 数字
	number: $F.number,
	// n位的数字
	overN:$F.overN,
	betweenM_N:$F.betweenM_N
}
module.exports = REGEXP;