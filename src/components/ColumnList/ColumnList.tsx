import {FC} from 'react';

import {ColumnType} from '../../types';
import Column from '../Column';

import style from './ColumnList.module.scss';

interface ColumnListProps {
  userName: string;
  columns: ColumnType[];
}

const ColumnList: FC<ColumnListProps> = ({userName, columns}) => {
  return (
    <ul className={style.list}>
      {columns.map((item) => {
        return (
          <div className={style.item} key={item.id}>
            <Column column={item} userName={userName} />
          </div>
        );
      })}
    </ul>
  );
};

export default ColumnList;
