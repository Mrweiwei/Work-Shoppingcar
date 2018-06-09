	var txt1=document.getElementById("text"); 
	var pw2=document.getElementById('password2')
    var txt=document.getElementById('text2');
	var pw=document.getElementById('password');
	var b = document.getElementById('b');
	//点击注册按钮后先判断面是否相等再发出Ajax请求
	 $(function(){
	 	$('#b').click(function(){
		if(pw.value!=pw2.value){
				alert('两次密码不一致，请重新输入');
	 			pw.value='';
	 			pw2.value='';
	 	}
		else{
		 $.ajax({
		 	type:'get',
		 	data:{
		 		status:'register',
		 		userID:document.getElementById('text2').value,
		 		password:document.getElementById('password').value	
		 	},
		 	url:'http://datainfo.duapp.com/shopdata/userinfo.php',
		 	dataType:'json',
		 	success:function(data){
		 		if(data==0){alert('用户名重名,请重新输入');txt.value='';}	 
		 		else if(data==1){alert('恭喜'+txt1.value+'您的账号是：'+txt.value+'密码是: '+pw.value);window.location.href='login.html';}
		 		},
		 	error:function(){alert('error');} 	
		 	})
		  };
	 	});
	});	