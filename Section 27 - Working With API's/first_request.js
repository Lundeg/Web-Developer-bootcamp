var request = require('request');
request('http://dummy.restapiexample.com/api/v1/employees',function(error,response,body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData[0]["employee_name"]);
    }
});