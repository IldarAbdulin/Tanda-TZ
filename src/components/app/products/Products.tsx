import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { IData } from '../../../interface/barcode-interface';
import Machine from '../../../assets/products/machine.png';
import Reviews from './reviews/Reviews';
import SimilarProducts from './similar-products/SimilarProducts';
import ProductBlock from './product-block/ProductBlock';
import Modal from './modal/Modal';

const swiperArr = [
  { id: 1, image: Machine },
  { id: 2, image: Machine },
  { id: 3, image: Machine },
  { id: 4, image: Machine },
  { id: 5, image: Machine },
  { id: 6, image: Machine },
  { id: 7, image: Machine },
  { id: 8, image: Machine },
];

const Products = ({ data, error, loading }: IData) => {
  const [showBlockWithProduct, setShowBlockWithProduct] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>();
  const arr = new Array(8).fill({
    image: Machine,
    price: data?.barcode?.sellingPrice,
    brend: data?.barcode?.category.parent.name,
    name: data?.barcode?.category.name,
    stars: 0,
  });

  const openModal = () => {
    setIsModalActive(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const targetHeight = 650;

      if (scrollHeight >= targetHeight) {
        setShowBlockWithProduct(true);
      } else {
        setShowBlockWithProduct(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setCurrentImage(swiperArr[0].image);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      {showBlockWithProduct && (
        <ProductBlock
          name={data?.barcode?.category.name}
          price={data?.barcode?.sellingPrice}
          image={Machine}
        />
      )}
      {isModalActive && (
        <Modal
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          price={data?.barcode?.sellingPrice}
        />
      )}
      <div className="product">
        <div className="product-wrapper">
          <Swiper
            direction={'vertical'}
            slidesPerView={4}
            breakpoints={{
              1440: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
            modules={[Navigation]}
            navigation
            className="mySwiper"
          >
            {swiperArr.map((swiper) => (
              <SwiperSlide key={swiper.id}>
                <img
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCurrentImage(swiper.image)}
                  src={swiper.image}
                  alt="machine"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="product__image">
            <img src={currentImage} alt="machine" />
          </div>
          <div className="product__image-mobile">
            <Swiper
              pagination={{
                type: 'fraction',
              }}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper-mobile"
            >
              {swiperArr.map((swiper) => (
                <SwiperSlide key={swiper.id}>
                  <img src={swiper.image} alt="machine" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="product__about">
          <p>{data?.barcode?.category.name}</p>
          <div className="product__about-name">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#DEDEDE" />
              <path
                d="M15.125 7C15.125 7.8288 14.7958 8.62366 14.2097 9.20971C13.6237 9.79576 12.8288 10.125 12 10.125C11.1712 10.125 10.3764 9.79576 9.79031 9.20971C9.20426 8.62366 8.87502 7.8288 8.87502 7C8.87502 6.1712 9.20426 5.37634 9.79031 4.79029C10.3764 4.20424 11.1712 3.875 12 3.875C12.8288 3.875 13.6237 4.20424 14.2097 4.79029C14.7958 5.37634 15.125 6.1712 15.125 7ZM5.75085 18.765C5.77763 17.1253 6.4478 15.5618 7.61684 14.4117C8.78587 13.2616 10.3601 12.6171 12 12.6171C13.6399 12.6171 15.2142 13.2616 16.3832 14.4117C17.5522 15.5618 18.2224 17.1253 18.2492 18.765C16.2887 19.664 14.1568 20.1279 12 20.125C9.77002 20.125 7.65335 19.6383 5.75085 18.765Z"
                stroke="#757575"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{data?.barcode?.title}</p>
          </div>
          <span>{data?.barcode?.category.parent.name}</span>
          <div className="product__about-rating">
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
              <p>4.9</p>
            </div>
            <a href="#reviews">60 отзывов</a>
          </div>
          <div className="product__about-description">
            <h4>Описание</h4>
            <p>{data?.barcode?.description}</p>
          </div>
          <div className="product__about-characteristics">
            <button onClick={openModal}>Смотреть характеристики</button>
          </div>
        </div>
        <div className="product__buy">
          <div className="product__buy-border">
            <div className="product__buy-price">
              <p>{data?.barcode?.sellingPrice} сом</p>
              <span className="product__buy-price_through">
                {data?.barcode?.sellingPrice} сом
              </span>
            </div>
            <div style={{ margin: '10px 0' }}>
              <button className="buy">Купить сейчас</button>
              <button className="credit">Оформить кредит</button>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <section>
        <h2>Похожие продукты</h2>
        <div className="similar-products">
          {arr.map((item, i) => (
            <SimilarProducts key={i} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
