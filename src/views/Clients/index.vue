<template>
  <table-base :table-name="tableName">
    <template slot="tableColumns">
      <el-table-column
        label="客户端名称"
        prop="clientName"
      />
      <el-table-column
        label="客户端标识"
        prop="clientId"
      />
    </template>

    <template slot="formColumns">
666
    </template>
  </table-base>
</template>
<script>
import TableBase from '../../components/tableBase'
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
