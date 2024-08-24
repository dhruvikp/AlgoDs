
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);


function inOrderTraversal(node) {
    if(node === null) return;

    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

function preOrderTraversal(node) {
    if(node === null) return;
    console.log(node.value);        // process the node value
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
}

function postOrderTraversal(node) {
    if(node === null) return;
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
}




console.log("In order traversal:");
inOrderTraversal(root);

console.log("Pre-order traversal:");
preOrderTraversal(root);

console.log("Post-order traversal:");
postOrderTraversal(root);
