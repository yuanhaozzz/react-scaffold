export function isIpad() {
    const ua = window.navigator.userAgent.toLowerCase();
    let isIOS = (ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1) && 'ontouchend' in document;
    return isIOS;
}

export function isWechat() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('micromessenger') !== -1 ? true : false;
}

/**
 * 时间过滤器
 * @param {number} time 
 * @param {string} fmt 
 */
export let format = (time:number, fmt:string) => {
    if (!time) return '';
    fmt = fmt || 'yyyy-MM-dd hh:mm';
    let date = new Date(time);

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
    }

    let dt: any = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };

    for (let key in dt) {
        if (new RegExp(`(${key})`).test(fmt)) {
            let str = dt[key] + '';
            fmt = fmt.replace(RegExp.$1,
                (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length)
            );
        }
    }
    return fmt;
};