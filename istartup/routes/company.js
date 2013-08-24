var http = require("http");

exports.search = function(req, res){

  //res.send("respond with a resource");
  var company_name = "";
  var api_key = "m93wyhhc3ps6pnmjczaza9bm";
  
  company_name = req.query.company;
  var crunch_url = "http://api.crunchbase.com/v/1/company/" + company_name + ".js?api_key=" + api_key;

  if(company_name=="") {
  	//send request error
  }
  else {
  	var request = http.get(crunch_url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event  
    console.log(crunch_url);  
	    var buffer = "", 
	        data,
	        route;

	    response.on("data", function (chunk) {
	        buffer += chunk;
	    }); 

	    response.on("end", function (err) {
	        // finished transferring data
	        // dump the raw data
	        console.log(buffer);
	        console.log("\n");
	        //data = JSON.parse(buffer);
	        //route = data.routes[0];

	        // extract the distance and time
	        //console.log("Walking Distance: " + route.legs[0].distance.text);
	        //console.log("Time: " + route.legs[0].duration.text);
	    }); 
		}); 
  }
};