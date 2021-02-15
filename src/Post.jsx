import PostHeader from "./PostHeader.jsx";
import PostBody from "./PostBody.jsx";
import ActionBar from "./ActionBar.jsx";
import React from "react"

function Post() {
    return(
        <div className="bg-black bg-opacity-80 box-content h-96 w-96  p-4 border-4 transition-shadow">
            <div className="pl-96 pt-32 text-white ">
                <PostHeader>
                    name="Simone Bracciolani"
                    time="17:00"
                    day="15 Febbraio 2021"
                </PostHeader>
                <PostBody>
                    text="hello world"
                </PostBody>
                <ActionBar></ActionBar>
            </div>
        </div>
    );
}
 
export default Post;