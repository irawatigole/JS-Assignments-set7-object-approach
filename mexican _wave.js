// Task
//  	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  	1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
function wave(a){
  var object = {
    string:a,
    mexicanWave:function(){
      var c = [];
      this.string = this.string.charAt(0).toLowerCase()+ this.string.slice(1);
      var b = this.string.split('');
        for (var i=0; i<b.length; i++){
          var d = `${b.slice(0,i).join('')}${b[i].toUpperCase()}${b.slice(i+1).join('')}`
          c.push(d);
        }
        return c;
      }
    }
    return object.mexicanWave();
  }
console.log(wave('hello'))
console.log(wave('Gap'))


