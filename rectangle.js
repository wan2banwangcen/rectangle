$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCtl = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  $btnCtl.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());
    var p = 2*(w+h),
        a = w*h;
    $perimeter.val(p);
    $area.val(a);
  });
});
