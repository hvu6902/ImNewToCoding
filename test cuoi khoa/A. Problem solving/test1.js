
let inputNumber = Number(prompt('Nhập 1 số chẵn > 4 và < 20'))
let N = Number(prompt('Nhập 1 số bé hơn số vừa nhập'))
    function findOppositeNumber (N, inputNumber){
        let oppositeNumber = 0
        if (inputNumber < 4 || inputNumber >20){
            alert('Vui lòng nhập lại số thỏa mãn yêu cầu')
        }
        if (N < inputNumber/2 || inputNumber/2 !== 0){
            oppositeNumber = N - inputNumber/2
        }
        else {
            alert('Số ban đầu không phải là số chẵn')
        }
        if (N > inputNumber/2 || inputNumber/2 !== 0){
            oppositeNumber = N + inputNumber/2
        }
        else{
            alert('Số ban đầu không phải số chẵn')
        }
        return oppositeNumber
    }
    console.log(`Số đối diện số bạn vừa nhập là: ${findOppositeNumber(N, inputNumber)}`);
// if (N < 4 || N > 20 || N/2 !==0) {
//     alert("Nhập lại 1 số thỏa mãn")
// }
// let M = Number(prompt('Nhập 1 số bé hơn số vừa nhập'))
// if (M > N || M < 0){
//     alert('Nhập lại 1 số thỏa mãn')
// }

// if (M > N/2) {
//     console.log(`Vị trí của số đối diện là: ${M - (N/2)}`);
    
// }
// if (M < N/2) {
//     console.log(`Vị trí của số đối diện là: ${M + (N/2)}`);
// }