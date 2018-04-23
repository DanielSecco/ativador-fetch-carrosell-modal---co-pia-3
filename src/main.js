import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('../public/src/js/promise.js')
require('../public/src/js/fetch.js')
//require('../public/src/js/cashdyn.js')
require('../public/src/js/idb.js')
require('../public/src/js/material.min.js')
require('../public/src/js/utility.js')
// require styles
import 'swiper/dist/css/swiper.css'
import VueMDCAdapter from 'vue-mdc-adapter';
Vue.use(VueMDCAdapter);
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.config.productionTip = false
window.Idd = ''
window.TagN = 0
window.GeoL = {
    lat: 0,
    log: 0
}
window.CodTree = 0
window.UsrN = ''
window.TimeStp = ''
window.PicI = ''
var fireb = require('firebase')
window.firebase = fireb;
  var config = {
    apiKey: "AIzaSyB2_pWdYuz81LRMdUoQVQsb6gl0LeL4MvQ",
    authDomain: "ativador-55a4a.firebaseapp.com",
    databaseURL: "https://ativador-55a4a.firebaseio.com",
    projectId: "ativador-55a4a",
    storageBucket: "ativador-55a4a.appspot.com",
    messagingSenderId: "773521340935"
  };
  firebase.initializeApp(config);
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is executed once the timer is done!');
        reject({
            code: 500,
            message: 'An error occurred!'
        });
        //console.log('This is executed once the timer is done!');
    }, 100);
});
if (!window.Promise) {
    window.Promise = promise;
}

/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}*/

function updateUI(data) {
    for (var i = 0; i < data.length; i++) {
        writeData('trees', data[i]);
        //console.log(data);
    }
}
var myInit = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*/*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    mode: 'cors'
};
var url = 'https://ativador-55a4a.firebaseio.com/trees.json';
var networkDataReceived = false;
fetch(url)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        networkDataReceived = true;
        window.furlf = data;
        // console.log(data.foto + '<???>' + jhg);
        console.log('From web FETCH 1 >', data);
        var dataArray = [];
        var uio = [];
        for (var key in data) {
            dataArray.push(data[key]);
            uio.push(data[key]);
            // writeData('trees', data[key]);
        }
        updateUI(dataArray);
        //window.ltt = uio[0];
        window.dados1 = uio;
        // console.log(uio.length + '<???>' + jhg);
        return window.dados1, window.furlf;
    }).catch(function (err) {
        console.log(err);
    });
fetch('http://192.168.0.8/trash/trees',{  mode: 'cors'} )
    .then(function (response) {
        console.log(response);
        //return response.json();
    })
    .then(function (data) {
        // console.log(data.foto + '<???>' + jhg);
        console.log('From web FETCH anubz >', data);
      
        }
    ).catch(function (err) {
        console.log(err);
    });


function updateUI2(data) {
    for (var i = 0; i < data.length; i++) {
       writeData('posts', data[i]);
    }
}
////////////////////////////////////////
var url2 = 'https://ativador-55a4a.firebaseio.com/posts.json';
networkDataReceived = false;
fetch(url2)
    .then(function (res) {
     console.log(res);
        return res.json();
    })
    .then(function (data) {
        networkDataReceived = true;
       
       // console.log(data.foto + '<???>' + jhg);
        console.log('From web FETCH post fire >', data);
        var dataArray = [];
        for (var key in data) {
            dataArray.push(data[key]);
          
        }
        updateUI2(dataArray);
      
       // console.log(uio.length + '<???>' + jhg);
       
    }).catch(function (err) {
        console.log(err);
    });
/*if ('indexedDB' in window) {
  readAllData('posts')
    .then(function (data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        //updateUI2(data);
      }
    });
}*/

//export const list = postData;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
promise.then(function (text) {
    return text;
}).then(function (newText) {
    console.log(newText);
}).catch(function (err) {
    console.log(err.code, err.message);
});
console.log('This is executed right after setTimeout()');