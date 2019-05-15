import React from "react";

function GroupCreator(props){
    const { creator } = props;
    return(
        <div>
            {
                creator.fullName
            }
        </div>

    )
}

export default GroupCreator
