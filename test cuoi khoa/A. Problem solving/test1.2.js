let str1 = prompt("Nhập chuỗi thứ 1:");
let str2 = prompt('Nhập chuỗi thứ 2:');
function merge2String(a,b) {
    let arr1 = a.split('');
    let arr2 = b.split('');
    let mergedString = [];
    let lim = Math.min(arr1.length , arr2.length);
    for (let i = 0; i < lim; i++) {
        mergedString.push (arr1[i], arr2[i]);
    }
    mergedString.push(arr1.slice(lim), arr2.slice(lim));
    return mergedString;
}
console.log(merge2String(str1,str2))