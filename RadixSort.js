function countingSort(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

// STEP 1: create count or frq array
    for(let i=0; i<n; i++) {
        const index = Math.floor(arr[i]/exp)%10;
        count[index]++;
    }

    // STEP 2: create position array
    for(let i=1; i<10; i++) {
        count[i] += count[i-1];
    }

    //  Step 3: Build output array
    for(let i=n-1; i>=0; i--) {
        const index = Math.floor(arr[i]/exp)%10;
        output[count[index]-1] = arr[i];
        count[index]--;
    }

    // Copy output array to original arr[]
    for(let i=0; i<n; i++) {
        arr[i] = output[i];
    }
}

function getMax(arr) {
    let max = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i]> max) {
            max = arr[i];
        }
    }
    return max;
}

function radixSort(arr) {
    const max = getMax(arr);

    for(let exp =1; Math.floor(max/exp)>0; exp*=10) {
        countingSort(arr,exp);
    }
}

const array = [170,45,75, 90, 802,24,2,66];
radixSort(array);
console.log("Sorted Array:", array);