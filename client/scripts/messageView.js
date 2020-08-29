var MessageView = {

  // VIEW: WHERE IT ACTUALLY RENDERS

  render: _.template(`
      <div class="chat">
      <div class="username"></div>
          {{username}}
      <div></div>
      </div>
    `)
  // renderMessage();
};


