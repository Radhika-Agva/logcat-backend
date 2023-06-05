const express = require('express');
const mongoose = require('mongoose');
const calibrationModel = require('../model/calibrationModel.js')
const { validationResult } = require('express-validator');
// const Projects = require('../model/project.js');
const Joi = require('joi');

const saveCalibrationData = async (req, res) => {
    try {
        const schema = Joi.object({
            deviceId: Joi.string().required(),
            message: Joi.string().required(),
            date: Joi.string().required(),
            name: Joi.string().required(),

        })
        let result = schema.validate(req.body);
        if (result.error) {
            console.log(req.body);
            return res.status(200).json({
                status: 0,
                statusCode: 400,
                message: result.error.details[0].message,
            })
        }

        const project_code = req.params.project_code;
        const calibrationData = new calibrationModel(req.body);
        const saveDoc = await calibrationData.save();
        if (!saveDoc) {
            return res.status(404).json({
                status: 0,
                msg: "Calibration data not saved."
            });
        }
        return res.status(201).json({
            status: 1,
            msg: "Calibration data has been saved successfully.",
            data: saveDoc
        });
    } catch (err) {
        return res.status(500).json({
            status: -1,
            data: {
                err: {
                    generatedTime: new Date(),
                    errMsg: err.stack,
                    msg: err.message,
                    type: err.name,
                },
            },
        });
    }
}





module.exports = {
    saveCalibrationData
}