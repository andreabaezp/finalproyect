import style from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={style.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="pizza" width="500" height="500" />
      </Link>
      <h2 className={style.title}>{pizza.title}</h2>
      <span className={style.price}>${pizza.prices[0]}</span>
      <p className={style.description}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
