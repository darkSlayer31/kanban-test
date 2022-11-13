import {FC} from 'react';

import {CommentType} from '../../types';
import Comment from '../Comment';

import style from './CommentList.module.scss';

interface CommentListProps {
  setComments: (value: CommentType[] | ((val: CommentType[]) => CommentType[])) => void;
  comments: CommentType[];
}

const CommentList: FC<CommentListProps> = ({comments, setComments}) => {
  return comments.length === 0 ? (
    <div className={style.item}>Комментариев пока нет</div>
  ) : (
    <ul className={style.list}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} setComments={setComments} />
      ))}
    </ul>
  );
};

export default CommentList;
