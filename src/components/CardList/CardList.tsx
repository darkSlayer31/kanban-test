import {FC} from 'react';

import {CardType} from '../../types';

import Card from '../Card';
import style from './CardList.module.scss';

interface CardListProps {
  cards: CardType[];
  setCards: (value: CardType[] | ((val: CardType[]) => CardType[])) => void;
  columnName: string;
  userName: string;
}

const CardList: FC<CardListProps> = ({cards, setCards, columnName, userName}) => {
  return cards.length === 0 ? (
    <div className={style.item}>Карточек нет</div>
  ) : (
    <>
      {cards.map((card) => (
        <Card key={card.id} card={card} setCards={setCards} columnName={columnName} userName={userName} />
      ))}
    </>
  );
};

export default CardList;
