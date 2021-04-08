import "../../styles/components/_EvtsIcon.scss";
function EvtIcon(props)
{
    const {iconSize,storyBorder, image} = props;
    
    function getRandomInt(min, max)
    {   return Math.floor(Math.random()*(Math.floor(max) - Math.ceil(min) + 1)) + min ;
    }
    let randomId = getRandomInt (1,70);
    
    let EvenementImage = image 
     ? image 
     :"./uploads/Evenement/sport.png";

    return <div className={storyBorder ? "storyBorder" : ""}>
        <img className={'evtIcon ${iconSize}'} 
        src={EvenementImage}
        />
    </div>
}

export default EvtIcon;