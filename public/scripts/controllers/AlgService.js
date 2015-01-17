seedApp.service('algorithm', function() {
  this.test = function() {
    console.log('foo')
  } 
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length == 3) {
       win.alert(msgs.join("\n"));
       msgs = [];
     }
   };
 }]);
