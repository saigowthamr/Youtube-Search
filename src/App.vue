<template>

<div class="container">
  <div>
			 <h1>Simple youtube search
         <span class="spa">using vuejs</span>
       </h1>
       
		 </div>

  <div class="container  c">
  
 

<app-search></app-search>
<app-display></app-display>

    </div>  
</div>
</template>

<script>
import Search from "./components/Search";
import Display from "./components/DisplayList";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  components: {
    "app-search": Search,
    "app-display": Display
  }
};
</script>

 <style >
.c {
  margin-top: 0rem;
  padding: 2rem;
  background-color: aliceblue;
  box-shadow: 0 2px 2px black;
}

h1 {
  color: white;
  background-color: #648ba9;
  padding: 1rem;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.5rem;
  box-shadow: 0 2px 2px black;
  text-transform: capitalize;
}

h1::first-letter {
  color: #f5f5f5;
  font-size: 2rem;
  background-color: #ff0000;
  padding: 1rem;
  border-radius: 0.7rem;
  box-shadow: 0 2px 2px black;
  margin-right: 0.2rem;
}
.spa {
  font-size: 0.9rem;
  font-family: sans-serif;
  background-color: rgb(175, 45, 45);
  padding: 0.4rem;
  border-radius: 0.7rem;
  font-weight: 800;
  box-shadow: 0 2px 2px black;
}
</style>
