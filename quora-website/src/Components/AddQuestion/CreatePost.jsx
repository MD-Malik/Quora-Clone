import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components"
import { isBoxVisibleReducer } from "../../Redux/ShowAddQuestion Reducer/reducer";
import { isBoxVisibleAction } from "../../Redux/ShowAddQuestion Reducer/action";
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage"
import { storage } from './firebase'

const Div = styled.div`
background:rgba(255, 255, 250, 1);
border:2px solid lightgrey;
color:black;
width:max-content;
margin:auto;
border-radius:10px;
display:flex;
flex-direction:column;
&>h1{
    font-size:25px;
    font-weight:400;
    color:grey;
    margin-left:10px;
    width:fit-content;
    margin-top:10px;
    padding:0 10px;
    &:hover{
        background:lightgrey;
        border-radius:50%;
        cursor:pointer;
    }
}
&>div:nth-child(2){
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    &>div{
        display:flex;
        flex-direction:row;
        width:max-content;
        height:30px;
        padding:0 100px;
        border-bottom:3px solid grey;
        &>img{
            margin-bottom:10px;
        }
        &>p{
            margin-left:10px;
            margin-top:0px;
            &:hover{
                cursor:pointer;
            }
        }
    }
    &>div:nth-child(1){
        border-bottom:${props => props.children[1].props.children[1].props.props === "addquestion" ? "3px solid blue" : "3px solid grey"};
    }
    &>div:nth-child(2){
        border-bottom:${props => props.children[1].props.children[1].props.props === "createpost" ? "3px solid blue" : "3px solid grey"};
    }
}
&>div:nth-child(3){
    background:#ebf0ff;
    padding:10px;
    margin:15px;
    border-radius:10px;
    &>h5{
        color:#2e69ff;
        font-size:15px;
    }
    &>ul{
        color:#2e69ff;
        font-size:14px;
    }
}
&>div:nth-child(4){
    display:flex;
    flex-direction:row;
    &>img{
        height:25px;
        border-radius:50%;
        margin-left:20px;
    }
    &>button{
        display:flex;
        flex-direction:row;
        border-radius:15px;
        width:fit-content;
        height:30px;
        padding:5px;
        margin-left:10px;
        &>p{
            margin-top:0px;
            margin-left:5px;
            color:grey;
        }
        &>p:nth-child(3){
            transform:Rotate(90deg);
            width:15px;
            margin-left:0px;
        }
        &>img{
            height:25px;
            width:25px;
        }
    }
}
&>div:nth-child(5){
    margin-top:20px;
    &>input{
        width:600px;
        margin-left:25px;
        border:none;
        height:30px;
        font-size:18px;
        border-bottom:2px solid grey;
        &:focus{
            border-bottom:2px solid grey;
            outline:none;
        }
    }
}
&>div:nth-child(6){
    margin-top:150px;
    border-top:2px solid grey;
    padding:10px;
    display:flex;
    flex-direction:row-reverse;
    &>button:nth-child(1){
        background:blue;
        filter:blur(0.5px);
        color:white;
        &:hover{
            cursor:pointer;
            filter:blur(0px);
        }
    }
    &>button{
        border:none;
        padding:10px 18px;
        border-radius:178px;
        font-weight:bold;
    }
    &>button:nth-child(2){
        color:grey;
        &:hover{
            background:lightgrey;
            cursor:pointer;
        }
    }
}
`
const Outer_div = styled.div`
position:absolute;
width:100%;
top:100px;
`
const CreatePostStyle = styled.div`
margin-top:170px;
&>div{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    border-top:2px solid lightgrey;
    padding:10px;
    &>button{
        background:blue;
        border:none;
        padding:10px 20px;
        color:white;
        font-weight:bold;
        border-radius:20px;
        filter:contrast(70%);
        &:hover{
            cursor:pointer;
            filter:contrast(100%);
        }
    }
    &>div{
        &>img{
            height:20px;
            margin-top:7px;
            padding:4px;
            border-radus:5px;
            border:1px solid white;
            &:hover{
                border:1px solid blue;
                border-radius:5px;
                padding:4px;
                cursor:pointer;
            }
        }
        &>img:nth-child(2){
            margin-left:10px;
        }
    }
}
`
const fileLabel = styled.label`
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
`
const fileInput = styled.input`
display: none;
`

export const CreatePost = () => {
    const { user_details } = useSelector((state) => state.currentUserReducer)

    const { isBoxVisible } = useSelector((state) => state.isBoxVisibleReducer)

    const [task, setTask] = useState("addquestion")

    const [image, setImage] = useState(null)

    const [progress, setProgress] = useState(0)

    const dispatch = useDispatch(isBoxVisibleReducer);

    const uploadFiles = (file) => {
        if (file == null) return;

        const storageRef = ref(storage, `/images/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog)
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
            }
        );

    };
    return (
        <>
            <Outer_div hidden={isBoxVisible}>
                <Div>
                    <h1 onClick={() => dispatch(isBoxVisibleAction(true))}>X</h1>
                    <div>
                        <div props={task}>
                            <img src="https://cdn-icons-png.flaticon.com/128/942/942802.png" alt="?" />
                            <p onClick={() => setTask("addquestion")}>Add Question</p>
                        </div>
                        <div props={task}>
                            <img src="https://cdn-icons-png.flaticon.com/128/1250/1250615.png" alt="pencil" />
                            <p onClick={() => setTask("createpost")}>Create Post</p>
                        </div>
                    </div>
                    <div hidden={task === "createpost"}>
                        <h5>Tips on getting good ansers quickly</h5>
                        <ul>
                            <li>Make sure your question has not been asked already</li>
                            <li>Keep your question short and to the point</li>
                            <li>Double-check grammer and spelling</li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <img src={user_details.userimage} alt="profile_img" />
                        <button>
                            <img src="https://cdn-icons-png.flaticon.com/128/615/615075.png" alt="public" />
                            <p>Public</p>
                            <p>{">"}</p>
                        </button>
                    </div>
                    <div>
                        <input type="text" placeholder={task === "addquestion" ? 'Start your question with "What", "Why", etc.' : 'Say something...'} />
                        {
                            progress ? <h2>Progress {progress}%</h2> : null
                        }
                    </div>
                    <div style={task === "createpost" ? { border: "none" } : { borderTop: "2px solid grey" }}>
                        <button hidden={task === "createpost"} >Add question</button>
                        <button hidden={task === "createpost"} onClick={() => dispatch(isBoxVisibleAction(true))}>Cancel</button>
                    </div>
                    <CreatePostStyle hidden={task === "addquestion"}>
                        <div hidden={task === "addquestion"}>

                            <div>
                                <img src="https://cdn-icons.flaticon.com/png/128/4662/premium/4662541.png?token=exp=1649400399~hmac=b4e4677969be74cf96596cae7f09cf30" alt="Aa" />

                                {/* <fileLabel for="file-upload" class="custom-file-upload">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1060/1060418.png" type="file" alt="galary" />
                                </fileLabel> */}
                                <input id="file-upload" type='file' onChange={e => { e.target.files[0] != null ? setImage(e.target.files[0]) : setImage(null) }} />

                            </div>
                            <button onClick={() => uploadFiles(image)}>Post</button>
                        </div>
                    </CreatePostStyle>
                </Div>
            </Outer_div>
        </>
    )
}