$(function(){
		$('.wrapper').navbarscroll();
		})

		$(document).ready(function(){
		$.ajax({
    		type:"get",
    		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
    		dataType:'jsonp',
    		success:function(data){
    		console.log(data);
    		for (var i=0;i<data.length;i++) {
    			$('#goodul').html($('#goodul').html()+'<li goods='+data[i].goodsID+'><img id="goodsimg" src='+data[i].goodsListImg
    		+'><p>'+data[i].goodsName.slice(0,10) +'</p></li>');	
    			}   				
    				$('#goodul>li').on("click",function(){
	 					var goodsid= this.getAttribute('goods');
	 					window.location.href='detail.html#'+goodsid ;
 				    	});
    				}
    		   });
    	$('#Search').click(function(){
    		$.ajax({
    			type:"get",
    			url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
    			dataType:'jsonp',
    			data:{
    				pageCode:0,
    				linenumber:10,
    				selectText:encodeURI($('#search').val())    				
    			},
    			success:function(data){
    				$('#goodul').html(null);
    				for (var i=0;i<data.length;i++) {
    					$('#goodul').html($('#goodul').html()+'<li goods='+data[i].goodsID+'><img id="goodsimg" src='+data[i].goodsListImg
    						+'><p>'+data[i].goodsName.slice(0,10) +'</p></li>');	
    						}   				
    						$('#goodul>li').on("click",function(){
	 							var goodsid= this.getAttribute('goods');
	 							window.location.href='detail.html#'+goodsid ;
 				    			});
    				}
    		});
    	})

		})
		window.onload = function() {
   			var mySwiper = $('.banner').swiper({ 
    			loop: true,
    			autoplay:5000,
    			pagination: '.swiper-pagination'
  				});
  			var Swiper = $('.case').swiper({ 
    			loop: true,
    			autoplay:2000,
  			})   		
		}