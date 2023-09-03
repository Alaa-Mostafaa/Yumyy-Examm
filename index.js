/* Fetch home_recipes function */
async function home_recipess() {
  let home_recipe = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s`
  );
  let home_recipes_data = await home_recipe.json();
  let data = home_recipes_data.meals;
  console.log(home_recipes_data.meals);

  DisplayHome(data);
}
/* End of ( Fetch categories function ) */
function get(){
  let trs=`
  <section>

  <div class="container">
    <div class="row gx-4 gy-5" id="lll">
    </div>
  </div>


</section>

  
  `
  document.getElementById("category").innerHTML=trs;
  home_recipess()
}
/* Display Home Rescipes */
get()
function DisplayHome(home_recipes_data) {
  let trs = "";

  for (let i = 0; i < home_recipes_data.length; i++) {
    trs += `
            
       
          <div class="col-3 m-2" id="category-img" style="width:23.7%" onclick="mealDetails('${home_recipes_data[i].strMeal}')">
    
          <img src="${home_recipes_data[i].strMealThumb}"  class="image rounded-3">
          <div class="overlay d-flex justify-content-center align-items-center">
            <div class="text"> 
            <h3 class="p-2">${home_recipes_data[i].strMeal}</h3>
            </div>
          </div>
          </div>  
          
            
            
            `;
  }
  document.getElementById("lll").innerHTML = trs;
}
/* End of Display Home Rescipes */

let categories_list = [];

/* Fetch categories function */
function showCategory(){
  let trs=`
  <section style="padding-top: 1%;">

  <div class="container">
    <div class="row gx-4 gy-5" id="lll">
    </div>
  </div>


</section>

  
  `
  document.getElementById("category").innerHTML=trs;
  categories()
}
async function categories() {
  let category = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php "
  );
  let category_data = await category.json();
  categories_list = category_data.categories;
  console.log(categories_list);
  Display();
}
/* End of ( Fetch categories function ) */

/* Display Categories */

function Display() {
  let trs = "";

  for (let i = 0; i < categories_list.length; i++) {
    let data = categories_list[i].strCategoryDescription;
    let dataa = data.substr(0, 140);
    trs += `
        
   
      <div class="col-3 m-2" id="category-img" style="width:23.7%" onclick="getMealsByCategories('${categories_list[i].strCategory}')">

      <img src="${categories_list[i].strCategoryThumb}"  class="image">
      <div class="overlay d-flex justify-content-center align-items-center">
        <div class="text"> 
        <h3 class="p-2">${categories_list[i].strCategory}</h3>
          <p class="p">${dataa}</p>
        </div>
      </div>
      </div>  
      
        
        
        `;
  }
  document.getElementById("lll").innerHTML = trs;
}

/* End of Display Categories */

/* get meals from categories Function*/
async function getMealsByCategories(x) {
  let category = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`
  );
  let category_data = await category.json();
  let some = category_data.meals;
  let someMeals = some.splice(0, 20);
  console.log(someMeals);
  displayMeals(someMeals);
}

function displayMeals(someMeals) {
  let trs = "";

  for (let i = 0; i < someMeals.length; i++) {
    trs += `
        
   
      <div class="col-3 m-2" id="category-img" style="width:23.7%" onclick="mealDetails('${someMeals[i].strMeal}')">

      <img src="${someMeals[i].strMealThumb}"  class="image">
      <div class="overlay d-flex justify-content-center align-items-center">
        <div class="text"> 
        <h3 class="p-2">${someMeals[i].strMeal}</h3>
        </div>
      </div>
      </div>  
      
        
        
        `;
  }
  document.getElementById("lll").innerHTML = trs;
}

/* End of (get meals from categories) Function */

/* Area Function */
function showArea(){

  let trs=`
  <div class="container">
  <div class="row gy-4" id="lll">
   

  </div>

</div>
  
  `
  document.getElementById("category").innerHTML=trs;
  Area();
}


async function Area() {
  let Area = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list "
  );
  let Area_data = await Area.json();
  console.log(Area_data.meals);
  data = Area_data.meals;
  DisplayArea(data);

}

/* End of Area Function */

/* Display Area Function */
function DisplayArea(Area_data) {

  let trs = "";
  for (let i = 0; i < Area_data.length; i++) {
    trs += `
        <div class="col-3  text-center" style="color:#f9f6f6" onclick="getMealsByArea('${Area_data[i].strArea}')">
        <i class="fa-solid fa-house-laptop fa-4x" ></i>
        <h3>${Area_data[i].strArea}</h3>
  
      </div>
        
        
        `;
  }
  document.getElementById("lll").innerHTML = trs;

}

/* End of Display Area Function */

/* get meals from Area */
async function getMealsByArea(x) {

  let Area = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${x}`
  );
  let Area_data = await Area.json();
  let some = Area_data.meals;
  let someArea = some.slice(0, 20);
  console.log(someArea);
  displayAreas(someArea);

}

function displayAreas(someArea) {
  let trs = "";

  for (let i = 0; i < someArea.length; i++) {
    trs += `
        
   
      <div class="col-3 m-2" id="category-img" style="width:23.7%" onclick="mealDetails('${someArea[i].strMeal}')">

      <img src="${someArea[i].strMealThumb}"  class="image">
      <div class="overlay d-flex justify-content-center align-items-center">
        <div class="text"> 
        <h3 class="p-2">${someArea[i].strMeal}</h3>
        </div>
      </div>
      </div>  
      
        
        
        `;
  }
  document.getElementById("lll").innerHTML = trs;
}
/* End of ( get meals from Area ) Function */

/* ingredient Function */
function showIngredient(){
  let trs=`
  <div class="container">
  <div class="row gy-4" id="lll">
   

  </div>

</div>
  
  `
  document.getElementById("category").innerHTML=trs;
  ingredient();

}
async function ingredient() {
  let ingredient = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list "
  );
  let ingredient_data = await ingredient.json();
  let meal = ingredient_data.meals;
  let meals = meal.splice(0, 20);
  console.log(meals);
  DisplayIngredient(meals);
}

/* End of ingredient Function */

/* Display ingredient Function */
function DisplayIngredient(meals) {
  let trs = "";
  for (let i = 0; i < meals.length; i++) {
    let m = meals[i].strDescription;
    let n = m.substr(0, 120);
    trs += `
        <div class="col-3  text-center" style="color:#f9f6f6" onclick="getMealsByingredients('${meals[i].strIngredient}')">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h3>${meals[i].strIngredient}</h3>
        <p>${n}</p>
  
      </div>
        
        
        `;
  }
  document.getElementById("lll").innerHTML = trs;
}

/* End of ingredient Area Function */

/* get meals from ingredients */
async function getMealsByingredients(x) {
  let ingredients = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`
  );
  let ingredients_data = await ingredients.json();
  let some = ingredients_data.meals;
  let meal = some.slice(0, 20);
  console.log(meal);
  displayingredients(meal);
}

function displayingredients(someingredients) {
  let trs = "";

  for (let i = 0; i < someingredients.length; i++) {
    trs += `
        
   
      <div class="col-3 m-2" id="category-img" style="width:23.7%" onclick="mealDetails('${someingredients[i].strMeal}')">

      <img src="${someingredients[i].strMealThumb}"  class="image">
      <div class="overlay d-flex justify-content-center align-items-center">
        <div class="text"> 
        <h3 class="p-2">${someingredients[i].strMeal}</h3>
        </div>
      </div>
      </div>  
      
        
        
        `;
  }
  document.getElementById("lll").innerHTML = trs;
}
/* End of ( get meals from ingredients ) Function */

/* meal details*/
async function mealDetails(x) {
  let meal = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`
  );
  let meal_data = await meal.json();
  let details = meal_data.meals;
  console.log(meal_data.meals);
  lolo(details[0])
}




function lolo(details){

  let ingredients = ``
  

  for (let i = 1; i <= 20; i++) {
    console.log(details[`strMeasure${i}`])
    if (details[`strIngredient${i}`]) {
      ingredients += `
      <div class="alert alert-primary d-inline-block fs-6" role="alert" style="width:170px">
      ${details[`strMeasure${i}`]}
     </div>`
      } 
      
    

  
      
  } 
  displaydetails(details,ingredients)
}




function displaydetails(details,x) {
 let trs = "";
  
  trs += `
      <div class="col-4 ">
      <img src="${details.strMealThumb}" width=100% class="rounded-3"/>
      <p class="text-white fs-3">${details.strMeal}</p>

    </div>
    <div class="col-8 text-white ">
      <h3 class="fs-3">Instructions</h3>
      <p>${details.strInstructions}</p>
      <span  class="fw-bold fs-3">Area: ${details.strArea}</span>
      <p class="fw-bold fs-3">Category: ${details.strCategory}</p>
      <p class="fw-bold fs-3">Recipes:</p>
      <div class="d-flex">
      <div class="row gx-5">
      <div class="col-12">
      ${x}
      
      </div>
      </div>
      
      

      </div>
      <p  class="fw-bold fs-3">Tags:</p>
      <div class="alert alert-danger m-2 p-1" role="alert" style="width: 15%;">
       ${details.strTags}
      </div>
      <button class="btn btn-success"><a href="${details.strSource}" class="text-decoration-none text-white">Source</a></button>
      <button class="btn btn-danger"><a href="${details.strYoutube}" class="text-decoration-none text-white">Youtube</a></button>


    </div>

    
    
    `;
   

  document.getElementById("lll").innerHTML = trs;
 

}





/* Search Functions */

function showSearch(){
  let trs="";
  trs=`
  <section style="padding-top: 3%;" id="search">
  <div class="container w-75">
    <div class="row">
      <div class="col-6" >
        <div class="mb-3">
          <input type="text" class="form-control" id="SearchByName" placeholder="Search By Name" onkeyup="SearchByName(this.value)">
        </div>


      </div>

      <div class="col-6">
        <div class="mb-3">
          <input type="text" class="form-control" id="SearchByLetter" placeholder="Search By First Letter " onkeyup="SearchByLetter(this.value)">
        </div>

      </div>
    </div>
 

  </div>
 </section>
 <section style="padding-top: 1%;">

 <div class="container" style="padding-top:2%">
   <div class="row gx-4 gy-5" id="lll">
   </div>
 </div>


</section>


  
  `
  document.getElementById("search").innerHTML=trs;
}

/* Search by name */
async function SearchByName(x){
  let ingredient = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`
  );
  let ingredient_data = await ingredient.json();
  let meal = ingredient_data.meals;
  console.log(meal)
  displayByName(meal)

}

/* Display by name */

function displayByName(meal){
  let trs = "";

  for (let i = 0; i < meal.length; i++) {
    trs += `
        
   
      <div class="col-3 m-2" id="category-img" style="width:23.7%" onclick="mealDetails('${meal[i].strMeal}')">

      <img src="${meal[i].strMealThumb}"  class="image" class="rounded-3">
      <div class="overlay d-flex justify-content-center align-items-center">
        <div class="text"> 
        <h3 class="p-2">${meal[i].strMeal}</h3>
        </div>
      </div>
      </div>  
      
        
        
        `;
  }
  document.getElementById("lll").innerHTML = trs;



}

/* Search by Letter */


async function SearchByLetter(x){
  let search = await fetch(
    `https://themealdb.com/api/json/v1/1/search.php?f=${x}`
    
  );
  let search_data = await search.json();
  let meal = search_data.meals;
  console.log(meal)
  displayByLetter(meal)

}
/* Display by Letter */

function displayByLetter(meal){
  let trs = "";

  for (let i = 0; i < meal.length; i++) {
    trs += `
        
   
      <div class="col-3 m-2" id="category-img" style="width:23.7%" onclick="mealDetails('${meal[i].strMeal}')">

      <img src="${meal[i].strMealThumb}"  class="image" class="rounded-3">
      <div class="overlay d-flex justify-content-center align-items-center">
        <div class="text"> 
        <h3 class="p-2">${meal[i].strMeal}</h3>
        </div>
      </div>
      </div>  
      
        
        
        `;
  }
  document.getElementById("lll").innerHTML = trs;



}


/* End of search functions */




















