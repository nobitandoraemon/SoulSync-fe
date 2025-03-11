import { ChatBody, ChatInput, ChatHeader } from "../../../config/components";
import { TbZodiacLeo } from "react-icons/tb";

const ChatBox = ({ chat, sendMessage, socketIO, matchedUser, content }) => {
  return (
    <div className="relative flex flex-col flex-1 w-full p-4 mb-16 md:mb-0 bg-secondary/20">
      <ChatHeader
        user={{
          name: "Người dùng ẩn danh",
          id: 1021,
          age: 18,
          location: "Cần thơ, VN",
          zodiac: <TbZodiacLeo />,
          avatar:
            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        }}
        isLoggin={true}
        content={content}
      />
      <ChatBody chat={chat} socketIO={socketIO} matchedUser={matchedUser} />
      <ChatInput
        sendMessage={sendMessage}
        matchedUser={matchedUser}
        socketIO={socketIO}
      />
    </div>
  );
};

export default ChatBox;
