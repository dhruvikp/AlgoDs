function selectionSort(arr) {
    let n = arr.length;

    for(let i=0; i<n-1; i++) {
        let minIndex = i;

        for(let j=i+1; j<n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the ith element of unsorted array
        if(minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

let array = [64,34,25,12,22, 11,90];
console.log("Unsorted array:", array);

let sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray)