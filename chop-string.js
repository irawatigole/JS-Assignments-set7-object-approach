// Write a JavaScript function to chop a string into chunks of a given length. 
// Test Data :
// console.log(stringChop('resource')); 
// return ["resource"]

// console.log(stringChop('resource',2)); 
// return [ "re", "so", "ur", "ce"] 

// console.log(stringChop('dcresource',3));
//  return ["dcr", "eso", "urc", "e"]
function stringChop(a,b){
    var object = {
        string: a,
        num:b,
        stringCut:function(){
            var w = [];
            for (var i=0; i<this.string.length; i++){
               var c = this.string.substr(i,this.num);
                i = i + this.num -1;
                w.push(c);
            }
            return w;
        }
    }
    return object.stringCut();
}
console.log(stringChop('resource',2)); 
console.log(stringChop('dcresource',3));
console.log(stringChop('resource'));