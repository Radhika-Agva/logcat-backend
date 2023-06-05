// deviceRouter.js
const express = require('express');
const deviceController = require('../controller/deviceController');
const locationController = require('../controller/locationController');
const router = express.Router();

router.post('/register', deviceController.registerNewDevice);
router.get('/', deviceController.getAllDevices);
// router.post('/services', deviceController.addDeviceService);
// router.get('/:deviceId', deviceController.getDeviceById);

// router.put('/:deviceId', deviceController.updateDevice);
// router.delete('/:deviceId', deviceController.deleteDevice);
// router.post('/logs',deviceController.createLogs);



// router.post("/:project_code", locationController.saveNewLocation);


module.exports = router;
