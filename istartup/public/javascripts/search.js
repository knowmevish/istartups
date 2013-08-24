$(document).ready(function() {
	var company_name = "";
	

	$('.search').on('click',function(e) {
		e.preventDefault();
		company_name = $('.orgname').val();
		//alert(company_name);
		//check if company name is blank
		if(company_name=="") {

		}
		else {
			//send ajax requests to get results
			$.ajax({
				type:'GET',
				url:'/getcompany',
				data: {company:company_name}
				success: function(response) {
					console.log("response:",response);
				}
			})

		}
	});
	

});