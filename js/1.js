 // top-tab
 $(".top a:eq(0)").hover(function(){
       $('#diqu').show()
       $('.top a:eq(0)').css({background:'white'})
       $('#diqu li').css({background:'white'})
   },
   function(){
       $('#diqu').hide()
       $('.top a:eq(0)').css({background:'#f5f5f5'})
   }
   );
  $("#diqu").hover(function(){
       $('#diqu').show()
       $('.top a:eq(0)').css({background:'white'})
   },
   function(){
       $('#diqu').hide()
       $('.top a:eq(0)').css({background:'#f5f5f5'})
   }
   );
   $("#diqu li").mouseenter(function(){
       $(this).css({background:'#f5f5f5'}).siblings().css({background:'white'})
   })
   $(".top2 a:eq(1)").hover(function(){
       $('#wodi').show()
       $('.top2 a:eq(1)').css({background:'white'})
       $('#wodi li').css({background:'white'})
   },
   function(){
       $('#wodi').hide()
       $('.top2 a:eq(1)').css({background:'#f5f5f5'})
   }
   );
  $("#wodi").hover(function(){
       $('#wodi').show()
       $('.top2 a:eq(1)').css({background:'white'})
   },
   function(){
       $('#wodi').hide()
       $('.top2 a:eq(1)').css({background:'#f5f5f5'})
   }
   );
   $("#wodi li").mouseenter(function(){
       $(this).css({background:'#f5f5f5'}).siblings().css({background:'white'})
   })

   $(".top2 a:eq(3)").hover(function(){
       $('#shouchang').show()
       $('.top2 a:eq(3)').css({background:'white'})
       $('#shouchang li').css({background:'white'})
   },
   function(){
       $('#shouchang').hide()
       $('.top2 a:eq(3)').css({background:'#f5f5f5'})
   }
   );
  $("#shouchang").hover(function(){
       $('#shouchang').show()
       $('.top2 a:eq(3)').css({background:'white'})
   },
   function(){
       $('#shouchang').hide()
       $('.top2 a:eq(3)').css({background:'#f5f5f5'})
   }
   );
   $("#shouchang li").mouseenter(function(){
       $(this).css({background:'#f5f5f5'}).siblings().css({background:'white'})
   })
   // top-2abb
   $('.shoujitaobao li:eq(0)').hover(function(){
   		$(".shoujitaobao li:eq(0)>img").attr("src",'img/erw2.png')
   		$(this).css({background:'white',color:'#ff5000'})
   		$('#shouji-tab').show()
   },function(){
   		$(".shoujitaobao li:eq(0)>img").attr("src",'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZS8+PC9kZWZzPjxwYXRoIGQ9Ik0zOTEuMzc2IDQ4MS44NEgxNTkuMDc4Yy0zNy42NTYgMC02OC4yOS0zMC42MzctNjguMjktNjguMjl2LTIzMi4zYzAtMzcuNjU2IDMwLjYzNS02OC4yOSA2OC4yOS02OC4yOWgyMzIuM2MzNy42NTQgMCA2OC4yOSAzMC42MzUgNjguMjkgNjguMjl2MjMyLjNjMCAzNy42NTQtMzAuNjM3IDY4LjI5LTY4LjI5MiA2OC4yOXpNMTU5LjA3OCAxNTkuMzdjLTEyLjA2NSAwLTIxLjg4IDkuODE1LTIxLjg4IDIxLjg4djIzMi4zYzAgMTIuMDY0IDkuODE1IDIxLjg3OCAyMS44OCAyMS44NzhoMjMyLjNjMTIuMDY0IDAgMjEuODc4LTkuODE0IDIxLjg3OC0yMS44OFYxODEuMjVjMC0xMi4wNjUtOS44MTQtMjEuODgtMjEuODgtMjEuODhIMTU5LjA4ek0zOTEuMzc2IDkwOS41OEgxNTkuMDc4Yy0zNy42NTYgMC02OC4yOS0zMC42MzUtNjguMjktNjguMjlWNjA4Ljk5M2MwLTM3LjY1NiAzMC42MzUtNjguMjkgNjguMjktNjguMjloMjMyLjNjMzcuNjU0IDAgNjguMjkgMzAuNjM1IDY4LjI5IDY4LjI5djIzMi4zYzAgMzcuNjUzLTMwLjYzNyA2OC4yOS02OC4yOTIgNjguMjl6TTE1OS4wNzggNTg3LjExNGMtMTIuMDY1IDAtMjEuODggOS44MTUtMjEuODggMjEuODhWODQxLjI5YzAgMTIuMDY2IDkuODE1IDIxLjg4IDIxLjg4IDIxLjg4aDIzMi4zYzEyLjA2NCAwIDIxLjg3OC05LjgxNCAyMS44NzgtMjEuODhWNjA4Ljk5M2MwLTEyLjA2NC05LjgxNC0yMS44OC0yMS44OC0yMS44OEgxNTkuMDh6TTg2Mi45OTQgNDgxLjg0aC0yMzIuM2MtMzcuNjU0IDAtNjguMjktMzAuNjM3LTY4LjI5LTY4LjI5di0yMzIuM2MwLTM3LjY1NiAzMC42MzctNjguMjkgNjguMjktNjguMjloMjMyLjNjMzcuNjU2IDAgNjguMjkgMzAuNjM1IDY4LjI5IDY4LjI5djIzMi4zYzAgMzcuNjU0LTMwLjYzNCA2OC4yOS02OC4yOSA2OC4yOXptLTIzMi4zLTMyMi40N2MtMTIuMDYzIDAtMjEuODggOS44MTUtMjEuODggMjEuODh2MjMyLjNjMCAxMi4wNjQgOS44MTcgMjEuODc4IDIxLjg4IDIxLjg3OGgyMzIuM2MxMi4wNjQgMCAyMS44OC05LjgxNCAyMS44OC0yMS44OFYxODEuMjVjMC0xMi4wNjUtOS44MTYtMjEuODgtMjEuODgtMjEuODhoLTIzMi4zek02MTAuNzQ1IDgwMS4zM2MtMTMuODI0IDAtMjUuMTM0LTExLjMxLTI1LjEzNC0yNS4xMzRWNTgyLjkwMmMwLTEzLjgyNCAxMS4zMS0yNS4xMzUgMjUuMTM1LTI1LjEzNSAxMy44MjQgMCAyNS4xMzQgMTEuMzEgMjUuMTM0IDI1LjEzNXYxOTMuMjk0Yy0uMDAyIDEzLjgyNC0xMS4zMSAyNS4xMzUtMjUuMTM1IDI1LjEzNXpNNzEzLjA3NiA5MTEuMDRjLTEzLjgyNCAwLTI1LjEzNS0xMS4zMS0yNS4xMzUtMjUuMTM0di0xOTMuNTFjMC0xMy44MjQgMTEuMzEyLTI1LjEzNSAyNS4xMzYtMjUuMTM1IDEzLjgyMyAwIDI1LjEzNCAxMS4zMTIgMjUuMTM0IDI1LjEzNnYxOTMuNTFjMCAxMy44MjQtMTEuMzEgMjUuMTM0LTI1LjEzNCAyNS4xMzR6TTgwOS4yNjYgOTExLjA0Yy0xMy44MjMgMC0yNS4xMzQtMTEuMzEtMjUuMTM0LTI1LjEzNHYtMTA0Ljc4YzAtMTMuODIyIDExLjMxLTI1LjEzMyAyNS4xMzQtMjUuMTMzczI1LjEzNSAxMS4zMSAyNS4xMzUgMjUuMTM0djEwNC43OGMwIDEzLjgyMy0xMS4zMSAyNS4xMzMtMjUuMTM0IDI1LjEzM3pNODA5LjI2NiA3MTcuNDgzYy0xMy44MjMgMC0yNS4xMzQtMTEuMzEtMjUuMTM0LTI1LjEzNFY1NzIuMjJjMC0xMy44MjMgMTEuMzEtMjUuMTM0IDI1LjEzNC0yNS4xMzRzMjUuMTM1IDExLjMxIDI1LjEzNSAyNS4xMzV2MTIwLjEzYzAgMTMuODIyLTExLjMxIDI1LjEzMy0yNS4xMzQgMjUuMTMzek05MDguMDc4IDgwMS4zM2MtMTMuODI0IDAtMjUuMTM1LTExLjMxLTI1LjEzNS0yNS4xMzRWNTcyLjIyYzAtMTMuODIzIDExLjMxLTI1LjEzNCAyNS4xMzUtMjUuMTM0IDEzLjgyNCAwIDI1LjEzNCAxMS4zMSAyNS4xMzQgMjUuMTM1djIwMy45NzZjMCAxMy44MjQtMTEuMzEgMjUuMTM1LTI1LjEzNCAyNS4xMzV6TTYxMC43NDMgOTExLjA0Yy0xMy44MjQgMC0yNS4xMzUtMTEuMzEtMjUuMTM1LTI1LjEzNHYtMjYuNzEyYzAtMTMuODIzIDExLjMxLTI1LjEzNCAyNS4xMzUtMjUuMTM0IDEzLjgyNCAwIDI1LjEzNCAxMS4zMSAyNS4xMzQgMjUuMTM0djI2LjcxMmMwIDEzLjgyNC0xMS4zMSAyNS4xMzQtMjUuMTM0IDI1LjEzNHpNOTA4LjA3OCA5MTEuMDRjLTEzLjgyNCAwLTI1LjEzNS0xMS4zMS0yNS4xMzUtMjUuMTM0di0yNi43MTJjMC0xMy44MjMgMTEuMzEtMjUuMTM0IDI1LjEzNS0yNS4xMzQgMTMuODI0IDAgMjUuMTM0IDExLjMxIDI1LjEzNCAyNS4xMzR2MjYuNzEyYzAgMTMuODI0LTExLjMxIDI1LjEzNC0yNS4xMzQgMjUuMTM0ek03MTMuMDc2IDYzNC43NDhjLTEzLjgyNCAwLTI1LjEzNS0xMS4zMS0yNS4xMzUtMjUuMTM1di0yNi43MWMwLTEzLjgyNSAxMS4zMTItMjUuMTM2IDI1LjEzNi0yNS4xMzYgMTMuODIzIDAgMjUuMTM0IDExLjMxIDI1LjEzNCAyNS4xMzV2MjYuNzFjMCAxMy44MjUtMTEuMzEgMjUuMTM2LTI1LjEzNCAyNS4xMzZ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTIzNC4yOTQgMjU2LjQ2N2g4MS44NjV2ODEuODY1aC04MS44NjZ2LTgxLjg2NXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')
   		$(this).css({background:'#FF5000',color:'white'})
   		$('#shouji-tab').hide()
   })
 $('#shouji-tab').hover(function(){
   		$(".shoujitaobao li:eq(0)>img").attr("src",'img/erw2.png')
   		$('.shoujitaobao li:eq(0)').css({background:'white',color:'#ff5000'})
   		$('#shouji-tab').show()
   },function(){
   		$(".shoujitaobao li:eq(0)>img").attr("src",'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZS8+PC9kZWZzPjxwYXRoIGQ9Ik0zOTEuMzc2IDQ4MS44NEgxNTkuMDc4Yy0zNy42NTYgMC02OC4yOS0zMC42MzctNjguMjktNjguMjl2LTIzMi4zYzAtMzcuNjU2IDMwLjYzNS02OC4yOSA2OC4yOS02OC4yOWgyMzIuM2MzNy42NTQgMCA2OC4yOSAzMC42MzUgNjguMjkgNjguMjl2MjMyLjNjMCAzNy42NTQtMzAuNjM3IDY4LjI5LTY4LjI5MiA2OC4yOXpNMTU5LjA3OCAxNTkuMzdjLTEyLjA2NSAwLTIxLjg4IDkuODE1LTIxLjg4IDIxLjg4djIzMi4zYzAgMTIuMDY0IDkuODE1IDIxLjg3OCAyMS44OCAyMS44NzhoMjMyLjNjMTIuMDY0IDAgMjEuODc4LTkuODE0IDIxLjg3OC0yMS44OFYxODEuMjVjMC0xMi4wNjUtOS44MTQtMjEuODgtMjEuODgtMjEuODhIMTU5LjA4ek0zOTEuMzc2IDkwOS41OEgxNTkuMDc4Yy0zNy42NTYgMC02OC4yOS0zMC42MzUtNjguMjktNjguMjlWNjA4Ljk5M2MwLTM3LjY1NiAzMC42MzUtNjguMjkgNjguMjktNjguMjloMjMyLjNjMzcuNjU0IDAgNjguMjkgMzAuNjM1IDY4LjI5IDY4LjI5djIzMi4zYzAgMzcuNjUzLTMwLjYzNyA2OC4yOS02OC4yOTIgNjguMjl6TTE1OS4wNzggNTg3LjExNGMtMTIuMDY1IDAtMjEuODggOS44MTUtMjEuODggMjEuODhWODQxLjI5YzAgMTIuMDY2IDkuODE1IDIxLjg4IDIxLjg4IDIxLjg4aDIzMi4zYzEyLjA2NCAwIDIxLjg3OC05LjgxNCAyMS44NzgtMjEuODhWNjA4Ljk5M2MwLTEyLjA2NC05LjgxNC0yMS44OC0yMS44OC0yMS44OEgxNTkuMDh6TTg2Mi45OTQgNDgxLjg0aC0yMzIuM2MtMzcuNjU0IDAtNjguMjktMzAuNjM3LTY4LjI5LTY4LjI5di0yMzIuM2MwLTM3LjY1NiAzMC42MzctNjguMjkgNjguMjktNjguMjloMjMyLjNjMzcuNjU2IDAgNjguMjkgMzAuNjM1IDY4LjI5IDY4LjI5djIzMi4zYzAgMzcuNjU0LTMwLjYzNCA2OC4yOS02OC4yOSA2OC4yOXptLTIzMi4zLTMyMi40N2MtMTIuMDYzIDAtMjEuODggOS44MTUtMjEuODggMjEuODh2MjMyLjNjMCAxMi4wNjQgOS44MTcgMjEuODc4IDIxLjg4IDIxLjg3OGgyMzIuM2MxMi4wNjQgMCAyMS44OC05LjgxNCAyMS44OC0yMS44OFYxODEuMjVjMC0xMi4wNjUtOS44MTYtMjEuODgtMjEuODgtMjEuODhoLTIzMi4zek02MTAuNzQ1IDgwMS4zM2MtMTMuODI0IDAtMjUuMTM0LTExLjMxLTI1LjEzNC0yNS4xMzRWNTgyLjkwMmMwLTEzLjgyNCAxMS4zMS0yNS4xMzUgMjUuMTM1LTI1LjEzNSAxMy44MjQgMCAyNS4xMzQgMTEuMzEgMjUuMTM0IDI1LjEzNXYxOTMuMjk0Yy0uMDAyIDEzLjgyNC0xMS4zMSAyNS4xMzUtMjUuMTM1IDI1LjEzNXpNNzEzLjA3NiA5MTEuMDRjLTEzLjgyNCAwLTI1LjEzNS0xMS4zMS0yNS4xMzUtMjUuMTM0di0xOTMuNTFjMC0xMy44MjQgMTEuMzEyLTI1LjEzNSAyNS4xMzYtMjUuMTM1IDEzLjgyMyAwIDI1LjEzNCAxMS4zMTIgMjUuMTM0IDI1LjEzNnYxOTMuNTFjMCAxMy44MjQtMTEuMzEgMjUuMTM0LTI1LjEzNCAyNS4xMzR6TTgwOS4yNjYgOTExLjA0Yy0xMy44MjMgMC0yNS4xMzQtMTEuMzEtMjUuMTM0LTI1LjEzNHYtMTA0Ljc4YzAtMTMuODIyIDExLjMxLTI1LjEzMyAyNS4xMzQtMjUuMTMzczI1LjEzNSAxMS4zMSAyNS4xMzUgMjUuMTM0djEwNC43OGMwIDEzLjgyMy0xMS4zMSAyNS4xMzMtMjUuMTM0IDI1LjEzM3pNODA5LjI2NiA3MTcuNDgzYy0xMy44MjMgMC0yNS4xMzQtMTEuMzEtMjUuMTM0LTI1LjEzNFY1NzIuMjJjMC0xMy44MjMgMTEuMzEtMjUuMTM0IDI1LjEzNC0yNS4xMzRzMjUuMTM1IDExLjMxIDI1LjEzNSAyNS4xMzV2MTIwLjEzYzAgMTMuODIyLTExLjMxIDI1LjEzMy0yNS4xMzQgMjUuMTMzek05MDguMDc4IDgwMS4zM2MtMTMuODI0IDAtMjUuMTM1LTExLjMxLTI1LjEzNS0yNS4xMzRWNTcyLjIyYzAtMTMuODIzIDExLjMxLTI1LjEzNCAyNS4xMzUtMjUuMTM0IDEzLjgyNCAwIDI1LjEzNCAxMS4zMSAyNS4xMzQgMjUuMTM1djIwMy45NzZjMCAxMy44MjQtMTEuMzEgMjUuMTM1LTI1LjEzNCAyNS4xMzV6TTYxMC43NDMgOTExLjA0Yy0xMy44MjQgMC0yNS4xMzUtMTEuMzEtMjUuMTM1LTI1LjEzNHYtMjYuNzEyYzAtMTMuODIzIDExLjMxLTI1LjEzNCAyNS4xMzUtMjUuMTM0IDEzLjgyNCAwIDI1LjEzNCAxMS4zMSAyNS4xMzQgMjUuMTM0djI2LjcxMmMwIDEzLjgyNC0xMS4zMSAyNS4xMzQtMjUuMTM0IDI1LjEzNHpNOTA4LjA3OCA5MTEuMDRjLTEzLjgyNCAwLTI1LjEzNS0xMS4zMS0yNS4xMzUtMjUuMTM0di0yNi43MTJjMC0xMy44MjMgMTEuMzEtMjUuMTM0IDI1LjEzNS0yNS4xMzQgMTMuODI0IDAgMjUuMTM0IDExLjMxIDI1LjEzNCAyNS4xMzR2MjYuNzEyYzAgMTMuODI0LTExLjMxIDI1LjEzNC0yNS4xMzQgMjUuMTM0ek03MTMuMDc2IDYzNC43NDhjLTEzLjgyNCAwLTI1LjEzNS0xMS4zMS0yNS4xMzUtMjUuMTM1di0yNi43MWMwLTEzLjgyNSAxMS4zMTItMjUuMTM2IDI1LjEzNi0yNS4xMzYgMTMuODIzIDAgMjUuMTM0IDExLjMxIDI1LjEzNCAyNS4xMzV2MjYuNzFjMCAxMy44MjUtMTEuMzEgMjUuMTM2LTI1LjEzNCAyNS4xMzZ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTIzNC4yOTQgMjU2LjQ2N2g4MS44NjV2ODEuODY1aC04MS44NjZ2LTgxLjg2NXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')
   		$('.shoujitaobao li:eq(0)').css({background:'#FF5000',color:'white'})
   		$('#shouji-tab').hide()
   })
 // 分类菜单
 $('.caidan li').hover(function(){
  feilei=$(this).index();
 	$(this).css({background:'#f5f5f5'}).siblings().css({background:'white'})
  $('#wuping').show();
  $('#wuping>div').eq(feilei).css({display:'flex'})
 },function(){
 	$(this).css({background:'white'})
  $('#wuping').hide();
  $('#wuping>div').eq(feilei).css({display:'none'})
 }
 )
  // 轮播图
  lunbo();
  var dian=0;
  function lunbo(){
      t=setTimeout(function(){
        dian++;
        $('.lunbo-img').animate({marginLeft:'-5400px'},700,function(){
          $('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'})
        })
        $('.dian>li').eq(dian).css({background:'white'}).siblings().css({
          background:'rgba(255,255,255,.38)'})
        if(dian>3){dian=-1}
        lunbo();
      },2000)
  }
  $('.dian>li').mouseenter(function time(){
  		dianLI=$(this);
       $('.dian>li').unbind('mouseenter');
       setTimeout(function(){$('.dian>li').mouseenter(time)},700)
    img=$('.lunbo-img>img:eq(0)').attr('src');
    clearTimeout(t);
    Dindex=$(this).index();console.log(Dindex)
    setTimeout(function(){
    $(dianLI).css({background:'white'}).siblings().css({background:'rgba(255,255,255,.38)'})
//  点1
    if(Dindex==0&&img=='img/lunbo1.jpg'){
    	dian=0;
    }
    if(Dindex==0&&img=='img/lunbo2.jpg_.webp'){
    	dian=0;
    	$('.lunbo-img').animate({marginLeft:'-3600px'},700,function(){
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
      })
    }
     if(Dindex==0&&img=='img/lunbo3.jpg_.webp'){
		dian=0;
		$('.lunbo-img').animate({marginLeft:'-2700px'},700,function(){
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
      if(Dindex==0&&img=='img/lunbo4.jpg_.webp'){
    	dian=0;
    	$('.lunbo-img').animate({marginLeft:'-1800px'},700,function(){
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
       if(Dindex==0&&img=='img/lunbo5.jpg_.webp'){
    	dian=0;
    	$('.lunbo-img').animate({marginLeft:'-900px'},700,function(){
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
//  点2
	if(Dindex==1&&img=='img/lunbo1.jpg'){
    	dian=1;
    	$('.lunbo-img').animate({marginLeft:'-5400px'},700,function(){
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
	if(Dindex==1&&img=='img/lunbo2.jpg_.webp'){
    	dian=1;
    }
    if(Dindex==1&&img=='img/lunbo3.jpg_.webp'){
    	dian=1;
    	$('.lunbo-img').animate({marginLeft:'-3600px'},700,function(){
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
    if(Dindex==1&&img=='img/lunbo4.jpg_.webp'){
    	dian=1;
    	$('.lunbo-img').animate({marginLeft:'-2700px'},700,function(){
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
    if(Dindex==1&&img=='img/lunbo5.jpg_.webp'){
    	dian=1;
    	$('.lunbo-img').animate({marginLeft:'-1800px'},700,function(){
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
//  点3
  if(Dindex==2&&img=='img/lunbo1.jpg'){
    	dian=2;
    	$('.lunbo-img').animate({marginLeft:'-6300px'},700,function(){
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
  if(Dindex==2&&img=='img/lunbo2.jpg_.webp'){
    	dian=2;
    	$('.lunbo-img').animate({marginLeft:'-5400px'},700,function(){
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
  	if(Dindex==2&&img=='img/lunbo3.jpg_.webp'){
    	dian=2;
    }
    if(Dindex==2&&img=='img/lunbo4.jpg_.webp'){
    	dian=2;
    	$('.lunbo-img').animate({marginLeft:'-3600px'},700,function(){
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
  if(Dindex==2&&img=='img/lunbo5.jpg_.webp'){
    	dian=2;
    	$('.lunbo-img').animate({marginLeft:'-2700px'},700,function(){
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
//点4
 if(Dindex==3&&img=='img/lunbo1.jpg'){
    	dian=3;
    	$('.lunbo-img').animate({marginLeft:'-7200px'},700,function(){
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
  if(Dindex==3&&img=='img/lunbo2.jpg_.webp'){
    	dian=3;
    	$('.lunbo-img').animate({marginLeft:'-6300px'},700,function(){
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
  	if(Dindex==3&&img=='img/lunbo3.jpg_.webp'){
    	dian=3;
    	$('.lunbo-img').animate({marginLeft:'-5400px'},700,function(){
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
    if(Dindex==3&&img=='img/lunbo4.jpg_.webp'){
    	dian=3;
    }
  if(Dindex==3&&img=='img/lunbo5.jpg_.webp'){
    	dian=3;
    	$('.lunbo-img').animate({marginLeft:'-3600px'},700,function(){
    		$('.lunbo-img>img:eq(9)').prependTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
//点5
if(Dindex==4&&img=='img/lunbo1.jpg'){
    	dian=4;
    	$('.lunbo-img').animate({marginLeft:'-8100px'},700,function(){
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
  if(Dindex==4&&img=='img/lunbo2.jpg_.webp'){
    	dian=4;
    	$('.lunbo-img').animate({marginLeft:'-7200px'},700,function(){
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
  	if(Dindex==4&&img=='img/lunbo3.jpg_.webp'){
    	dian=4;
    	$('.lunbo-img').animate({marginLeft:'-6300px'},700,function(){
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
    if(Dindex==4&&img=='img/lunbo4.jpg_.webp'){
    	dian=4;
    	$('.lunbo-img').animate({marginLeft:'-5400px'},700,function(){
    		$('.lunbo-img>img:eq(0)').appendTo('.lunbo-img');
          $('.lunbo-img').css({marginLeft:'-4500px'});
     })
    }
  if(Dindex==4&&img=='img/lunbo5.jpg_.webp'){
    	dian=4;
    }
	   	 lunbo();
    },400)
  })