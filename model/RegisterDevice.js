const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RegisterDeviceSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    deviceId: { 
        type: String,
        required: true 
    },
    status: { 
        type: String,
        default : "" 
    },
    departmentName: { 
        type: String,
        required: true,
        default: "" 
    },
    hospitalName: {
        required: true,
        type: String,
        default: ""
    },
    wardNo: {
        required: true,
        type: String
    },
    doctorName: {
        required: true,
        type: String,
        default: ""
    },
    bioMed: {
        type: String,
        required: true,
        default:""
    },
    IMEI_NO: {
        type: String,
        required: true,
        default: ""
    },  
    ventilatorOperator: {
        type: String,
        required: true,
        default: ""
    },
},
    { timestamps: true })

const RegisterDevice = mongoose.model('registered_devices', RegisterDeviceSchema)
module.exports = RegisterDevice
