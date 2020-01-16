$(document).ready(function() {
  $("form#political").submit (function(event) {
    var left = 0
    var right = 0
    if (trump === 'right'){
      right += 1
    }
    else {
      left += 1
    }
    if (capitalism === 'right'){
      right += 1
    }
    else {
      left += 1
    }
    if (Welfare === 'right'){
      right += 1
    }
    else {
      left += 1
    }
    if (UBI === 'right'){
      right += 1
    }
    else {
      left += 1
    }
    if (babies === 'right'){
      right += 1
    }
    else {
      left += 1
    }
    if (right > left) {
      $(".right").show();  
    }
    else {
      $(".left").show();
    }
    event.preventDefault();
  })
})