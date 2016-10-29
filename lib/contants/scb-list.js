'use strict';

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScbList = undefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _updateTree = require('../modules/core/update-tree');

var ScbList = new _map2.default(); // all scrollbars list


var originSet = ScbList.set.bind(ScbList);
var originDelete = ScbList.delete.bind(ScbList);

ScbList.update = function () {
    ScbList.forEach(function (scb) {
        _updateTree.updateTree.call(scb);
    });
};

// patch #set,#delete with #update method
ScbList.delete = function () {
    var res = originDelete.apply(undefined, arguments);
    ScbList.update();

    return res;
};

ScbList.set = function () {
    var res = originSet.apply(undefined, arguments);
    ScbList.update();

    return res;
};

exports.ScbList = ScbList;