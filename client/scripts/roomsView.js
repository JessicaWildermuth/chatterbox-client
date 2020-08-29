var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(message) {
    $('select').addClass('roomMenu');
    console.log(message.roomname);
    var roomName = RoomsView.render({roomname: message.roomname});
    $(roomName).appendTo(RoomsView.$select);
    // RoomsView.$select.append('<option></option>');
    // $('option').append(room);
  },

  render: _.template(`
      <option value="roomname"</option>
             <%=roomname%>
      `)
};


