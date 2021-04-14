const BubbleSort = require('../dist/algorithms/sorting/bubble-sort/BubbleSort');

let arr = [1, 3, 2, 4, 2];

let bubbleSort = new BubbleSort({
    visitingCallback: (data) => {
        console.log(data);
    }
});

console.log(bubbleSort.sort(arr));