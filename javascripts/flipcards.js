// Flipcard component
//-------------------

(function() { // IIFE (module)

  function onClick(i) {
    return function(e) {
      console.log(flipcards[i]);
      console.log('Perform here some action.');
    };
  }

  // Binding the onClick event:

  var flipcards = document.getElementsByClassName('flipcard');
  var n = flipcards.length;

  for(var i = 0; i < n; i++) {
    flipcards[i].addEventListener('click', onClick(i));
  }

})();