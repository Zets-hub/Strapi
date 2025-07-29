'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pub.pub', ({ strapi }) => ({

    async findAffordable(ctx) {
            const { maxPrice = 15, sort = 'asc' } = ctx.query;
    try {
        const result = await strapi.service('api::pub.pub').getAffordablePubs({
            maxPrice: Number(maxPrice),
            sortOrder: sort
        });
            ctx.body = result;
        } catch (err) {
            ctx.status = 500;
            ctx.body = { error: 'Internal Server Error', details: err.message };
        }
    },
}
)
);