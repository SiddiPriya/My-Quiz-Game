class Quiz{
    constructor(){}
        getState(){
            var gameStateRef=database.ref('gameState');
           gameStateRef.on("value",function(data){
            gameState=data.val();
           });
        
            

        }
        update(state){
            database.ref('/').update({
                gameState:state

            })
        }
        async start(){
            if(gameState===0){
                contestant=new Contestant();
                var contestantCountRef=await database.ref('contestantCount').once("value");
                if(contestantCountRef.exists()){
                    contestantCount=contestantCountRef.val();
                    contestant.getCount();

                }
            }
        }
            play(){
                question.hide();
                textSize(30);
                text("Game Start", 340, 50);
                Contestant.getPlayerInfo();
                if (allContestants !== undefined) {
                    var display_Answers = 230;


        for (var plr in allContestants){
            var correctAns="2"
            if(correctAns===allContestants+contestant.index){
                fill("green")
            }
            else {
                fill("red")
                  }
        
                       display_Answers+=30;
                textSize(25);
                text(allContestants[plr].name+": "+allContestants[plr].answer,250,display_Answers)
                }    }
}
}     

   


