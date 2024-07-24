'use strict';

/**
 * spec-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spec-guide.spec-guide');
