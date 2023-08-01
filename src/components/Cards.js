const styleCard = {
  backgroundColor: "	#B0C4DE",
};
//const ResturantCard = ({restName,cuisine})
//const {restName,cuisine}=props

export const ResturantCard = (props) => {
  const { restData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restData?.info;
  return (
    <div className="rest-card" style={styleCard}>
      <img
        className="res-logo"
        alt="food"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{cuisines.join(",")} </p>
      <p>{avgRating} Stars</p>
      <p>₹{costForTwo / 100} FOR TWO</p>
    </div>
  );
};
