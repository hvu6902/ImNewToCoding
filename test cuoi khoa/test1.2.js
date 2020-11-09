function merge(a,b) {
    let arr1 = a.split('');
    let arr2 = b.split('');
    let mergedString = [];
    let limit = Math.min(arr1.length , arr2.length);
    for (let i = 0; i < lim; i++) {
        mergedString.push (array1[i], array2[i]);
    }
    mergedString.push(array1.slice(limit), array2.slice(limit));
    return mergedString;
}
let str1 = prompt("Nhập array 1:");
let str2 = prompt('Nhập array 2:');

console.log(merge2String(str1,str2).toString())