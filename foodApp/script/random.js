// https://www.themealdb.com/api/json/v1/1/random.php

const randomReceipe = async () =>{

    try{
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

        let data = await res.json();
        console.log('data:', data)

        let receipe = data.meals;
      console.log('receipe:', receipe)

      append(receipe)
    }
    catch(err){
        console.log('err:', err)
    }

}

randomReceipe();


function append(data){
    document.getElementById('showRandomReceipe').innerHTML=null;
      let container = document.getElementById('showRandomReceipe');
  
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


  
function showProcedure(){
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }