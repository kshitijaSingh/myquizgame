lass Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.button = createButton('submit');
    }
  
    getCount(){
      var PlayerCountRef = database.ref('playerCount');
      PlayerCountRef.on("value",(data)=>{
      PlayerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        PlayerCount: count
      });
    }
  
    update(){
      var PlayerIndex = "Players/Player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var PlayerInfoRef = database.ref('players');
      PlayerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    display(){
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        Player.name = this.input1.value();
        PlayerCOunt+=1;
        Player.index = \PlayerCount;
        Player.update();
        Player.updateCount(PlayerCount);
      });
    }
  }
  