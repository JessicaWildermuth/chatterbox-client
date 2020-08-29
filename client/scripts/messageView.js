var MessageView = {

  // VIEW: WHERE IT ACTUALLY RENDERS


  render: _.template(`
      <div class="chat">
      <div class="username"></div>
        <span> <%-username%> </span>
      <div><%-text%></div>
      </div>
    `)
  // renderMessage();
};


