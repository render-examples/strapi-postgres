'use strict';

/**
 * spec-guide router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::spec-guide.spec-guide');
