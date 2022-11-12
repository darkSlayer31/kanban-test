import {FC, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {CardType} from '../../types';

import style from './CardModal.module.scss';

interface CardModalProps {
  show: boolean;
  closeModal: () => void;
  card: CardType;
  columnName: string;
  setCards: (value: CardType[] | ((val: CardType[]) => CardType[])) => void;
}

const CardModal: FC<CardModalProps> = ({show, closeModal, card, columnName, setCards}) => {
  const [description, setDescription] = useState(card.description);
  const [name, setName] = useState(card.name);

  const onChangeCardName = () => {
    if (!name) {
      setName(card.name);
      return;
    }

    setCards((prev) => {
      return prev.map((item) => {
        if (item.id === card.id) {
          return {...item, name};
        }
        return item;
      });
    });
  };

  const changeCardDescription = () => {
    setCards((prev) => {
      return prev.map((item) => {
        if (item.id === card.id) {
          return {...item, description};
        }
        return item;
      });
    });
  };

  const deleteCard = () => {
    setCards((prev) => prev.filter((item) => item.id !== card.id));
    closeModal();
  };

  return (
    <Modal show={show} onHide={closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <input
            type={'text'}
            name={'cardName'}
            className={style.title}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={onChangeCardName}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={style.content}>
          <div className={style.description}>
            <h5>Описание:</h5>
            <input
              className={style.descriptionInput}
              name="description"
              type={'text'}
              placeholder="Добавьте описание"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={changeCardDescription}
            />
          </div>
          <div>
            <p>
              Карточка в колонке - <strong>{columnName}</strong>
            </p>
            <p>
              Автор - <strong>{card.author}</strong>
            </p>
          </div>
        </div>

        {/* CommentsList Component */}
        <h5>Комментарии:</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={deleteCard}>
          Удалить карточку
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
