import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu();

  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);
  //  const { info.id} = resInfo;
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    resInfo;

 return (
  <div className="menu">
    <h1>{resInfo[0].idCategory}</h1>
    <ul>
      {resInfo.map((item) => (
        <li key={item.idCategory}>
          {item.idCategory === resId.charAt(0) && (
            <>
              <img src={item.strCategoryThumb} alt={item.strCategory} />
              <p>{item.strCategory}</p>
              <p>{item.strCategoryDescription}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
);

    // <div className="menu">
    //   {/* <h1>{resInfo.info.id}</h1> */}
    //   {/* <h2>{ desc}</h2>
    //   <h2>{ menu}</h2>
    //   <ul>
    //     {resInfo.map((item) => (
    //       <li key={item.id}>
    //         {item.name}
    //         {item.price}
    //       </li>
    //     ))}
    //   </ul> */}
    // </div>
};

export default RestaurantMenu;
