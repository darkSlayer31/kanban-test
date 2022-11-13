import {FC, useState} from 'react';

import {ColumnType, CardType} from '../../types';
import useLocalStorage from '../../hooks/useLocalStorage';

import CardList from '../CardList';
import AddCardForm from '../AddCardForm';

import style from './Column.module.scss';

interface ColumnProps {
  column: ColumnType;
  userName: string;
  setColumns: (value: ColumnType[] | ((val: ColumnType[]) => ColumnType[])) => void;
}

const Column: FC<ColumnProps> = ({column, userName, setColumns}) => {
  const [cards, setCards] = useLocalStorage<CardType[]>('cards', []);

  const [columnName, setColumnName] = useState(column.name);

  const filteredCards = cards.filter((card) => card.idColumn === column.id);

  const changeColumnName = () => {
    if (!columnName) {
      setColumnName(column.name);
      return;
    }

    setColumns((prev) => {
      return prev.map((item) => {
        if (item.id === column.id) {
          return {...item, name: columnName};
        }
        return item;
      });
    });
  };

  return (
    <div className={style.column}>
      <div className={style.header}>
        <input
          className={style.headerTitle}
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)}
          onBlur={changeColumnName}
        />
      </div>
      <CardList cards={filteredCards} setCards={setCards} columnName={column.name} userName={userName} />
      <AddCardForm idColumn={column.id} userName={userName} setCards={setCards} />
    </div>
  );
};

export default Column;
