import { CDN_URL } from "../utils/constants";

//const ResturantCard = ({restName,cuisine})
//const {restName,cuisine}=props

export const ResturantCard = (props) => {
  const { restData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restData?.info;
  return (
    <div className="m-4 p-4 w-[300px] bg-slate-400 rounded-lg hover:bg-slate-200">
      <img
        className=" rounded-lg"
        alt="food"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{cuisines.join(",")} </p>
      <p>{avgRating} Stars</p>
      <p>{costForTwo}</p>
    </div>
  );
};

// Higher order componenet
// it takes input ReastCard==> o/p -->restaurant card promoted

export const withPromatedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
