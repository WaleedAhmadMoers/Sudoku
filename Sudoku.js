// Define an array with numbers 1 to 9
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Slice the original array into three parts: 'firstSlice', 'secondSlice', and 'thirdSlice'
const firstSlice = originalArray.slice(0, 3); // Elements from index 0 to 2 (3 elements)
const secondSlice = originalArray.slice(3, 6); // Elements from index 3 to 5 (3 elements)
const thirdSlice = originalArray.slice(6, 9); // Elements from index 6 to 8 (3 elements)

let tempVar; // Temporary variable for swapping array elements

// Function to modify the position of elements in a sliced array
function modifySlicedArrayElementsPosition(slicedArray) {
    tempVar = slicedArray[0];
    slicedArray[0] = slicedArray[1];
    slicedArray[1] = slicedArray[2];
    slicedArray[2] = tempVar;
    return slicedArray;
}

// Function to shuffle and print an array
function shuffleAndPrintArray(arrayToShuffle) {
    tempVar = arrayToShuffle[0];
    arrayToShuffle[0] = arrayToShuffle[1];
    arrayToShuffle[1] = arrayToShuffle[2];
    arrayToShuffle[2] = tempVar;
    return arrayToShuffle;
}

// Function to generate a Sudoku board
function getSudokuBoard() {
    for (let index = 0; index < 3; index++) {
        // Modify the position of elements in sliced arrays 'firstSlice', 'secondSlice', and 'thirdSlice'
        const modifiedFirstSlice = modifySlicedArrayElementsPosition(firstSlice);
        const modifiedSecondSlice = modifySlicedArrayElementsPosition(secondSlice);
        const modifiedThirdSlice = modifySlicedArrayElementsPosition(thirdSlice);

        // Create an array with modified slices
        const modifiedArray = [modifiedFirstSlice, modifiedSecondSlice, modifiedThirdSlice];

        // Print the shuffled array three times
        for (let indexb = 0; indexb < 3; indexb++) {
            console.log(shuffleAndPrintArray(modifiedArray).join("\t"));
        }

        console.log("\n"); // Print a new line after each set of iterations
    }
}

// Call the getSudokuBoard function to generate and print the Sudoku board
getSudokuBoard();
