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
  //var result;
  var collection = this.children;
  
  var subroutine = function(obj){
    console.log('obj',obj)
    var flag = false;
    
    if(obj.value === target){
      return true;
    }

    if(obj.children.length){
      for (var i = 0; i < obj.children.length; i++) {
        console.log(obj.children[i])
        if(subroutine(obj.children[i])){
          return true;
        }
      }
    }
    return flag;
  }
  // while(collection){
  //   console.log('yo')
  //   // for (var i = 0; i < collection.length; i++) {
  //   //   if(collection[i].value === target){
  //   //     return true
  //   //   }
  //   //   else if(collection[i].children){
  //   //     console.log('yo')
  //   //   }
  //   // };
  // }
  return subroutine(this);
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
