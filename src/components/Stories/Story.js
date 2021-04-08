import "../../styles/components/_story.scss";
import EvtIcon from "./StoryIcon";

function Story (props) {  
let eventName = props.event.titre ;
// console.log( props.event.titre )

if(eventName.length > 10)
eventName = eventName.substring(0,10) + "...";
  
return <div className="Story">
    <EvtIcon  image={props.event.image} storyBorder={true}/>
    <div style={{fontSize:"50%" , marginTop:"40px" }}>
    <span style={{color:"#095b7c" , fontSize:"20px"}} >{eventName}</span>
</div>
</div>

}

export default Story;