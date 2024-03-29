const UpdateDescription = (move) => {

  var description_element = document.querySelector(".description_text");
  var accuracy_element = document.querySelector(".accuracy_text");
  var attack_element = document.querySelector(".attack_text");

  attack_element.innerHTML = `Attack: ${move.damage}`;
  accuracy_element.innerHTML = `Accuracy: ${move.accuracy}`;
  description_element.innerHTML = `${move.description}`;

}


const RenderDescriptionRow  = (character) =>{

  const html = `
  <div class="row">

    <div class="col-12 padding-bottom-5">
      <div class="row move_row">
        ${MoveLoop(character.moves,"player_character",false)}
      </div>
    </div>

    <div class="col-12 margin-top-5">
      <span><p class="detail_text attack_text float-left"></p>   <p class="detail_text accuracy_text float-left"></p></span>

      <p class="description_text"style="clear:left;text-align:left;">Hover over a move to learn more details</p>

    </div>

    <br />

  </div>`;

  description_container.innerHTML = html;

}

const RenderFightRow = (player,enemy) =>{

    const html = `
    <div class="row fight_row">

      <div class="col-4">
        ${ReturnCharacterCol(player,false)}
      </div>

      <div class="col-4 effect_box"></div>

      <div class="col-4">
        ${ReturnCharacterCol(enemy,true)}
      </div>

    </div>
    `;

    const container = document.querySelector(".fight_container");
    container.innerHTML = html;

}

const RenderMiss = (is_enemy) =>{

  is_enemy_class = is_enemy ? "enemy_miss" : "player_miss";

  const div = document.createElement("div");
  const audio = document.querySelector(".miss_sound");

  audio.play();

  var html = `<div class="${is_enemy_class} miss_container"><img class="miss_icon" src = "./assets/imgs/miss.png"/></div>`;

  div.innerHTML = html;

  const container = document.querySelector(".fight_container");
  container.append(div);

}


const ChangeHealthBarColor = (health,health_bar_query,max_health) =>{

  var element = null;
  var color = "#62B63F";

  if(health > max_health / 2){

    color = "#62B63F";

  }else if(health <= max_health / 2 && health >= max_health / 4){

    color = "#FFDE59";

  }else{

    color = "#FF5757";

  }

    element = document.querySelector("."+health_bar_query);
    element.style.backgroundColor = color;

}


const ChangeHealthBarWidth = (query,health,character) =>{


  var element = document.querySelector("."+query);

  var width = health / character.stats.health.stat;
  width *= 100;

  element.style.width = width.toString() + "%";
  element.innerHTML = health.toString();

  element.style.width = width.toString()+ "%";
  element.innerHTML = health.toString();

}

const RenderBoost =(container, is_enemy, lower, stages)=>{

  var float = is_enemy ? "right" : "left"

  var buff = lower > 0 ? "buff" : "debuff";

  for(var i = 0; i <stages; i ++){

    var html = `<img src = "./assets/imgs/buff.png" class="boost_icon ${buff}" style="float:${float}"/>`;

    var element = document.createElement("div");

    element.innerHTML = html;

    container.append(element);

  }

}

const Recharging = (charging_turns,element) =>{

  if(charging_turns > 0){

    element.classList.add("recharging");

  }else{

    element.classList.remove("recharging");

  }

}

const GenerateBackgroundEffect =()=>{
//    var container = document.body;
    //for (let i =0; i <= 2; i++){

      // var randomX = Math.random() * 100;
      // var randomY = Math.random() * 100;
      //
      // var effect = document.createElement("img");
      //
      //
      //   effect.setAttribute("src","./assets/imgs/glow.png");
      //
      //
      // effect.classList.add("glow_main");
      //
      //
      //   effect.style.left = randomX.toString() +"%";
      //
      //     effect.style.top = randomY.toString() +"%";
      //
      //   container.append(effect);
//}
}


const RenderHeader = () =>{

    const html = `
    <div class="row menu_header margin-top-2_5">

        <div class="col-2 margin-left-2_5">
          <button class="btn btn-secondary quit_button">Quit Game</button>
        </div>
    </div>`;

    const container = document.querySelector(".header_container");

    container.innerHTML = html;

    const button = document.querySelector(".quit_button").addEventListener("click",()=>{
      window.location.assign("./index.html");
    })

}




const DeathAnimation = async(characterElement) => {
  characterElement.classList.add("death");
  StopOrPlayAudio(document.querySelector(".death_sound"),true);
  await delay(1000);
}


const ReturnCharacterCol = (character,is_enemy) =>{

  var enemy_addon = is_enemy ? true : false;

  var character_class = is_enemy ? "enemy_character" : "player_character";
  var character_blood = is_enemy ? "enemy_blood" : "player_blood";
  var character_health = is_enemy ? enemy_engine.health : player_engine.health;
  var rotation = 0;
  var right = is_enemy ? "character_fight_name_right" : "";
  var bar_right = is_enemy ? "bar_right" : "";
  var rotate_other_side = is_enemy ? 180 : 0;

  var is_rotated = character.flip_sprite ? 180 : 0;

  rotation = is_rotated + rotate_other_side;

  var enlarge = character.name == "Ebin the Terrible"? "enlarge" : "";
  var starting_width = character_health / character.stats.health.stat
  starting_width = starting_width * 100;
  var bar_margin = is_enemy ? "right:5%" : "left:5%";

  const html = `
  <div class="character_fight_column width-100">

    <div class="row">

      <div class="col-12 character_img_container">
        <p class="character_fight_name ${right}">${character.name}</p>
        <img style = "transform:rotateY(${rotation.toString()}deg)" src = "${character.display_image}" class="width-100 character_image ${character_class} ${enlarge}"/>
        <div class="health_bar width-100 "style="${bar_margin};top:55%;position:absolute;width:30%;margin-top:5%">
          <div class="blood ${character_blood}" style="position:absolute;top:-1%;width:${starting_width}%;text-align:center">${character_health.toString()}</div>
        </div>
      </div>



    </div>



  </div>`;

  return html;

}
