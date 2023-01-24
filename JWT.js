const {sign,verify} = require('jsonwebtoken')

const createToken = (user) =>{
    const accessToken = sign({usernames: user.name, id: user.id},"SECRET")
    return accessToken;
}

const validateToken =(req,res,next)=>{
const accessToken = req.cookie['access_token'];
console.log(accessToken);


if(!accessToken){
    res.status(400).json({err: 'user not authentified'});
}


try{
    const validToken=verify(accessToken, "SECRET");
    if(validToken){
        req.authenticated=true;
        return next();
    }
}
catch(err){
    return res.status(400).json({err:err.message});
}
}
module.exports={createToken,validateToken};




