'use strict';

function copyObj(srcObj) {
    let dstObj = {}
    
    let key;
    for (key in srcObj) {
        dstObj[key] = srcObj[key];
    }
    return dstObj;
}

let const myNumbers = ['1', '6', '34'];

newMyNumbers = copyObj(myNumbers);

newMyNumbers = Object.Assign({}, myNumbers);

newMyNumbers = myNumbers.slice();

const newMyArr = [...myArr];
