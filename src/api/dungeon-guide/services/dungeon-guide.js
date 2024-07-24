'use strict';

/**
 * dungeon-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dungeon-guide.dungeon-guide');
