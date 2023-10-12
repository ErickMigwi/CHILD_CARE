const userScheduler = require('../models/schedulerModel')
const logger = require('../Config/logger')

exports.insertSchedule = async(req, res)=>{
    const data = req.body
    try{
        const result = await userScheduler.
        createTableSchedule()
        if(result ==='success'){
            await userScheduler.insertSchedule(data)
            res.send("scheduled date set")
        }
    }catch(error){
        logger.log({
            level:'error',
            message:'inserting data to schduler@controller'
        })
    }
}