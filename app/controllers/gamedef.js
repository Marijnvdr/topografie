import Ember from 'ember';
import Score from 'topografie/models/score'; 

export default Ember.Controller.extend({
    score: Score.create(), 
    playerName: '',
    doStartGame: false,
    people: [],

    actions: {
        startGame() {
            let playerName = this.get('playerName');
            this.set('score.name', playerName);
            this.set('doStartGame', true);
            this.notifications.setDefaultClearNotification(1000);
            this.transitionToRoute('question');
        }
    }  
});

