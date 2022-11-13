import {FC, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import useLocalStorage from '../../hooks/useLocalStorage';
import {ColumnType} from '../../types';

import ColumnList from '../ColumnList';
import UserModal from '../UserModal';

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
  const [userName, setUserName] = useState('');

  if (columns.length === 0) {
    setColumns(mockColumns);
  }

  return (
    <>
      <UserModal username={userName} setUserName={setUserName} />
      <div className={style.container}>
        <h1 className={style.title}>Добро пожаловать {userName}</h1>
        <ColumnList userName={userName} columns={columns} setColumns={setColumns} />
      </div>
    </>
  );
};

export default App;
