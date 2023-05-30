import { createBrowserRouter } from "react-router-dom";
// import { Basket } from "./pages/Basket";
import { MainContainer } from "./pages/MainContainer";
import { ErrorPage } from './pages/ErrorPage';
import { TiltlePage } from "./pages/TitlePage/TitlePage";
import { JewelriesPage } from "./pages/JewelriesPage/JewelriesPage";
import { CollectionsPage } from "./pages/CollectionsPage/CollectionsPage";
import { NewsPage } from "./pages/News/NewsPage";


export const router = createBrowserRouter([{
    path: '/',
    element: <MainContainer />,
    errorElement:<ErrorPage/>,
    children: [
        {
            path: '/',
            element: <TiltlePage />
        }, 
    // {
    //         path: '/basket',
    //         element: <Basket />
    //     },
     {
            path: '/jewelries',
            element: <JewelriesPage />,
            //    children:[
            //     {
            //         path: '/jewelries/:idJewelry '
            //     }
            //    ] 
        },
        {
            path: '/collections',
            element: <CollectionsPage />,
            //    children:[
            //     {
            //         path: '/collections/:idCollections '
            //         // element: <CollectionsPage />,
            //     }
            //    ] 
        },
        {
            path: '/news',
            element: <NewsPage />,
        }
    ]
},
{
    path: '/admin',
    element: <MainContainer />,
    children: []
}
])
