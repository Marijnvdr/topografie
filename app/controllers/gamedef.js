import Ember from 'ember';
import Score from 'topografie/models/score'; 

export default Ember.Controller.extend({
    score: Score.create(), 

    actions: {
        startGame() {
            this.set('score.name', 'Marijn');
            this.set('score.count', 1);
            this.set('score.total', 0);
            this.transitionToRoute('question');
        }
    }  
});

