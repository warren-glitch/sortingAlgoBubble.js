// Create an empty array to hold the numbers
let numbers = [];

// Function to populate the array with 10 numbers entered by the user
function populateArray() {
    for (let i = 0; i < 10; i++) {
        let number = parseInt(prompt(`Enter number ${i + 1} of 10:`));
        numbers.push(number);  // Push the entered number to the array
    }
}

// Bubble Sort algorithm
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Outer loop for passing through the array multiple times
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`); // Log the comparison

            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they're in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;

                console.log(`Swapped: ${arr[j]} and ${arr[j + 1]}`);  // Log the swap
            }
        }

        // If no two elements were swapped, the array is already sorted
        if (!swapped) {
            break;
        }

        // Log the array state after each pass through the inner loop
        console.log(`Array after pass ${i + 1}: ${arr}`);
    }
}

// Main execution
populateArray();  // Populate the array with user input
console.log("Original array:", numbers);  // Log the original array
bubbleSort(numbers);  // Call the bubbleSort function
console.log("Sorted array:", numbers);  // Log the final sorted array
