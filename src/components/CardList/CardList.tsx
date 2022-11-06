import {FC} from 'react';

import {CardType} from '../../types';

import Card from '../Card';
import style from './CardList.module.scss';

interface CardListProps {
  cards: CardType[];
  setCards: (value: CardType[] | ((val: CardType[]) => CardType[])) => void;
}

const CardList: FC<CardListProps> = ({cards, setCards}) => {
  return cards.length === 0 ? (
    <div className={style.item}>Карточек нет</div>
  ) : (
    <>
      {cards.map((card) => (
        <Card key={card.id} card={card} setCards={setCards} />
      ))}
    </>
  );
};

export default CardList;
