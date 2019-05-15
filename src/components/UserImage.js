import React from 'react'
import PropTypes from "prop-types";
import {optionalChaining, userInitials} from "../lib/utils";
import * as S from '../styles';

function UserImage(props) {
    const { size, user } = props;
    const image = optionalChaining(user, 'image');
    const fullName = optionalChaining(user, 'fullName');
    const round = true;
    console.log(userInitials(fullName));
    return (
        <>
            {
                image ?
                    <S.ImagePicture src={image} size={size} round={round}/>
                    :
                    <S.ImageLetter size={size} round={round}>
                        {
                            fullName && userInitials(fullName)
                        }
                    </S.ImageLetter>
            }
        </>
    )
}

UserImage.propTypes = {
    user: PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        image: PropTypes.string,
    }).isRequired,
    size: PropTypes.number,
};

UserImage.defaultProps = {
    size: 40,
};

export default UserImage
