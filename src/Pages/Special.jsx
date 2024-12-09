import { useRecoilValue } from "recoil"
import { storiesState } from "../atoms"

export default function Special(){
    const stories = useRecoilValue(storiesState);
    const randomStory =
    stories.length > 0 ? stories[Math.floor(Math.random() * stories.length)] : null;

    
    return(
        <>
        {stories.length === 0? (
            <div className="flex justify-center font-bold text-3xl text-gray-900">I did not use any database. So, first of all, add a story..</div>
        ):(
            <div>
                <b className="m-4">Random Story:</b>
                <div className="border rounded ml-4 mr-4 p-8 text-2xl bg-pink-200 font-mono break-words max-w-md" >{randomStory}</div>
                    
            </div>
        )}
        
           
        </>
    )
}