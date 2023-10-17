
const pies = [{
  
  name: "Cherry O'Cheese Pie",
  crustType: "Waffer crust",
  filling: "Sweet cream cheese",
  slices: 10,
  ingridients: 6,
  vegan: false,
  bakeTemp: 325,

},

{
  
  name: "Chocolate",
  crustType: "Waffer crust",
  filling: "Sweet cream cheese",
  slices: 10,
  ingridients: 6,
  vegan: false,
  bakeTemp: 325,
},

{
  name: "Strawberry",
  crustType: "Waffer crust",
  filling: "Sweet cream cheese",
  slices: 10,
  ingridients: 6,
  vegan: false,
  bakeTemp: 325,
},

{
  name: "Blueberry",
  crustType: "Waffer crust",
  filling: "Sweet cream cheese",
  slices: 10,
  ingridients: 6,
  vegan: false,
  bakeTemp: 325,
},

{
  name: "Key Lime",
  crustType: "Waffer crust",
  filling: "Sweet cream cheese",
  slices: 10,
  ingridients: 6,
  vegan: false,
  bakeTemp: 325,
},

{
  name: "Coconut",
  crustType: "Waffer crust",
  filling: "Sweet cream cheese",
  slices: 10,
  ingridients: 6,
  vegan: false,
  bakeTemp: 325,
},

{
  name: "Lemon",
  crustType: "Waffer crust",
  filling: "Sweet cream cheese",
  slices: 10,
  ingridients: 6,
  vegan: false,
  bakeTemp: 325,
}]


const app = document.querySelector("#app")

let domString ="card"

for (pie of pies) {
  domString += <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">(pie.name)</h5>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
}

app.innerHTML =
