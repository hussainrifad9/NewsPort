const dislplayCata = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => DisplayData(data));
}


const DisplayData = (data) => {

    const datalist = data.data.news_category;
    console.log(datalist);
    const category = document.getElementById('categoriesList');

    for(const element of datalist) {
        const li = document.createElement('li');
        const urlKeyword = element.category_id;
        console.log(urlKeyword);
        li.innerHTML = `
        <button onclick="testcase('${urlKeyword}')">${element.category_name}</button>`
        category.appendChild(li)
        li.classList.add('list-style')
    }
}
dislplayCata();

const displaydatacount = (lenght) => {
    const showlength = document.getElementById('resultcount');
    showlength.innerText = `${lenght } Result found `;
}


const testcase = (keyword) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${keyword}`)
    .then(res => res.json())
    .then(data2 =>DisplayAllNews(data2));
}

const DisplayAllNews = (data2) => {
    const NewsFeed = document.getElementById('news');
    NewsFeed.innerHTML = ' ' ;
    const arrayData = data2.data;
    for(const element of arrayData) {
        
        const div = document.createElement('div');
        div.innerHTML = `
        <div class = "w-1/3">
                <img src="${element.image_url}" alt="" srcset="">
            </div>

            <div class ="ml-4 w-2/3">
                <h3 class = "font-semibold text-xl">${element.title}</h3>
                <p class="mb-3 mt-2 text-slate-600" font-semibold>${element.details}</p>
                <div class= "flex justify-start items-center">
                    <div class ="flex">
                        <img class = "w-10 rounded-full mr-5" src="${element.author.img}"></img>
                
                            <div >
                                <h6 class = "font-semibold">${element.author.name}</h6>
                                <h6>${element.author.published_date}</h6>
                            </div>

                    </div>
                    <div>
                    <p class ="ml-20 font-semibold text-slate-600">1.5M</p>
                    </div>

                </div>
            </div>

    `
    displaydatacount(arrayData.length)
    div.classList.add("border", "rounded", "shadow-2xl", "p-4", "mt-3", "flex")
    NewsFeed.appendChild(div);
    }
    
}

document.getElementById('blogButton').addEventListener('click', function() {
    window.location.replace("blogs.html");
})



























// const DisplayAllNews = (data2) => {
//     console.log(data2);
//     const NewsFeed = document.getElementById('news');
//     const arrayData = data2.data;
//     for(const element of arrayData) {

//         const div = document.createElement('div');
//         div.innerHTML = `
//         <div class = "w-1/3">
//                 <img src="${element.image_url}" alt="" srcset="">
//             </div>

//             <div class ="ml-4 w-2/3">
//                 <h3 class = "font-semibold text-xl">${element.title}</h3>
//                 <p class="mb-3 mt-2 text-slate-600" font-semibold>${element.details}</p>
//                 <div class= "flex justify-start items-center">
//                     <div class ="flex">
//                         <img class = "w-10 rounded-full mr-5" src="${element.author.img}"></img>
                
//                             <div >
//                                 <h6 class = "font-semibold">${element.author.name}</h6>
//                                 <h6>${element.author.published_date}</h6>
//                             </div>

//                     </div>
//                     <div>
//                     <p class ="ml-20 font-semibold text-slate-600">1.5M</p>
//                     </div>

//                 </div>
//             </div>

//     `
//     div.classList.add("border", "rounded", "shadow-2xl", "p-4", "mt-3", "flex")
//     NewsFeed.appendChild(div);
//     }
    
// }

// DisplayNews();