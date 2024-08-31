function binarySearch(arr, left, right, target) {
    while(left <= right) {
        const mid = Math.floor(left + (right-left)/2);
        if(arr[mid] === target) {
            return mid;
        }

        if(arr[mid]<target) {
            left = mid+1;
        }else {
            right = mid-1;
        }
    }
    return -1;
}


function expenentialSearch(arr, target) {
    const n = arr.length;

    if(arr[0] === target) {
        return 0;
    }

    // find range where target might be
    let i=1;
    while((i<n && arr[i] <= target)) {
        i*=2;
    }

    return binarySearch(arr, Math.floor(i/2), Math.min(i, n-1), target);
}


const arr = [1,3,5,7,9,11,13];
const target = 9;

const index = expenentialSearch(arr, target);
if(index === -1) {
    console.log('Element not found')
} else {
    console.log('Element found')
}
