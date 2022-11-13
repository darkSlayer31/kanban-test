import {FC, useState, MouseEvent} from 'react';

import {CardType, CommentType} from '../../types';
import useLocalStorage from '../../hooks/useLocalStorage';
import CardModal from '../CardModal';

import {ReactComponent as TrashIcon} from '../Icons/Trash.svg';
import style from './Card.module.scss';
import iconStyle from '../Icons/Icon.module.scss';

interface CardProps {
  card: CardType;
  setCards: (value: CardType[] | ((val: CardType[]) => CardType[])) => void;
  columnName: string;
  userName: string;
}

const Card: FC<CardProps> = ({card, setCards, columnName, userName}) => {
  const [comments, setComments] = useLocalStorage<CommentType[]>('comments', []);

  const [showModal, setShowModal] = useState(false);

  const filteredComments = comments.filter((comment) => comment.idCard === card.id);

  const deleteCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCards((prev) => prev.filter(({id}) => card.id !== id));
  };

  const openModal = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CardModal
        userName={userName}
        show={showModal}
        closeModal={closeModal}
        card={card}
        columnName={columnName}
        setCards={setCards}
        setComments={setComments}
        comments={filteredComments}
      />
      <div className={style.card} onClick={openModal}>
        <div>
          <span>{card.name}</span>
          <p className={style.comments}>Коментариев {filteredComments.length}</p>
        </div>
        <button type="button" onClick={deleteCard}>
          <TrashIcon title="Удалить" width={16} height={16} className={iconStyle.svgIcon} />
        </button>
      </div>
    </>
  );
};

export default Card;
