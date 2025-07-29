module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pubs/affordable', 
      handler: 'pub.findAffordable',
      config: { 
        auth: false,
      }
    }
  ]
};
    /*{
      method: 'GET',
      path: '/userv/passes/:userID/',
      handler: 'pass.getUserPasses',
      config: {
        policies: [],
        middlewares: [],
      },
    }*/