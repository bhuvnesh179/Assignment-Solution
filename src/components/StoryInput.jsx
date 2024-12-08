import { useState } from "react"

export default function StoryInput({onAddStory}){
    const [story, setStory] = useState('');
    return (
        <div className="flex justify-center">
        <form onSubmit={e => {
            e.preventDefault();
            if(story.trim()){
                onAddStory(story);
                setStory('');
                alert('yay! story added. see All the Stories at Home page')
            }else{
                alert('Please write a Story before submitting.');
                setStory('');
            }
        }}>
            <textarea placeholder="Type your story here..." rows={15} cols={75} value={story} onChange = {e => {
                setStory(e.target.value);
            }} className="border rounded p-2 bg-pink-200 font-semibold focus:outline-none"/>
            <br />
            <div className="flex justify-center">
                <button type="submit" className="p-2 bg-pink-100 font-mono cursor-pointer border rounded" >Add</button>
            </div>  
        </form>
            
        </div>
    )
}