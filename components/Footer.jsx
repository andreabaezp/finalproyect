import style from "../styles/Footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
  <div className={style.container}>
    <div className={style.item}>
      <Image src="/img/footer.jpg" alt="restaurant wall" layout="fill" objectFit="cover"/>

    </div>
    <div className={style.item}>
      <div className={style.card}>
        <h2 className={style.motto}>Spinach thin crust white pizza marinara.</h2>
      </div>
      <div className={style.card}>
        <h2 className={style.title}>Find the closest restaurant!</h2>
        <p className={style.text}>
          1234 Main st.
          <br/>Munich, Germany
          <br/>(123) 678-456
        </p>
        <p className={style.text}>
          1234 Main st.
          <br/>Munich, Germany
          <br/>(123) 678-456
        </p>
        <p className={style.text}>
          1234 Main st.
          <br/>Munich, Germany
          <br/>(123) 678-456
        </p>
        <p className={style.text}>
          1234 Main st.
          <br/>Munich, Germany
          <br/>(123) 678-456
        </p>
        <p className={style.text}>
          1234 Main st.
          <br/>Munich, Germany
          <br/>(123) 678-456
        </p>
      </div>
      <div className={style.card}>
        <h2 className={style.title}>Open Hours</h2>
        <p className={style.text}>
          Monday until Friday
          <br/>10:00 - 23:00
        </p>
        <p className={style.text}>
        Saturday & Sunday
          <br/>9:00 - 24:00
        </p>
      </div>

    </div>
      
  </div>);
};

export default Footer;
