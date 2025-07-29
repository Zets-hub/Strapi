'use strict';

module.exports = ({ strapi }) => ({
  async getAffordablePubs(maxPrice = 15) {
    try {
      const affordablePubs = await strapi.entityService.findMany('api::pub.pub', {
        filters: {
          avgPrice: {
            $lte: maxPrice
          }
        },
        populate: ['picture']
      });
      return affordablePubs;
    } catch (err) {
      strapi.log.error('Error in getAffordablePubs service:', err);
      throw err;
    }
  },

  async find(params) {
    return strapi.entityService.findMany('api::pub.pub', params);
  }
});