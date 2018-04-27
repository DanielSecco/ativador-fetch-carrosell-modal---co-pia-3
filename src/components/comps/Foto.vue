<template>
  <div class="foto">
    <h1>{{ msg }}</h1>
      <p>Registre uma imagens para comprovar a identificação da árvore.</p>
     
      <div v-if="!image">
            <div id="lastIMG"> 
              <img id="imgL" src="@/assets/icoo.png" width="100px" height="auto"/>    
    </div>
    <input id="inputF" type="file" accept="video/*;capture=camcorder" @change="onFileChange">
  </div>
  <div v-else>
          <div id="lastIMG"> 
    </div>
    <img id="imgLoad" :src="image" width="100px" height="100px"/>
      <input id="inputF" type="file" accept="video/*;capture=camcorder" @change="onFileChange">
   <button @click="removeImage">Remove image</button>
      <br>
       <button class="btavancar" @click="avancar">Salvar</button>
  </div>
    
  </div>
</template>
<script>
    var firebase = require('firebase');
    var $ = require('jquery')
   
    window.post={}
    import Swiper from 'swiper'
    export default {
        name: 'foto',
        data() {
            return {
                msg: 'Imagens',
                image: '',
                imageB: '',
                urr: ''
            }
        },
        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
                var file = e.target.files[0];
                //var storageRef = firebase.storage().ref(file.name);
                console.log('<filename >', file);
                var metadata = {
                    contentType: 'image/jpeg'
                };
            },
            createImage(file) {
                var dataT = new Date();
                var image = new Image();
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                    
                    $("#lastIMG").append('<img  src="' + vm.image + '" width="100px" height="auto"/>');
                    var ind = new Date().toISOString();
                     post = {
                        id: ind,
                        image: vm.image,
                        tag_num: TagN,
                         geolocation:GeoL,
                         cod_Tree:CodTree,
                         data: dataT.getDate() + '/' + dataT.getMonth() + '/' + dataT.getFullYear(),
                    hora: dataT.getHours() + ':' + dataT.getMinutes() + ':' + dataT.getSeconds(),
                        user: UsrN
                    };
                    console.log('variavel>', post);
                  
                    $("#imgLoad").remove();
                };
                reader.readAsDataURL(file);
                console.log('readerfile > ', reader);
                // use the Blob or File API
                /*storageRef.put(reader).then(function(snapshot) {
                	console.log('Uploaded a blob or file!');
                });*/
                //console.log(image.innerText + '<kkkkk>');
            },
            removeImage: function(e) {
                $("#lastIMG").remove();
                $("#imgLoad").remove();
            },
                    avancar () {
             // writeData('posts', post);
             // writeData('sync-posts', post);
               // firebase.database().ref('posts/'+(post.tag_num)).set(post);   
                       // firebase.database().ref('posts').push(post);
                         if ('serviceWorker' in navigator && 'SyncManager' in window) {
                         navigator.serviceWorker.ready
                            .then(function(sw) {
                               
                                writeData('sync-posts', post)
                                    .then(function() {
                                        return sw.sync.register('sync-new-posts');
                                    })
                                    .then(function() {

                                        var data = {
                                            message: 'Your Post was saved for syncing!'
                                        };
                                        console.log(data);
                                    })
                                    .catch(function(err) {
                                        console.log(err);
                                    });
                            }) 
                        
                           
                    };
                             
                              
                        
                        
                        
                    if ('indexedDB' in window) {
                        readAllData('sync-posts')
                            .then(function(data) {
                                console.log('From cache', data);
                            });
                    };
                  //  fetch('https://192.168.0.8/lambanca', {
                  //          method: 'POST',
                  //          headers: {
                  //              // 'dataType': 'json',
                  //              'Access-Control-Allow-Origin': '*/*',
                  //              'Content-Type': 'application/json',
                  //              'Accept': 'application/json'
                  //          },
                  //          dataType: 'json',
                  //          mode: 'cors',
                  //          body: JSON.stringify([post])
                  //      }).then(function(response) {
                  //          console.log(response);
                  //          return response.json();
                  //      }).then(function (data) {
                  //      
                  //      console.log(data);
                  //  })
                  //      .catch(function(err) {
                  //          console.log('******');
                  //      }); 
                  //     
            //    fetch('https://ativador-55a4a.firebaseio.com/posts/alfa.json', {
            //                method: 'POST',
            //                headers: {
            //                    // 'dataType': 'json',
            //                    'Access-Control-Allow-Origin': '*/*',
            //                    'Content-Type': 'application/json',
            //                    'Accept': 'application/json'
            //                },
            //                dataType: 'json',
            //                mode: 'cors',
            //                body: JSON.stringify([post])
            //            }).then(function(response) {
            //                console.log(response);
            //                return response.json();
            //            }).then(function (data) {
            //            
            //            console.log(data);
            //        })
            //            .catch(function(err) {
            //                console.log('******');
            //            });

                       
                     //   firebase.database().ref('posts/'+(post.tag_num)).set(post);
                        // firebase.database().ref('posts').push(post);
              var mySwiper = new Swiper('.swiper-container', {

});
        mySwiper.slideTo(1);
            
        }
        }
    };
    readAllData('posts')
        .then(function(data) {
        $("#imgf").text('');
            for (var dt of data) {
                //$("#lastIMG").append('<img  src="' + dt.image + '" width="100px" height="auto"/>');
                 $("#imgf").html("<p> "+ dt.data + '----'+ dt.id + '-->' + dt.hora + "</p><br> ");
            }
        })

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2,
    p {
        font-weight: normal;
        color: black;
    }
button {
    color: aliceblue;
background-color: #000;
	font-size: 1em;
	padding: 1em 2em;
        margin: 1em;
	border: none !important;
	border-radius: 5em;
	box-shadow: none;
}
</style>
