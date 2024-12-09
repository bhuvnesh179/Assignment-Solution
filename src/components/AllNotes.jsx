import { useRecoilValue } from "recoil"
import { storiesState } from "../atoms"

export default function AllNotes(){
    const stories = useRecoilValue(storiesState);
    return(
        <>
        {stories.length === 0? (
            <div className="flex justify-center font-bold text-3xl text-gray-900">I did not use any database. So, first of all, add a story..</div>
        ):(
            <ol>
            {stories.map((story, index) => (
                <li key={index}>
                    <b className="m-6">Story {index + 1}:</b>
                    <div className="border rounded ml-4 mr-4 p-8 text-2xl bg-pink-200 font-mono break-words max-w-md" >{story}</div>
                    
                </li>
            ))}
        </ol>
        )}
        
           
        </>
    )
}