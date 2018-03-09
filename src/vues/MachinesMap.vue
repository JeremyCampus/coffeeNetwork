<template>
  <div>
<h1>{{ msg }}</h1>
<gmap-map class="map"
  :center="{lat:45.188529, lng:5.724524}"
  :zoom="13"
>
<gmap-marker
      :key="index"
      v-for="machine in machines"
      :position="{lat:machine.latitude,lng:machine.longitude}"
      :clickable="true"
      :draggable="true"
      @click="center=machine.position"
    ></gmap-marker>
</gmap-map>
</div>
</template>

<script>
import Machine from "./Machine.vue";

export default {
  props:["machines"],
  name: "machinemap",
  data: function() {
    return {
      msg: "Carte des machines ♪～(￣ε￣)"
    };
  }
};
</script>

<style scoped>
.map{
  width: 100%;
  height: 800px;
}
</style>
