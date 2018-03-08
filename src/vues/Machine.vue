<template>
  <div class="encadrement">
    <h1>{{ name }}</h1>
    <h4>Etat de la machine :</h4>
    <div  v-if="!status"><h3 class="red">STATUS KO</h3></div>
    <div  v-else><h3 class="green">STATUS OK  ⊂(・﹏・⊂)</h3></div>
    </br>
    <h5>Date de dernier check </h5>
    <h5>{{ checkedAt.toLocaleString('en-GB', { timeZone: 'UTC' }) }}</h5>
  </div>
</template>

<script>
export default {
  props:["name","status","checkedAt"]
}
</script>


<style>

.green{
  color: green;
}
.red{
  color: red;
}

.encadrement{
  border: 1px black solid;
  width: 30%;
  position: relative;
  left: 35%;
  margin-bottom: 20px;

}
</style>
