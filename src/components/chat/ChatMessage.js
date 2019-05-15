import React from 'react';
import PropTypes from 'prop-types';
import UserImage from "../UserImage";
import * as S from '../../styles';

function ChatMessage(props) {
  const { message } = props;
  const { channel, content, author, createdAt } = message;
  const date = new Date(createdAt);
  return (
    <S.ChatMessageContainer>
        <S.ChatMessageBody>
            <UserImage user={author}/>
            <div>
                <S.ChatMessage>
                    <S.ChatMessageHead>
                        <S.ChatMessageName>{author.fullName}</S.ChatMessageName>
                        <S.ChatMessageSubText>{`${date.toTimeString()}`}</S.ChatMessageSubText>
                    </S.ChatMessageHead>
                    <S.ChatMessageSubText>{`#${channel.name}`}</S.ChatMessageSubText>
                    <S.ChatMessageText>{content}</S.ChatMessageText>
                </S.ChatMessage>
            </div>
        </S.ChatMessageBody>
    </S.ChatMessageContainer>
  );
}

ChatMessage.propTypes = {
  message: PropTypes.any.isRequired,
};

export default ChatMessage;
