import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";

export default function AddNote(){
    return(
        <div>
            <Heading label={"Write your Story/Notes...."}/>
            <br/>
            <InputBox/>
        </div>
    )
}