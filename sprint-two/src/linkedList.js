var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value){ 

    if (this.head !== null && this.head !== this.tail) {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    };

    if(this.head !== null && this.head === this.tail){
      this.head.next = Node(value);
      this.tail = this.head.next;
    }

   
    if(this.head === null && this.tail === null) {
      this.head = Node(value);
      this.tail = this.head
    };

    
  };

  list.removeHead = function(){
    var previousHeadValue = this.head.value
    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = this.head.next
    }
    console.log('previousHeadValue', previousHeadValue)
    return previousHeadValue
  };

  list.contains = function(target){
    
    var result = false;
    var node = this.head; 

    while(node){
      if(node.value === target){
        return true;
      }
        node = node.next;      
    }

    return result;
    
  };

  return list;
};
 
var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// var ll = LinkedList();
// ll.addToTail(1);
// ll.addToTail(2);
// ll.addToTail(3);
// ll.removeHead()
// console.log(ll);

/*
 * Complexity: What is the time complexity of the above functions?
  CONSTANT, EXCEPT FOR CONTAINS, WHICH IS LINEAR DUE TO THE WHILE LOOP.
 */
