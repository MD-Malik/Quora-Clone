const postModel = require('../Models/post');
const questionModel = require('../Models/question')


function getAllUser(req, res, next){
    console.log("hello")
    res.send('hellp')
}

async function createPost(req, res, next){
    try{
        let post = req.body;
        let response = await postModel.insertMany([post]);
        console.log(response);
        res.json(response)
    }
    catch (error) {
        res.status(500).json(error);
    }
}

async function getAllPost(req,res,next){
    try{
        let response = await postModel.find({})
        console.log(response);
        res.json(response)
    }
    catch (error) {
        res.status(500).json(error);
    }
}
async function  createQuestion(req, res, next){
    try{
        let question = req.body;
        let response = await questionModel.insertMany([question]);
        console.log(response);
        res.json(response)
    }
    catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllUser,
    createPost,
    getAllPost,
    createQuestion
}