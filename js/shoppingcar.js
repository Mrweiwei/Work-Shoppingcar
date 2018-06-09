var sum=0;
//		判断浏览器支不支持本地存储
//		if(window.localStorage){
//							alert("浏览支持localStorage") 
//			}					
//		else
//			{ 
//				alert("浏览暂不支持localStorage") 
//			} 
		var userid = localStorage.getItem('userID');
//			function plus(a){
//				
//				var t=$(a).next().val();
//				t++;
//				$(a).next().val(t);
//				
//			}					
//			
//			function min(b){
//				var t=$(b).prev().val();
//				if(t>0){t--;$(b).prev().val(t);}
//				else{t=0;$(b).prev().val(t);}
//		
//			}
		$(function(){
			$.ajax({
				type:'get',
				url:'http://datainfo.duapp.com/shopdata/getCar.php',
				dataType:'jsonp',
				data:{
					userID:userid,
				},
				success:function(data){
					console.log(data);
					for(var i=0;i<data.length;i++){
						console.log(data[i]);
						$('#shop').html($('#shop').html() + 
						`<tr class="tr" >
						<td>
							<input type="checkbox"style="width:20px;height:20px" goodsid="`+data[i].goodsID+`" price="`+data[i].price+`" num="`+data[i].number+`"/>
						</td>
						<td>
							<img style="height:150px;width:150px" src="`+data[i].goodsListImg+`" />
						</td>
						<td><p>`+data[i].goodsName.slice(0,10)+"..."+`</p>
							<p style="color:red;" price="`+data[i].price+`" class="price">
							¥`+data[i].price+`</p>
							<p>							
							<input class="text_box" type="text" value="`+data[i].number+`" />												
						</td>
							</tr>`)
					}
					
					$('input[type=checkbox]').click(function(){
							var price=$(this).attr('price');
							var num=$(this).attr('num');
							if(this.checked)
								{
									
									sum+=price*num;
									$('#all').html(sum);
								}						
						    else{
									sum-=price*num;
									$('#all').html(sum);
						    }
					})
					
//					var sa=document.getElementById('sa');
//					$('#sa').click(function(){
//						if(sa.checked)
//						{
//							$('input[type=checkbox]').prop('checked','true')
//						}
//						else{
//							$('input[type=checkbox]').prop('checked','false')
//						}
//					})
				}				
			})		
		})

		var count=0;
	function add(){
		count++;
		var b=document.getElementById('button');
		var u=document.getElementById("ul");
		var f=document.getElementById("f");
		if(count%2==0)
		{			
			b.innerHTML="管理";
			u.innerHTML='';
		}else{	
			var l=document.createElement('li');
			l.innerHTML="♋快速处理"+"<button id='delete' style='color:red'>"+"删除"+"</button>"+"<button>"+"移入收藏夹"+"</button>";
			u.appendChild(l);
			$('#delete').click(function(){
				for(var i=0;i<$($("#shop :checkbox")).length;i++)
				{
				if($("#shop :checkbox")[i].checked)
					{
						var goodsid=$("#shop :checkbox")[i].getAttribute('goodsid');
//						console.log(goodsid);
//						console.log($("#shop :checkbox")[i]);
						$($("#shop :checkbox")[i]).parents('.tr').remove();
						if($($("#shop :checkbox")).length==0)
						{
							$('#all').html(0);
						}
						$.ajax({
							type:"get",
							url:"http://datainfo.duapp.com/shopdata/updatecar.php",
							data:{
							userID:userid,
							goodsID:goodsid,
							number:0,
								 },
						})
					}
				}
			})
			b.innerHTML="完成";
			    }		
		}	