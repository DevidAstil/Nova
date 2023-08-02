$(document).ready(function(){
    $('.clicker').click(function(){
      if($('ul').hasClass('closed')){
      
     $('#ull').slideDown(150).show();
      $('#ull').addClass('opened');
        $('#ull').removeClass('closed');
        $('#ull2').addClass('closed2').removeClass('opened2');
        $('#ull3').addClass('closed3').removeClass('opened3');
        $('#ull4').addClass('closed4').removeClass('opened4');
      }
      else
      {
        $('#ull').slideUp(100).fadeOut();
        $('#ull').addClass('closed');
        $('#ull').removeClass('opened');
      }
     
    });
    // $('#ull li').click(function(){
    // $('.options').text($(this).text());
    //   $('#ull').slideUp(0).fadeOut();
    //     $('#ull').removeClass('opened');
    //     $('#ull').addClass('closed');
         
    // });
    // $('.options').click(function(){
    // if($('ul').hasClass('closed')){
      
    //  $('#ull').slideDown(100).show();
    //   $('#ull').addClass('opened');
    //     $('#ull').removeClass('closed'); 
    //   }
    //   else
    //   {
    //     $('#ull').slideUp(100).fadeOut();
    //     $('#ull').addClass('closed');
    //     $('#ull').removeClass('opened');
    //   }
     
    // });
    
    
    $('.clicker2').click(function(){
      if($('ul').hasClass('closed2')){
      
     $('#ull2').slideDown(150).show();
      $('#ull2').addClass('opened2');
        $('#ull2').removeClass('closed2');
        $('#ull').addClass('closed').removeClass('opened');
        $('#ull3').addClass('closed3').removeClass('opened3');
        $('#ull4').addClass('closed4').removeClass('opened4');
      }
      else
      {
        $('#ull2').slideUp(100).fadeOut();
        $('#ull2').addClass('closed2');
        $('#ull2').removeClass('opened2');
      }
     
    });
    // $('#ull2 li').click(function(){
    // $('.options2').text($(this).text());
    //   $('#ull2').slideUp(0).fadeOut();
    //     $('#ull2').addClass('closed2');
    //     $('#ull2').removeClass('opened2');
    //      var className = $(this).attr('class');
    // });
    // $('.options2').click(function(){
    // if($('ul').hasClass('closed2')){
      
    //  $('#ull2').slideDown(100).show();
    //   $('#ull2').addClass('opened2');
    //     $('#ull2').removeClass('closed2'); 
    //   }
    //   else
    //   {
    //     $('#ull2').slideUp(100).fadeOut();
    //     $('#ull2').addClass('closed2');
    //     $('#ull2').removeClass('opened2');
    //   }
     
    // }); 
    
    
    $('.clicker3').click(function(){
      if($('ul').hasClass('closed3')){
      
     $('#ull3').slideDown(150).show();
      $('#ull3').addClass('opened3');
        $('#ull3').removeClass('closed3');
        $('#ull2').addClass('closed2').removeClass('opened2');
        $('#ull').addClass('closed').removeClass('opened');
        $('#ull4').addClass('closed4').removeClass('opened4'); 
      }
      else
      {
        $('#ull3').slideUp(100).fadeOut();
        $('#ull3').addClass('closed3');
        $('#ull3').removeClass('opened3');
      }
     
    });
    // $('#ull3 li').click(function(){
    // $('.options3').text($(this).text());
    //   $('#ull3').slideUp(0).fadeOut();
    //     $('#ull3').addClass('closed3');
    //     $('#ull3').removeClass('opened3');
    //      var className = $(this).attr('class');
    // });
    // $('.options3').click(function(){
    // if($('ul').hasClass('closed3')){
      
    //  $('#ull3').slideDown(100).show();
    //   $('#ull3').addClass('opened3');
    //     $('#ull3').removeClass('closed3'); 
    //   }
    //   else
    //   {
    //     $('#ull3').slideUp(100).fadeOut();
    //     $('#ull3').addClass('closed3');
    //     $('#ull3').removeClass('opened3');
    //   }
     
    // });


    $('.clicker4').click(function(){
      if($('ul').hasClass('closed4')){
      
     $('#ull4').slideDown(150).show();
      $('#ull4').addClass('opened4');
        $('#ull4').removeClass('closed4');
        $('#ull2').addClass('closed2').removeClass('opened2');
        $('#ull3').addClass('closed3').removeClass('opened3');
        $('#ull').addClass('closed').removeClass('opened');
      }
      else
      {
        $('#ull4').slideUp(100).fadeOut();
        $('#ull4').addClass('closed4');
        $('#ull4').removeClass('opened4');
      }
     
    });
    // $('#ull4 li').click(function(){
    // $('.options4').text($(this).text());
    //   $('#ull4').slideUp(0).fadeOut();
    //     $('#ull4').addClass('closed4');
    //     $('#ull4').removeClass('opened4');
    //      var className = $(this).attr('class');
    // });
    // $('.options4').click(function(){
    // if($('ul').hasClass('closed4')){
      
    //  $('#ull4').slideDown(100).show();
    //   $('#ull4').addClass('opened4');
    //     $('#ull4').removeClass('closed4'); 
    //   }
    //   else
    //   {
    //     $('#ull4').slideUp(100).fadeOut();
    //     $('#ull4').addClass('closed4');
    //     $('#ull4').removeClass('opened4');
    //   }
     
    // });
}); 