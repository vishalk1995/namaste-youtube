import { commentsData } from '../utils/constants';
import Comment from './Comment';
import CommentsList from './CommentsList';

const CommentsContainer = () => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
