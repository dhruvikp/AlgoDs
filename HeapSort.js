
function heapify(arr, n, i) {
    largest = i;
    const left = 2*i + 1;
    const right = 2*i +2;


    // Check if left child is larger than current largest/root
    if(left<n && arr[left] > arr[largest]) {
        largest = left;    
    }

    // check if right child is larger than the current largest
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if(largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap position

        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    const n = arr.length;

    // Building a max heap
    for(let i = Math.floor(n/2)-1; i>=0; i--) {
        heapify(arr, n, i);
    }


    // One by one extract elements from heap
    for (let i= n-1; i>0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // call heapify on the reduced heap
        heapify(arr, i, 0);
    }
    return arr;
}

const arr = [12,11,13,5,6,7];
console.log("Original Array:", arr);
heapSort(arr);
console.log("Sorted Array:", arr);

