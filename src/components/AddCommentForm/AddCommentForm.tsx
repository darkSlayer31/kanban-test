import {FC, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import {CommentType} from '../../types';

import {ReactComponent as PlusIcon} from '../Icons/Plus.svg';
import iconStyle from '../Icons/Icon.module.scss';
import style from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  setComments: (value: CommentType[] | ((val: CommentType[]) => CommentType[])) => void;
  userName: string;
  idCard: string;
}

const AddCommentForm: FC<AddCommentFormProps> = ({setComments, idCard, userName}) => {
  const [commentText, setCommentText] = useState('');

  const addComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment: CommentType = {
      id: uuidv4(),
      author: userName,
      text: commentText,
      idCard,
    };
    setCommentText('');
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <form className={style.form} onSubmit={addComment}>
      <input
        className={style.input}
        name="addComment"
        type="textarea"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Оставить комментарий"
      />
      <button className={style.button} type="submit" disabled={!commentText}>
        <PlusIcon title="Добавить" width={16} height={16} className={iconStyle.svgIcon} />
      </button>
    </form>
  );
};

export default AddCommentForm;
