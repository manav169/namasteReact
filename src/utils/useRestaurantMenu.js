import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";


const useRestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API);
        // const data = await fetch(MENU_API + resId);
        const json = await data.json({});
        // console.log(json);
        // console.log("cccccccccccccccccccccccccccccccccccccccccccccc");
        setResInfo(json?.categories);
        // console.log(resInfo)
        // setResInfo(json.bbqs);
    };

    return resInfo;

};
export default useRestaurantMenu;



// import { useState, useEffect } from "react";
// import { MENU_API } from "../utils/constants";


// const useRestaurantMenu = (resId) => {
//     const [resInfo, setResInfo] = useState(null);

//     useEffect(() => {
//         fetchMenu();
//     }, []);

//     const fetchMenu = async () => {
//         const data = await fetch(MENU_API + resId);
//         const json = await data.json({});
//         console.log(json);
//         setResInfo(json.bbqs);
//     };

//     return resInfo;

// };
// export default useRestaurantMenu;