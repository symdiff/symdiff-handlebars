var symdiffHTML = require('symdiff-html');

function symdiffHandlebars(hbsString) {
    // remove every {{}} expression
    var html = hbsString.replace(/\{\{.*?\}\}/gi, '');
    return symdiffHTML(html);
}

module.exports = symdiffHandlebars;