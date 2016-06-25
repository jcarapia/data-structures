var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};


  // your code here
  //newTree.children = [];  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  return this.children.push(Tree(value))
};

treeMethods.contains = function(target){
  return target
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
