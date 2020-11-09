
let M = Number(prompt('Nhập 1 số'))
let N = Number(prompt('Nhập 1 số < 4 và > 20'))
while (N < 4 || N > 20 || N < M) {
    N = Number(prompt("Nhập lại 1 số > 4 và < 20"))
}
if (M > N/2) {
    console.log(`Vị trí của số đối diện là: ${M - (N/2)}`);
}
if (M < N/2) {
    console.log(`Vị trí của số đối diện là: ${M + (N/2)}`);
}