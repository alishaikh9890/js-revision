


export function slider(prod){   
    return (
       ` 
        <div class="container my-5">
            <div id="user_slider">
                ${ prod.map(ele => 
                    ` 
                    <div>
                        <img src="${ele.picture.large}" class="card-img-top img-thumbnail">           
                    </div>
                    `  
                ).join('')}
            </div>
        </div>
        `
    )
}