const {a} = require('@ma-efremoff-test-1/a');
const {b} = require('@ma-efremoff-test-1/b');

function c() {
    return a() + b() + 'c1';
}

module.exports = {
    c,
};
