function rectangle(){
  return {
    'perimeter':function(w,h){
      return 2*(Number(w)+Number(h));          
    },
    'area':function(w,h){
      return Number(w) * Number(h);           
    }   
  };
}
function valid(data){
  var result = {
    isOK:false,
    reason:''
  };
  if(data === ''){
    result.reason = '不能为空';
    return result;
  }
  if(Number(data) < 0){
    result.reason = '不能为负';
    return result;
  }
  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)){
    result.reason = '必须是数值';
    return result;
  }

  result.isOK = true;
  return result;
}
