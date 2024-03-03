import Card from "./Card";

const ListCards = ({ searchResults }) => {
  const results = searchResults.map((item) => (
    <Card
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
