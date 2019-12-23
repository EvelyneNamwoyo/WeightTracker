'use strict'
$(document).ready(function() {
  $('.add').click(function(){
    $('header').addClass('add-weight');
  });
  
  $('form').submit(function(e){
    e.preventDefault();
    $('header').removeClass('add-weight');
  })

  $('.cancel-new-weight').click(function(){
    $('header').removeClass('add-weight');
  })
})