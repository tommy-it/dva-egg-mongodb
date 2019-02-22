'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/info', controller.home.info);
  // 查找基金
  router.get('/find', controller.home.find);
  router.post('/sing', controller.home.sing);
};
