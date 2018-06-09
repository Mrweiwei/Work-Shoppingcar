$('#dc').click(function(){
			localStorage.removeItem('userID');
		})

var userid=localStorage.getItem('userID');
console.log(userid);
$('#us').html(userid);
