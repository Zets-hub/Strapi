'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pub.pub', ({ strapi }) => ({

    async findAffordable(ctx) {
        const maxPrice = ctx.query.maxPrice ? Number(ctx.query.maxPrice) : 15;
        try {
            const result = await strapi.service('api::pub.pub').getAffordablePubs(maxPrice);
            ctx.body = result;
        } catch (err) {
            ctx.status = 500;
            ctx.body = { error: 'Internal Server Error', details: err.message };
        }
    },

}));