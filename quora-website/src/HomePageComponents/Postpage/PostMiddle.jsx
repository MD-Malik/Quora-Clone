import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPost } from '../../Redux/PostReducer/action';
import { ShowPost } from './ShowPost';


export const PostMiddle = ({post}) => {
  console.log("post2", post)
    // const {posts} = useSelector((state) => state.postReducer);
    // console.log("post", posts);
    // const dispatch = useDispatch();
    // const getPosts = () => {
    //   fetch(`http://localhost:3001/post`)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       console.log("res:", res);
    //       dispatch(getPost(res));
    //     });
    // };
  
    // useEffect(() => {
    //   getPosts();
    // }, []);
  
  return (
    <div>
      {post.map((post) =>(
           <h4>{post.title}</h4>
      ))}
    </div>
  )
}
