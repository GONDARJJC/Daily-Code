// 格式化银行卡号
const bankcardNumFormat = (num) => {
    let reg = /(\d{4})(?=\d)/g
    if (typeof num === 'string') {
        return num.replace(reg, '$1 ')
    } else if (typeof num === 'number') {
        return String(num).replace(reg, '$1 ')
    }
}

// 上面的正则主要用到两个知识点
// 一个是前置约束-存在（？=），表示前面是数字才匹配
// 一个是$1代表匹配到的内容，然后加上了一个空格，这就是要格式化的符号

// 反格式化
const unFormatBankcardNum = (str) => {
    let reg = / /g
    return Number(str.replace(reg, ''))
}