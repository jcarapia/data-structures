var LimitedArray = function(limit){
  var storage = []

  var limitedArray = {};
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value){
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

//======================================================================//

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  
    for (var j = 0; j < bucket.length; j++) {
      if(bucket[j][0] === k){
        bucket[j][1] = v 
        return
      }
    };
    bucket.push([k,v])
    this._storage.set(i,bucket)
    console.dir(this)

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i)
  //console.log(bucket);
  for (var j = 0; j < bucket.length; j++) {
    if(bucket[j][0] === k){
      return bucket[j][1]
    }
  };
  return null
};

HashTable.prototype.remove = function(k){
   var i = getIndexBelowMaxForKey(k, this._limit);
   var bucket = this._storage.get(i);
   //console.log(bucket)
  // bucket.each(function(){
  //   if (storage[i][0] === k) {
  //     storage[i] = null;
  //   };
  // })
for (var j = 0; j < bucket.length; j++) {
    if(bucket[j][0] === k){
      console.log('bucket',bucket)
      bucket[j] = null;
      this._storage.set(i, bucket )
    }
  };

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
//var hash = new HashTable();
//console.log('hash',hash);
// hash.insert('one', 'two');
// console.log('hash2',hash);
// var hash = new HashTable();
// console.log(hash)
// hash._storage.set(0,1);
// console.log(hash._storage.get(0))
// console.log(hash._storage)



















