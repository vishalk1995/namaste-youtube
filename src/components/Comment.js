import { DEFAULT_PROFILE_IMG } from '../utils/constants';
import CommentsList from './CommentsList';

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex shadow-sm bg-blue-100 p-1 rounded-md">
      <img className="h-8" src={DEFAULT_PROFILE_IMG} alt="profile-img" />
      <div>
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
        <CommentsList comments={replies} />
      </div>
    </div>
  );
};
export default Comment;
