'use strict';

/**
 * rotation-build service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rotation-build.rotation-build');
