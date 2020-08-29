// CONTROLLER : LOGIC Happens

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    //make use of the MessageView.render()

    if (message.length === 0) {
      message.text = '';
    }
    // var encodedMessage = MessagesView.encodeHTML(message.text);
    var newMessage = MessageView.render({username: message.username, text: message.text});
    // MessagesView.$chats.append('<div></div>');
    // MessagesView.$chats.append(message.username);
    // MessagesView.$chats.append(message.text);
    $(newMessage).appendTo(MessagesView.$chats);
    // MessagesView.$chats.appendTo(newMessage);
  },

  render: function() {

  },

  encodeHTML: function(string) {
    return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/>/g, '&gt;').replace(/'/g, '&#x27;');
  }

};


// if (s==='') return '_';


//the call endcomeHTML with the message.text value
// return of that function call should be set to a variable
//instead of setting text: message.text , we would set it to our new variable