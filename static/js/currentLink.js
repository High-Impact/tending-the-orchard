$(window).click(function(){
  setTimeout(alertFunc, 500);
  var current = location.pathname;
  $('a').each(function(){
    var $this = $(this);
    // if the current path is like this link, make it active
    if($this.attr('href') === current){
      $this.addClass('active');
    }
  })
});

function alertFunc(){
};
