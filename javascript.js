$(function() {
    

    $('.featured-customers__container__under').click(function(){
        event.stopPropagation();
    $(".customers-bio__under").toggle();
    }); 
    $(document).click(function(){
    $(".customers-bio__under").hide();
    }); 
    
    $('.featured-customers__container__adidas').click(function(){
        event.stopPropagation();
    $(".customers-bio__adidas").toggle();
    }); 
    $(document).click(function(){
    $(".customers-bio__adidas").hide();
    }); 
    
    $('.featured-customers__container__vita').click(function(){
        event.stopPropagation();
    $(".customers-bio__vita").toggle();
    }); 
    $(document).click(function(){
    $(".customers-bio__vita").hide();
    }); 
            
    $('.featured-customers__container__hardrock').click(function(){
        event.stopPropagation();
    $(".customers-bio__hardrock").toggle();
    }); 
    $(document).click(function(){
    $(".customers-bio__hardrock").hide();
    }); 
    
    $('.featured-customers__container__absolut').click(function(){
        event.stopPropagation();
    $(".customers-bio__absolut").toggle();
    }); 
    $(document).click(function(){
    $(".customers-bio__absolut").hide();
    }); 
    
    $('.featured-customers__container__bcbg').click(function(){
        event.stopPropagation();
    $(".customers-bio__bcbg").toggle();
    }); 
    $(document).click(function(){
    $(".customers-bio__bcbg").hide();
    }); 
    
    $('.featured-customers__container__benjerry').click(function(){
        event.stopPropagation();
    $(".customers-bio__benjerry").toggle();
    }); 
    $(document).click(function(){
    $(".customers-bio__benjerry").hide();
    }); 
    
    $('.featured-customers__container__citizen').click(function(){
        event.stopPropagation();
    $(".customers-bio__citizen").toggle();
    }); 
    $(document).click(function(){
    $(".customers-bio__citizen").hide();
    }); 
    
    $("#nav-bar__vertical-dropdown__button").click(function(){
        event.stopPropagation();
        $(".nav-bar__vertical__dropdown__content ").toggle();
    });
    $(document).click(function(){
    $(".nav-bar__vertical__dropdown__content ").hide();
    }); 
    

    var currentIndex = 0,
        items = $('.slide'),
        itemslength = items.length;
        
    function cycleItems () {
        item = $('.slide').eq(currentIndex);
        $('.active').removeClass('active');
        item.addClass('active');
    }
    
    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemslength - 1) {
        currentIndex = 0;
      }
      cycleItems();
    }, 5000);

    $('.next-button').click(function() {
      clearInterval(autoSlide);
      currentIndex += 1;
      if (currentIndex > itemslength - 1) {
        currentIndex = 0;
      }
      cycleItems();
    });

    $('.previous-button').click(function() {
      clearInterval(autoSlide);
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = itemslength - 1;
      }
      cycleItems();
    });
    
});



    



