import Ember from 'ember';
import Score from 'topografie/models/score'; 

export default Ember.Controller.extend({
    score: Score.create(), 
    playerName: '',

    init() {
      this._super(...arguments);
      
      this.notifications.setDefaultClearNotification(1000);
    },

    actions: {
        startGame() {
            let playerName = this.get('playerName');
            this.set('score.name', playerName);
            this.transitionToRoute('question');
        }
    }  
});
