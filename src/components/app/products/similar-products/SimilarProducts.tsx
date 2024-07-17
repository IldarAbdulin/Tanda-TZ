import SimilarProduct from './similar-product/SimilarProducts';

interface ISimilarProducts {
  image: string;
  name: string | undefined;
  brend: string | undefined;
  price: number | undefined;
  stars: number;
}

const SimilarProducts = ({
  image,
  brend,
  name,
  price,
  stars,
}: ISimilarProducts) => {
  return (
    <div>
      <SimilarProduct
        brend={brend}
        image={image}
        name={name}
        price={price}
        stars={stars}
      />
    </div>
  );
};

export default SimilarProducts;
