// Write a JavaScript function to generate an array between two integers of 1 step length. 

// Test Data :
// 1. rangeBetween(4, 7); 
// // returns [4, 5, 6, 7]

// 2. rangeBetween(-4, 7);
// returns [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]


function rangeBetween(a,b){
    var object = {
        min: a,
        max: b,
        findRange:function(){
            var numbers =[];
            for (var i=this.min; i<=this.max; i++){
                numbers.push(i);
            }
            return numbers;
        }
       
    }
    return object.findRange();
}
console.log(rangeBetween(4,7));
console.log(rangeBetween(-4,7));
console.log(rangeBetween(0,0));