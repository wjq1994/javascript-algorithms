class Node {
  constructor(value) {
      this.left = null;
      this.right = null;

      this.value = value;
  }

  setLeft(node) {
      this.left = node;
      return this;
  }

  setRight(node) {
      this.right = node;
      return this;
  }

  // 先放left，再放right
  traverseInOrder() {
      let traverse = [];
      if (this.left) {
          traverse = traverse.concat(this.left.traverseInOrder());
      }
      traverse.push(this.value);
      if (this.right) {
          traverse = traverse.concat(this.right.traverseInOrder());
      }
      return traverse;
  }

  toString() {
      return this.traverseInOrder().toString();
  }
}

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');
const nodeG = new Node('G');

nodeA.setLeft(nodeB).setRight(nodeC);
nodeB.setLeft(nodeD).setRight(nodeE);
nodeC.setLeft(nodeF).setRight(nodeG);

let result = []

function depthFirstSearch(node) {
  let currentNode = node;
  if (currentNode.left) {
    depthFirstSearch(currentNode.left);
  }
  if (currentNode.right) {
    depthFirstSearch(currentNode.right);
  }
  result.push(currentNode.value);
}

depthFirstSearch(nodeA)
console.log(result);

// 获取最大深度
function getMaxDepth(root) {
    if (root == null)
      return 0;
    else {
        let left = getMaxDepth(root.left);
        let right = getMaxDepth(root.right);
        return 1 + Math.max(left, right);
    }
}

console.log(getMaxDepth(nodeA));