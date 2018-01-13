// translate regexp string to RegExp Object
function $_(regexpString) {
	var str = regexpString; // "/abc/g"
	var lastSlash = str.lastIndexOf("/");
	return new RegExp(str.slice(1, lastSlash), str.slice(lastSlash + 1))
}
module.exports = (function () {
	return $_;
})();