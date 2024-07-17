interface IMenu {
  isMenuActive: boolean;
  setIsMenuActive: Function;
}

const Menu = ({ setIsMenuActive }: IMenu) => {
  const closeModal = () => {
    setIsMenuActive(false);
  };
  return (
    <div className="menu" onClick={closeModal}>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__conetnt-svg" onClick={closeModal}>
          <svg
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
        <main>
          <div>
            <p onClick={closeModal}>Все категории</p>
          </div>
          <nav>
            <ul>
              <li onClick={closeModal}>Стать продавцом</li>
              <li onClick={closeModal}>О нас</li>
              <li onClick={closeModal}>Курьерам</li>
              <li onClick={closeModal}>Контакты</li>
              <li onClick={closeModal}>Доставка</li>
            </ul>
          </nav>
        </main>
      </div>
    </div>
  );
};

export default Menu;
