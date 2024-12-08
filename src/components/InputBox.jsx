import { useState } from "react"

export default function InputBox(){
    const [story, setStory] = useState('');
    return (
        <div className="flex justify-center">
        <form onSubmit={e => {
            e.preventDefault();
            alert("yay! your story is saved")
        }}>
            <textarea placeholder="Type your story here..." rows={15} cols={75} onChange = {e => {
                setStory(e.target.value);
            }} className=""/>
            <br />
            <div className="flex justify-center">
                <button type="submit" className="p-2 bg-pink-100 font-mono cursor-pointer border rounded">Add</button>
            </div>
        </form>
            
        </div>
    )
}