import { useEffect } from "react";
import { ChatBox, Content, Waiting } from "../../../config/components";
import { useNavigate, useOutletContext } from "react-router";
import { useOutlet } from "react-router";
const ChatContainer = ({
  socketIO,
  content,
  isActive,
  setActive,
  toggleActive,
  isScroll,
  user,
  matchedUser,
  requestMatch,
  chat,
  ok,
  setOk,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/match");
  };
  useEffect(() => {
    if (!matchedUser) handleNavigate();
  });

  if (!matchedUser) return null;
  else {
    console.log(matchedUser);
    return (
      <>
        {
          // Chưa có người sẽ match

          // Khi chấp nhận chat
          <>
            {/* <Content
							user={user}
							content={content}
							isActive={isActive}
							isScroll={isScroll}
							requestMatch={requestMatch}
						/> */}
            <ChatBox
              chat={chat}
              user={user}
              socketIO={socketIO}
              matchedUser={matchedUser}
              content={content}
            />
          </>
        }
      </>
    );
  }
};

export default ChatContainer;
