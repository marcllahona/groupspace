import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Button, FormButton, CircularButton } from "./Buttons";
import { InputBody, InputField, InputLabel} from "./Inputs";

const Header = styled.header`
  display: grid;
  background-color: white;
  position: relative;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  align-items: center;
  z-index: 1;
  border-bottom: 1px solid ${props => props.theme.palette.border}
`;

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavigationGroup = styled.div`
  display: flex;
  width: 100%;
  padding-left: 100px;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const NavigationLink = styled(NavLink)`
  position: relative;
  color: ${props => props.theme.palette.secondary};
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5em 1em;
  margin: 0 1em;
  text-decoration: none;

  webkit-transition: all 0.15s ease-out;
  -moz-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  -ms-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.palette.primary};
    visibility: hidden;
    transform: scaleX(0);
    transition: 0.25s linear;
  }
  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
  
    &.active{
      color: ${props => props.theme.palette.primary};
  }
`;


const App = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1 auto;
  height: 100vh;
  max-width: 1920px;
`;

const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0;
  z-index: 2;
  max-width: 1920px;
`;

const ChannelView = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 1em;
  align-items: center;
  justify-content: center;
`;

const AddContainer = styled(Container)`
  max-width: 800px;
`;


const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const ActionsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const ChatContainer = styled.div`
  padding: 1em 0;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.palette.onPrimary};
`;

const ChatHeader = styled.div`
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
  background: transparent;
  min-height: 60px;
`;
const ChatBody = styled.div`
  display: flex;
  flex: 1 1 auto;
  background: ${props => props.theme.palette.onPrimary};
  width: 100%;
  padding: 1em 0;
`;

const ChatMessageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 100%;
  width: 100%;
  -webkit-box-pack: end;
  justify-content: end;
  overflow-y: auto;
  padding: 0 20px;
`;

const ChatFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${props => props.theme.palette.onPrimary};
  align-items: center;
  width: 100%;
  border-top: 1px solid ${props => props.theme.palette.border};
`;

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
  width: 100%;
`;

ChatMessageContainer.propTypes = {
  isUser: PropTypes.bool
};

const ChatMessageBody = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  word-break: break-word;
  background: ${props => props.theme.palette.lightSecondary};
  padding: 1em;
  border-radius: 3px;
  width: 100%;
`;

const ChatMessage = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
`;

const ChatMessageHead = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChatMessageName = styled.p`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-bottom: 5px;
  padding-right: 0.5em;
  color: ${props => props.theme.palette.secondary};
`;

const ChatMessageSubText = styled.p`
  font-size: 12px;
  font-weight: normal;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-bottom: 5px;
  color: ${props => props.theme.palette.textForm};
`;

const ChatMessageText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5em;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  text-align: start;
  color: ${props => props.theme.palette.secondary};
`;

const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.isTransparent ? 'transparent' : props.theme.palette.secondary};
  opacity: ${props => (props.isTransparent ? 1 : 0.5)};
  z-index: 5;
`;

Overlay.propTypes = {
  isTransparent: PropTypes.bool
};

Overlay.defaultProps = {
  isTransparent: false
};

const Menu = styled.div`
  position: absolute;
  z-index: 1001;
  text-align: left;
  background: #fff;
  color: black;
  border: none;
  max-width: 400px;
  width: calc(100vw / 2);
  box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.2),
    1px 3px 15px 2px rgba(0, 0, 0, 0.2);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 0.28571429rem;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  padding: 1em;
`;

const MenuHeader = styled.div`
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
  background: transparent;
`;

const MenuTitle = styled.h1`
  font-weight: bold;
  padding-bottom: 1em;
`;

const MenuBody = styled.div`
  display: grid;
  grid-row-gap: 1.5em;
  width: 100%;
`;

const Body = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    flex-direction: row;
    height: 100vh;
    width: 100%;
    align-content: center;
    justify-content: center;
`;

const SideSection = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    background: ${props => props.color || props.theme.palette.onSecondary};
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: sticky;
    white-space: nowrap;
    min-width: ${props => props.width}px;
    -webkit-transition: width 0.2s ease-in-out;
    transition: width 0.2s ease-in-out;
    overflow: hidden; 
    height: 100vh;
    z-index:2;
    border-left: 1px solid ${props => props.theme.palette.primary}
`;

SideSection.propTypes = {
  width: PropTypes.number.isRequired,
};

const SideSectionBody = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 50;
    -ms-flex: 50;
    flex: 50;
    overflow: hidden;
`;

const SideSectionContainer = styled.div`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    padding: 2em 0;
`;

const CentralSection = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    height: 100%;
`;

const Title = styled.h1`
  font-weight: bold;
  padding: 1em 0;
  text-align: center;
`;

const Instructions = styled.h3`
  font-weight: bold;
  padding: 1em 0;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  grid-row-gap: 1.5em;
  padding: 1em 0;
  width: 100%;
`;

const CustomLink = styled(Link)`
  font-size: 16px;
  color: ${props => props.theme.palette.primary};
  padding: 0.5em 0;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4em;
  width: 100%;
`;

const URL = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const LoaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  left: 50%;
  top: 50%;
  background-color: ${props => props.theme.palette.onPrimary};
  transform: translate(-50%, -50%) !important;
  z-index: 3000;
`;

const LoaderBody = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-row-gap: 2em;
`;

const LoaderText = styled.h2`
  font-weight: 700;
  color: ${props => props.theme.palette.secondary};
  margin: 0;
  text-align: center;
`;

const LoaderIcon = styled.div`
  background-color: ${props => props.theme.palette.onPrimary};
  border: 20px solid ${props => props.theme.palette.secondary};
  border-radius: 50%;
  border-top: 20px solid ${props => props.theme.palette.primary};
  width: 150px;
  height: 150px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const InputFieldContainer = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
`;

const VisibleButton = styled.button`
  position: absolute;
  font-weight: bold;
  align-self: end;
  height: 50px;
  right: 0;
  background-color: transparent;
  border-radius: 0 6px 6px 0;
  border: none;
  padding: 1em 2em;
  outline: none;
  cursor: pointer;
`;

const GroupRowImage = styled.img`

`;

const GroupRowLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
`;

const GroupRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.palette.onSecondary};
  color: ${props => props.theme.palette.secondary};
  padding: 1em;
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  width: 100%;
  
  &:hover{
    background-color: ${props => props.theme.palette.background};
  }
`;


const GroupRowBody = styled.div`
  padding: 0 1em;
`;

const ImageLetter = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.round ? '50%' : '6px'};
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.onPrimary};
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: calc(${props => props.size}*0.35px);
  font-weight: 600;
  padding-top: calc(${props => props.size}*0.05px);
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 2px;
`;

ImageLetter.propTypes = {
  size: PropTypes.number.isRequired,
  round: PropTypes.bool,
};

ImageLetter.defaultProps = {
  round: false
};


const ImagePicture = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.round ? `50%` : `6px`};
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 2px;
  
  &:hover{
    border: 1px solid ${props => props.shouldHover ? props.theme.palette.primary : 'inherit'};
  }
`;

ImagePicture.propTypes = {
  size: PropTypes.number.isRequired,
  shouldHover: PropTypes.bool,
  round: PropTypes.bool,
};

ImagePicture.defaultProps = {
  round: false
};


const GroupInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 1em;

`;


const Card = styled.div`
  border-radius: 6px;
  border: 1px solid ${props => props.theme.palette.border};
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.onSecondary};
  height: 100%;
  width: 100%;
  margin-top: 24px;
`;

const CardHeader = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 11;
    border-bottom: 1px solid ${props => props.theme.palette.border};
    padding: 16px;
    background-color: ${props => props.theme.palette.onSecondary};
    border-radius: 4px 4px 0 0;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export {
  AddContainer,
  Card,
  CardHeader,
  CardList,
  GroupInfoBody,
  GroupRowContainer,
  GroupRowBody,
  GroupRowImage,
  GroupRowLink,
  ImageLetter,
  ImagePicture,
  App,
  Header,
  Navigation,
  NavigationGroup,
  NavigationLink,
  Body,
  SideSection,
  SideSectionBody,
  SideSectionContainer,
  CentralSection,
  ChannelView,
  VisibleButton,
  InputFieldContainer,
  Container,
  Title,
  Instructions,
  CustomLink,
  Form,
  Button,
  URL,
  CircularButton,
  FormButton,
  InputBody,
  InputField,
  InputLabel,
  ChatContainer,
  ChatHeader,
  ChatBody,
  ChatFooter,
  ChatMessageList,
  ChatMessageContainer,
  ChatMessage,
  ChatMessageHead,
  ChatMessageName,
  ChatMessageText,
  ChatMessageBody,
  ChatMessageSubText,
  Overlay,
  Menu,
  Modal,
  MenuHeader,
  MenuTitle,
  MenuBody,
  LoaderContainer,
  LoaderBody,
  LoaderText,
  LoaderIcon
};
