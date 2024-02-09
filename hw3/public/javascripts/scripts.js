//getting items for the order confirmation and textbox
const notes = document.getElementById('myTextbox');
const form = document.getElementById('myForm');
const confirmation = document.getElementById('orderConfirmation');

//hiding the confirmation page
$(confirmation).hide();

//changing the text of the button depending on the drop down text
$(document).ready(function(){
    $('.dropdown-content a').click(function(){
        var month = $(this).attr('sectionId'); 
        document.getElementById('dropbtn').innerHTML = month;
    });
});

//event listener for submit button
form.addEventListener('submit', (e)=> {
    e.preventDefault();

    //if notes contain vegan then have a popup alert
    if (notes.value.includes('vegan')){
        alert("The cheesecake is not vegan since it contains dairy!");
    }
    else{

        //hide the form and show confirmation
        $(form).hide();
        $(confirmation).show();

        //display selected quantity
        const quantityConfirmation = document.getElementById('quantityConfirmation');
        const quantitySelected = document.getElementById('quantitySelected');
        quantityConfirmation.innerHTML = "Quantity: " + quantitySelected.value;

        //display selected flavor
        const toppingSelected = document.getElementsByName('topping');
        const toppingConfirmation = document.getElementById('toppingConfirmation');
        for(i = 0; i < toppingSelected.length; i++) {
            if (toppingSelected[i].checked) {
                toppingConfirmation.innerHTML = "Topping: " + toppingSelected[i].value;
            }
        }

        //display notes
        const notesConfirmation = document.getElementById('notesConfirmation');
        notesConfirmation.innerHTML = "Notes: " + notes.value;
    }
})