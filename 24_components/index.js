
const app = document.getElementById("root");
import {products} from "./products.js";


app.innerHTML = products()


// import {slider} from "./slider.js";



// const prod_api = `https://fakestoreapi.com/products`
// const users_api = `https://randomuser.me/api/?results=50`

//     fetch(users_api)
//     .then((res) => res.json())
//     .then((data) => showData(data.results))


//     function showData(prod){
//         console.log(prod)

//             app.innerHTML =slider(prod)+ products(prod)
//             // app.innerHTML = slider(prod)

            
//             $('#user_slider').slick({
//                 arrow:true,
//                 infinite: true,
//                 slidesToShow: 6,
//                 slidesToScroll: 1,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 responsive: [
//                     {
//                       breakpoint: 768,
//                       settings: {
//                         centerPadding: '40px',
//                         slidesToShow: 3
//                       }
//                     },
//                     {
//                       breakpoint: 480,
//                       settings: {
//                         centerPadding: '40px',
//                         slidesToShow: 2
//                       }
//                     }
//                   ]
//               });
       
   
//     }




