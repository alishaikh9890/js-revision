 
let n=1;

 fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2254f6a103ea45b2d2965212918395da&include_adult=false&include_video=false&language=en-US&page=${n}`)
 .then((res) => {
    return res.json()
 })
 .then((data) => {
   console.log(data.page);
    totalPage(data.page)
    showMovies(data.results);
 })


 fetch(`
https://api.themoviedb.org/3/genre/movie/list?api_key=2254f6a103ea45b2d2965212918395da&include_adult=false&include_video=false&language=en-US`)
 .then((res) => {
    return res.json()
 })
 .then((data) => {
   console.log(data.genres);
   showGenres(data.genres)
 })



 function page(n){
   fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2254f6a103ea45b2d2965212918395da&include_adult=false&include_video=false&language=en-US&page=${n}`)
   .then((res) => {
      return res.json()
   })
   .then((data) => {
      console.log(data.page);
      totalPage(data.page);
      showMovies(data.results);
   })
 }


 function genre(g){
  
 }



 function showMovies(data){
   document.getElementById("allmovies").innerHTML = "";
   data.map((ele)=> {
      document.getElementById("allmovies").innerHTML += `
         <div class="col">
                <div class="card h-100" >
                    <img src="https://image.tmdb.org/t/p/w500${ele.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${ele.original_title}</h5>
                      <a href="#" class="btn btn-warning btn-sm">view more</a>
                    </div>
                  </div>
            </div>
      `
   })
 }


 function totalPage(tpage){
   document.getElementById("pages").innerHTML = "";
   document.getElementById("pages").innerHTML = `
        <li class="page-item"><button class="page-link ${tpage==1 ? `disabled` : ``}"  onclick="page(${tpage-1})">Prev</button></li>
              <li class="page-item"><a class="page-link">${tpage}</a></li>
              <li class="page-item"><button class="page-link" onclick="page(${tpage+1})">Next</button></li>
   `

}

function showGenres(gen){
   document.getElementById("genre").innerHTML = "";
gen.map((ele) => {
   document.getElementById("genre").innerHTML +=`
     <option value=${ele.id} >${ele.name}</option>
   `
})

}




 let doc = document.getElementById("genre")
doc.addEventListener("change", function(e){
   fetch(`https://api.themoviedb.org/3/movie/${e.target.value}/similar?api_key=2254f6a103ea45b2d2965212918395da&language=en-US`)
   .then((res) => {
      return res.json()
   })
   .then((data) => {
      console.log(data);
      totalPage(data.page);
      showMovies(data.results);
   })
})


