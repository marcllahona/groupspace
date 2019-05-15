import React, { useState } from 'react';
import PropTypes from "prop-types";
import {Mutation} from "react-apollo/index";
import TextField from "../inputs/TextField";
import Icon from "../icons/Icon";
import ErrorAlert from "../alerts/ErrorAlert";
import {Menu, Modal} from "../Modal";
import CREATE_MESSAGE_BY_NAME_MUTATION from "../../graphql/mutation/createMessageByName";
import * as S from "../../styles";

function ChatFooter(props){
    const { channelName, groupName } = props;
    const [message, setMessage] = useState('');
    return(
        <S.ChatFooter>
            <Mutation
                mutation={CREATE_MESSAGE_BY_NAME_MUTATION}
                variables={{ content: message, channelName: channelName, groupName: groupName }}
            >
                {(createMessageByName, { error }) => {
                    return (
                        <>
                            <TextField
                                name="message"
                                value={message}
                                placeholder="Send a message..."
                                onChange={e => setMessage(e.target.value)}
                                hideFocus={true}
                            />
                            <Icon
                                type="send"
                                onClick={async e => {
                                    e.preventDefault();
                                    await createMessageByName();
                                    setMessage('');
                                }}
                            />
                            {
                                error &&
                                <Menu
                                    shouldOpen={error}
                                    content={hide => {
                                        return (
                                            <Modal hide={hide}>
                                                <ErrorAlert error={error} hide={hide} />
                                            </Modal>
                                        );
                                    }}
                                />
                            }
                        </>
                    );
                }}
            </Mutation>
        </S.ChatFooter>
    )
}

ChatFooter.propTypes = {
    channelName: PropTypes.string.isRequired,
    groupName: PropTypes.string.isRequired,
};

export default ChatFooter
