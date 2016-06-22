var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var count2 = 0;
  var count3 = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    count++
    count3++

    storage[count3] = value
  };

  someInstance.dequeue = function(){
   
    if(count > 0){
      count--;
      count2++;
    }

    return storage[count2];
    
  };

  someInstance.size = function(){
    return count
  };

  return someInstance;
};

