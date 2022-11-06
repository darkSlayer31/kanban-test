import React, {FC, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import {CardType} from '../../types';

import {ReactComponent as PlusIcon} from '../Icons/Plus.svg';
import style from './AddCardForm.module.scss';
import iconStyle from '../Icons/Icon.module.scss';

interface AddCardFormProps {
  idColumn: string;
  userName: string;
  setCards: (value: CardType[] | ((val: CardType[]) => CardType[])) => void;
}

const AddCardForm: FC<AddCardFormProps> = ({idColumn, userName, setCards}) => {
  const [cardName, setCardName] = useState('');

  const addCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCard: CardType = {
      id: uuidv4(),
      author: userName,
      name: cardName,
      idColumn,
    };
    setCardName('');
    setCards((prev) => [...prev, newCard]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  return (
    <form className={style.form} onSubmit={addCard}>
      <input type="text" name="newCard" placeholder="Добавить карточку" value={cardName} onChange={onChange} />
      <button type="submit" disabled={!cardName}>
        <PlusIcon title="Добавить" width={16} height={16} className={iconStyle.svgIcon} />
      </button>
    </form>
  );
};

export default AddCardForm;
