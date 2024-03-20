const removeFromArray = function(array, ...removeElement) {
  
    for (let i = 0; i <= (removeElement.length - 1); i++) {
        array = array.filter(arrayElement => arrayElement !== removeElement[i]);
    }
    return array;
  };

// Do not edit below this line
module.exports = removeFromArray;
