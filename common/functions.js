var $_ = require('./index');
function number(num){
	return /^[0-9]*$/.test(num);
}
//n位的数字：^\d{n}$
function overN(n,number){
	var regx ='/^\\d{'+`${n}`+'}$/';
	return $_(regx).test(number);//?
}
// m-n位的数字
function betweenM_N(m,n,number) {
// ^\d{m,n}$
	var regx ='/^\\d{'+`${m},${n}`+'}$/';
	return $_(regx).test(number);//?
}
// 至少n位的数字
function at_least_N(n,number) {
	var regx ='/^\\d{'+`${n},`+'}$/';//?
	return $_(regx).test(number);//?
}
// 零和非零开头的数字
function _zero_or_int() {
	var regx ='/^(0|[1-9][0-9]*)$/';//?
	return $_(regx).test(number);//?
}
//非零开头的最多带两位小数的数字
function zero_two_decimal() {
	var regx ='/^([1-9][0-9]*)+(.[0-9]{1,2})?$/';//?
	return $_(regx).test(number);//?
}
// 带1-2位小数的正数或负数
module.exports = {number,overN,betweenM_N};