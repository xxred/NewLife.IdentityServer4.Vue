<template>
  <table-base :table-name="tableName" ref="tableBase">
    <template slot="tableColumns">
      <el-table-column label="编号" type="index" />
      <el-table-column label="客户端名称" prop="ClientName" />
      <el-table-column label="客户端标识" prop="ClientId" />
    </template>
  </table-base>
</template>
<script>
const tableName = 'Clients'
export default {
  name: tableName,
  data() {
    return {
      tableName: tableName
    }
  }
}
</script>
