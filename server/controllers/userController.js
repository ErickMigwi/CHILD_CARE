const userModel = require('../models/userModel')
const logger = require('../Config/logger')
const session = require('../Config/sessions')
const cookieParser = require('../Config/cookieParser')

exports.registerUser = async(req, res)=>{
    const data = req.body
    console.log(req.body);
    try{
        await userModel.createTable()

        const emailExists = await userModel.checkEmailsExist(data.email)
       console.log(emailExists);
        if(emailExists.length > 0){
            res.send({msg:'Email exists try loging in'})
            return;
        }
     const result =  await userModel.createaccount(data)
     res.send({...result, msg:'Account created successfully'})
    }catch(error){
        console.log(error);
    }
}

exports.login = async(req, res)=>{
    const data =req.body
    const emailExists = await userModel.checkEmailsExist(data.email)
    
    if(emailExists.length > 0){
        
      const passwordCorrect=  await userModel.comparePassword(data.password, emailExists[0].password)
      if(passwordCorrect){
        req.session.userId = emailExists
        res.send({msg:'successfull login', ...emailExists})
      }else{
        res.send({msg:'wrong password'})
      }
    }else{
        res.send({msg:"Email doesn't exist, Create an account"})
    }
}

exports.getAuthenticatedUser = async (req, res) => {
    if (req.session.userId) {
      res.send(req.session.userId);
      console.log(1);
    } else {
      res.send({ msg: 'no user authenticated' });
    }
  };

  exports.updateprofileImage =  async (req, res) => {
    const id = req.body.idusers;
    const profileimage = req.file.filename;
    try {
       await userModel.updateprofileImage(id, profileimage);
       res.send({msg: 'profile updated'});
    } catch (error) {
       console.log(error);
    }
 };
 
 exports.getUser= async (req, res)=>{
    const id = req.query.id
   
    try{
       const result =  await userModel.getUser(id)
       res.send({...result, msg:'hello'})
       console.log({...result, msg:'hello'});
    }catch(error){
        console.log(error);
    }
 }

 exports.updateprofile = async(req, res)=>{
    const data = req.body

    try{
        await userModel.updateprofile(data)
        res.send({msg:'profile updated'})
    } catch(error){
        logger.log({
            level:'error', 
            message:"updating profile@controllers",
            error:error.message
        })
    }
 }