const { log } = require('winston');
const db = require('../Config/database.js');
const logger = require('../Config/logger.js')
const bcrypt = require('bcrypt')
const createTable = async () => {
  const dbconnection = await db.getConnection();

  try {
    await dbconnection.query('CREATE TABLE IF NOT EXISTS users (idusers INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), firstname VARCHAR(300), lastname VARCHAR(300), age INT, medicalhistory VARCHAR(2000), allergies VARCHAR(2000), password VARCHAR(200), profileimage VARCHAR(200) )');
  } catch (error) {
    logger.log({
        level:'error',
        message:'creating table',
        error:error.message
    })
  } finally {
    dbconnection.release();
  }
};

const checkEmailsExist = async (email)=>{
    const dbconnection = await db.getConnection()
    
    try{
      
     let [result] =   await dbconnection.query('select * from users where email = ?', [email])
     return result
    }catch (error){
        logger.log({
            level:'error',
            message:'checking for duplicate messages',
            error:error.message
        })
    }finally{
        dbconnection.release()
    }
}
const createaccount = async(data)=>{
    console.log(data);
    const dbconnection = await db.getConnection()
   const hashedPassword = await bcrypt.hash(data.password, 10)
  try{
    const [result] =  await dbconnection.query('insert into users(email, firstname, lastname, age, medicalhistory, allergies, password) values(?, ?, ?, ?, ? ,?, ?)', [data.email, data.firstname, data.lastname, data.age, data.medicalhistory, data.allergies, hashedPassword])
    return result
  }catch(error){
    logger.log({
        level:'error',
        message:'creating an account',
        error:error
    })
  }finally{
    dbconnection.release()
  }
}
const comparePassword = async(password, hashedPassowrd)=>{
    try{
      const correctPassword =  await bcrypt.compare(password, hashedPassowrd)
      return correctPassword
    }catch(error){
        logger.log({
            level:'error',
            message:'checking password',
            error:error
        })
    }
}
const updateprofileImage = async(id,profileimage)=>{
    const dbconnection =await db.getConnection()
    try{
       
        await dbconnection.query('update users set profileimage = ? where idusers = ?', [profileimage,id])
    } catch(error){
        logger.log({
            level:'error',
            message:'updating profileimage',
            error: error.message
        })
    }finally{
        dbconnection.release()
    }
}
const getUser = async(id)=>{
    const dbconnection = await db.getConnection()
    try{
        console.log(id);
        const [result] = await dbconnection.query('select * from users where idusers = ?', [id])
        return result
    }catch(error){
        logger.log({
            level:'error',
            message:'get user',
            error:error.message
        })
    }
}
const updateprofile = async(data)=>{
    const dbconnection = await db.getConnection()
    try{
        await dbconnection.query('update users set email = ?, firstname = ?, lastname= ?, age = ?, medicalhistory = ?, allergies  =?  where idusers = ?', [data.email, data.firstname, data.lastname, data.age, data.medicalhistory, data.allergies, data.id])
    }catch(error){
        logger.log({
            level:'error',
            message:'updating profile',
            error:error.message
        })
    }finally{
        dbconnection.release()
    }
}
module.exports = { createTable, checkEmailsExist, createaccount, comparePassword, updateprofileImage, getUser, updateprofile };
