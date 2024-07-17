interface IModal {
  isModalActive: boolean;
  setIsModalActive: Function;
  price: number | undefined;
}

const Modal = ({ setIsModalActive, price }: IModal) => {
  return (
    <div className="modal" onClick={() => setIsModalActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content-characteristics">
          <h2>Характеристики</h2>
          <svg
            onClick={() => setIsModalActive(false)}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 17L17 1M1 1L17 17"
              stroke="#757575"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <hr />
        <div className="modal__content-characteristics-details">
          <div>
            <span>Способ установки</span>
            <p>Способ установки</p>
          </div>
          <div>
            <span>Напряжение</span>
            <p>Напряжение</p>
          </div>
          <div>
            <span>Цвет</span>
            <p>Цвет</p>
          </div>
          <div>
            <span>Материал</span>
            <p>Материал</p>
          </div>
          <div>
            <span>Управление</span>
            <p>Управление</p>
          </div>
        </div>
        <hr />
        <div className="modal__content-footer">
          <div>
            <p>{price} сом</p>
            <span>{price} сом</span>
          </div>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
