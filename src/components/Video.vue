<template>
    
          <div class="col-sm-8 col video-detail  sk">
         
    
    <div class="embed-responsive embed-responsive-16by9  sks">


          <iframe class="embed-responsive-item" :src="urlS(singVideo.id.videoId)" 
          width="100%" height="315"  allowfullscreen>
          </iframe>
          
             </div>
    
         <h5 class="title"> {{singVideo.snippet.title}}</h5>  

        
              
    
    
         
          </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
   
 
    computed:{
           singVideo() {
      return this.$store.state.singVideo[0];
    }
    },
    methods:{
        urlS(id) {
      return "https://www.youtube.com/embed/" + id;
    }
    }

}
</script>

<style scoped>
.title{
   margin-top: 1.3rem;
}
.sks{
  padding-bottom: 66.25%;
  margin-bottom: .3rem;
}
</style>
