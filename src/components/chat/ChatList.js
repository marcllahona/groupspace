import React, {useEffect, useState} from 'react';
import ChatMessage from './ChatMessage';
import * as S from '../../styles';

function ChatList(props) {
  const { id, messages, subscribeToMoreMessages } = props;
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Action to scroll messages to the top so last one is visible
  // useEffect(() => {
  //   const c = document.getElementById('chatMessageList');
  //   console.log(c.scrollTop);
  //   console.log(c.scrollHeight);
  //   if (c) {
  //     c.scrollTop = c.scrollHeight;
  //   }
  // });

  //Subscribe to subscribeToMoreMessages to receive new messages via WebSocket
  useEffect(() => {
      //We make sure that we only subscribed once to get new messages
      if (!isSubscribed){
          subscribeToMoreMessages();
          setIsSubscribed(true)
      }
  },[isSubscribed, subscribeToMoreMessages]);

  return (
      <S.ChatBody>
          <S.ChatMessageList id={'chatMessageList'}>
            {messages.map(message => {
              return (
                <ChatMessage
                    key={message.id}
                    message={message}
                />
              );
            })}
          </S.ChatMessageList>
      </S.ChatBody>
  );
}

export default ChatList;
