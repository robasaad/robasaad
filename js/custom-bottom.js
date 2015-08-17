// Contact form action
$("form").submit(function(event) 
     {
         /* stop form from submitting normally */
         event.preventDefault();

         /* get some values from elements on the page: */
         var $form = $( this ),
             submit = $form.find( 'input[type="submit"]' ),
             name_value = $form.find( 'input[name="name"]' ).val(),
             email_value = $form.find( 'input[name="email"]' ).val(),
             phone_value = $form.find( 'input[name="phone"]' ).val(),
             referral_value = $form.find( 'input[name="referral"]' ).val(),
             message_value = $form.find( 'textarea[name="message"]' ).val(),
             url = $form.attr('action');

         /* Send the data using post */
         var posting = $.post( url, { 
                           name: name_value,
                           email: email_value,
                           phone: phone_value,
                           referral: referral_value,
                           message: message_value
                       });

         posting.done(function( data )
         {
             /* Change the button text. */
             $(submit).attr('value', 'thank you!').css('color', '#000');
             
             /* Disable the button. */
             // $(submit).attr("disabled", true);
             
             /* Fade in the contact message */
             $('#contact-message').fadeIn();
             
         });
    });