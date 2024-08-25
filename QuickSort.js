
function quickSort(arr) {
    if(arr.length <=1) {
        return arr;
    }


    // Select pivot element
    const pivot = arr[arr.length -1];
    const left = [];
    const right = [];

    // Partition into two halves: elements less than pivot and elements greater than pivot

    for (let i=0; i<arr.length-1; i++) {
        if(arr[i]<pivot) {
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let array = [64,34,25,12,22, 11,90];
console.log("Unsorted array:", array);

let sortedArray = quickSort(array);
console.log("Sorted array:", sortedArray);
