var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}; 
  this.counter1 = 0;
  this.counter2 = 0;
  this.counter3 = 0;
};

Queue.prototype.enqueue = function(value){
  this.counter1++;
  this.counter3++; 
  this.storage[this.counter3] = value;
};

Queue.prototype.dequeue = function(){
  if(this.counter1 > 0){
    this.counter1--;
    this.counter2++;
  }
  return this.storage[this.counter2];
};

Queue.prototype.size = function(){
  return this.counter1;
};


