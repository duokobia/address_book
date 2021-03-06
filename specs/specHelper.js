const { use, expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

use(sinonChai);

global.expect = expect;
global.sinon = sinon;

global.window = {}
global.window.localStorage = {
    /* In the browser, we store the value directly, but here we need to store the key in form of an object. Hence, the creation of data attribute */
    data: {},
    getItem(key) {
        const value = this.data[key]
        return value ? value : null
    },
    setItem(key, value) {
        this.data[key] = value
    },
    removeItem(key) {
        delete this.data[key]
    },
    clear() {
        this.data = {}
    }
}