var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#addRoomButton').on('click', Rooms.add);

  },

  renderRoom: function(message) {

    // Rooms.set.add();



    var newRoom = new Option(message.roomname);
    $(newRoom).html(message.roomname);
    $(RoomsView.$select).append(newRoom);
  },

};
