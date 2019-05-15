import React from "react";
import PropTypes from "prop-types";
import GroupInfo from "./GroupInfo";
import GroupChannels from "./GroupChannels";
import GroupViewBar from "./ChannelBar";
import GroupCreator from "./GroupCreator";
import {optionalChaining} from "../lib/utils";

function GroupView(props){
    const { group, channelURL, groupURL } = props;
    return(
        <GroupViewBar>
            <>
                <GroupInfo group={group}/>
                <GroupChannels channels={optionalChaining(group, 'channels')} channelURL={channelURL} groupName={groupURL}/>
                <GroupCreator creator={group.creator}/>
            </>
        </GroupViewBar>
    )
}

GroupView.propTypes = {
    group: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        creator: PropTypes.shape({
            id: PropTypes.string.isRequired,
            fullName: PropTypes.string.isRequired,
        }).isRequired,
    }),
    channelURL: PropTypes.string,
    groupURL: PropTypes.string,
};

export default GroupView
