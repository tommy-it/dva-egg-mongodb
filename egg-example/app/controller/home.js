'use strict';

const Controller = require('egg').Controller;
const db = require('../../utils/mongod.js');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async info() {
    const { ctx } = this;
    ctx.body = 'tommy';
  }

  async find() {
    const { ctx } = this;
    ctx.response.append = 'Access-Control-Allow-Origin:*';
    const data = await db.find('jjhunhe');
    console.log(data);
    const newData = data.map((item, index) => {
      item.key = index;
      return item;
    });
    ctx.body = {
      data: newData,
    };
  }
  async sing() {
    const { ctx } = this;
    const username = ctx.request.body.username;
    const userpassword = ctx.request.body.userpassword;
    ctx.response.append = 'Access-Control-Allow-Origin:*';
    const data = await db.find('user', { 'username': username, 'userpassword': userpassword });
    console.log(data);
    // ctx.body = data;
    if (data.length > 0) {
      ctx.response.body = 'success';
      ctx.cookies.set('username', username);
    } else {
      ctx.response.body = 'fail';
    }
  }
}

module.exports = HomeController;
