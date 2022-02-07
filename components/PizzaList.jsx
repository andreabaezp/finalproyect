import style from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Delicious PIZZA! delivered to your door </h1>
      <p className={style.description}>
        Pizza ipsum dolor amet garlic bbq sauce bacon & tomato bacon philly
        chicken mozzarella ricotta hawaiian. Extra cheese pie pork, bianca
        chicken wing parmesan pepperoni chicken wing mayo. Chicken wing marinara
        peppers, pepperoni burnt mouth chicken and bacon red onions white garlic
        spinach bbq. Bianca chicken and bacon large pepperoni NY style red
        onions. Platter burnt mouth meatball white pizza sauteed onions. Bbq bbq
        rib hand tossed, chicken and bacon mushrooms pizza roll sausage deep
        crust pineapple ranch.
      </p>

      <div className={style.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza}/>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
