$(function(){var e=$("#width"),l=$("#height"),a=$("#calculate"),r=$("#perimeter"),t=$("#area");a.click(function(){var a=rectangle();r.val(a.perimeter(e.val(),l.val())),t.val(a.area(e.val(),l.val()))})});