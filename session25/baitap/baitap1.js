
function minSearch(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min=arr[i]
        }
    }
    document.write(`so be nhat la: ${min}`);
}
let array = [4, 2, 5, 7, 1, 8, 9,];
minSearch(array);