function SelectionSort(originalArray) {
  const array = [...originalArray];

  // 默认将第一个当作最小的，一直循环
  for(let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    // 剩下的每个元素和第一个比，找出最小的索引
    for (let j = i + 1; j < array.length; j++ ) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    // 找到实际最小索引，将实际最小索引和默认索引互换
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}

console.log(SelectionSort([1, 3, 5, 2]));