import {FC, useState, useRef, useEffect} from 'react';

import {CommentType} from '../../types';

import style from './Comment.module.scss';

interface CommentProps {
  comment: CommentType;
  setComments: (value: CommentType[] | ((val: CommentType[]) => CommentType[])) => void;
}

const Comment: FC<CommentProps> = ({comment, setComments}) => {
  const [commentText, setCommentText] = useState(comment.text);
  const [isEditable, setIsEditable] = useState(false);

  const refInput = useRef<HTMLInputElement>(null);

  const deleteComment = () => {
    setComments((prev) => prev.filter((item) => item.id !== comment.id));
  };

  const changeComment = () => {
    setIsEditable(false);

    if (!commentText) {
      setCommentText(comment.text);
      return;
    }

    setComments((prev) => {
      return prev.map((item) => {
        if (item.id === comment.id) {
          return {...item, text: commentText};
        }
        return item;
      });
    });
  };

  useEffect(() => {
    if (refInput.current && isEditable) {
      refInput.current.focus();
    }
  }, [isEditable]);

  return (
    <li className={style.item}>
      <p className={style.author}>{comment.author}</p>
      {isEditable ? (
        <input
          ref={refInput}
          className={style.text}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onBlur={changeComment}
        />
      ) : (
        <p className={style.text}>{commentText}</p>
      )}

      <div className={style.actions}>
        <button className={style.button} onClick={() => setIsEditable(true)}>
          изменить
        </button>
        <button className={style.button} onClick={deleteComment}>
          удалить
        </button>
      </div>
    </li>
  );
};

export default Comment;
