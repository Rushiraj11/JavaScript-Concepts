

function getData(x, y, callback){  
   console.log(" The multiplication of the numbers " + x + " and " + y + " is: " + (x+y));  
    callback();  
    }  

    function showData(){  
    console.log(' This is showData() method execute after the completion of getData() method.');  
    }  
    getData(10, 60, showData);  //here we are calling getData function with showdata function as argument along with two parameters
                               //the getData() is invoked with the specified parameters, including the callback 
                               //i.e addition of two numbers is completed then the callback function will get executed.