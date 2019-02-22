import React, { Component } from 'react';

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  usernameChange(e) {
    this.setState({ username: e.target.value })
  }

  passwordChange(e) {
    this.setState({ password: e.target.value })
  }

  submit() {
    this.getConnect();
  }

   getConnect() {
 
    var url = 'http://localhost:7001/sing';
    var data = {'username': this.state.username,'userpassword':this.state.password};

    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
    'Content-Type': 'application/json'
    }
    })
    .then(response => response.text()
    .then(data=>{
    if(data==='success') window.alert('验证成功，欢迎登录');
    else window.alert('验证失败，用户名或密码错误');
    }
    ))

  }

  render() {
    return (
      <div className="container-hero login-card" data-v-3646e638="" data-v-47d4be7d="">
        <div className="generic-card login" data-v-50280c9c="" data-v-3646e638="">
          <h4 data-v-50280c9c="" data-v-3646e638="">Online Banking Sign In</h4>
          <div className="row" data-v-50280c9c="" data-v-3646e638="">
            <div className="login-switcher-left login-switcher" style={{ color: '#ffffff', backgroundColor: '#4D3157' }} data-v-50280c9c=""
              data-v-3646e638="">Personal</div> <a href="jacascript:void(0)" className="login-switcher-right login-switcher"
                data-v-541744a1="" data-v-3646e638="" data-v-50280c9c=""><span data-v-3646e638="">普通会员</span></a>
          </div>
          <div className="login-form text-center" data-v-50280c9c="" data-v-3646e638="">

            <div className="OZRK__input-container OZRK__input-container--has-icon OZRK__input-container--has-value" data-v-a1ef0c88="" data-v-3646e638=""
              data-v-50280c9c="">
              <div aria-hidden="true" className="OZRK__input-container__icon material-icons" data-v-a1ef0c88=""><img src="../../../public/img/user1.png" width="20" height="20" alt="" /></div>
              <label data-v-a1ef0c88="" data-v-3646e638="">Username</label>
              <input type="text"
                name="username" aria-label="Username" onChange={this.usernameChange} data-v-a1ef0c88="" data-v-3646e638="" />

            </div>
            <div data-v-a1ef0c88="" data-v-3646e638="" className="OZRK__input-container OZRK__input-container--has-icon OZRK__input-container OZRK__input-container--has-icon OZRK__input-container--has-value"
              data-v-50280c9c="">
              <div data-v-a1ef0c88="" aria-hidden="true" className="OZRK__input-container__icon material-icons"><img src="../../../public/img/lock.png" width="20" height="20" alt="" /></div>
              <label data-v-3646e638="" data-v-a1ef0c88="">Password</label>
              <input onChange={this.passwordChange}
                data-v-3646e638="" data-v-a1ef0c88="" type="password" name="password"
                aria-label="Password" />

            </div> <button onClick={this.submit} className="login-btn ozrk-button ozrk-button--standard" data-v-3646e638=""
              data-v-50280c9c="">Log In</button> <a data-v-3646e638="" data-v-50280c9c="" href="jacascript:void(0)"
                style={{ marginRight: '8px' }}>Forgot Password?</a> | <a href="jacascript:void(0)"
                  style={{ marginLeft: '8px' }} data-v-50280c9c="" data-v-3646e638="">Enroll In Online Banking</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Sign