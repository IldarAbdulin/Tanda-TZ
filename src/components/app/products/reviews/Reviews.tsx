import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Review from './review/Review';

const reviewsArr = [
  {
    id: 1,
    name: 'Сайкал',
    stars: 4,
    date: '17 мая 2023, 11:11',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  },
  {
    id: 2,
    name: 'Эрбол',
    stars: 5,
    date: '12 мая 2024, 22:11',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown',
  },
  {
    id: 3,
    name: 'Айдар',
    stars: 3,
    date: '22 мая 2021, 13:11',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy',
  },
  {
    id: 4,
    name: 'Ильдар',
    stars: 5,
    date: '27 мая 2019, 21:51',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since',
  },
  {
    id: 5,
    name: 'Никита',
    stars: 5,
    date: '3 мая 2022, 21:11',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  },
  {
    id: 6,
    name: 'Данияр',
    stars: 4,
    date: '1 февраля 2024, 22:11',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown',
  },
  {
    id: 7,
    name: 'Амир',
    stars: 4,
    date: '13 мая 2021, 13:11',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy',
  },
  {
    id: 8,
    name: 'Альберт',
    stars: 5,
    date: '15 июня 2019, 21:51',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since',
  },
];

const Reviews = () => {
  return (
    <>
      <section className="reviews" id="reviews">
        <div className="reviews-title">
          <h2>Отзывы</h2>
        </div>
        <div className="reviews-stars">
          <div className="reviews-stars-items">
            <p>4.9</p>
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
            </div>
            <span>60 отзывов</span>
          </div>
          <div className="reviews-stars-review">
            <div>
              <svg
                className="review"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.862 4.487L18.549 2.799C18.9007 2.44733 19.3777 2.24976 19.875 2.24976C20.3723 2.24976 20.8493 2.44733 21.201 2.799C21.5527 3.15068 21.7502 3.62766 21.7502 4.125C21.7502 4.62235 21.5527 5.09933 21.201 5.451L10.582 16.07C10.0533 16.5984 9.40137 16.9867 8.685 17.2L6 18L6.8 15.315C7.01328 14.5986 7.40163 13.9467 7.93 13.418L16.862 4.487ZM16.862 4.487L19.5 7.125M18 14V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.763 16.3467 21 15.75 21H5.25C4.65326 21 4.08097 20.763 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V8.25C3 7.65327 3.23705 7.08097 3.65901 6.65901C4.08097 6.23706 4.65326 6 5.25 6H10"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="vector"
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2.75C1.80109 2.75 1.61032 2.67098 1.46967 2.53033C1.32902 2.38968 1.25 2.19891 1.25 2C1.25 1.80109 1.32902 1.61032 1.46967 1.46967C1.61032 1.32902 1.80109 1.25 2 1.25C2.19891 1.25 2.38968 1.32902 2.53033 1.46967C2.67098 1.61032 2.75 1.80109 2.75 2C2.75 2.19891 2.67098 2.38968 2.53033 2.53033C2.38968 2.67098 2.19891 2.75 2 2.75ZM2 8.75C1.80109 8.75 1.61032 8.67098 1.46967 8.53033C1.32902 8.38968 1.25 8.19891 1.25 8C1.25 7.80109 1.32902 7.61032 1.46967 7.46967C1.61032 7.32902 1.80109 7.25 2 7.25C2.19891 7.25 2.38968 7.32902 2.53033 7.46967C2.67098 7.61032 2.75 7.80109 2.75 8C2.75 8.19891 2.67098 8.38968 2.53033 8.53033C2.38968 8.67098 2.19891 8.75 2 8.75ZM2 14.75C1.80109 14.75 1.61032 14.671 1.46967 14.5303C1.32902 14.3897 1.25 14.1989 1.25 14C1.25 13.8011 1.32902 13.6103 1.46967 13.4697C1.61032 13.329 1.80109 13.25 2 13.25C2.19891 13.25 2.38968 13.329 2.53033 13.4697C2.67098 13.6103 2.75 13.8011 2.75 14C2.75 14.1989 2.67098 14.3897 2.53033 14.5303C2.38968 14.671 2.19891 14.75 2 14.75Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p>Написать отзыв</p>
          </div>
        </div>
        <div className="reviews-review">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              1440: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              390: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
            }}
            navigation={true}
            modules={[Navigation]}
          >
            {reviewsArr.map((review) => (
              <SwiperSlide key={review.id}>
                <Review {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="reviews-review-check">Смотреть отзывы</button>
        </div>
      </section>
    </>
  );
};

export default Reviews;
