import Ember from 'ember';
import Score from 'topografie/models/score';
import ENV from 'topografie/config/environment';

export default Ember.Controller.extend({    
    score: Score.create(),
actions: {
    givenAnswer(countryCode) {        
    	let model = this.get('model');    	
        let count = this.get('score.count');
        let comment = '';
        this.set('score.count', count + 1);
    	if (model.Answer.Code === countryCode) {
            let total = this.get('score.total');
            this.set('score.total', total + 50);
            comment = 'Great answer!'
    	} else {
    		comment = 'wrong answer';
    	}
        this.transitionToRoute('questionnext', comment);
    }
  }  
});

