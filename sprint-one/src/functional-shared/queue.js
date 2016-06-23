var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  
    someInstance.count = 0;
    someInstance.count2 = 0;
    someInstance.count3 = 0;
    someInstance.storage = {};
    // someInstance.enqueue = queueMethods.enqueue;
    // someInstance.dequeue = queueMethods.dequeue;
    // someInstance.size = queueMethods.size;
    _.extend(someInstance,queueMethods);
  
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.count++;
  this.count3++;
  this.storage[this.count3] = value;
};

queueMethods.dequeue = function(){
  if (this.count > 0) {
    this.count--;
    this.count2++;
  };
  return this.storage[this.count2]
};

queueMethods.size = function(){
  return this.count;
};