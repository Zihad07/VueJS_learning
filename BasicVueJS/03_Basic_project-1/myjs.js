
new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        setPlayerHealth:function(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        calculateDamage: function(min,max){
            return Math.max(Math.floor(Math.random()*max)+1, min);
        },

        startGame: function(){
            this.setPlayerHealth();
            this.gameIsRunning = true;
        },

        attack:function(){
           
            var damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer : true,
                text : "Player hit Monster for " + damage,
            });
            
            if(this.checkWin()){
                return;
            }
           
            this.playerHealth -=  this.calculateDamage(4,11);

            if(this.checkWin()){
                return;
            }
            
        },

        specialAttack:function(){

            this.monsterAttacks();
           
            this.playerHealth -=  this.calculateDamage(4,11);

            if(this.checkWin()){
                return;
            }
        },

        heal:function(){
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'Player Health increased By 10 :)',
            });

            // always monoster attack
            this.monsterAttacks();
        },

        monsterAttacks: function(){
             var damage = this.calculateDamage(5,12)
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer : false,
                text : "Monster hit Player for " + damage,
            });
            if(this.checkWin()){
                return;
            }
        },
        checkWin: function(){
            if(this.monsterHealth<=0){
                if(confirm('You WON :) new game???')){
                    this.startGame();
                }else{
                    this.setPlayerHealth();
                    this.gameIsRunning =  false;
                }
                
                return true; 
            }else if(this.playerHealth<=0){
                if(confirm('You lost! new game')){
                    this.startGame();
                }else{
                    this.setPlayerHealth();
                    this.gameIsRunning = false;
                }

                return true;
            }

            // not result yet found
            return false;
        },

        giveUp: function(){
            this.setPlayerHealth();
            this.turns = [];
            this.gameIsRunning = false;
        },
    }
});