var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0
  var count2 = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    count++

    storage[count] = value
  };

  someInstance.dequeue = function(){
    console.log(Object.keys(storage)[0] )
      //count2++
    if(count > 0){
      //return storage[count--]
      count--;
    }
    // if(count === 0){
    //   console.log(storage[count+1])
    // return storage[count2-1];
    // } 
    // console.log(storage[count2])
    //return storage[count2-1];
    for(var key in storage){
      if(key === count2){
        count2++
        return storage[key];
      }
    }


  };

  someInstance.size = function(){
    return count
  };

  return someInstance;
};

