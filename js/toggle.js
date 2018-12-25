$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'test4') {
            $('div.alternative').show("800");           
       }

       else {
            $('div.alternative').hide("800");   
       }
   });
});