'use strict';

var express = require('express');
var accountController = require('./account.controller');
var scheduleController = require('./schedule/schedule.controller');

var router = express.Router();

router.get('/', accountController.index);
router.get('/:accountId', accountController.show);
router.post('/', accountController.create);
router.put('/:accountId', accountController.update);
router.patch('/:accountId', accountController.update);
router.delete('/:accountId', accountController.destroy);

router.get('/:accountId/schedules', scheduleController.index);
router.get('/:accountId/schedules/:scheduleId', scheduleController.show);
router.post('/:accountId/schedules', scheduleController.create);
router.put('/:accountId/schedules/:scheduleId', scheduleController.update);
router.patch('/:accountId/schedules/:scheduleId', scheduleController.update);
router.delete('/:accountId/schedules/:scheduleId', scheduleController.destroy);

module.exports = router;
