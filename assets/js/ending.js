var ending_effect_interval = null;

const RenderEndPage = async(character,player_won) =>{

  var page = document.querySelector(".fight_page");

  document.body.style.backgroundColor = "black";

  var win_text = player_won ? "Won" : "Lost";
  var win_color = player_won ? "green" : "red";
  var background = player_won ? "./assets/imgs/win.gif" : "./assets/imgs/lose.gif"

  var html = `
  <div class="container-fluid ending_container relative">

    <div class="row">

      <div class="col-6">

        <p class="ending_title">
          Returning to Character Selection....
        </p>

      </div>

      <div class="col-5">
        <p class="ending_win" style = 'color:${win_color}'>You ${win_text}</p>
      </div>

    </div>

      <div class="row">

        <div class="col-4"></div>

        <div class="col-4">
          <img class="width-100 ending_image" src="${character.display_image}"/>
        </div>
        <div class="col-4"></div>

      </div>

      <h1 class="text-center winner_name">${character.name}</h1>

  </div>`


  EmptyContainer(page);

  var container = document.createElement("div");
  container.classList.add("ending_page");
  container.innerHTML = html;

  page.append(container);

  var ending_container = document.querySelector(".ending_container");
  var effect_class = player_won ? "winning_countdown_effect" : "countdown_effect";
  var random_pos = Math.random() * 80;

  clearInterval(ending_effect_interval);
  
  ending_effect_interval = setInterval(()=>{PlayerSelectedSpecialEffect(10,effect_class,"ending_container",null,100)},1000);

  await delay(5000);

  window.location.assign("./character_selection.html");

  EmptyContainer(ending_container);

}
