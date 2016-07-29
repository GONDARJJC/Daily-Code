function dealSubmit(){
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	var email = document.getElementById('email').value;
	var mobile = document.getElementById('mobile').value;
	var text = document.getElementById('text').value;
	$.ajax({
		url: 'index.php',
		type: 'post',
		data: {
			name: name,
	        password:password,
	        email:email,
	        mobile:mobile,
	        text:text
	    },
		error: function(){  
	        
	    },  
  		success: function(response){//如果调用php成功 
		    if(response == 1){
		      document.getElementById('tipmessage').style.display = 'block'; 
		      setTimeout("document.getElementById('tipmessage').style.display = 'none'",2000); 
		    }
		}
	});
}