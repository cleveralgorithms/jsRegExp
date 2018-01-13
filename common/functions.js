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
module.exports = {number,overN,betweenM_N};