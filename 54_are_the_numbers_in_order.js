// Super simple en fait

function inAscOrder(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i+1]) { 
      return false;
    }    
}
return true; 
}

// Mais j'avais fait ça, pour explorer la fonction every

function inAscOrder(arr) {
  let s = arr.join(", ");
  let a = [];
  let result;
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i+1]) {
        a.push(true);
    } else if (arr[i] > arr[i+1]) {
        a.push(false);
    }
  }
  
  if (a.every(item => item === true)) {
    return 'The list of numbers "' + s + '" is in ascending order';
  } else if (a.every(item => item === false)) {
    return 'The list of numbers "' + s + '" is in DESCENDING order';
  } else {
    return 'The list of numbers "' + s + '" is not in ascending order';
  } 
}


// This is it ! :-)
