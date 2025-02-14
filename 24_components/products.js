
export const products = (prod) => {   




const prod_api = `https://fakestoreapi.com/products`
const users_api = `https://randomuser.me/api/?results=50`

    fetch(users_api)
    .then((res) => res.json())
    .then((data) => showData(data.results))


    function showData(prod){
        console.log(prod)       
    }
    return (
       ` <div class="row row-cols-3 row-cols-lg-4 g-2 my-5">
            ${ prod.map(ele => 
        ` 
            <div class="col">
                    <div class="card h-100">
                        <img src="${ele.picture.large}" class="card-img-top img-thumbnail" alt="...">
                        <div class="card-body">
                        <h6 class="card-title">Card title</h6>
                        <a href="#" class="btn btn-primary btn-sm">more</a>
                        </div>
                    </div>
            </div>
            `  
    ).join('')}
        </div>`
    )
}
