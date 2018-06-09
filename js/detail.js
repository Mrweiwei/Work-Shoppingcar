var goodsId=window.location.hash.slice(1);
		console.log(goodsId);
		$.ajax({
			type:"get",
			url:" http://datainfo.duapp.com/shopdata/getGoods.php",
			dataType:"jsonp",
			data:{goodsID:goodsId},
			success:function(data){
				$('p').html(data[0].goodsName+"<p style='font-size: 15px;'>"+data[0].detail+"</p>")
				$('#price').html('￥'+data[0].price);
				$('#count').html('('+data[0].discount+'折)'+data[0].buynumber+'人购买');
				$('#p').html($('#p').html()+
				'<div '+'><img src='+data[0].goodsListImg
    		+'></div>');
    	}
		});
		var userid=localStorage.getItem('userID');
		console.log(userid);
		$('#add').click(function(){
			if(localStorage.getItem('userID')==''){
				alert('请先登录！');
			window.location.href="login.html";
			}
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/updatecar.php",
				data:{
					userID:userid,
					goodsID:goodsId,
					number:$('#text').val(),
				},
				success:function(data){
					if(data==0){
						alert('请输入商品数量!');
						$('#text').css("background-color","red");
					}
					else{window.location.href="shoppingcar.html"}
				}
			});
		})