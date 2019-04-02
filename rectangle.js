/* global rectangle,valid: true */
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $widthValidation = $('#width-validation'),
      $heightValidation = $('#height-validation'),
      $area = $('#area');
  $width.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
    }
    if(e.key === '.'){
      if(e.target === ''){
        e.preventDefault();
      }
      if(e.target.value.indexOf('.') !== -1){
        e.preventDefault();
      } else{
        if(e.target.selectionStart === 0){
          e.preventDefault();
        }
      }
    }
  });
  $height.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
    }
  });

  $width.focusout(function(){
    var result = valid($width.val());
    if(!result.isOK){
      $widthValidation.html('宽度' + result.reason);
      $width.select();
    } else {
      $widthValidation.html('');
    }
  });
  $height.focusout(function(){
    var result = valid($height.val());
    if(!result.isOK){
      $heightValidation.html('高度' + result.reason);
      $height.select();
    } else {
      $heightValidation.html('');
    }
  });
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
