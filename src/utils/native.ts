
let dsbridge = require('dsbridge')

function callNativeMethod(name: string, params?:any) {
    try {
        dsbridge.call(name, params);
    } catch (error) {
        console.log(error);
    }
}

function registerMethod(callback: Function) {
    try {
        dsbridge.register('inputFocus', callback);
    } catch (error) {
    }
}

export {
    callNativeMethod,
    registerMethod
}
