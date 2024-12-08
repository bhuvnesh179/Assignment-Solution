import { useState } from "react";
import { Heading } from "../components/Heading";
import StoryInput from "../components/StoryInput";
import { useRecoilState } from "recoil";
import { storiesState } from "../atoms";

export default function AddNote(){
    const[stories, setStories] = useRecoilState(storiesState);

    function addStory(newStory){
        setStories([...stories, newStory]);
    }

    return(
        <div className="">
            <Heading label={"Write your Story/Notes...."}/>
            <br/>
            <StoryInput onAddStory={addStory}/>
            
        </div>
    )
}