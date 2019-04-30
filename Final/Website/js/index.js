//notes: 

//  known issues -
//   if I can figure out it, make Art Position/Size slider work the right way
//    -transform doesn't work, just makes them backwards and weird      
//   make position sliders work in Firefox somehow
//   css transitions commented out because they affect art size/position sliders. Way to exclude background-image from transition?

//  features to add -
//   add more sticks
//   add help/about page
//   add screenshot function
//    https://github.com/niklasvh/html2canvas
//    http://stackoverflow.com/questions/17397319/save-canvas-as-jpg-to-desktop
//    -works but doesn't keep any box shadows or gradients or background image :(

//reference -
//fightstick templates: http://iplaywinner.com/joystick-art-templates/ http://forums.shoryuken.com/discussion/137307/the-new-official-arcade-stick-art-thread-no-image-quoting
//>>Madcatz SE: https://i.imgur.com/bmYl5j9.jpg
//>>Madcatz TE: https://i.imgur.com/qIF7kg9.jpg
//>>Madcatz SFXT Pro: https://i.imgur.com/M7Gi3Zi.jpg
//>>Madcatz SFXT VS: https://i.imgur.com/uQrVIzA.jpg
//>>Qanba Q2: https://i.imgur.com/EC2rEZF.jpg
//>>Qanba Q2 Pro: https://i.imgur.com/teSCM8r.jpg
//>>Razer Atrox: https://i.imgur.com/KvmmM8i.jpg

$(document).ready(function() {
  //Splash page element
  $('.welcome').fadeIn('slow');
  $('.welcome').on('click', function() {
    $(this).fadeOut("slow");
  });
  //URL Submit Code
  $('.artworkSubmit').on('click', function(){
    var url = $('.artworkAddress').val();
    $(".stickart").css('background-image', 'url(\'' + url + '\')');
  });
  //navbar dropdown hide/unhide
  $('.navbar li').on('click', function() {
    $(this).toggleClass('active').parent().find('.dropdown').toggleClass('hide');
  });
  
  //stick type dropdown
  $('.stickType li').on('click', function() {
     $(this).find('.dropdown').toggleClass('hide');
  });
  
  //Change Stick Type dropdown text
  $('.stickType .dropdown div').on('click', function() {
    var stickTypeText = $(this).html();
    $('.stickType .selected').html(stickTypeText);
  });
  
  //Change Stick Type
  $('.stickType .dropdown div').on('click', function() {
    var stickType = $(this).prop('class');
    $('.stickart').prop('class', 'stickart').addClass(stickType);
  });  
  
  //buttons dropdown click hide/unhide
  var eachButton = $('.lp, .mp, .hp, .ap, .lk, .mk, .hk, .ak')
  $(eachButton).on('click', function() {
    $(this).siblings('.dropdown').toggleClass('hide');
  });
  
  //stick dropdown click hide/unhide
  $('.ballTop').on('click', function() {
    $(this).siblings('.dropdown').toggleClass('hide');
    $(this).find('.close').on('click', function() {
      $(this).parent('.dropdown').toggleClass('hide');
    });
  });
  
  
  //select tabs and unhide correct containers
  $('.dropdown li.rim.tab').on('click', function() {
    $(this).addClass('selected');
    $(this).siblings('.button.tab').removeClass('selected');
    if ( $(this).parent().find('ul.rim').hasClass('hide') ) {
      $(this).parent().find('ul.rim').removeClass('hide');
      $(this).parent().find('ul.button').addClass('hide');
    }
  });
  
  $('.dropdown li.button.tab').on('click', function() {
    $(this).addClass('selected');
    $(this).siblings('.rim.tab').removeClass('selected');
    if ( $(this).parent().find('ul.button').hasClass('hide') ) {
      $(this).parent().find('ul.button').removeClass('hide');
      $(this).parent().find('ul.rim').addClass('hide');
    }
  });
  
  //close button on dropdowns
  $('.dropdown li.close').on('click', function() {
    $(this).parent().toggleClass('hide');
  });
  
  //change color of buttons via dropdowns
  $('.button li').on('click', function() {
      var colorPick = $(this).prop('class');
      $(this).parents('.dropdown').siblings('.btn-bdg').find('.btn-body').prop('class', 'btn-body');
      $(this).parents('.dropdown').siblings('.btn-bdg').find('.btn-body').addClass(colorPick);
  });
  
  //same for rim color
  $('.rim li').on('click', function() {
      var colorPick = $(this).prop('class');
      $(this).parents('.dropdown').siblings('.btn-bdg').find('.btn-wrap').prop('class', 'btn-wrap');
      $(this).parents('.dropdown').siblings('.btn-bdg').find('.btn-wrap').addClass(colorPick);
  });
  
  //and for the stick
  $('.stick .dropdown li').on('click', function() {
      var colorPick = $(this).prop('class');
      $(this).parents('.dropdown').siblings('.ballTop').prop('class', 'ballTop');
      $(this).parents('.dropdown').siblings('.ballTop').addClass(colorPick);
  });
  
  //Stick art background-color black
  $('.colorControl .black').on('click', function() {
    $(".stickart").css('background-color', '#000');
  });
  //white
   $('.colorControl .white').on('click', function() {
    $(".stickart").css('background-color', '#FFF');
  });
  
  //Custom Color Submit
  $('.colorSubmit').on('click', function(){
    var hexcode = $('.customColor').val();
    $(".stickart").css('background-color', '#' + hexcode + '');
  });
  
  //add selected class to Rim/Buttons on dropdowns
  $('.dropdown ul.rim li, .dropdown ul.button li, .stick .dropdown li').on('click', function() {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
  });
  
  //art size slider
  $(function() {
    $('.bgSize .slider').slider({
      value:100,
      min:1,
      max:200,
      slide: function( event, ui) {
        var val = 1 + ui.value;
	      $(".stickart").css("background-size", ""+val+"%");
      }
    });
  });
  
  //art position slider x
 $(function() {
    var stickWidth = $('.stickart').width();
    $('.bgPosition .slider-x').slider({
      value:0,
      min:-stickWidth,
      max:stickWidth,
      slide: function( event, ui) {
        var valx = 0 - ui.value;
	      $(".stickart").css("background-position-x", " "+valx+"px");
      }
    });
  });
  
  //art position slider y
   $(function() {
    $('.bgPosition .slider-y').slider({
      value:0,
      min:-540,
      max:540,
      slide: function( event, ui) {
        var val = 0 - ui.value;
	      $(".stickart").css("background-position-y", " "+val+"px");
      }
    });
  });
  
  //art tile checkboxes
  $('input#tile-x').on('change', function() {
      $('.stickart').css('background-repeat', 'repeat-x');
  });
  $('input#tile-y').change(function() {
      $('.stickart').css('background-repeat', 'repeat-y');
  });
  $('input#tile-both').change(function() {
      $('.stickart').css('background-repeat', 'repeat');
  });
  $('input#tile-none').change(function() {
      $('.stickart').css('background-repeat', 'no-repeat');
  });
  
});

$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') {
    	// A, Jab (65)
    	if (e.keyCode == 65) { 
            $(".lp .btn-wrap .btn-body").addClass('active');
       }
      // S, Strong (83)
    	if (e.keyCode == 83) { 
            $(".mp .btn-wrap .btn-body").addClass('active');
       }
      // D, Fierce (68)
    	if (e.keyCode == 68) { 
            $(".hp .btn-wrap .btn-body").addClass('active');
       }
      // F, All Punches (70)
    	if (e.keyCode == 70) { 
            $(".ap .btn-wrap .btn-body").addClass('active');
       }
      // Z, Short (90)
    	if (e.keyCode == 90) { 
            $(".lk .btn-wrap .btn-body").addClass('active');
       }
      // X, Forward (88)
    	if (e.keyCode == 88) { 
            $(".mk .btn-wrap .btn-body").addClass('active');
       }
      // C, Roundhouse (67)
    	if (e.keyCode == 67) { 
            $(".hk .btn-wrap .btn-body").addClass('active');
       }
      // V, All Kicks (86)
    	if (e.keyCode == 86) { 
            $(".ak .btn-wrap .btn-body").addClass('active');
       }
      // Up Arrow, Stick Up (38)
    	if (e.keyCode == 38) { 
            $(".stick .ballTop").css('top', '0');
       }
       //Left Arrow, Stick Left (37)
    	if (e.keyCode == 37) { 
            $(".stick .ballTop").css('left', '0');
       }
      //Down Arrow, Stick Down (40)
    	if (e.keyCode == 40) { 
            $(".stick .ballTop").css('top', '50px');
       }
      //Right Arrow, Stick Right (39)
    	if (e.keyCode == 39) { 
            $(".stick .ballTop").css('left', '50px');
       }
    }
  
  if (e.type == 'keyup') {
    	// A, Jab (65)
    	if (e.keyCode == 65) { 
            $(".lp .btn-wrap .btn-body").removeClass('active');
       }
    // S, Strong (83)
    	if (e.keyCode == 83) { 
            $(".mp .btn-wrap .btn-body").removeClass('active');
       }
      // D, Fierce (68)
    	if (e.keyCode == 68) { 
            $(".hp .btn-wrap .btn-body").removeClass('active');
       }
    // F, All Punches (70)
    	if (e.keyCode == 70) { 
            $(".ap .btn-wrap .btn-body").removeClass('active');
       }
      // Z, Short (90)
    	if (e.keyCode == 90) { 
            $(".lk .btn-wrap .btn-body").removeClass('active');
       }
      // X, Forward (88)
    	if (e.keyCode == 88) { 
            $(".mk .btn-wrap .btn-body").removeClass('active');
       }
      // C, Roundhouse (67)
    	if (e.keyCode == 67) { 
            $(".hk .btn-wrap .btn-body").removeClass('active');
       }
      // V, All Kicks (86)
    	if (e.keyCode == 86) { 
            $(".ak .btn-wrap .btn-body").removeClass('active');
       }
    // Up Arrow, Stick Up (38)
    	if (e.keyCode == 38) { 
            $(".stick .ballTop").css('top', '25px');
       }
    //Left Arrow, Stick Left (37)
    	if (e.keyCode == 37) { 
            $(".stick .ballTop").css('left', '25px');
       }
      //Down Arrow, Stick Down (40)
    	if (e.keyCode == 40) { 
            $(".stick .ballTop").css('top', '25px');
       }
      //Right Arrow, Stick Right (39)
    	if (e.keyCode == 39) { 
            $(".stick .ballTop").css('left', '25px');
       }
    }
});