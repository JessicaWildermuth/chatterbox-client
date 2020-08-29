var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    // Stop the browser from submitting the form
    //select submit button with jquery
    //on click - add the input to messages
    //use post method from parse to send the message to the server
    var textInput = document.getElementById('message').value;
    // textInput.innerText;
    var message = {username: 'Billessie', text: textInput};
    Parse.create(message);
    $('#message').val('');
    // document.getElementById('message').reset();

    //data property of that would be the stringified version of our input
    //manipulate our model



    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};