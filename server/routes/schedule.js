const express = require('express')
const router = express.Router()
const scheduleController = require('../controllers/schedulerController')

router.post('/setschedule', scheduleController.insertSchedule)

module.exports = router