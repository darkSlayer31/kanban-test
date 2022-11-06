import {FC} from 'react';
import {CardType, CommentType} from '../../types';
import useLocalStorage from '../../hooks/useLocalStorage';

import {ReactComponent as TrashIcon} from '../Icons/Trash.svg';
import style from './Card.module.scss';
import iconStyle from '../Icons/Icon.module.scss';

interface CardProps {
  card: CardType;
  setCards: (value: CardType[] | ((val: CardType[]) => CardType[])) => void;
}

const Card: FC<CardProps> = ({card, setCards}) => {
  const [comments, setComments] = useLocalStorage<CommentType[]>('comments', []);

  const filteredComments = comments.filter((comment) => comment.idCard === card.id);

  const deleteCard = () => {
    setCards((prev) => prev.filter(({id}) => card.id !== id));
  };

  //TODO: добавить тут модалку карточки

  return (
    <div className={style.card}>
      <div>
        <span>{card.name}</span>
        <p className={style.comments}>Коментариев {filteredComments.length}</p>
      </div>
      <button type="button" onClick={deleteCard}>
        <TrashIcon title="Удалить" width={16} height={16} className={iconStyle.svgIcon} />
      </button>
    </div>
  );
};

export default Card;
