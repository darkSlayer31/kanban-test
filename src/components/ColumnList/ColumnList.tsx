import {FC} from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';
import {ColumnType} from '../../types';
import Column from '../Column';

import style from './ColumnList.module.scss';

const ColumnList: FC = () => {
  const [columns, setColumns] = useLocalStorage<ColumnType[]>('columns', []);
  console.log('columns1', columns);

  const addColumn = () => {
    setColumns((prev) => {
      const newColumns = prev.filter((item) => item.id !== 'wdwd');
      return newColumns;
    });
  };

  return (
    <ul className={style.list}>
      {columns.map((item) => {
        return (
          <div className={style.item} key={item.id}>
            <Column column={item} />
          </div>
        );
      })}
    </ul>
  );
};

export default ColumnList;
