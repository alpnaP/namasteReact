import { CDN_URL } from "../utils/constants";

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
      <img className="res-logo" alt="food" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.join(",")} </p>
      <p>{avgRating} Stars</p>
      <p>₹{costForTwo / 100} FOR TWO</p>
    </div>
  );
};
