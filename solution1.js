
(function (window) {
    var johnGreeter = {};
    johnGreeter.name = ["John"];
    var speakWord = "Good Bye ";
    johnGreeter.sayHi = function () {
      console.log(speakWord + johnGreeter.name);
    }
  
    window.johnGreeter = johnGreeter;
  
  })(window);
  
  
  