var numbers =[10,20,30];
function sum(numbers){
    var sum = 0;
    for (var i =0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}
console.log(sum(numbers));