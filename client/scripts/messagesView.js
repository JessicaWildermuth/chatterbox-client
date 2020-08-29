// CONTROLLER : LOGIC Happens

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    console.log(message);
    MessagesView.$chats.append('<div></div>');
    MessagesView.$chats.append(message.username);
    MessagesView.$chats.append(message.username);
  },

  render: function() {

  }

};