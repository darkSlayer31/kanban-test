import {FC} from 'react';

import {ColumnType, CardType} from '../../types';
import useLocalStorage from '../../hooks/useLocalStorage';

import CardList from '../CardList';
import AddCardForm from '../AddCardForm';

import style from './Column.module.scss';

interface ColumnProps {
  column: ColumnType;
  userName: string;
}

const Column: FC<ColumnProps> = ({column, userName}) => {
  const [cards, setCards] = useLocalStorage<CardType[]>('cards', []);

  const filteredCards = cards.filter((card) => card.idColumn === column.id);

  return (
    <div className={style.column}>
      <div className={style.header}>
        <h4 className={style.headerTitle}>{column.name}</h4>
      </div>
      <CardList cards={filteredCards} setCards={setCards} />
      <AddCardForm idColumn={column.id} userName={userName} setCards={setCards} />
    </div>
  );
};

export default Column;
