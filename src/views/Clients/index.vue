<template>
  <table-base
    :table-name="tableName"
    :afterClickAddBtnFun="afterClickAddBtnFun"
    :afterClickEditBtnFun="afterClickEditBtnFun"
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
      <add
        v-if="dialogStatus === 'create'"
        ref="add"
      ></add>
      <edit
        v-else-if="dialogStatus === 'update'"
        ref="edit"
      ></edit>
    </template>

    <template slot="dialogFooter">
      <el-button @click="$refs.tableBase.dialogFormVisible = false">取消</el-button>
      <el-button
        type="primary"
        @click="$refs.tableBase.dialogStatus === 'create' ? createData() : updateData()"
      >确认</el-button>
    </template>
  </table-base>
</template>
<script>
import TableBase from '../../components/tableBase'
import Add from './add'
import Edit from './edit'
import { createData } from '@xxred/easy-front-end/src/api/base'
import { setTimeout } from 'timers'

const tableName = 'Clients'
export default {
  name: tableName,
  components: { TableBase, Add, Edit },
  data() {
    return {
      tableName: tableName,
      dialogStatus: 'create'
    }
  },
  methods: {
    afterClickAddBtnFun() {
      this.dialogStatus = 'create'
      this.$nextTick(() => {
        this.$refs.add.temp = {}
        this.$refs.add.$refs.dataForm.clearValidate()
      })
    },
    afterClickEditBtnFun(row) {
      this.dialogStatus = 'update'
      // 延时赋值，给ui更新一点准备时间
      setTimeout(() => {
        this.$refs.edit.temp = Object.assign({}, row)
      }, 100)

      this.$nextTick(() => {
        this.$refs.edit.$refs.dataForm.clearValidate()
      })
    },
    createData() {
      createData(this.tableName, this.$refs.add.temp).then(() => {
        this.$refs.tableBase.dialogFormVisible = false
        this.$notify({
          title: '成功',
          message: '创建成功',
          type: 'success',
          duration: 2000
        })
        this.$refs.tableBase.handleFilter()
      })
    },
    updateData() {}
  }
}
</script>
