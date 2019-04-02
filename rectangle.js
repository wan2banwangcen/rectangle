/* global rectangle: true */
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $form = $('form'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  $form.submit(function(e){
    e.preventDefault();

    var r = rectangle();

    $perimeter.val(r.perimeter($width.val(),$height.val()));
    $area.val(r.area($width.val(),$height.val()));
  });
});
