
const errorHandler = (err,req,resp,next) => {
    const statusCode = resp.statusCode === 200 ?500: statusCode;
    resp.status(statusCode);
    resp.json({
        message:err.message,
        stack : process.env.NODE_ENV === "production" ? null : err.stack,
    })

}


module.exports = {errorHandler};