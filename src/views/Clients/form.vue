<template>
  <form-base>
    <template slot="formColumns" slot-scope="scope">
      <component
        v-bind:is="currentComponent"
        :columns="scope.columns"
        :temp="scope.temp"
        :refDataForm="scope.refDataForm"
      ></component>
    </template>
  </form-base>
</template>

<script>
import Add from './add'
import Edit from './edit'
export default {
  components: {
    Add,
    Edit
  },
  computed: {
    currentComponent() {
      return this.$route.params.type
    }
  }
}
</script>
