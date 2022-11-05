import {FC} from 'react';
import {ColumnType} from '../../types';

import CardList from '../CardList';
import AddCardForm from '../AddCardForm';

import style from './Column.module.scss';

interface ColumnProps {
  column: ColumnType;
}

const Column: FC<ColumnProps> = ({column}) => {
  return (
    <div className={style.column}>
      <div className={style.header}>
        <h4 className={style.headerTitle}>{column.name}</h4>
      </div>
      <CardList />
      <AddCardForm />
    </div>
  );
};

export default Column;
