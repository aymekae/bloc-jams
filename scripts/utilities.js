var forEach = function(array, callback) {
// forEach has two arguments, the second of which is a function (known as a callback)
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i); // array[i] refers to the element value while i refers to the element index
        }
};
