// const available_boxes = 6;
// var ready = false;
// var fight_starting = false;
// const available_characters = return_available_characters(6,available_boxes);
// const placeholder_character = return_placeholder_character();
// var enemy_interval = null
// var player_interval = null
// var hasRendered = false;
// var _enemy_interval = null
// var _player_interval = null
//
// var selected_character  = {
//   player:"",
//   enemy:"",
// }
//
// const ResetStatPoint = (current_point,limit,reset_to) =>{
//
//     if(current_point > limit){
//       return reset_to;
//     }else{
//       return current_point;
//     }
//
// }
//
// const RenderStatBar = (stat,stats_point,color,show_bar) =>{
//
//   var stats_point_style = ResetStatPoint(stats_point, 101 ,100);
//
//   const bar = show_bar ? ` <div class="stat_bar stat_bar_character_selection" style="background:${color};width:${stats_point_style}%"></div>`:"";
//
//   const html = `
//   <div class="row">
//     <div class="col-4">
//       <p class="stat_point_character_selection white padding-left-5">
//         ${stat}
//       </p>
//     </div>
//     <div class="col-6">
//       ${bar}
//     </div>
//     <div class="col-2">
//       <p class="stat_point_number ">
//         ${stats_point}
//       </p>
//     </div>
//   </div>`
//   ;
//
//   return html;
//
// }
//
// const StatBarLoop = (stats,show) => {
//
//   var counter = 0;
//   var html = ``;
//
//   while (counter < stats.length){
//
//    var current_stat = stats[counter];
//
//    html += RenderStatBar(current_stat.name,current_stat.stat,current_stat.color,show);
//
//    counter++;
//
//   }
//
//   return html;
//
// }
//
// const RenderSelectedCharacterData = (character,is_player) => {
//
//   var text_effect = is_player ? "player_name" : "enemy_name";
//
//   var moves = character.moves;
//   var stats = character.stats;
//
//   const html = `
//
//   <div class="col-12 selected_data ${character.type}_text">
//
//     <div class="selected_character_details">
//
//       <p class="selected_character_detail_item width-100 ">
//         <strong class="selected_specialty ${text_effect}">
//          ${CapitalizeFirstLetter(character.type)}
//         </strong>
//       </p>
//
//       ${StatBarLoop([stats.health,stats.attack,stats.defense,stats.speed],true)}
//
//     </div>
//
//   </div>
//
//   `;
//
//   return html;
//
// }
//
//
// const SelectCharacter = (character,box_class) =>{
//
//   selected_character.player = character;
//   selected_character.enemy = available_characters[Math.floor(Math.random() * available_characters.length)];
//   hasRendered = true;
//   var enemy = selected_character.enemy;
//   var player = selected_character.player;
//
//   var active_player_box = document.querySelector(".wizard_id_"+player.id);
//   var active_enemy_box = document.querySelector(".wizard_id_"+enemy.id);
//
//   RemoveClassFromElements("character_available_box","active_character_available_box");
//
//   var fight_btn = document.querySelector(".fight_btn");
//
//   fight_btn.classList.add("active");
//   fight_btn.classList.remove("no-point");
//
//   fight_btn.addEventListener("click",()=>{
//
//     StartFight(player,enemy);
//
//   });
//
//   ready = true;
//   var box = document.querySelector("."+box_class)
//
//   RenderSelectedCharacters(player,enemy,true);
//   console.log("s")
//   RenderCharactersAvailable(available_characters);
//   // clearInterval(player_interval);
//   // clearInterval(enemy_interval);
//
//   // player_interval = setInterval(()=>{PlayerSelectedSpecialEffect(1,"effect_available","wizard_id_"+player.id,"./assets/imgs/flame_e.png",35)},50);
//   // enemy_interval = setInterval(()=>{PlayerSelectedSpecialEffect(1,"effect_available","wizard_id_"+enemy.id,"./assets/imgs/flame_e.png",35)},50);
//
//   document.querySelector(".wizard_id_"+player.id).classList.add("active_character_available_box");
//   document.querySelector(".wizard_id_"+enemy.id).classList.add("active_character_available_box");
//
//   var selected_box = document.querySelector(`.selected_`+player.id);
//   var selected_enemy_box = document.querySelector(`.selected_`+enemy.id);
//   var border = document.querySelector(`.selected_`+enemy.id);
//
//   AnimateCharacter(selected_box,false,selected_character.player.animation_sheet.idle,300)
//   AnimateCharacter(selected_enemy_box,true,selected_character.enemy.animation_sheet.idle,300);
//
//   SaveCharacters(player,enemy)
//
//   RefreshModal(player,enemy);
//
// }
//
// const StartFight = (player,enemy)=>{
//
//   if(ready && !fight_starting){
//
//     document.body.classList.add("no-point");
//
//     fight_starting = true;
//
//     var modal = document.querySelector(".modal");
//     modal.classList.add("active_modal");
//
//     var vs = document.querySelector(".vs_text");
//     vs.classList.add("active_vs");
//
//     // SaveCharacters(player,enemy);
//     ResetCountdown();
//
//     Countdown(player,enemy);
//
//   }
//
// }
//
// const RenderAvailableBox = (character,rotation) => {
//   if(hasRendered){
//     return;
//   }
//   function returnImage(){
//
//     if(character.display_image){
//       return `<img class="width-25 character_available_image ${character.id} width-40 float-left" src= ${character.display_image} />`
//     }else{
//       return `<div></div>`
//     }
//
//   }
//
//   var stats = character.stats;
//   var box_id  = character.id;
//   var active = character == selected_character.player || character == selected_character.enemy ? "active_figher_box" : "";
//   var activeBox = character == selected_character.player || character == selected_character.enemy ? "active_box" : "";
//   const image = returnImage();
//
//   var html = document.createElement("div");
//   html.classList.add("col-2");
//
//   html.addEventListener("click",(e)=>{
//     SelectCharacter(character,`wizard_id_${character.id}`);
//   });
//
//    html.innerHTML = `
//
//       <div class="width-100 margin-left-5 ${active}">
//         <div  class="XS">
//         <div class="height-200px">
//         <img class="width-100 relative max-z"   src = "${character.display_image}" />
//         </div>
//         <div class="${character.type}_text wizard_id_${character.id} margin-top-20 padding-top-30"  >
//
//             <p class="text-center relative xs" >${character.name}</p>
//             <p class="text-center relative xs"  >HP: ${character.stats.health.stat}</p>
//
//
//             </div>
//         </div>
//       </div>
//
//
//   `;
//
//   return html;
//
// }
//
// const RenderCharactersAvailable = (characters) => {
// console.log(hasRendered);
// if(!hasRendered){
//   var container = document.querySelector(".characters_available_container_");
//
//   var rotations = randomRotation(characters.length,3);
//
//   for(var i = 0; i < characters.length; i ++){
//
//    container.append(RenderAvailableBox(characters[i],rotations[i]));
//
//   }
// }
// }
//
// const RenderSelectedCharacterBox = (character,is_player) => {
//
//     var active_class = character.id ? "active_selected_character_box" : "selected_character_box right_selected_box";
//     var effects = is_player? "player_effects" : "enemy_effects";
//     var text_effect = is_player? "player_name" : "enemy_name";
//     var flip = character.flip_sprite ? 180 : 0;
//     var is_enemy_flip = is_player ?  0  : 180;
//     var class_name = is_player ? "selected_player_container" : "selected_enemy_container";
//
//     flip += is_enemy_flip;
//
//     const html = `
//
//       <div class="col-3 selected_character_name">
//           <p class="selected_character_item_name ${text_effect}">${character.name}</p>
//       </div>
//       <div class="col-6 ${class_name}">
//         <div class="${active_class}">
//           <img style="transform:rotateY(${flip.toString()}deg)" class=" width-100 selected_character_image selected_${character.id}"  src = "${character.display_image}"/>
//         </div>
//         <div class=${effects}></div>
//       </div>
//
//
//       <div class="col-12">
//
//
//       </div>`;
//
//       return html;
//
// }
//
// const RenderSelectedCharacterColumn = (character,ease,is_player,playerSelected) => {
//
//       if(character.id){
//         ease = "";
//       }
//
//
//       const html = `
//          <div class="col-5 character_box ${ease}">
//
//             <div class="row"  style="background:black">
//              ${RenderSelectedCharacterData(character,is_player,playerSelected)}
//               <div class="col-1"></div>
//
//              ${RenderSelectedCharacterBox(character,is_player,playerSelected)}
//              </div>
//
//
//           </div>
//           `
//
//       return html;
//
// }
//
// const RenderSelectedCharacters = (player,enemy,playerSelected) => {
//
//   var container = document.querySelector(".selected_character_container");
//   EmptyContainer(container);
//
//   var selected_character_html = `
//     <div class="container-fluid selected_character_row">
//       <div class="row"style="padding:5%">
//         <div class="col-12">
//           <div class="row">
//             ${RenderSelectedCharacterColumn(player,"ease_left",true)}
//             <div class="col-2"></div>
//             ${RenderSelectedCharacterColumn(enemy,"ease_right",false)}
//           </div>
//         </div>
//
//       </div>
//
//     </div>
//   `
//
//   var selected_character_row = document.createElement("div");
//
//   selected_character_row.innerHTML = selected_character_html;
//
//   var container = document.querySelector(".selected_character_container");
//
//   container.append(selected_character_row);
//
//   if(playerSelected){
//     var random_pos = Math.random() * 100;
//
//     _player_interval = setInterval(()=>{PlayerSelectedSpecialEffect(1,"effect_available_select","player_effects","./assets/imgs/flame_e.png",60)},100);
//     _enemy_interval = setInterval(()=>{PlayerSelectedSpecialEffect(1,"effect_available_select","enemy_effects","./assets/imgs/flame_e.png",60)},100);
//
//
//     if(music_active){
//       var audio = document.querySelector(".ui_sound");
//       audio.play();
//     }
//
//   }
//
// }
//
// const RenderHeader = () =>{
//
//     var title_element = document.createElement("div");
//     var header_element = document.createElement("div");
//
//     var header_container = document.querySelector(".header_container");
//     var title_container = document.querySelector(".title_container");
//
//     var header_html =
//     `
//       <div class="container-fluid">
//       <a href="./index.html">
//         <div class='row title_row' >
//
//             <div class='col-2'>
//               <img src = './assets/imgs/arrow.png' class='rotate-180 go_back_arrow'/>
//             </div>
//             <div class="col-1 go_back_text_container">
//                 <p class='go_back_text'> Home </p>
//             </div>
//
//           </div>
//           </a>
//         </div>
//       `;
//
//     var title_html = `
//       <div class="title_container">
//           <p class='character_select_title'> Choose Your Character </p>
//       </div>`;
//
//     title_element.innerHTML = title_html;
//     header_element.innerHTML = header_html;
//
//     header_container.append(header_element);
//     title_container.append(title_element);
//
//
// }

// RenderCharacterSelectionPage = (player,enemy) => {

  // RenderHeader();
  //
  // RenderSelectedCharacters(player,enemy);
  //
  // RenderCharactersAvailable(available_characters);



// if(window.innerWidth >= 680){
//   RenderCharacterSelectionPage(placeholder_character,placeholder_character);
// }
const RenderCharacterSelect = (index,character,isPlayer) => {

  var classy = isPlayer ? "player_select" : "enemy_select";
  var st = "col-6  divider-right "+classy+" character_index";
  var standard = 300;
  var health_bar_width = Math.floor(character.stats.health.stat / standard * 50);
  var attack_bar_width = Math.floor(character.stats.attack.stat / standard * 50);
  var defense_bar_width = Math.floor(character.stats.defense.stat / standard * 50);
  var speed_bar_width = Math.floor(character.stats.speed.stat / standard * 50);

  return(

      `
       <div class="${st}" index = ${index}>
        <img class="selected_character_img"  src = ${character.display_image}  accesskey=""/>

              <p class="selected_character_p player_color">${character.name}</p>
              <div class="row margin-top-15 width-100">
                  <div class="col-12">
                    <p class="stat_p light-orange">Health</p>
                    <div class="stat_bar_ light-orange-background"style = "width:${health_bar_width}%"></div>
                    <span class="stat_num light-orange float-right">${character.stats.health.stat}</p>
                  </div>
                  <div class="col-12">
                    <p class="stat_p red">Attack</p>
                    <div class="stat_bar_ red-background"style = "width:${attack_bar_width}%"></div>
                    <span class="stat_num red float-right">${character.stats.attack.stat}</p>
                  </div>
                  <div class="col-12">
                    <p class="stat_p light-green">Defense</p>
                    <div class="stat_bar_ light-green-background"style = "width:${defense_bar_width}%"></div>
                    <span class="stat_num light-green float-right">${character.stats.defense.stat}</p>
                  </div>
                  <div class="col-12">
                    <p class="stat_p light-blue">Speed</p>
                    <div class="stat_bar_ light-blue-background"style = "width:${speed_bar_width}%"></div>
                    <span class="stat_num light-blue float-right">${character.stats.speed.stat}</p>
                  </div>
              </div>

          </div>
          `
  );
}

var character_bubbles = document.getElementsByClassName("character_bubble");
var start_button_container =  document.querySelector(".start_button_container");
var selected_character_container = document.querySelector(".selected_character");
var isOn = false;

var RenderStartButton = () => {
  if(isOn){

    start_button_container.innerHTML =  `<button class="btn start_fight_button">Start Game</button>`
    var start_fight = document.querySelector(".start_fight_button");
    SaveCharacters(character_selected,random_opponent);
    console.log(character_selected,random_opponent);
    start_fight.addEventListener("click",()=>{window.location.assign("file:///C:/Users/Marco/Desktop/Raging-Rumble/fight.html")});
  }
}

const RenderSelectBox = (chosen_index,chosen_character,random_index,random_opponent) =>{



    var selected_box =
    `
    <div class='row selected_row'>
      <div class="col-3"></div>
    <div class="col-6">
    <p class="title_select">Select Your Character</p>

      <div class="row">
      ${RenderCharacterSelect(chosen_index,chosen_character,true)}
      ${RenderCharacterSelect(random_index,random_opponent,false)}
  </div>
  </div>`

  selected_character.innerHTML = selected_box;


}
var character_selected;
var random_opponent;
function AddEventToBubble(){

  for(var i =0; i <character_bubbles.length;i++){

    character_bubbles[i].addEventListener("click",(e)=>{

      var target = e.target;

      var index = e.target.getAttribute("index");
      character_selected = characters_available[index - 1];

      var random_index = Math.floor(Math.random() * characters_available.length);
      random_opponent = characters_available[random_index];

      for(var i =0; i <character_bubbles.length;i++){
        character_bubbles[i].classList.remove("active_bubble");
        character_bubbles[i].classList.remove("active_bubble_player");

      }

      RenderSelectBox(index,character_selected,random_index,random_opponent);

      character_bubbles[index - 1].classList.add("active_bubble_player");
      character_bubbles[random_index].classList.add("active_bubble");

      var selected_player = document.querySelector(".player_select");
      var selected_enemy = document.querySelector(".enemy_select");

      var character_image = selected_player.firstChild.nextSibling;
      var enemy_image = selected_enemy.firstChild.nextSibling;

      AnimateCharacter(character_image,false,character_selected.animation_sheet.idle,300);
      AnimateCharacter(enemy_image,true,random_opponent.animation_sheet.idle,300);

      isOn = true;

      RenderStartButton();

    });

  }

}


start_button.addEventListener("click",()=>{

  index_container.innerHTML = "";
  AnimateBubbles();
  selected_character.innerHTML = selected_box;
  AddEventToBubble();

});
