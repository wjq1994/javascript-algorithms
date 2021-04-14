function bubbleSort(arr) {
  let swap = false;
  // 循环几次
  for(let i = 1; i < arr.length - 1; i++) {
    swap = false;
    // 循环哪几个数组比较
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // Register the swap.
        swap = true;
      }
    }
    if (!swap) {
      return arr;
    }
  }

  return arr;
}

console.log(bubbleSort([3, 1, 5, 2, 4]));