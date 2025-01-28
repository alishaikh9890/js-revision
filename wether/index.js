 
let streamtype = JSON.parse(localStorage.getItem("streamtype"));

let n=1;


let api_key = `?api_key=2254f6a103ea45b2d2965212918395da`;
let base_url = `https://api.themoviedb.org/3/`;
let end_point =  `discover/${streamtype ? streamtype : `tv`}`
let img_path = `https://image.tmdb.org/t/p/w500`;
let api_url = base_url+end_point+api_key;



const getMovies = (api_url) => {
   fetch(`${api_url}&page=1`)
   .then((res) => {
      return res.json()
   })
   .then((data) => {
      console.log(data.results);
      totalPage(data.page)
      showMovies(data.results);
   })
}
getMovies(api_url);






// streaming type 

function stream(){
   let stream = document.querySelectorAll(".btn-check");
   stream.forEach((ele)=>{
      if(ele.checked)
      {
            console.log(ele.value);
            localStorage.setItem("streamtype", JSON.stringify(ele.value))
            getMovies(base_url+`discover/${ele.value}`+api_key);
      }
   
   })
}

// streaming type 







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




 function showMovies(data){
   document.getElementById("allmovies").innerHTML = "";
   data.map((ele)=> {
      document.getElementById("allmovies").innerHTML += `
         <div class="col">
                <div class="card h-100 border-0 rounded-2 overflow-hidden" style="box-shadow:0px 0px 5px 1px #00fff338" >
                    <img src="${img_path+ele.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body p-1 bg-black text-white">
                     <p><span class="badge text-bg-secondary">${ele.vote_average}</span></p>
                      <h6 class="card-title">${ele.title || ele.name}</h6>
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

// function showGenres(gen){
//    document.getElementById("genre").innerHTML = "";
// gen.map((ele) => {
//    document.getElementById("genre").innerHTML +=`
//      <div class="dropdown-item"  > <input id="check" type="checkbox" value="${ele.id}" />${ele.name}</div>
//    `
// })

// }

function showGenres(gen){
   document.getElementById("genres").innerHTML = "";
gen.map((ele) => {
   document.getElementById("genres").innerHTML +=`
         <button class="btn btn-outline-warning btn-sm m-1">${ele.name}</button>
   `
})

}




 let doc = document.getElementById("check")
doc.addEventListener("change", function(){
if(this.checked){
   console.log("checked")
}
   console.log(e.target.value)
 
})


