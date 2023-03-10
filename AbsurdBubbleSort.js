const reader = require("readline-sync");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.

  let answer = reader.question(`Is ${el1} greater than ${el2}? y/n \n`); 
    switch (answer.toLowerCase()) {
        case 'y':
            return callback(true);
        default:
            return callback(false);
    }
}




function swapped(bool){
    return bool;
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    const bool = askIfGreaterThan(arr[i], arr[i+1], swapped )

    if (bool) {
        const el1 = arr[i];
        const el2 = arr[i+1];

        arr[i] = el2;
        arr[i+1] = el1;
        madeAnySwaps = true;
    }

    innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps){
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
        sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
  // Start the first outer loop off as `madeAnySwaps` = true.
}
absurdBubbleSort([3, 2, 1,4,6,3,2,5], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
});

