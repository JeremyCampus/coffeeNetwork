<template>
  <div>
<h1>{{ msg }}</h1>
<gmap-map class="map"
  :center="{lat:45.188529, lng:5.724524}"
  :zoom="14"
>
</gmap-map>
</div>
</template>

<script>
export default {
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
