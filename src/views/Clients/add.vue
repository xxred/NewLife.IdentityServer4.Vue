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
    <el-form-item
      label="客户端类型"
      prop="clientType"
    >
      <div style="margin-top: 20px">
        <el-radio
          v-model="temp.clientType"
          label="0"
          border
        >空 - 默认</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio
          v-model="temp.clientType"
          label="1"
          border
        >Web 应用程序 - 服务器端 混合流</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio
          v-model="temp.clientType"
          label="2"
          border
        >单页应用程序 - Javascript
          Authorization Code Flow with PKCE</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio
          v-model="temp.clientType"
          label="3"
          border
        >原生应用程序 - 移动/桌面 混合流</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio
          v-model="temp.clientType"
          label="4"
          border
        >机械/机器人 - 资源所有者密码和客户端凭据流</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio
          v-model="temp.clientType"
          label="5"
          border
        >电视和限制输入设备应用程序 - 设备流程</el-radio>
      </div>

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
