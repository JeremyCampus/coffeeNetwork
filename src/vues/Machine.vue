<template>
  <div class="encadrement">
    <h1>{{ name }} ⊂(・﹏・⊂)</h1>
    <h4>Etat de la machine :</h4>
    <div  v-if="!status"><h3 class="red">STATUS KO</h3></div>
    <div  v-else><h3 class="green">STATUS OK</h3></div>
    </br>
    <h5>Date de dernier check </h5>
    <h5>{{ checkedAt.toLocaleString('en-GB', { timeZone: 'UTC' }) }}</h5>

  </div>
</template>

<script>
export default {
  name: "machine",
  data: function() {
    return {
      name: 'What else ?',
      status: false,
      checkedAt: new Date(),
    };
  }
};
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
  width: 40%;
  position: absolute;
  left: 30%;

}
</style>
