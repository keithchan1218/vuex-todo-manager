<template>
  <div>
      Filter Todos:
      <select v-model="optionValue" @change="changeValue()">
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="10">10</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "FilterTodos",
    data() {
        return {
            optionValue: 200
        }
    },
    methods: {
    ...mapActions(["filterTodos"]),
    changeValue() {
      this.filterTodos(this.optionValue);
    }
  }
}
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>