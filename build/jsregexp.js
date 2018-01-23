"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        var _obj;

        var $_ = require('./index');
        /**
         * @namespace {object} obj
         * */
        var obj = (_obj = {

            /**
             *  @function
             *  @name number
             *  @param {number} num 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是一个数字
             * */
            number: function number(num) {
                return (/^[0-9]*$/.test(num)
                );
            },

            /**
             *  @function
             *  @name overN
             *  @param {number} n 数值的位数
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是n位的数字
             * */

            overN: function overN(n, number) {
                var regx = '/^\\d{' + ("" + n) + '}$/';
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name betweenM_N
             *  @param {number} m 开始的数值位数
             *  @param {number} n 结束的数值位数
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是m-n位的数字
             * */

            betweenM_N: function betweenM_N(m, n, number) {

                var regx = '/^\\d{' + (m + "," + n) + '}$/';
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name at_least_N
             *  @param {number} n 数值的位数
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是至少n位的数字
             * */
            at_least_N: function at_least_N(n, number) {
                var regx = '/^\\d{' + (n + ",") + '}$/'; //?
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name _zero_or_int
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是零和非零开头的数字
             * */
            _zero_or_int: function _zero_or_int(number) {
                var regx = '/^(0|[1-9][0-9]*)$/'; //?
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name zero_with_two_decimal
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是非零开头的最多带两位小数的数字
             * */
            zero_with_two_decimal: function zero_with_two_decimal(number) {
                var regx = '/^([1-9][0-9]*)+(.[0-9]{1,2})?$/'; //?
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name pos_neg_with_1_2_decimal
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是带1-2位小数的正数或负数
             * */
            pos_neg_with_1_2_decimal: function pos_neg_with_1_2_decimal(number) {
                var regx = '/^(\\-)?\\d+(\\.\\d{1,2})?$/'; //?
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name pos_neg_decimal
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是正数、负数、和小数
             * */
            pos_neg_decimal: function pos_neg_decimal(number) {
                var regx = '/^(\\-|\\+)?\\d+(\\.\\d+)?$/'; //?
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name pos_neg_2_decimal
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是有两位小数的正实数
             * */
            pos_neg_2_decimal: function pos_neg_2_decimal(number) {
                var regx = '/^[0-9]+(.[0-9]{2})?$/'; //?
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name pos_1_3_decimal
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是有1~3位小数的正实数
             * */
            pos_1_3_decimal: function pos_1_3_decimal(number) {
                var regx = '/^[0-9]+(.[0-9]{1,3})?$/'; //?
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name non_zero_pos_int
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是非零的正整数
             * */
            non_zero_pos_int: function non_zero_pos_int(number) {
                var regx = '/^[1-9]\\d*$/'; //?
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name non_zero_neg_int
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是非零的负整数
             * */
            non_zero_neg_int: function non_zero_neg_int(number) {
                var regx = '/^-[1-9]\\d*$/'; //?
                return $_(regx).test(number); //?
            },

            /**
             *  @function
             *  @name non_neg_int
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是非负整数
             * */
            non_neg_int: function non_neg_int(number) {
                var regx = '/^\\d+$/'; //?
                return $_(regx).test(number); //?
            },
            /**
             *  @function
             *  @name non_pos_int
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是非正整数
             * */
            non_pos_int: function non_pos_int(number) {
                var regx = '/^-[1-9]\\d*|0$/'; //?
                return $_(regx).test(number); //?
            },
            /**
             *  @function
             *  @name non_neg_float
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是非负浮点数
             * */
            non_neg_float: function non_neg_float(number) {
                var regx = '/^\\d+(\\.\\d+)?$/'; //?
                return $_(regx).test(number); //?
            },
            /**
             *  @function
             *  @name non_pos_float
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是非正浮点数
             * */
            non_pos_float: function non_pos_float(number) {
                var regx = '/^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$/'; //?
                return $_(regx).test(number); //?
            },
            /**
             *  @function
             *  @name pos_float
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是正浮点数
             * */
            pos_float: function pos_float(number) {
                var regx = '/^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$/'; //?
                return $_(regx).test(number); //?
            },
            /**
             *  @function
             *  @name neg_float
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是负浮点数
             * */
            neg_float: function neg_float(number) {
                var regx = '/^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$/'; //?
                return $_(regx).test(number); //?
            },
            /**
             *  @function
             *  @name float
             *  @param {number} number 需要验证的数值
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是浮点数
             * */
            float: function float(number) {
                var regx = '/^(-?\\d+)(\\.\\d+)?$/'; //?
                return $_(regx).test(number); //?
            },
            /**
             *  @function
             *  @name chinese_character
             *  @param {number} n 汉字的位数(n 位以上 默认 ：0)
             *  @param {string} string 需要验证的汉字字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是汉字
             * */
            chinese_character: function chinese_character() {
                var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var string = arguments[1];

                var regx = "/^[\u4E00-\u9FA5]{" + ("" + n) + ',}$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name english_numbers
             *  @param {number} m 位数的开始(m 默认：4)
             *  @param {number} n 位数的结束(n 默认：40)
             *  @param {string} string 需要验证的英文和数字字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是汉字
             * */
            english_numbers: function english_numbers() {
                var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;
                var string = arguments[2];

                var regx = '/^[A-Za-z0-9]{' + ("" + m) + ',' + ("" + n) + '}$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name all_character_M_N
             *  @param {number} m 位数的开始(m 默认：3)
             *  @param {number} n 位数的结束(n 默认：20)
             *  @param {string} string 需要验证的字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是长度为 m-n 的所有字符
             * */
            all_character_M_N: function all_character_M_N() {
                var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
                var string = arguments[2];

                var regx = '/^.{' + ("" + m) + ',' + ("" + n) + '}$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name all_26_english_character
             *  @param {string} string 需要验证的英文字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是由26个英文字母组成的字符串
             * */
            all_26_english_character: function all_26_english_character(string) {
                var regx = '/^[A-Za-z]+$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name all_26_big_english_character
             *  @param {string} string 需要验证的英文字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是由26个大写英文字母组成的字符串
             * */
            all_26_big_english_character: function all_26_big_english_character(string) {
                var regx = '/^[A-Z]+$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name number_26_big_english_character
             *  @param {string} string 需要验证的字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是由数字和26个英文字母组成的字符串
             * */
            number_26_big_english_character: function number_26_big_english_character(string) {
                var regx = '/^[A-Za-z0-9]+$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name all_26_small_english_character
             *  @param {string} string 需要验证的英文字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是由26个小写英文字母组成的字符串
             * */
            all_26_small_english_character: function all_26_small_english_character(string) {
                var regx = '/^[a-z]+$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name number_character_underline
             *  @param {number} m 位数的开始(m 默认：3)
             *  @param {number} n 位数的结束(n 默认：20)
             *  @param {string} string 需要验证的字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是由数字、26个英文字母或者下划线组成的字符串
             * */
            number_character_underline: function number_character_underline() {
                var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
                var string = arguments[2];

                var regx = '/^\\w{' + ("" + m) + ',' + ("" + n) + '}$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name chinese_character_english_number_underline
             *  @param {string} string 需要验证的字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是中文、英文、数字包括下划线
             * */
            chinese_character_english_number_underline: function chinese_character_english_number_underline(string) {
                var regx = "/^[\u4E00-\u9FA5A-Za-z0-9_]+$/"; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name chinese_character_english_number_non_underline
             *  @param {number} m 位数的开始(m 默认：3)
             *  @param {number} n 位数的结束(n 默认：20)
             *  @param {string} string 需要验证的字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是中文、英文、数字但不包括下划线等符号
             * */
            chinese_character_english_number_non_underline: function chinese_character_english_number_non_underline() {
                var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
                var string = arguments[2];

                var regx = "/^[\u4E00-\u9FA5A-Za-z0-9]{" + ("" + m) + ',' + ("" + n) + '}$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name has_special_characteer
             *  @param {string} string 需要验证的字符串
             *  @return {boolean} false 或者 true
             *  @desc 验证是否是可以输入含有^%&',;=?$\"等字符
             * */
            has_special_characteer: function has_special_characteer(string) {
                var regx = '/[^%&\',;=?$\x22]+/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name non_negate_character
             *  @param {string} string 需要验证的字符串
             *  @return {boolean} false 或者 true
             *  @desc 禁止输入含有~的字符
             * */
            non_negate_character: function non_negate_character(string) {
                var regx = '[^~\x22]+/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name email
             *  @param {string} string 需要验证的邮箱字符串
             *  @return {boolean} false 或者 true
             *  @desc  验证是否是Email地址
             * */
            email: function email(string) {
                var regx = '/^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name domain
             *  @param {string} string 需要验证的域名字符串
             *  @return {boolean} false 或者 true
             *  @desc  验证是否是域名
             * */
            domain: function domain(string) {
                var regx = '/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name internet_url
             *  @param {string} string 需要验证的互联网URl 字符串
             *  @return {boolean} false 或者 true
             *  @desc  验证是否是 互联网URL (包含https http)
             * */
            internet_url: function internet_url(string) {
                var regx = '/^http(s)://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&=]*)?$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name phone_number
             *  @param {string} string 需要验证的手机号 字符串
             *  @return {boolean} false 或者 true
             *  @desc  验证是否是 手机号码
             * */
            phone_number: function phone_number(string) {
                var regx = '/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\\d{8}$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name telephone_number
             *  @param {string} string 需要验证的 电话号码 字符串
             *  @return {boolean} false 或者 true
             *  @desc  验证是否是 电话号码 ("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX)
             * */
            telephone_number: function telephone_number(string) {
                var regx = '/^(\\(\\d{3,4}-)|\\d{3.4}-)?\\d{7,8}$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name china_telephone_number
             *  @param {string} string 需要验证的 国内电话号码 字符串
             *  @return {boolean} false 或者 true
             *  @desc  验证是否是 国内电话号码(0511-4405222、021-87888822)
             * */
            china_telephone_number: function china_telephone_number(string) {
                var regx = '/\\d{3}-\\d{8}|\\d{4}-\\d{7}/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name identification_number
             *  @param {string} string 需要验证的 身份证号码 字符串
             *  @return {boolean} false 或者 true
             *  @desc  验证是否是 18位身份证号码(数字、字母x结尾)
             * */
            identification_number: function identification_number(string) {
                var regx = '/^((\\d{18})|([0-9x]{18})|([0-9X]{18}))$/'; //?
                return $_(regx).test(string); //?
            },

            /**
             *  @function
             *  @name account_is_legal
             *  @param {number} m 位数的开始(m 默认：5)
             *  @param {number} n 位数的结束(n 默认：16)
             *  @param {string} string 需要验证的字符串
             *  @return {boolean} false 或者 true
             *  @desc 帐号是否合法(字母开头，允许  m-n  字节，允许字母数字下划线)
             * */
            account_is_legal: function account_is_legal() {
                var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
                var string = arguments[2];

                var regx = '/^[a-zA-Z][a-zA-Z0-9_]{' + ("" + m) + ',' + ("" + n) + '}$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name password
             *  @param {number} m 位数的开始(m 默认：6 6位数)
             *  @param {number} n 位数的结束(n 默认：18 18位数)
             *  @param {string} string 需要验证的密码字符串
             *  @return {boolean} false 或者 true
             *  @desc 密码(以字母开头，长度在m~n之间，只能包含字母、数字和下划线)
             * */
            password: function password() {
                var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
                var string = arguments[2];

                var regx = '/^[a-zA-Z]\\w{' + ("" + m) + ',' + ("" + n) + '}$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name strong_password
             *  @param {number} m 位数的开始(m 默认：8 8位数)
             *  @param {number} n 位数的结束(n 默认：10 10位数)
             *  @param {string} string 需要验证的密码字符串
             *  @return {boolean} false 或者 true
             *  @desc 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在m-n之间)
             * */
            strong_password: function strong_password() {
                var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
                var string = arguments[2];

                var regx = '/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{' + ("" + m) + ',' + ("" + n) + '}$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name date_time
             *  @param {string} string 需要验证的 身份证号码 字符串
             *  @return {boolean} false 或者 true
             *  @desc  验证是否是 日期格式 2018-01-22
             * */
            date_time: function date_time(string) {
                var regx = '/^\\d{4}-\\d{1,2}-\\d{1,2}/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name twelve_months
             *  @param {string} string 需要验证的 月份 字符串
             *  @return {boolean} false 或者 true
             *  @desc  验证是否是 一年的12个月(01～09和1～12)
             * */
            twelve_months: function twelve_months(string) {
                var regx = '/^(0?[1-9]|1[0-2])$/'; //?
                return $_(regx).test(string); //?
            },
            /**
             *  @function
             *  @name thirty_one_days
             *  @param {string} string 需要验证的 天 字符串
             *  @return {boolean} false 或者 true
             *  @desc  验证是否是 一个月的31天(01～09和1～31)
             * */
            thirty_one_days: function thirty_one_days(string) {
                var regx = '/^((0?[1-9])|((1|2)[0-9])|30|31)$/'; //?
                return $_(regx).test(string); //?
            }
        }, _defineProperty(_obj, "thirty_one_days", function thirty_one_days(string) {
            var regx = '/^((0?[1-9])|((1|2)[0-9])|30|31)$/'; //?
            return $_(regx).test(string); //?
        }), _defineProperty(_obj, "money", function money(number) {
            var regx = '/^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/'; //?
            return $_(regx).test(string); //?
        }), _defineProperty(_obj, "xml", function xml(number) {
            var regx = '/^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\\\.[x|X][m|M][l|L]$/'; //?
            return $_(regx).test(string); //?
        }), _defineProperty(_obj, "chinese_character_non_number", function chinese_character_non_number(string) {
            var regx = "/[\u4E00-\u9FA5]/"; //?
            return $_(regx).test(string); //?
        }), _defineProperty(_obj, "double_character_stream", function double_character_stream(string) {
            var regx = '/[^\x00-\xff]/'; //?
            return $_(regx).test(string); //?
        }), _defineProperty(_obj, "delete_blank_string", function delete_blank_string(string) {
            var regx = '/\\n\\s*\\r/'; //?
            return _replace(string, regx);
        }), _defineProperty(_obj, "delete_prefix_after_blank", function delete_prefix_after_blank(string) {
            var regx = '/(^\\s*)|(\\s*$)/'; //?
            return _replace(string, regx);
        }), _defineProperty(_obj, "simple_html", function simple_html(string) {
            var regx = '/\\n\\s*\\r/'; //?
            return _replace(string, regx);
        }), _defineProperty(_obj, "qq_number", function qq_number(number) {
            var regx = '/[1-9][0-9]{4,}/';
            return $_(regx).test(number);
        }), _defineProperty(_obj, "ip_address_simple", function ip_address_simple(string) {
            var regx = '/\\d+\\.\\d+\\.\\d+\\.\\d+/';
            return $_(regx).test(string);
        }), _defineProperty(_obj, "ip_address_deep", function ip_address_deep(string) {
            var regx = '/((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))/';
            return $_(regx).test(string);
        }), _defineProperty(_obj, "shipping_address", function shipping_address() {
            var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
            var string = arguments[2];

            var regx = '/([^\x00-\xff]|[A-Za-z0-9_]){' + ("" + m) + ',' + ("" + n) + '}$/'; //?
            return $_(regx).test(string); //?
        }), _defineProperty(_obj, "name_deep", function name_deep() {
            var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
            var string = arguments[2];

            var regx = "/^([\u4E00-\u9FA5]{2,50}|([a-zA-Z]+s?){2,50})$/"; //?
            return $_(regx).test(string); //?
        }), _defineProperty(_obj, "password_deep", function password_deep() {
            var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
            var string = arguments[2];

            var regx = '/^[a-z|A-Z|0-9|\\-|_]{' + ("" + m) + ',' + ("" + n) + '}$/'; //?
            return $_(regx).test(string); //?
        }), _defineProperty(_obj, "custom", function custom(regexp, object) {
            if (typeof regexp === "string") {
                return $_(regexp).test(object);
            };
            return regexp.test(object);
        }), _defineProperty(_obj, "replace", function replace(string, regexp) {
            if (typeof regexp === "string") {
                regexp = $_(regexp);
            }
            return string.replace(regexp, "");
            //    str1.replace(/(^\s*)|(\s*$)/g, "");
        }), _obj);

        function _replace(string, regexp) {
            if (typeof regexp === "string") {
                regexp = $_(regexp);
            }
            return string.replace(regexp, '');
        }

        module.exports = obj;
    }, { "./index": 2 }], 2: [function (require, module, exports) {
        // translate regexp string to RegExp Object
        function $_(regexpString) {
            var str = regexpString; // "/abc/g"
            var lastSlash = str.lastIndexOf("/");
            return new RegExp(str.slice(1, lastSlash), str.slice(lastSlash + 1));
        }
        module.exports = function () {
            return $_;
        }();
    }, {}], 3: [function (require, module, exports) {
        (function (global) {

            global.jsREGEXP = require('./lib');
            module.exports = jsREGEXP;
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "./lib": 4 }], 4: [function (require, module, exports) {
        var $F = require('../common/functions');
        function extend(target, source) {
            if (source) {
                for (var key in source) {
                    var val = source[key];
                    if (typeof val !== "undefined") {
                        target[key] = val;
                    }
                }
            }
            return target;
        }

        var REGEXP = extend({}, $F);
        // console.log(REGEXP);
        module.exports = REGEXP;
    }, { "../common/functions": 1 }] }, {}, [3]);