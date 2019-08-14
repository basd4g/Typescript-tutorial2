"use strict";
exports.__esModule = true;
var c3 = require("c3");
var chart = c3.generate({
    bindto: "#chart",
    data: {
        type: 'donut',
        columns: [
            ['いい感じ', 50],
            ['ピンとこない', 50]
        ]
    },
    donut: {
        title: 'TypeScriptの印象は？'
    }
});
setTimeout(function () {
    chart.load({
        columns: [
            ['いい感じ', 30],
            ['ピンとこない', 30],
            ['最高', 30]
        ]
    });
}, 3000);
setTimeout(function () {
    chart.unload({
        ids: '最高'
    });
}, 5000);
