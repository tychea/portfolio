const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../modals/User')
const Document = require('../../modals/Document')
//@route GET api/documents
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

//@route POST api/documents
//@desc Test Route
//@access Private 
router.post('/',auth, async(req,res)=>{
    const document = new Document(req.body);
    try {      
    await document.save();
    res.status(200).json({success:'success'})  
    } catch (error) {
        
        res.status(500).json(error)
    }  
})

module.exports = router;