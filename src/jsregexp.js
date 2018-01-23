(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $_ = require('./index');
/**
 * @namespace {object} obj
 * */
var obj = {

    /**
     *  @function
     *  @name number
     *  @param {number} num 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是一个数字
     * */
    number: function (num) {
        return /^[0-9]*$/.test(num);
    },

    /**
     *  @function
     *  @name overN
     *  @param {number} n 数值的位数
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是n位的数字
     * */

    overN: function (n, number) {
        var regx = '/^\\d{' + `${n}` + '}$/';
        return $_(regx).test(number);//?
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

    betweenM_N: function (m, n, number) {

        var regx = '/^\\d{' + `${m},${n}` + '}$/';
        return $_(regx).test(number);//?
    },

    /**
     *  @function
     *  @name at_least_N
     *  @param {number} n 数值的位数
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是至少n位的数字
     * */
    at_least_N: function (n, number) {
        var regx = '/^\\d{' + `${n},` + '}$/';//?
        return $_(regx).test(number);//?
    },


    /**
     *  @function
     *  @name _zero_or_int
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是零和非零开头的数字
     * */
    _zero_or_int: function (number) {
        var regx = '/^(0|[1-9][0-9]*)$/';//?
        return $_(regx).test(number);//?
    },

    /**
     *  @function
     *  @name zero_with_two_decimal
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是非零开头的最多带两位小数的数字
     * */
    zero_with_two_decimal: function (number) {
        var regx = '/^([1-9][0-9]*)+(.[0-9]{1,2})?$/';//?
        return $_(regx).test(number);//?
    },

    /**
     *  @function
     *  @name pos_neg_with_1_2_decimal
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是带1-2位小数的正数或负数
     * */
    pos_neg_with_1_2_decimal: function (number) {
        var regx = '/^(\\-)?\\d+(\\.\\d{1,2})?$/';//?
        return $_(regx).test(number);//?
    },

    /**
     *  @function
     *  @name pos_neg_decimal
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是正数、负数、和小数
     * */
    pos_neg_decimal: function (number) {
        var regx = '/^(\\-|\\+)?\\d+(\\.\\d+)?$/';//?
        return $_(regx).test(number);//?
    },

    /**
     *  @function
     *  @name pos_neg_2_decimal
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是有两位小数的正实数
     * */
    pos_neg_2_decimal: function (number) {
        var regx = '/^[0-9]+(.[0-9]{2})?$/';//?
        return $_(regx).test(number);//?
    },

    /**
     *  @function
     *  @name pos_1_3_decimal
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是有1~3位小数的正实数
     * */
    pos_1_3_decimal: function (number) {
        var regx = '/^[0-9]+(.[0-9]{1,3})?$/';//?
        return $_(regx).test(number);//?
    },

    /**
     *  @function
     *  @name non_zero_pos_int
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是非零的正整数
     * */
    non_zero_pos_int: function (number) {
        var regx = '/^[1-9]\\d*$/';//?
        return $_(regx).test(number);//?
    },

    /**
     *  @function
     *  @name non_zero_neg_int
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是非零的负整数
     * */
    non_zero_neg_int: function (number) {
        var regx = '/^-[1-9]\\d*$/';//?
        return $_(regx).test(number);//?
    },

    /**
     *  @function
     *  @name non_neg_int
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是非负整数
     * */
    non_neg_int: function (number) {
        var regx = '/^\\d+$/';//?
        return $_(regx).test(number);//?
    },
    /**
     *  @function
     *  @name non_pos_int
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是非正整数
     * */
    non_pos_int: function (number) {
        var regx = '/^-[1-9]\\d*|0$/';//?
        return $_(regx).test(number);//?
    },
    /**
     *  @function
     *  @name non_neg_float
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是非负浮点数
     * */
    non_neg_float: function (number) {
        var regx = '/^\\d+(\\.\\d+)?$/';//?
        return $_(regx).test(number);//?
    },
    /**
     *  @function
     *  @name non_pos_float
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是非正浮点数
     * */
    non_pos_float: function (number) {
        var regx = '/^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$/';//?
        return $_(regx).test(number);//?
    },
    /**
     *  @function
     *  @name pos_float
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是正浮点数
     * */
    pos_float: function (number) {
        var regx = '/^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$/';//?
        return $_(regx).test(number);//?
    },
    /**
     *  @function
     *  @name neg_float
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是负浮点数
     * */
    neg_float: function (number) {
        var regx = '/^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$/';//?
        return $_(regx).test(number);//?
    },
    /**
     *  @function
     *  @name float
     *  @param {number} number 需要验证的数值
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是浮点数
     * */
    float: function (number) {
        var regx = '/^(-?\\d+)(\\.\\d+)?$/';//?
        return $_(regx).test(number);//?
    },
    /**
     *  @function
     *  @name chinese_character
     *  @param {number} n 汉字的位数(n 位以上 默认 ：0)
     *  @param {string} string 需要验证的汉字字符串
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是汉字
     * */
    chinese_character: function (n = 0, string) {
        var regx = '/^[\u4e00-\u9fa5]{' + `${n}` + ',}$/';//?
        return $_(regx).test(string);//?
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
    english_numbers: function (m = 4, n = 40, string) {
        var regx = '/^[A-Za-z0-9]{' + `${m}` + ',' + `${n}` + '}$/';//?
        return $_(regx).test(string);//?
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
    all_character_M_N: function (m = 3, n = 20, string) {
        var regx = '/^.{' + `${m}` + ',' + `${n}` + '}$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name all_26_english_character
     *  @param {string} string 需要验证的英文字符串
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是由26个英文字母组成的字符串
     * */
    all_26_english_character: function (string) {
        var regx = '/^[A-Za-z]+$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name all_26_big_english_character
     *  @param {string} string 需要验证的英文字符串
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是由26个大写英文字母组成的字符串
     * */
    all_26_big_english_character: function (string) {
        var regx = '/^[A-Z]+$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name number_26_big_english_character
     *  @param {string} string 需要验证的字符串
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是由数字和26个英文字母组成的字符串
     * */
    number_26_big_english_character: function (string) {
        var regx = '/^[A-Za-z0-9]+$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name all_26_small_english_character
     *  @param {string} string 需要验证的英文字符串
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是由26个小写英文字母组成的字符串
     * */
    all_26_small_english_character: function (string) {
        var regx = '/^[a-z]+$/';//?
        return $_(regx).test(string);//?
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
    number_character_underline: function (m = 3, n = 20, string) {
        var regx = '/^\\w{' + `${m}` + ',' + `${n}` + '}$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name chinese_character_english_number_underline
     *  @param {string} string 需要验证的字符串
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是中文、英文、数字包括下划线
     * */
    chinese_character_english_number_underline: function (string) {
        var regx = '/^[\u4E00-\u9FA5A-Za-z0-9_]+$/';//?
        return $_(regx).test(string);//?
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
    chinese_character_english_number_non_underline: function (m = 3, n = 20, string) {
        var regx = '/^[\u4E00-\u9FA5A-Za-z0-9]{' + `${m}` + ',' + `${n}` + '}$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name has_special_characteer
     *  @param {string} string 需要验证的字符串
     *  @return {boolean} false 或者 true
     *  @desc 验证是否是可以输入含有^%&',;=?$\"等字符
     * */
    has_special_characteer: function (string) {
        var regx = '/[^%&\',;=?$\x22]+/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name non_negate_character
     *  @param {string} string 需要验证的字符串
     *  @return {boolean} false 或者 true
     *  @desc 禁止输入含有~的字符
     * */
    non_negate_character: function (string) {
        var regx = '[^~\x22]+/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name email
     *  @param {string} string 需要验证的邮箱字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是Email地址
     * */
    email: function (string) {
        var regx = '/^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name domain
     *  @param {string} string 需要验证的域名字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是域名
     * */
    domain: function (string) {
        var regx = '/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name internet_url
     *  @param {string} string 需要验证的互联网URl 字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是 互联网URL (包含https http)
     * */
    internet_url: function (string) {
        var regx = '/^http(s)://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&=]*)?$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name phone_number
     *  @param {string} string 需要验证的手机号 字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是 手机号码
     * */
    phone_number: function (string) {
        var regx = '/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\\d{8}$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name telephone_number
     *  @param {string} string 需要验证的 电话号码 字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是 电话号码 ("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX)
     * */
    telephone_number: function (string) {
        var regx = '/^(\\(\\d{3,4}-)|\\d{3.4}-)?\\d{7,8}$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name china_telephone_number
     *  @param {string} string 需要验证的 国内电话号码 字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是 国内电话号码(0511-4405222、021-87888822)
     * */
    china_telephone_number: function (string) {
        var regx = '/\\d{3}-\\d{8}|\\d{4}-\\d{7}/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name identification_number
     *  @param {string} string 需要验证的 身份证号码 字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是 18位身份证号码(数字、字母x结尾)
     * */
    identification_number: function (string) {
        var regx = '/^((\\d{18})|([0-9x]{18})|([0-9X]{18}))$/';//?
        return $_(regx).test(string);//?
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
    account_is_legal: function (m = 5, n = 16, string) {
        var regx = '/^[a-zA-Z][a-zA-Z0-9_]{' + `${m}` + ',' + `${n}` + '}$/';//?
        return $_(regx).test(string);//?
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
    password: function (m = 6, n = 18, string) {
        var regx = '/^[a-zA-Z]\\w{' + `${m}` + ',' + `${n}` + '}$/';//?
        return $_(regx).test(string);//?
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
    strong_password: function (m = 8, n = 10, string) {
        var regx = '/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{' + `${m}` + ',' + `${n}` + '}$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name date_time
     *  @param {string} string 需要验证的 身份证号码 字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是 日期格式 2018-01-22
     * */
    date_time: function (string) {
        var regx = '/^\\d{4}-\\d{1,2}-\\d{1,2}/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name twelve_months
     *  @param {string} string 需要验证的 月份 字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是 一年的12个月(01～09和1～12)
     * */
    twelve_months: function (string) {
        var regx = '/^(0?[1-9]|1[0-2])$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name thirty_one_days
     *  @param {string} string 需要验证的 天 字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是 一个月的31天(01～09和1～31)
     * */
    thirty_one_days: function (string) {
        var regx = '/^((0?[1-9])|((1|2)[0-9])|30|31)$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name thirty_one_days
     *  @param {string} string 需要验证的 天 字符串
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是 一个月的31天(01～09和1～31)
     * */
    thirty_one_days: function (string) {
        var regx = '/^((0?[1-9])|((1|2)[0-9])|30|31)$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name money
     *  @param {number} number 需要验证的 钱 数值
     *  @return {boolean} false 或者 true
     *  @desc   10000.00" 和 "10,000.00", 和没有 "分" 的 "10000" 和 "10,000"
     * */
    money: function (number) {
        var regx = '/^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/';//?
        return $_(regx).test(string);//?
    },

    /**
     *  @function
     *  @name xml
     *  @param {string} number 需要验证的 xml 文件名
     *  @return {boolean} false 或者 true
     *  @desc  验证是否是 xml文件
     * */
    xml: function (number) {
        var regx = '/^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\\\.[x|X][m|M][l|L]$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name chinese_character_non_number
     *  @param {string} string 需要验证的 中文字符串
     *  @return {boolean} false 或者 true
     *  @desc   中文字符的正则表达式 不检查位数
     * */
    chinese_character_non_number: function (string) {
        var regx = '/[\u4e00-\u9fa5]/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name double_character_stream
     *  @param {string} string 需要验证的 字符串
     *  @return {boolean} false 或者 true
     *  @desc  双字节字符 包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计 1
     * */
    double_character_stream: function (string) {
        var regx = '/[^\x00-\xff]/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name delete_blank_string
     *  @param {string} string 需要验证的 字符串
     *  @return {boolean} false 或者 true
     *  @desc  删除空白行
     * */
    delete_blank_string: function (string) {
        var regx = '/\\n\\s*\\r/';//?
        return _replace(string, regx);
    },
    /**
     *  @function
     *  @name delete_prefix_after_blank
     *  @param {string} string 需要验证的 字符串
     *  @return {boolean} false 或者 true
     *  @desc  (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
     * */
    delete_prefix_after_blank: function (string) {
        var regx = '/(^\\s*)|(\\s*$)/';//?
        return _replace(string, regx);
    },
    /**
     *  @function
     *  @name simple_html
     *  @param {string} string 需要验证的 HTML 字符串
     *  @return {boolean} false 或者 true
     *  @desc  简单匹配HTML字符串
     * */
    simple_html: function (string) {
        var regx = '/\\n\\s*\\r/';//?
        return _replace(string, regx);
    },
    /**
     *  @function
     *  @name qq_number
     *  @param {number} number 需要验证的 QQ号码
     *  @return {boolean} false 或者 true
     *  @desc  (腾讯QQ号从10000开始)
     * */
    qq_number: function (number) {
        var regx = '/[1-9][0-9]{4,}/';
        return $_(regx).test(number);
    },
    /**
     *  @function
     *  @name ip_address
     *  @param {string} string 需要验证的 IP 地址
     *  @return {boolean} false 或者 true
     *  @desc  IP地址 (提取IP地址时有用)
     * */
    ip_address_simple: function (string) {
        var regx = '/\\d+\\.\\d+\\.\\d+\\.\\d+/';
        return $_(regx).test(string);
    },
    /**
     *  @function
     *  @name ip_address_deep
     *  @param {string} string 需要验证的 IP 地址
     *  @return {boolean} false 或者 true
     *  @desc  IP地址 深入查询
     * */
    ip_address_deep: function (string) {
        var regx = '/((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))/';
        return $_(regx).test(string);
    },
    /**
     *  @function
     *  @name shipping_address
     *  @param {number} m 位数的开始(m 默认：5 5 位数)
     *  @param {number} n 位数的结束(n 默认：300 300 位数)
     *  @param {string} string 需要验证的收货地址字符串
     *  @return {boolean} false 或者 true
     *  @desc (收货地址，长度在m-n之间)
     * */
    shipping_address: function (m = 5, n = 300, string) {
        var regx = '/([^\x00-\xff]|[A-Za-z0-9_]){' + `${m}` + ',' + `${n}` + '}$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name name_deep
     *  @param {string} string 需要验证的用户名字符串
     *  @return {boolean} false 或者 true
     *  @desc 用户名 2-50 个字符
     * */
    name_deep: function (m = 5, n = 300, string) {
        var regx = '/^([\u4e00-\u9fa5]{2,50}|([a-zA-Z]+\s?){2,50})$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name password_deep
     *  @param {number} m 位数的开始(m 默认：4 )
     *  @param {number} n 位数的结束(n 默认：20 )
     *  @param {string} string 需要验证的密码字符串
     *  @return {boolean} false 或者 true
     *  @desc 密码 密码是4-20位，字母、数字、- 或 _
     * */
    password_deep: function (m = 4, n = 20, string) {
        var regx = '/^[a-z|A-Z|0-9|\\-|_]{' + `${m}` + ',' + `${n}` + '}$/';//?
        return $_(regx).test(string);//?
    },
    /**
     *  @function
     *  @name custom
     *  @param {RegExp|string} regexp 正则表达式 或者 正则表达式字符串
     *  @param {number|string} object 需要验证的数值或者字符串
     *  @return {boolean} false 或者 true
     *  @desc 自定义正则匹配规则
     * */
    custom: function (regexp, object) {
        if(typeof regexp === "string"){
            return $_(regexp).test(object);
        };
        return regexp.test(object);
    },
    /**
     *  @function
     *  @name replace
     *  @param {string} string 需要验证的数值或者字符串
     *  @param {RegExp|string} regexp 正则表达式 或者 正则表达式字符串
     *  @return {boolean} false 或者 true
     *  @desc 自定义正则替换规则
     * */
    replace: function (string,regexp) {
        if (typeof regexp === "string") {
            regexp = $_(regexp);
        }
        return string.replace(regexp, "");
    //    str1.replace(/(^\s*)|(\s*$)/g, "");
    }
}

function _replace(string, regexp) {
    if (typeof regexp === "string") {
        regexp = $_(regexp);
    }
    return string.replace(regexp, '');

}

module.exports = obj;
},{"./index":2}],2:[function(require,module,exports){
// translate regexp string to RegExp Object
function $_(regexpString) {
	var str = regexpString; // "/abc/g"
	var lastSlash = str.lastIndexOf("/");
	return new RegExp(str.slice(1, lastSlash), str.slice(lastSlash + 1))
}
module.exports = (function () {
	return $_;
})();
},{}],3:[function(require,module,exports){
(function (global){

	 global.jsREGEXP = require('./lib');
		module.exports = jsREGEXP;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib":4}],4:[function(require,module,exports){
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
},{"../common/functions":1}]},{},[3]);
