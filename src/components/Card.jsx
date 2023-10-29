function Card({ id, name, img, shuffleOrder, addAlreadyClicked }) {
  return (
    <div
      className="card"
      onClick={() => {
        shuffleOrder();
        addAlreadyClicked(id);
      }}
    >
      <img src={img} alt="" />
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
