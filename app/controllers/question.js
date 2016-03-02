import Ember from 'ember';
import Score from 'topografie/models/score';

const { Rx } = window;

export default Ember.Controller.extend({    
    score: Score.create(),
    isShowingModalGameReset: false,
    isShowingModalGameEnd: false,
    isGameOver: false,
    bonus: 20,
    bonusObservable: null,
    bonusSubscription: null,
                
actions: {
    givenAnswer(countryCode) {
      this.get('bonusSubscription').dispose();
    	let model = this.get('model');    	
      let levelScore = this.get('levelScore') + this.get('bonus');
      let count = this.get('score.count');
      this.set('score.count', count + 1);
    	let notifcation = {};
      if (model.get('answer').get('code') === countryCode) {
        this.incrementProperty('score.total', levelScore);
        
        notifcation.message = 'Great answer!';
        notifcation.type = 'success';
        notifcation.autoClear = true;
    	} else {
        this.incrementProperty('score.mistakes');
        notifcation.message = 'Wrong answer';
        notifcation.type = 'error';          
        notifcation.autoClear = true;
      }
      this.notifications.clearAll();
      this.notifications.addNotification(notifcation);

      let mistakes = this.get('score.mistakes');
      if (mistakes > 2) {
        this.set('isGameOver', true);
        this.set('isShowingModalGameEnd', true);               
      } else {
        if (count < 20) {
          this.send('invalidateModel');    
        } else {
          this.set('isGameOver', false);
          this.set('isShowingModalGameEnd', true);
        }                
      }
    },

    resetGameWarning: function() {
        this.set('isShowingModalGameReset', true);
    },

    doResetGame: function() {
        this.set('isShowingModalGameReset', false);
        this.transitionToRoute('gamedef');
    },

    cancelResetGame: function() {
        this.set('isShowingModalGameReset', false);
    },
    
    doEndGame: function() {
        this.set('isShowingModalGameEnd', false);
        this.transitionToRoute('gamedef');
    },
        
  },
  
  level: Ember.computed('score.count', function() {
    let count = this.get('score.count');
    // 20 questions, 5 levels: 1-2 easy, 3-5: novice, 6-12: medium, 13-16: difficult, 17-20: expert
    if (count < 3) {
        return 0;
    } else if (count < 6) {
        return 1;
    } else if (count < 13) {
        return 2;
    } else if (count < 17) {
        return 3;
    } else {
        return 4;
    }      
  }),  
  
  levelDescription: Ember.computed('level', function() {
    let level = this.get('level');
    switch (level) {
        case 0: 
          return 'easy';
        case 1:
          return 'novice';
        case 2:
          return 'medium';
        case 3:
          return 'difficult';
        case 4: 
          return 'expert';
        default:   
          return 'medium';       
    }
  }),
  
  levelScore: Ember.computed('level', function() {
    let level = this.get('level');
    return level * 10;
  }),
  
  init() {
    this._super(...arguments);

    let src = Rx.Observable.interval(1000)
    .take(21)
    .map((x) => {
      return 20 - x;
    });     
    
    this.set('bonusObservable', src);    
  }
    
});

