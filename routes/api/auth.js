const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../modals/User')

//@route GET api/auth
//@desc Test Route
//@access Private 
router.get('/',auth, async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password')
        
    res.status(200).json({user})  
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Sever Error')
    }  
})


module.exports = router;
