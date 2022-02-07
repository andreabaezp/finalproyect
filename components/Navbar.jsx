import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telefono.png" alt="phone" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}> ORDER NOW! </div>
          <div className={styles.text}> 017 657 987</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HOME</li>
          <li className={styles.listItem}>PRODUCTS</li>
          <li className={styles.listItem}>MENU</li>
          <Image src="/img/pizza.png" alt="phone" width="80px" height="70px" />
          <li className={styles.listItem}>EVENTS</li>
          <li className={styles.listItem}>BLOG</li>
          <li className={styles.listItem}>CONTACT</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image
              src="/img/carts.png"
              alt="phone"
              width="35px"
              height="35px"
            />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
