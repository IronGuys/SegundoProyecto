const logout = (req,res,next) => {
    if(req.user){
        next();
    }else{
        console.log("you left this page");
        res.redirect('/');
    }
}

module.exports = logout;