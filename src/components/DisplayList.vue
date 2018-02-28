<template>

<div class="row"   v-if="videoli.length>0">


  

    <app-video></app-video>
       



  <div class="col-md-4 s-li" v-for="video in videoli" :key="video.etag" >

     <li class="list-group-item" @click="filterVideo(video.etag)" >
      <div class="media-left">
       <img   class="media-left"  :src="video.snippet.thumbnails.default.url"/>
      </div>
      <div class="media-body"></div>
      <div class="media-heading tit">{{video.snippet.title}}</div>
      </li>

  </div>

  </div>
</template>


<script>
import { mapState } from "vuex";
import Video from "./Video";
export default {

  computed: {
    videoli() {
      return this.$store.state.videoli;
    }
  },
  methods: {
    urlS(id) {
      return "https://www.youtube.com/embed/" + id;
    },

    filterVideo(tag) {
      var s = this.videoli.filter(e => e.etag === tag);
       this.$store.state.singVideo=s
    }
  },
  components: {
       'app-video':Video

  }
};
</script>


<style scoped>

.tit{
    margin-top: .3rem;
    font-size: .9rem !important
}
.s-li{
    margin-bottom: 1rem;
    height: 100%;
}
.list-group-item{
    cursor: pointer;

}

.list-group-item:hover{
    background-color: #eee;
}

.main{
    margin-top: 30px;
}
</style>
