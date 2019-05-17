<template>
  <table-base
    :table-name="tableName"
    ref="tableBase"
  >
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
      <add ref="add"></add>
    </template>

    <template slot="dialogFooter">
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="$refs.tableBasedialogStatus === 'create' ? createData() : updateData()"
        >确认</el-button>
      </div>
    </template>
  </table-base>
</template>
<script>
import TableBase from '../../components/tableBase'
import Add from './add'
import { createData } from '../../../../Easy.Front-End/src/api/base'

const tableName = 'Clients'
export default {
  name: tableName,
  components: { TableBase, Add },
  data() {
    return {
      tableName: tableName
    }
  },
  methods: {
    createData() {
      createData(this.tableName, this.$refs.add).then(() => {
        this.$refs.tableBase.dialogFormVisible = false
        this.$notify({
          title: '成功',
          message: '创建成功',
          type: 'success',
          duration: 2000
        })
      })
    },
    updateData(){

    }
  }
}
</script>
