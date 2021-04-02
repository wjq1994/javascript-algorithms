const BinaryTreeNode = require('../dist/data-structures/tree/BinaryTreeNode.js');
const {depthFirstSearch} = require('../dist/algorithms/tree/depth-first-search/depthFirstSearch.js');
const Queue = require('../dist/data-structures/queue/Queue.js');

const nodeA = new BinaryTreeNode('A');
const nodeB = new BinaryTreeNode('B');
const nodeC = new BinaryTreeNode('C');
const nodeD = new BinaryTreeNode('D');
const nodeE = new BinaryTreeNode('E');
const nodeF = new BinaryTreeNode('F');
const nodeG = new BinaryTreeNode('G');

nodeA.setLeft(nodeB).setRight(nodeC);
nodeB.setLeft(nodeD).setRight(nodeE);
nodeC.setLeft(nodeF).setRight(nodeG);

console.log(nodeA.toString());

const enterNodeQueue = new Queue();
const leaveNodeQueue = new Queue();

depthFirstSearch(nodeA, {
    // allowTraversal: (node, child) => {
    //     // Forbid traversing left half of the tree.
    //     return child.value !== 'B';
    //   },
      enterNode: enterNodeCallback,
      leaveNode: leaveNodeCallback,
})

function enterNodeCallback(node) {
    enterNodeQueue.enqueue(node.value);
    console.log("enterNodeCallback", enterNodeQueue.toString());
}

function leaveNodeCallback(node) {
    leaveNodeQueue.enqueue(node.value);
    console.log("leaveNodeCallback", leaveNodeQueue.toString());
}