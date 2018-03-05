<template>
  <div id="app">
    <img src="src/assets/logo.png" >
    <h1>Que souhaitez vous faire ? </h1>
    <ul>
      <li> <button v-on:click="onMachinesListClick" class="rectangleVert ">Consulter la liste des machines</button></li>
      <li> <button v-on:click="onMapClick" class="rectangleVert ">Voir la carte</button></li>
    </ul>

<machinelist>
</machinelist>

<machinemap>
</machinemap>


  </div>
</template>

<script>

import Machinelist from "./vues/MachinesList.vue"
import Machinemap from "./vues/MachinesMap.vue"

export default {
  components:{
    Machinelist,
    Machinemap
  },
  name: 'app',
  data () {
    return {
      msg: 'Yeay'
    }
  },
  methods: {
    onMachinesListClick: function (event) {
      alert("L'utilisateur a cliqué sur onMachinesListClick")
    },
    onMapClick: function (event) {
      alert("L'utilisateur a cliqué sur onMapClick")
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #ffffff;
  text-decoration: none;
}

.rectangleVert{
  background: #34d97b;
  background-image: -webkit-linear-gradient(top, #34d97b, #20a876);
  background-image: -moz-linear-gradient(top, #34d97b, #20a876);
  background-image: -ms-linear-gradient(top, #34d97b, #20a876);
  background-image: -o-linear-gradient(top, #34d97b, #20a876);
  background-image: linear-gradient(to bottom, #34d97b, #20a876);
  -webkit-border-radius: 7;
  -moz-border-radius: 7;
  border-radius: 7px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.rectangleVert:hover{
  background: #15ab62;
  background-image: -webkit-linear-gradient(top, #15ab62, #28a65e);
  background-image: -moz-linear-gradient(top, #15ab62, #28a65e);
  background-image: -ms-linear-gradient(top, #15ab62, #28a65e);
  background-image: -o-linear-gradient(top, #15ab62, #28a65e);
  background-image: linear-gradient(to bottom, #15ab62, #28a65e);
  text-decoration: none;

}




</style>
