var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(room) {
    $('select').addClass('roomMenu');
    RoomsView.$select.append(room);
  },

  render: function() {
  }

};
