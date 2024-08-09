import { DEFAULT_PROFILE_IMG } from '../utils/constants';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="mt-1 flex items-center shadow-md p-1 rounded-md bg-blue-100">
      <img className="h-8" src={DEFAULT_PROFILE_IMG} alt="default user icon" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};
export default ChatMessage;
