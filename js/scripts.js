
$(document).ready(function() {

  var q1;

  $("#firstq input").change(function() {
    console.log(this.value)
    q1 = this.value;
  })
  


  $("form#political").submit (function(event) {

    event.preventDefault();
    var left = 0
    var right = 0
    if ($("input[name='trump']:checked").val() === 'right'){
      right += 1
    }
    else {
      left += 1
    }
    console.log(("input[name='trump']:checked").val())
    if ($(("#capitalism").value === 'right')){
      right += 1
    }
    else {
      left += 1
    }
    if ($(("#Welfare").value === 'right')){
      right += 1
    }
    else {
      left += 1
    }
    if ($(("#UBI").value === 'right')){
      right += 1
    }
    else {
      left += 1
    }
    if ($(("#babies").value === 'right')){
      right += 1
    }
    else {
      left += 1
    }
    console.log(right, left)
    if (right > left) {
      $(".right").show();  
    }
    else {
      $(".left").show();
    }
  })
})