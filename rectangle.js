/* global rectangle,valid: true */
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $widthValidation = $('#width-validation'),
      $heightValidation = $('#height-validation'),
      $area = $('#area');
  $btnCal.click(function(){
    var w = $width.val(),
        h = $height.val();
    var widthResult = valid(w);
    var heightResult = valid(h);
    if(!widthResult.isOK){
      $widthValidation.html('宽度' + widthResult.reason);
      $width.select();
      return;
    }
    if(!heightResult.isOK){
      $heightValidation.html('高度' + heightResult.reason);
      $height.select();
      return;
    }
    $widthValidation.html('');
    $heightValidation.html('');

    var r = rectangle();

    $perimeter.val(r.perimeter($width.val(),$height.val()));
    $area.val(r.area($width.val(),$height.val()));
  });
});
