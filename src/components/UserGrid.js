import React , { Component } from 'react';
import styled from 'styled-components';
import {ProfileImage} from './ProfileImage';
import { Image } from 'semantic-ui-react'

import part1 from '../assets/images/image1.jpg'
const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    gap: 15px;
    grid-template-areas: "photo name"
                         "photo label"
                         "photo description";
    @media (max-width: 990px){
        grid-template-areas: "photo name"
                                "label ."
                                "description .";
    }
`;

export const MiniUserGrid = styled.div`
    display: grid;
    justify-content: left;
    grid-template-columns: auto auto;
    gap: 10px;
`;

const Photo = styled.div`
    grid-area: photo;
`;

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
    align-self: center;
`;

const Label = styled.div`
    grid-area: label;
    @media (max-width: 990px){
        padding-left: 25px;
    }
`;

const Description = styled.div`
    grid-area: description;
    max-width: 400px;
    @media (max-width: 990px){
        grid-column: 1/3;
        padding-left: 25px;
    }
`;

class UserGrid extends Component { 

    constructor(props) {
        super(props)
        this.state = {
    
        }

    }
    render () {

    return <UserGridStyled> 
    <img className="profilpic" src={part1} size='medium' circular />

    <style type="text/css">
                            {`

.profilpic {
    width: 200px;
    height: 200px;
    margin: 40px; 
    border-radius: 100%; 
}

@media (max-width: 990px){
    margin: 20px;
    width: 120px;
    height: 120px;
}


`}

                        </style>
            <Name>GridGallary</Name>
            <Label><strong>400</strong> followers </Label>
            <Description>Pitchfork tilde lomo chillwave keytar, tofu chartreuse letterpress mumblecore. 
                 mixtape palo santo kitsch sustainable food truck asymmetrical microdosing pok pok.</Description>
         </UserGridStyled>;
} }

export default UserGrid;