// Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

// Test Data : 
// 1. numStringrange('a', "z", 2);
//     return ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]


function numStringRange(a,b,c){
    var object = {
        min: a,
        max: b,
        range: c,
        findRange:function(){
            if (typeof this.min == 'number'){
                var result = [];
                for (var i=this.min; i<=this.max; i++){
                    result.push(i);
                    i = i + this.range -1 ;
                }
                return result;
            } else {
                var e = [];
               var d = 'abcdefghijklmnopqrstuvwxyz'.split('');
                for (var j=0; j<d.length; j++){
                    e.push(d[j]);
                    j = j + this.range -1;
                }
                return e;
            }
        }
    }
    return object.findRange();
}
console.log(numStringRange(1,10,2));
console.log(numStringRange('a','z',2));
