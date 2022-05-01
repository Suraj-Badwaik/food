let id;

let searchReceipe = async () => {

    try{

      let search = document.getElementById('Search').value;

      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);

      let data = await res.json();
        console.log('data:', data)

      let receipe = data.meals;
      console.log('receipe:', receipe)
      // append(receipe)
      
      return receipe;
      
    }
    catch(err){
      console.log('err:', err)
    }
  }
  

  

function append(data){
  document.getElementById('showReceipe').innerHTML=null;
  document.getElementById('showReceipe').style.border='3px solid yellow';
  document.getElementById('showReceipe').style.padding='20px';

    let container = document.getElementById('showReceipe');

    data.forEach(function(el){
        let title = document.createElement('h1')
        title.innerText = el.strMeal;

        let titleDiv = document.createElement('div');
        titleDiv.setAttribute('class','titleDiv');
        titleDiv.append(title)

      // =======================================================//
      // =======================================================//
        let ingridienthead= document.createElement('p')
        ingridienthead.setAttribute('class','ingridienthead')
        ingridienthead.innerText = 'Ingridient';

        let ingridient = document.createElement('p')
        ingridient.innerText = `${el.strIngredient1} : ${el.strMeasure1} \n ${el.strIngredient2} : ${el.strMeasure2}\n ${el.strIngredient3} : ${el.strMeasure3}\n ${el.strIngredient4} : ${el.strMeasure4}\n ${el.strIngredient5} : ${el.strMeasure5}\n ${el.strIngredient6} : ${el.strMeasure6}\n ${el.strIngredient7} : ${el.strMeasure7}\n ${el.strIngredient8} : ${el.strMeasure8}\n ${el.strIngredient9} : ${el.strMeasure9}\n ${el.strIngredient10} : ${el.strMeasure10}\n ${el.strIngredient11} : ${el.strMeasure11}\n ${el.strIngredient12} : ${el.strMeasure12}\n ${el.strIngredient13} : ${el.strMeasure13}\n ${el.strIngredient14} : ${el.strMeasure14}\n ${el.strIngredient15} : ${el.strMeasure15}\n ${el.strIngredient16} : ${el.strMeasure16}\n ${el.strIngredient17} : ${el.strMeasure17}\n ${el.strIngredient18} : ${el.strMeasure18}\n ${el.strIngredient19} : ${el.strMeasure19}\n ${el.strIngredient20} : ${el.strMeasure20}`

        let ingrDiv = document.createElement('div');
        ingrDiv.setAttribute('class','ingrDiv');
        ingrDiv.append(ingridienthead,ingridient)

  //============================================================//
  //============================================================//
        let image = document.createElement('img')
        image.setAttribute('class','image')
        image.src = el.strMealThumb;


        let procedure= document.createElement('p')
        procedure.setAttribute('class','prcedureheading')
        procedure.innerText = 'Procedure';

        let btn = document.createElement('button');
        btn.innerText = 'Click Here to See Procudure'
        btn.setAttribute('class','instrBtn');
        btn.addEventListener('click',showProcedure)
              
        

        let procedureDetails = document.createElement('p')
        procedureDetails.innerText = el.strInstructions;

        let instruction = document.createElement('div')
        instruction.setAttribute('class','content')
        instruction.append(procedureDetails)

      
        let instrDiv = document.createElement('div')
        instrDiv.setAttribute('class','instrDiv');
        instrDiv.append(image,procedure,btn,instruction);
  //============================================================//
  //============================================================//

        let holder = document.createElement('div')
        holder.setAttribute('class','holder')
        holder.append(ingrDiv,instrDiv)

        container.append(titleDiv,holder);

    })
}

async function main(){

  let data = await searchReceipe();

  if(data === undefined){
    return false;
  }

  append(data);
}


function debounce(func,delay){

  if(id){
    clearTimeout(id);
  }
  id = setTimeout(function(){
      func();
  },delay)

}


function showProcedure(){
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}










//strInstructions: "Grind the cashew, poppy seeds and cumin seeds into a smooth paste, using as little water as possible. Set aside. \r\n\r\nDeep fry the sliced onions when it is hot. Don’t overcrowd the oil. When the onions turn light brown, remove from oil and drain on paper towel. The fried onion will crisp up as it drains. Also fry the cashewnuts till golden brown. Set aside.\r\n\r\nWash the rice and soak in water for twenty minutes.\r\nMeanwhile, take a big wide pan, add oil in medium heat, add the sliced onions, add the blended paste, to it add the green chillies, ginger garlic paste and garlic and fry for a minute.\r\nThen add the tomatoes and sauté them well till they are cooked and not mushy.\r\n\r\nThen to it add the red chilli powder, biryani powder, mint, coriander leaves and sauté them well.\r\nAdd the yogurt and mix well. I always move the skillet away from the heat when adding yogurt which prevents it from curdling.\r\n\r\nNow after returning the skillet back to the stove, add the washed lamb and salt and ½ cup water and mix well. Cook for 1 hour and cook it covered in medium low heat or put it in a pressure cooker for 6 whistles. If the water is not drained totally, heat it by keeping it open.\r\n\r\nTake another big pan, add thrice the cup of rice you use, and boil it. When it is boiling high, add the rice, salt and jeera and mix well. After 7 minutes exact or when the rice is 80% done. Switch off and drain the rice.\r\n\r\nNow, the layering starts. To the lamb, pat and level it. Add the drained hot rice on the top of it. Garnish with fried onions, ghee, mint, coriander leaves and saffron dissolved in milk.\r\n\r\nCover the dish and bake in a 350f oven for 15 minutes or till the cooked but not mushy. Or cook in the stove medium heat for 12 minutes and lowest heat for 5 minutes. And switch off. Mix and serve hot!\r\nNotes\r\n1. If you are cooking in oven, do make sure to cook in a big oven safe pan and cover it tight and then keep in oven for the final step.\r\n2. You can skip biryani masala if you don’t have and add just garam masala (1 tsp and red chilli powder – 3 tsp instead of 1 tsp)\r\n3. If it is spicy in the end, squeeze some lemon, it will reduce the heat and enhance the flavors also."
// strMeal: "Lamb Biryani"
// strMealThumb: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg"

//strSource: "http://www.relishthebite.com/restaurant-style-lamb-biryani/"
// strTags: "Curry,Meat"
// strYoutube: "https://www.youtube.com/watch?v=r7SYVSG5nxo"