import Ember from 'ember';
import Score from 'topografie/models/score';

export default Ember.Controller.extend({    
    queryParams: [ "id"],
    id: 1,
    score: Score.create(),
    isShowingModal: false,
actions: {
    givenAnswer(countryCode) {        
    	let model = this.get('model');    	
        let count = this.get('score.count');
        this.set('score.count', count + 1);
    	let notifcation = {};
        if (model.answer.code === countryCode) {
            let total = this.get('score.total');
            this.set('score.total', total + 50);            
            notifcation.message = 'Great answer!';
            notifcation.type = 'success';
            notifcation.autoClear = true;
    	} else {
            notifcation.message = 'Wrong answer';
            notifcation.type = 'error';          
            notifcation.autoClear = true;
        }
        this.notifications.clearAll();
        this.notifications.addNotification(notifcation);
        this.send('invalidateModel');
    },

    resetGameWarning: function() {
        this.set('isShowingModal', true);
    },

    doResetGame: function() {
        this.set('isShowingModal', false);
        this.transitionToRoute('gamedef');
    },

    cancelResetGame: function() {
        this.set('isShowingModal', false);
    }    
  }  
});

