import React, {useState} from 'react';
import ChatHeader from "./ChatHeader";
import ChatList from './ChatList';
import ChatFooter from "./ChatFooter";
import ChatQuery from "./ChatQuery";
import Icon from '../icons/Icon';
import * as S from '../../styles';

function Chat(props) {
  const { name, id } = props;
  //Last number of messages that we want to get
    const [last, setLast] = useState(50);
    const [isOpen, setIsOpen] = useState(false);
    const hide = () => setIsOpen(false);

  return (
    <>
        <Icon type="chat" onClick={() => setIsOpen(!isOpen)} />
          {isOpen && (
                <ChatQuery name={name} last={last}>
                    {(messagesByMeetingName, subscribeToMoreMessages) => {
                        return(
                            <S.ChatContainer>
                                <ChatHeader hide={hide}/>
                                <ChatList
                                    id={id}
                                    name={name}
                                    messages={messagesByMeetingName}
                                    subscribeToMoreMessages={subscribeToMoreMessages}
                                />
                                <ChatFooter id={id} name={name}/>
                            </S.ChatContainer>
                        )
                    }}
                </ChatQuery>
          )}
    </>
  );
}

export default Chat;
