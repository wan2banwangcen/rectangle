/* global rectangle: true */
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  $btnCal.click(function(){

    var r = rectangle();

    $perimeter.val(r.perimeter($width.val(),$height.val()));
    $area.val(r.area($width.val(),$height.val()));
  });
});
