function validateSex(ul) {
    var radios = document.getElementsByName("group1");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) Materialize.toast('Выберите пол!', 3000, 'rounded');
    return formValid;
}


function validateGroupName(ul) {
	var radios = document.getElementsByName("group-name");
    var formValid = false;

    
    if (radios.value.length == 0) Materialize.toast('Введите член себе в рот)))))', 3000, 'rounded');  
    	else return alert(formValid);
}

//     var elements = document.getElementsByName('group1');

//     for (var i = 0; i < elements.length; i++) {
//     	if (elements[i].checked) console.log("ЗБС")
//     	else return Materialize.toast('Выберите пол!', 3000, 'rounded'); // 'rounded' is the class I'm applying to the toast;	
//   	}
// }



//       // resetError(elems.group-name.parentNode);
//       if (!elems.group-name.value) {
//         // showError(elems.group.parentNode, ' Укажите группу.');
//         alert("Укажите группу!");
//       }
// }

// var elements = document.getElementsByName(name);
//   for (var i=0; i<elements.length; i++)  {
//   	if  (elements[i].checked) return true
//   }
//   return false
