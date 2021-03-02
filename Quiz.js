 class Quiz{
    constructor(){}

    getState(){
        var gameStateRef = Database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async Start(){
        if(gameState === 0){
            Player = new Player();
            var PlayerCountRef = await dataBase.ref('PlayerCount').once("value");
            if(PlayerCountRef.exists()){
                PlayerCount = PlayerCountRef.val();
                Player.getCount();
            }
            Question = new Question();
            Question.display();
        }
    }
    play(){
        Question.hide();
        textSize(30);
        text("RESULT",120,100);
        Player.getPlayerInfo;
        if(allPlayers !== undefined){
            var display_position = 130;
            for(var plr in allPlayers){
              if (plr === "player" + player.index)
                fill("red")
              else
                fill("black");
      
              display_position+=20;
              textSize(15);
              text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
            }
            for(var plr in allPlayers){
                var coorectAns = "2";
                if (correctAns === allPLayers[plr].answer){
                    fill("Green")
                else
                    fill("red");
                    
                }
            }
          }
    }
}