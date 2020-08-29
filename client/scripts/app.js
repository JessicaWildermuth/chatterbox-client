var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(App.fetch, 3000, App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log(data.results);
      //take data results array  and filter out any messageobj that do not contain a message
      var filteredMessages = data.results.filter(messageObj => messageObj.text);
      filteredMessages.forEach(x => { MessagesView.renderMessage(x); });
      // examine the response from the server request:
      //check if data.results for a roomname (does it have one)
      filteredMessages.forEach(messageObj => {
        if (messageObj.roomname) {
          RoomsView.renderRoom(messageObj);
        }
      });

      filteredMessages.forEach(messageObj => {
        // var userName = App.decodeEntities(messageObj.username);
        $('.username span').click(function() {
          console.log(('Click Works'));
        });
      });

      //if it has one, call RoomsView.renderRoom('data roomname')
      callback();
    });
  },

  // decodeEntities: function(encodedString) {
  //   var textArea = document.createElement('textarea');
  //   textArea.innerHTML = encodedString;
  //   return textArea.value;
  // },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
