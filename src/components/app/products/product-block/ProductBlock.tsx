import { useEffect, useState } from 'react';

interface IProductBlock {
  name: string | undefined;
  image: string;
  price: number | undefined;
}

const ProductBlock = ({ image, name, price }: IProductBlock) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Удаляем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className={`${width > 768 ? 'product-block' : 'bottom'}`}>
        <div className="product-block__items">
          <div className="product-block__items-product">
            <div>
              <img src={image} alt="Machine" />
            </div>
            <div className="product-block__items-product-about">
              <p>{name}</p>
              <div className="product-block__items-product-about-rating">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1037 3.81663C11.4705 3.07346 12.5302 3.07346 12.8971 3.81663L14.8579 7.78909C15.0035 8.08394 15.2846 8.2884 15.61 8.33595L19.9966 8.97712C20.8165 9.09696 21.1433 10.1048 20.5497 10.683L17.3772 13.773C17.1413 14.0027 17.0336 14.3339 17.0893 14.6584L17.8378 19.0226C17.9779 19.8396 17.1204 20.4626 16.3867 20.0767L12.4658 18.0148C12.1744 17.8615 11.8263 17.8615 11.5349 18.0148L7.614 20.0767C6.88037 20.4625 6.02282 19.8396 6.16294 19.0226L6.91145 14.6584C6.96711 14.3339 6.85945 14.0027 6.62358 13.773L3.45105 10.683C2.85745 10.1048 3.18424 9.09696 4.00415 8.97712L8.39073 8.33595C8.71609 8.2884 8.99727 8.08394 9.14281 7.78909L11.1037 3.81663Z"
                      fill="#FDC102"
                    />
                  </svg>
                  <span>4.9</span>
                </div>
                <a href="#">60 отзывов</a>
              </div>
            </div>
          </div>
          <div className="product-block__items-buy">
            <div>
              <p>{price} сом</p>
              <span>{price} сом</span>
            </div>
            <button className="product-block__items-buy-now">
              Купить сейчас
            </button>
            <button className="product-block__items-buy-cart">В корзину</button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ProductBlock;
