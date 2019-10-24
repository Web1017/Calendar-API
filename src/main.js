import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({

  apiKey: "AIzaSyAHgr7gqINy05Y-o4KqH-YB51OTD9RnQwo",
  authDomain: "calendar-api2-73607.firebaseapp.com",
  databaseURL: "https://calendar-api2-73607.firebaseio.com",
  projectId: "calendar-api2-73607",
  storageBucket: "calendar-api2-73607.appspot.com",
  messagingSenderId: "638798675666",
  appId: "1:638798675666:web:5eeebf54de50ad0306f70b"


});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
