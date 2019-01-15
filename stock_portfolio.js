function totalPortfolioValue(a,b){
    var object = {
        names:a,
        quantity:b,
        totalStockPrice:function(){
            var match = [];
            var arr = this.quantity.join().split(',');  //converted 2nd input array to single dimension array
            var sum=0;
             for (var i=0; i<arr.length; i+=2){      
                var matchFound = false;   
                 for (var j=0; j<this.names.length; j+=2){   
                    if(arr[i] === this.names[j]) {          
                    match.push(arr[i],arr[i+1]*this.names[j+1])        // pushing comapny name and stock value product
                     matchFound = true;                             
                    } 
                }                             
                 if (matchFound == false && typeof arr[i]=='string') {   
                    match.push(arr[i],'company does not exist'); 
                }    
            }
                     for (var k=0;k<match.length;k++){    // loop for pushing total
                      if(typeof match[k]=='number'){
                        sum = sum + match[k]
                }
            }
                   match.push('total',sum);
                   var obj={};
                   for (var l=0;l<match.length;l++){    // converting array to object
                          obj[match[l]] = match[l+1];
                          l = l+1;
                   }
                   return obj;
                 }
        }
        return object.totalStockPrice();
    }
    console.log(totalPortfolioValue(['YHOO', 34.4, 'GOOG', 724.03, 'AMZN', 651.23, 'AAPL', 120.44], [['AAPL', 100], ['YHOO', 200]]))
    console.log(totalPortfolioValue(['ABC', 10, 'XYZ', 200, 'BBB', 5],[['XYZ', 20], ['HOPE', 10]]));


    




    



