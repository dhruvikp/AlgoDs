function countingSort(arr) {

    if(arr.length === 0) return arr;

    // Step 1: Find maximum value in the array
    const maxVal = Math.max(...arr);


    // Step 2: Create fequency/count array
    const count = new Array(maxVal + 1).fill(0);

    // Step 3: Count each number in the input array
    arr.forEach(num => count[num]++);

    //Step 4: Tranform count arrray to positional array 
    for(let i=1; i<count.length; i++) {
        count[i] += count[i-1];
    }

    // Step 5: Populate new output result array
    const output = new Array(arr.length);

    for(let i=arr.length-1; i>=0; i--) {
        const num = arr[i];
        output[count[num]-1] = num;
        count[num]--; // Decrement the count
    }
    return output;
}


const arr = [12,11,13,5,6,7];
console.log("Original Array:", arr);
const output = countingSort(arr);
console.log("Sorted Array:", output);

