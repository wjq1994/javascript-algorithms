const BinaryTreeNode = require('./dist/data-structures/tree/BinaryTreeNode.js');
const breadthFirstSearch = require('./dist/algorithms/tree/breadth-first-search/breadthFirstSearch.js');

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