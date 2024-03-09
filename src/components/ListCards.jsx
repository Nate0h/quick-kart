import Card from "./Card";
import "../styles/Shop.css";

const ListCards = ({ searchResults }) => {
  const results = searchResults.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      title={item.title}
      image={item.image}
      rating={item.rating}
      price={item.price}
      description={item.description}
    />
  ));

  const content = results.length ? results : <div>Nothing found</div>;

  return <main>{content}</main>;
};

export default ListCards;
