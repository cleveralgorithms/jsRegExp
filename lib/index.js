var $_ = require('../common');
var _ = require('lodash');
var $F = require('../common/functions');
function extend(target,source) {
    if (source) {
        for (var key in source) {
            var val = source[key];
            if (typeof val!=="undefined") {
                target[key] = val;
            }
        }
    }
    return target;
}

const REGEXP = extend({},$F);
// console.log(REGEXP);
module.exports = REGEXP;