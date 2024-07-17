import { NavLink } from 'react-router-dom';
import { IData } from '../../../interface/barcode-interface';
import { useRef, useState } from 'react';
import Menu from './menu/Menu';

const Header = ({ data, error, loading }: IData) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');

  const openSearchModal = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setIsSearchActive(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__content-logo">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10V13.5C21.1326 13.5 21.2598 13.5527 21.3535 13.6464C21.4473 13.7402 21.5 13.8674 21.5 14C21.5 14.1326 21.4473 14.2598 21.3535 14.3536C21.2598 14.4473 21.1326 14.5 21 14.5C20.8674 14.5 20.7402 14.4473 20.6464 14.3536C20.5527 14.2598 20.5 14.1326 20.5 14C20.5 13.8674 20.5527 13.7402 20.6464 13.6464C20.7402 13.5527 20.8674 13.5 21 13.5V10H11V13.5C11.1326 13.5 11.2598 13.5527 11.3535 13.6464C11.4473 13.7402 11.5 13.8674 11.5 14C11.5 14.1326 11.4473 14.2598 11.3535 14.3536C11.2598 14.4473 11.1326 14.5 11 14.5C10.8674 14.5 10.7402 14.4473 10.6464 14.3536C10.5527 14.2598 10.5 14.1326 10.5 14C10.5 13.8674 10.5527 13.7402 10.6464 13.6464C10.7402 13.5527 10.8674 13.5 11 13.5V10H7.35065C6.98002 9.99993 6.62248 10.1371 6.34698 10.385C6.07148 10.6329 5.89752 10.9741 5.85865 11.3427L4.17331 27.3427C4.15125 27.5519 4.17344 27.7634 4.23845 27.9635C4.30347 28.1636 4.40984 28.3478 4.55068 28.5041C4.69151 28.6604 4.86365 28.7853 5.05591 28.8708C5.24817 28.9562 5.45626 29.0002 5.66665 29H26.3333C27.2253 29 27.9186 28.2293 27.8253 27.3427L26.1413 11.3427C26.0613 10.58 25.4173 10 24.6493 10H21Z"
                fill="#1E90FF"
              />
              <path
                d="M21 14V10M11 14V10M11 13.5C10.8674 13.5 10.7402 13.5527 10.6464 13.6464C10.5527 13.7402 10.5 13.8674 10.5 14C10.5 14.1326 10.5527 14.2598 10.6464 14.3536C10.7402 14.4473 10.8674 14.5 11 14.5C11.1326 14.5 11.2598 14.4473 11.3535 14.3536C11.4473 14.2598 11.5 14.1326 11.5 14C11.5 13.8674 11.4473 13.7402 11.3535 13.6464C11.2598 13.5527 11.1326 13.5 11 13.5ZM11 13.5V10M21 13.5C20.8674 13.5 20.7402 13.5527 20.6464 13.6464C20.5527 13.7402 20.5 13.8674 20.5 14C20.5 14.1326 20.5527 14.2598 20.6464 14.3536C20.7402 14.4473 20.8674 14.5 21 14.5C21.1326 14.5 21.2598 14.4473 21.3535 14.3536C21.4473 14.2598 21.5 14.1326 21.5 14C21.5 13.8674 21.4473 13.7402 21.3535 13.6464C21.2598 13.5527 21.1326 13.5 21 13.5ZM21 13.5V10M21 10H11M21 10H24.6493C25.4173 10 26.0613 10.58 26.1413 11.3427L27.8253 27.3427C27.9186 28.2293 27.2253 29 26.3333 29H5.66665C5.45626 29.0002 5.24817 28.9562 5.05591 28.8708C4.86365 28.7853 4.69151 28.6604 4.55068 28.5041C4.40984 28.3478 4.30347 28.1636 4.23845 27.9635C4.17344 27.7634 4.15125 27.5519 4.17331 27.3427L5.85865 11.3427C5.89752 10.9741 6.07148 10.6329 6.34698 10.385C6.62248 10.1371 6.98002 9.99993 7.35065 10H11M21 10V8C21 6.67392 20.4732 5.40215 19.5355 4.46447C18.5978 3.52678 17.3261 3 16 3C14.6739 3 13.4021 3.52678 12.4644 4.46447C11.5268 5.40215 11 6.67392 11 8V10"
                stroke="#1E90FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h1>Tanda</h1>
          </div>
          <div className="header__content-input">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19L13.803 13.803M13.803 13.803C15.2096 12.3965 15.9998 10.4887 15.9998 8.49955C15.9998 6.51035 15.2096 4.60262 13.803 3.19605C12.3965 1.78947 10.4887 0.999268 8.49955 0.999268C6.51035 0.999268 4.60262 1.78947 3.19605 3.19605C1.78947 4.60262 0.999268 6.51035 0.999268 8.49955C0.999268 10.4887 1.78947 12.3965 3.19605 13.803C4.60262 15.2096 6.51035 15.9998 8.49955 15.9998C10.4887 15.9998 12.3965 15.2096 13.803 13.803Z"
                  stroke="#B0B0B0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              name="text"
              placeholder="Искать на UNO"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="header__content-navigation">
            <div>
              <button>
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.57894"
                    cy="5.77803"
                    r="4.77803"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.00002 17.2013C0.998732 16.8654 1.07385 16.5336 1.2197 16.2311C1.67736 15.3157 2.96798 14.8306 4.03892 14.6109C4.81128 14.4461 5.59431 14.336 6.38217 14.2814C7.84084 14.1533 9.30793 14.1533 10.7666 14.2814C11.5544 14.3366 12.3374 14.4467 13.1099 14.6109C14.1808 14.8306 15.4714 15.27 15.9291 16.2311C16.2224 16.8479 16.2224 17.5639 15.9291 18.1807C15.4714 19.1418 14.1808 19.5812 13.1099 19.7917C12.3384 19.9633 11.5551 20.0766 10.7666 20.1304C9.57937 20.231 8.38659 20.2494 7.19681 20.1853C6.92221 20.1853 6.65677 20.1853 6.38217 20.1304C5.59663 20.0772 4.81632 19.964 4.04807 19.7917C2.96798 19.5812 1.68652 19.1418 1.2197 18.1807C1.0746 17.8746 0.999552 17.54 1.00002 17.2013Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Войти
              </button>
            </div>
            <div>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.42226 17.3203C5.84426 17.3203 6.18726 17.6633 6.18726 18.0853C6.18726 18.5073 5.84426 18.8493 5.42226 18.8493C5.00026 18.8493 4.65826 18.5073 4.65826 18.0853C4.65826 17.6633 5.00026 17.3203 5.42226 17.3203Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.6747 17.3203C17.0967 17.3203 17.4397 17.6633 17.4397 18.0853C17.4397 18.5073 17.0967 18.8493 16.6747 18.8493C16.2527 18.8493 15.9097 18.5073 15.9097 18.0853C15.9097 17.6633 16.2527 17.3203 16.6747 17.3203Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.749878 0.75L2.82988 1.11L3.79288 12.583C3.87088 13.518 4.65188 14.236 5.58988 14.236H16.5019C17.3979 14.236 18.1579 13.578 18.2869 12.69L19.2359 6.132C19.3529 5.323 18.7259 4.599 17.9089 4.599H3.16388"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.1254 8.29492H14.8984"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Корзина
              </button>
            </div>
          </div>
          <div className="header__content-navigation-mobile">
            <svg
              onClick={openSearchModal}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L13.803 13.803M13.803 13.803C15.2096 12.3965 15.9998 10.4887 15.9998 8.49955C15.9998 6.51035 15.2096 4.60262 13.803 3.19605C12.3965 1.78947 10.4887 0.999268 8.49955 0.999268C6.51035 0.999268 4.60262 1.78947 3.19605 3.19605C1.78947 4.60262 0.999268 6.51035 0.999268 8.49955C0.999268 10.4887 1.78947 12.3965 3.19605 13.803C4.60262 15.2096 6.51035 15.9998 8.49955 15.9998C10.4887 15.9998 12.3965 15.2096 13.803 13.803Z"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="8.57894"
                cy="5.77803"
                r="4.77803"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.00002 17.2013C0.998732 16.8654 1.07385 16.5336 1.2197 16.2311C1.67736 15.3157 2.96798 14.8306 4.03892 14.6109C4.81128 14.4461 5.59431 14.336 6.38217 14.2814C7.84084 14.1533 9.30793 14.1533 10.7666 14.2814C11.5544 14.3366 12.3374 14.4467 13.1099 14.6109C14.1808 14.8306 15.4714 15.27 15.9291 16.2311C16.2224 16.8479 16.2224 17.5639 15.9291 18.1807C15.4714 19.1418 14.1808 19.5812 13.1099 19.7917C12.3384 19.9633 11.5551 20.0766 10.7666 20.1304C9.57937 20.231 8.38659 20.2494 7.19681 20.1853C6.92221 20.1853 6.65677 20.1853 6.38217 20.1304C5.59663 20.0772 4.81632 19.964 4.04807 19.7917C2.96798 19.5812 1.68652 19.1418 1.2197 18.1807C1.0746 17.8746 0.999552 17.54 1.00002 17.2013Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.42226 17.3203C5.84426 17.3203 6.18726 17.6633 6.18726 18.0853C6.18726 18.5073 5.84426 18.8493 5.42226 18.8493C5.00026 18.8493 4.65826 18.5073 4.65826 18.0853C4.65826 17.6633 5.00026 17.3203 5.42226 17.3203Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6747 17.3203C17.0967 17.3203 17.4397 17.6633 17.4397 18.0853C17.4397 18.5073 17.0967 18.8493 16.6747 18.8493C16.2527 18.8493 15.9097 18.5073 15.9097 18.0853C15.9097 17.6633 16.2527 17.3203 16.6747 17.3203Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.749878 0.75L2.82988 1.11L3.79288 12.583C3.87088 13.518 4.65188 14.236 5.58988 14.236H16.5019C17.3979 14.236 18.1579 13.578 18.2869 12.69L19.2359 6.132C19.3529 5.323 18.7259 4.599 17.9089 4.599H3.16388"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1254 8.29492H14.8984"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              onClick={openModal}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </header>
      <main className="categories">
        <div className="categories__all">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Все категории</p>
        </div>
        <nav className="navigation">
          <ul className="navigation__ul">
            <li>Стать продавцом</li>
            <li>О нас</li>
            <li>Курьерам</li>
            <li>Контакты</li>
            <li>Доставка</li>
          </ul>
        </nav>
      </main>
      {isSearchActive && (
        <div
          className="header__content-mobile-input"
          onClick={() => setIsSearchActive(false)}
        >
          <div
            className="header__content-input-mobile"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="header__content-input">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 19L13.803 13.803M13.803 13.803C15.2096 12.3965 15.9998 10.4887 15.9998 8.49955C15.9998 6.51035 15.2096 4.60262 13.803 3.19605C12.3965 1.78947 10.4887 0.999268 8.49955 0.999268C6.51035 0.999268 4.60262 1.78947 3.19605 3.19605C1.78947 4.60262 0.999268 6.51035 0.999268 8.49955C0.999268 10.4887 1.78947 12.3965 3.19605 13.803C4.60262 15.2096 6.51035 15.9998 8.49955 15.9998C10.4887 15.9998 12.3965 15.2096 13.803 13.803Z"
                    stroke="#B0B0B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="text"
                placeholder="Искать на UNO"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                ref={inputRef}
              />
            </div>
          </div>
        </div>
      )}
      <main className="links">
        <NavLink
          to={`/home`}
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          Главная/
        </NavLink>
        <NavLink
          to={`/technology`}
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          Бытовая техника/
        </NavLink>
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          {data?.barcode?.category.parent.name}
        </NavLink>
      </main>
      {isModalOpen && (
        <Menu setIsMenuActive={setIsModalOpen} isMenuActive={isModalOpen} />
      )}
    </>
  );
};

export default Header;
