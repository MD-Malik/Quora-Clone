const postModel = require('../Models/post');
const questionModel = require('../Models/question');
const descriptionModel = require('../Models/description');


function getAllUser(req, res, next){
    console.log("hello")
    res.send('hellp')
}

async function createPost(req, res, next){
    try{
        let post = req.body;
        let response = await postModel.insertMany([post]);
        let descriptioninfo = {
            postId: response[0]._id,
            title: req.body.description.title,
            images: req.body.description.images
        }
        console.log(descriptioninfo);
        await descriptionModel.insertMany([descriptioninfo]);
        console.log(response);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

async function getAllPost(req,res,next){
    try{
        let response = await postModel.find({}).populate('descriptionId');
        console.log(response);
        res.json(response)
    }
    catch (error) {
        res.status(500).json(error);
    }
}

async function getDescription(req,res,next){
    try{
        console.log(req.params);
        let response = await descriptionModel.find({ postId: mongoose.Types.ObjectId(req.params.postId)}).populate('postId');
        res.json(response);
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
    createQuestion,
    getDescription
}