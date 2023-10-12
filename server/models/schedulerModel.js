const db = require('../Config/database')
const logger = require('../Config/logger')

const createTableSchedule = async () => {
    let dbconnection;

    try {
        // Assuming db.getConnection() returns a promise-based connection
        dbconnection = await db.getConnection();

        await dbconnection.query('CREATE TABLE IF NOT EXISTS schedule (idschedule INT AUTO_INCREMENT PRIMARY KEY, scheduledate DATETIME, userid INT)');

        return 'success';
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Creating table schedule',
            error: error.message
        });

        return 'error'; // You might want to handle this in the calling code
    } finally {
        if (dbconnection) {
            dbconnection.release(); // Release the connection back to the pool
        }
    }
};

const insertSchedule = async(data)=>{
    const dbconnection = await db.getConnection()
    try{
        await dbconnection.query('insert into schedule (scheduledate, userid) values (?,?)', [data.date, data.id])
        res.send('schedule date set')
    }catch (error){
        logger.log({
            level:'error',
            message:"inserting schedule",
            error:error.message
        })
    } finally{
        if (dbconnection) {
            dbconnection.release(); // Release the connection back to the pool
        }
    }
}

module.exports = {createTableSchedule, insertSchedule}