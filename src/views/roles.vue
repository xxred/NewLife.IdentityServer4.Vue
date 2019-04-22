<template>
  <table-base :table-name="tableName" />
</template>
<script>
import TableBase from '../components/tableBase'
const tableName = 'Roles'
export default {
  name: tableName,
  components: { TableBase },
  data() {
    return {
      tableName: tableName
    }
  }
}
</script>