import {FC, useState} from 'react';

import Card from '../Card';

const CardList: FC = () => {
  const [cards, setCards] = useState([]);

  return cards.length === 0 ? (
    <div>Карточек нет</div>
  ) : (
    <>
      {cards.map((card, i) => (
        <Card key={i} />
      ))}
    </>
  );
};

export default CardList;
