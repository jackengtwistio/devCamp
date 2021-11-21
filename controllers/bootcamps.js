const Bootcamp = require('../models/bootcamp')
const ErrorRes = require('../utils/ErrorRes')


exports.getBootcamps = async (req, res, next) =>{
    try {
        const bootcamps =await Bootcamp.find()
        res.status(200).json({ success: true, data: bootcamps})
    } catch(err){
        // res.status(404).json({success: false, data:err})
        next(new ErrorRes(`heya!! ${req}is no good`, 499));
    }
}

exports.getBootcamp = async (req, res, next) =>{
    try {
        const bootcamp =await Bootcamp.findById(req.params.id)
        res.status(200).json({ success: true, data: bootcamp})
    } catch(err){
        // res.status(404).json({success: false, data:err})
        next(new ErrorRes(`oooh no ${req.params.id} doesn't exist`, 454));
    }
}

exports.createBootcamp = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.json({ success: true, msg: `you created ${bootcamp}`})
    } catch(err){ 
        // res.status(400).json({success: false, msg: err})
        next(new ErrorRes(`look what you did ${err.message}`));
    }

}

exports.updateBootcamp = async (req, res, next) =>{
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidate:true});
    if(!bootcamp){
        return res.status(400).json({success: false})
    }
    res.status(200).json({success: true, data: bootcamp})
}

exports.deleteBootcamp = (req, res, next) =>{
    res.json({ success: true, msg: `deleting ${req.params.id}`})
}