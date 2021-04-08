import "../../styles/components/_AjouterIcon.scss";
// import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';function AjouterEvt(props) {
    const { iconSize, storyBorder, image } = props;
    return <div>
        <Link to='/ajouterEvenement' >
            <img style={{marginTop:"30px" }} src='./uploads/posts/plus.png' />
            {/* <label htmlFor="icon-button-file">
            <IconButton style={{borderRadius:"50%"}}  color="primary" aria-label="upload picture" component="span">
               <AddIcon style={{size:"large", color :"#095b7c" }} /><br></br>
               <span style={{color :"#095b7c" ,fontSize:"small" }}>Déposer un événement</span>
           </IconButton>
           </label> */}

        </Link>
        
    </div>
}
export default AjouterEvt;