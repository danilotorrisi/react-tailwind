import React from "react"
import PostHeader from "./PostHeader.jsx";
import PostBody from "./PostBody.jsx";
import ActionBar from "./ActionBar.jsx";
import PostComments from "./PostComments.jsx";

function Post() {
    return(
        <div className=" max-w-2xl rounded-xl shadow-lg mb-5 bg-black bg-opacity-80 text-white">
            
                <PostHeader
                    name="Simone Bracciolani"
                    time="17:00"
                    day="15 Febbraio 2021"
                ></PostHeader>
                <PostBody
                    text="hello world"
                ></PostBody>
                <ActionBar></ActionBar>
                <PostComments 
                    name="Simone"
                    text="ciao a tutti"
                ></PostComments>
            </div>
        
    );
}
 
export default Post;