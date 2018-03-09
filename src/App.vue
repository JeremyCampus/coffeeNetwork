<template>
  <div id="app">
    <h1>Coffee Network</h1>
    <img src="src/assets/logo.png" >
    <h2>Que souhaitez vous faire ? </h2>
    <h3> {{ msg }}</h3>
    <ul class="enLigne">
      <li> <router-link to="/machinelist"><button v-on:click="onMachinesListClick" class="rectangleVert ">Consulter la liste des machines</button></router-link></li>
      <li><router-link to="/machinemap"> <button v-on:click="onMapClick" class="rectangleVert ">Voir la carte</button></router-link></li>
    </ul>

      <router-view v-bind:machines="machines"></router-view>


  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      machines: [
        {
          id:1,
          name: 'What else ?',
          status: false,
          checkedAt: new Date(),
          position: {lat: 45.0, lng: 5.0}
        },
        {
          id:2,
          name: 'What blabla ?',
          status: true,
          checkedAt: new Date(),
          position: {lat: 45, lng: 5.1}
        }
      ],
      msg: "Yeay",
    }
  },
  methods: {
    onMachinesListClick: function(event) {
      // alert("L'utilisateur a cliqué sur onMachinesListClick");
    },
    onMapClick: function(event) {
      // alert("L'utilisateur a cliqué sur onMapClick");
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

.enLigne{
  display:inline-block;
}


a {
  color: #ffffff;
  text-decoration: none;
}

.rectangleVert {
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

.rectangleVert:hover {
  background: #15ab62;
  background-image: -webkit-linear-gradient(top, #15ab62, #28a65e);
  background-image: -moz-linear-gradient(top, #15ab62, #28a65e);
  background-image: -ms-linear-gradient(top, #15ab62, #28a65e);
  background-image: -o-linear-gradient(top, #15ab62, #28a65e);
  background-image: linear-gradient(to bottom, #15ab62, #28a65e);
  text-decoration: none;
}

</style>
