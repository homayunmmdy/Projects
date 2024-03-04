const { constants } = require("../constance")
const errorHandler = (err , req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ 
                title : "Validation Faild " , 
                message : err.message , 
                stackTrace: err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({ 
                title : "Not Found" , 
                message : err.message , 
                stackTrace: err.stack
            })
        case constants.UNAUTHORIZED:
            res.json({ 
                title : "UN authorized" , 
                message : err.message , 
                stackTrace: err.stack
            })
        case constants.FORBIDDEN:
            res.json({ 
                title : "Forbidden" , 
                message : err.message , 
                stackTrace: err.stack
            })
        case constants.SERVER_ERROR:
            res.json({ 
                title : "Server Error" , 
                message : err.message , 
                stackTrace: err.stack
            })
        default:
            console.log("No Erroe , All good!");
            break;
    }
    
    
};

module.exports = errorHandler