
const postModel = require('../Models/post');
const questionModel = require('../Models/question');
const answerModel = require('../Models/answer');
const { default: mongoose } = require('mongoose');
const answer = require('../Models/answer');

async function createPost(req, res, next){
    try{
        let post = req.body;
        let response = await postModel.insertMany([post]);
        // let descriptioninfo = {
        //     postId: response[0]._id,
        //     title: req.body.description.title,
        //     images: req.body.description.images
        // }
        // console.log(descriptioninfo);
        // await descriptionModel.insertMany([descriptioninfo]);
        console.log(response);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

async function getAllPost(req,res,next){
    try{
        let response = await postModel.find({});
        console.log(response);
        res.json(response)
    }
    catch (error) {
        res.status(500).json(error);
    }
}
async function getAllQuestion(req,res,next){
    try{
        let response = await questionModel.find({});
        console.log(response);
        res.json(response)
    }
    catch (error) {
        res.status(500).json(error);
    }
}

// async function getDescription(req,res,next){
//     try{
//         console.log(req.params);
//         let response = await descriptionModel.find({ postId: mongoose.Types.ObjectId(req.params.postId)}).populate('postId');
//         res.json(response);
//     }
//     catch (error) {
//         res.status(500).json(error);
//     }
// }

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

async function addAnswer (req,res,next){
    try{
        req.body.questionId = mongoose.Types.ObjectId(req.body.questionId);
        let response = await answerModel.insertMany([req.body]);
        await questionModel.updateOne({_id: req.body.questionId}, {$push :{answers: response[0]._id}})
        console.log(response);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createPost,
    getAllPost,
    createQuestion,
    getAllQuestion,
    addAnswer
}