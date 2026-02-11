import jwt from 'jsonwebtoken'


export const authMiddleware = async(req,res,next)=>{

    const authHeaders = req.headers.authorization
    
    if(!authHeaders || !authHeaders.startsWith("Bearer ")){
        return res.status(401).json({message:"Not authorized"})
    }

    const token = authHeaders.split(" ")[1]

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    }       
    catch(err){
        console.log(err)
        return res.status(401).json({message:"Invalid Token."})
    }
};

