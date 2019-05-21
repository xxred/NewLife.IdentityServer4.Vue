<template>
  <el-form
    ref="dataForm"
    :model="temp"
    label-position="left"
    label-width="120px"
    style="width: 500px; margin-left:50px;"
  >
    <el-form-item
      label="客户端名称"
      prop="clientName"
    >
      <el-input
        v-model="temp.clientName"
        type="text"
      />
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      temp: {
        clientName: '',
        clientType: ''
      }
    }
  }
}
</script>
