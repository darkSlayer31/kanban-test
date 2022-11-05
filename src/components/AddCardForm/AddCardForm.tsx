import {FC, useState} from 'react';

import {ReactComponent as PlusIcon} from '../Icons/Plus.svg';
import style from './AddCardForm.module.scss';

const AddCardForm: FC = () => {
  const [cardName, setCardName] = useState('');

  const addCard = () => {
    console.log('addCard', cardName);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  return (
    <form className={style.form}>
      <input type="text" name="newCard" placeholder="Добавить карточку" onChange={onChange} />
      <button onClick={addCard} disabled={!cardName}>
        <PlusIcon width={16} height={16} />
      </button>
    </form>
  );
};

export default AddCardForm;
