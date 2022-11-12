import {FC} from 'react';

import {CardType} from '../../types';

import Card from '../Card';
import style from './CardList.module.scss';

interface CardListProps {
  cards: CardType[];
  setCards: (value: CardType[] | ((val: CardType[]) => CardType[])) => void;
  columnName: string;
}

const CardList: FC<CardListProps> = ({cards, setCards, columnName}) => {
  return cards.length === 0 ? (
    <div className={style.item}>Карточек нет</div>
  ) : (
    <>
      {cards.map((card) => (
        <Card key={card.id} card={card} setCards={setCards} columnName={columnName} />
      ))}
    </>
  );
};

export default CardList;
