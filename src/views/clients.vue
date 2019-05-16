<template>
  <table-base :table-name="tableName">
    <div
      slot="tttt"
      style="heigh:100px"
    >
      <div>233333
      </div>
    </div>
  </table-base>
</template>
<script>
import TableBase from '../components/tableBase'
const tableName = 'Clients'
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
