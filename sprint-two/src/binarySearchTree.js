var BinarySearchTree = function(value){
// Note: changed the spec file to allow the use of pseudoclassical object instantiation
	this.value = value;
	this.left = null;
	this.right = null;
};

BinarySearchTree.prototype.insert = function(element){
//var leaf = new BinarySearchTree(element) ok
//if the leaf.value < this.value, go to the left
//if the leaf.value > this.value, go to the right 
var leaf = new BinarySearchTree(element);

// if(leaf.value <  this.value){
// 	this.left = leaf;
// };

// if(leaf.value > this.value){
// 	this.right = leaf;
// };	

function insertion(currentNode, leaf){
	
	
	if(currentNode.left === null && currentNode.right === null){ // case for node that has both left/right empty
		//console.log('sup', leaf.value)
		if (leaf.value < currentNode.value){
			currentNode.left = leaf;
			return 
		} else if (leaf.value > currentNode.value) {
			currentNode.right = leaf;
			return 
		}
	}

	if(currentNode.left === null || currentNode.right === null){ //case for when either left or right has something
		//console.log('sup', leaf.value)
		if(currentNode.left === null){ //left empty, right occupied
			if(leaf.value < currentNode.value){
				currentNode.left = leaf
				return;
			} else {
				console.log('call right')
				insertion(currentNode.right, leaf);
			}
		}
		else if(currentNode.right === null){ //right empty, left occupied
			if(leaf.value > currentNode.value){
				currentNode.right = leaf
				return;
			} else {
				//console.log('call left')
				insertion(currentNode.left, leaf);
			}
		}
	}


	if(currentNode.left !== null && currentNode.right !== null){ //case for both left and right occupied
		if(leaf.value < currentNode.value){
			insertion(currentNode.left, leaf);
		}else {
			insertion(currentNode.right, leaf)
		}
	}

}	

insertion(this,leaf) // initial call to the insertion subrouting with the "head" node as the argument

};


 
BinarySearchTree.prototype.contains = function(target){
var tree = this;

function location(tree, target){
	var flag = false;
	//console.log(target);

	if(tree.value === target){ //base case, if the value of the tree is equal to the target
		//console.log('sup')
		return true;
	}; 

	if(tree.left === null && tree.right === null){ //termination case, has reached the end leaf and didn't find the target
		return false;
	};

	if(target < tree.value && tree.left !== null){
		return location(tree.left, target);
	}

	if(target > tree.value && tree.right !==null){
		return location(tree.right, target)
	}

	return flag;
}

return location(tree,target)

	
	
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
var tree = this; 

function traversal(node, callback){

	if(node.left === null && node.right === null){
		callback(node.value);
		return;
	};

	if(node.left !== null){
		callback(node.value)
		return traversal(node.left, callback)
		
	}

	if(node.right !== null){
		callback(node.value)
		return traversal(node.right, callback)
	}

	
}

traversal(tree,callback)

};

function print(element){
	console.log(element)
}

print('hello')


//print('hello')

var tree = new BinarySearchTree(4);
 console.log(tree)
tree.insert(3);
tree.insert(1); 
tree.insert(2);
tree.insert(5);
tree.insert(6);
tree.insert(7);
console.log(tree)
tree.depthFirstLog(print)


/*
 * Complexity: What is the time complexity of the above functions?
 */
