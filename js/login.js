var txt=document.getElementById('text');
	var pw=document.getElementById('password');
	var b = document.getElementById('b');
	 $('#b').click(function(){
		 $.ajax({
		 	type:'get',
		 	data:{
		 		status:'login',
		 		userID:document.getElementById('text').value,
		 		password:document.getElementById('password').value	
		 	},
		 	url:'http://datainfo.duapp.com/shopdata/userinfo.php',
		 	dataType:'json',
		 	success:function(data){
		 		if(data==0){alert('密码错误,请重新输入');pw.value='';}
		 		else if(data==2){alert('用户名与密码不符，请重新输入');txt.value='';pw.value='';}		 
		 		else{
		 			localStorage.setItem('login','true');
					localStorage.setItem('userID',$('#text').val());
		 			window.location.href='shoppinglist.html';
		 			alert('登录成功，您的用户名为：'+txt.value+',密码为：'+pw.value);}
		 		},
		 	error:function(){alert('error');} 	
		 		 })
		 })
	$('#a').click(function(){
		
	 	window.location.href='register.html';
	})