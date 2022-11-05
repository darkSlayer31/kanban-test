import {FC} from 'react';
import {v4 as uuidv4} from 'uuid';

import useLocalStorage from '../../hooks/useLocalStorage';
import {ColumnType} from '../../types';

import ColumnList from '../ColumnList';
import style from './App.module.scss';

const mockColumns = [
  {
    id: uuidv4(),
    name: 'TODO',
  },
  {
    id: uuidv4(),
    name: 'In Progress',
  },
  {
    id: uuidv4(),
    name: 'Testing',
  },
  {
    id: uuidv4(),
    name: 'Done',
  },
];

const App: FC = () => {
  const [columns, setColumns] = useLocalStorage<ColumnType[]>('columns', []);

  if (columns.length === 0) {
    setColumns(mockColumns);
  }
  console.log('mockColumns', mockColumns);
  console.log('columnsApp', columns);

  return (
    <div className={style.container}>
      <ColumnList />
    </div>
  );
};

export default App;
