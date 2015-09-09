import Ember from 'ember';
import Score from 'topografie/models/score';

export default Ember.Controller.extend({    
    queryParams: [ "id"],
    id: 1,
    score: Score.create(),
actions: {
    givenAnswer(countryCode) {        
    	let model = this.get('model');    	
        let count = this.get('score.count');
        this.set('score.count', count + 1);
    	if (model.answer.code === countryCode) {
            let total = this.get('score.total');
            this.set('score.total', total + 50);            
    	}
        this.send('invalidateModel');
    }
  }  
});

