const StudentsModel = require('../models/StudentsModel');

exports.InsertStudent = (req, res)=>{
    let reqBody = req.body;
    StudentsModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:'fail', data:err})
        }else{
            res.status(200).json({stauts:'success', data:data})
        }
    })
}

exports.ReadStudents = (req, res)=>{
    let Query={};
    let Projection="Name Roll Class Remarks";

    StudentsModel.find(Query, Projection, (err, data)=>{
        if(err){
            res.status(400).json({status:'fail', data:err})
        }else{
            res.status(200).json({stauts:'success', data:data})
        }
    })
}


exports.UpdateStudent = (req, res)=>{
    let id = req.params.id;
    let QUERY = {_id:id};
    let reqBody = req.body;

    StudentsModel.updateOne(QUERY, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:'fail', data:err})
        }else{
            res.status(200).json({stauts:'success', data:data})
        }
    })
}


exports.DeleteStudent = (req, res)=>{
    let id = req.params.id;
    let QUERY = {_id:id};

    StudentsModel.remove(QUERY,(err, data)=>{
        if(err){
            res.status(400).json({status:'fail', data:err})
        }else{
            res.status(200).json({stauts:'success', data:data})
        }
    })
}