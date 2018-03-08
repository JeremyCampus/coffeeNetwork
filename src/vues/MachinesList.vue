<template>
  <div>
<h1>{{ msg }}</h1>
<machine v-for="machine in machines" :key="machine.id" :name="machine.name" :status="machine.status" :checkedAt="machine.checkedAt"></machine>
</div>
</template>

<script>
import Machine from "./Machine.vue";

export default {
  props:["machines"],
  components:{ 'machine': Machine },
    name:"machinelist",
    data: function() {
        return {
            msg: "Liste des machines ԅ(º﹃ºԅ)"
        }
    }
}
</script>
