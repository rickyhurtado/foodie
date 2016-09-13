import Ember from 'ember';

export default Ember.Mixin.create({
  showAlertMessage: false,
  alertMessageType: '',
  setAlertMessage: function(type, message){
    this.set('alertMessage', message);
    this.set('alertMessageType', type);
    this.set('showAlertMessage', true);
    window.scrollTo(0, 0);
  },
  resetAlertMessage: function(){
    this.set('alertMessage', '');
    this.set('alertMessageType', '');
    this.set('showAlertMessage', false);
  },
});
