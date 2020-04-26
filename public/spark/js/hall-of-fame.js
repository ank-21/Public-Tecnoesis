flipGallery();
function flipGallery()
{
   $('.flip-gallery > div.active').siblings('div').children().css('opacity', '0');
   //for mobiles
      $('.flip-gallery .filter').click(function () {

          if ($(this).hasClass('open'))
          {          
              fgSetFilter();
             
          }
          else
          {
              var $size = $(this).siblings().size() * 32;
              $('.flip-gallery .tab-titles').css('height', $size + 'px');
              $('.flip-gallery').css('padding-top', ($size + 20) + 'px');
              $(this).addClass('open')
          }        
      });

        //action of tab click
 $('.flip-gallery .tab-titles span:not(.filter)').click(function () {
     if ($(this).hasClass('active'))
     {
      return;
     }
        fgSetFilter(); $(this).addClass('active').siblings().removeClass('active');
          var index = $(this).index()-1;

          $('.flip-gallery > div.active').animate({
              opacity: 0
          }, 100, function () {
              // Animation complete.
          
              $('.flip-gallery > div.active').slideToggle().removeClass('active');
              $('.flip-gallery > div').eq(index).slideToggle().addClass('active');
              $('.flip-gallery > div.active > div:first-child').addClass('current');
              $('.flip-gallery > div.active').siblings('div').children().css('opacity', '0');
              fadeInItems();
          });
    
  });
}
  function fgSetFilter() {
      $('.flip-gallery .tab-titles').removeAttr('style');
      $('.flip-gallery .filter').removeClass('open');
      $('.flip-gallery').removeAttr('style');
  }
    function fadeInItems() {

              if ($('.flip-gallery > .active').find('.current').length == 0) {
                  $('.flip-gallery > div.active').siblings('div').css('opacity', '1');
                  return;
              }            
              $('.flip-gallery > .active .current').animate({
                  opacity: 1
              }, 300, function () {
                  $('.flip-gallery > .active .current').removeClass('current').next().addClass('current');
                  fadeInItems();
              });
          }