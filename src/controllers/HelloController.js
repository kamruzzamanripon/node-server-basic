
exports.HelloGet = (req, res)=>{
    res.status(200).json({status: "success", data:"This is First get Api request"})
}


exports.HelloPost = (req, res)=>{
    res.status(200).json({status: "success", data:"This is First Post Api request"})
}