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
      data.results.forEach(x => { MessagesView.renderMessage(x); });
      // examine the response from the server request:
      console.log(data);
      //check if data.results for a roomname (does it have one)
      data.results.forEach(messageObj => {
        if (messageObj.roomname) {
          RoomsView.renderRoom(messageObj);
        }
      });
      //if it has one, call RoomsView.renderRoom('data roomname')
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
