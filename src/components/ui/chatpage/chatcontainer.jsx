import { ChatBox, Content, Waiting } from "../../../config/components";
import { useNavigate } from "react-router";
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
  return (
    <>
      {
        // Chưa có người sẽ match
        !matchedUser ? (
          <div className="max-w-[80%] mx-auto flex items-center justify-between">
            <button
              onClick={() => handleNavigate()}
              className="btn btn-primary"
            >
              Find a Match
            </button>
          </div>
        ) : (
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
        )
      }
    </>
  );
};

export default ChatContainer;
