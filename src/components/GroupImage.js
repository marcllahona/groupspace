import React from 'react'
import PropTypes from "prop-types";
import {optionalChaining} from "../lib/utils";
import * as S from '../styles';

function GroupImage(props) {
    const { size, group } = props;
    const image = optionalChaining(group, 'image');
    const name = optionalChaining(group, 'name');
    return (
        <>
            {
                image ?
                    <S.ImagePicture src={image} size={size}/>
                    :
                    <S.ImageLetter size={size}>
                        {
                           name && name.toUpperCase()[0]
                        }
                    </S.ImageLetter>
            }
        </>
    )
}

GroupImage.propTypes = {
    size: PropTypes.number,
};

GroupImage.defaultProps = {
    size: 40
};

export default GroupImage
