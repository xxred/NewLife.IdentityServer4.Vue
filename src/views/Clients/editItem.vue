<template>
  <el-card class="box-card">
    <el-input type="text" v-model="tempItem" />
    <el-divider v-if="tempItem" content-position="left"
      >（点击选中）</el-divider
    >
    <el-button v-if="tempItem" type="primary" @click="clickTempItem">{{
      tempItem
    }}</el-button>
    <el-divider content-position="left">选中项</el-divider>
    <el-row
      :gutter="10"
      v-for="(val, idx) in items"
      :key="idx"
      style="margin-bottom: 5px;"
    >
      <el-col :span="16">
        <el-input placeholder="" size="medium" v-model="items[idx]"></el-input>
      </el-col>
      <el-col :span="5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          @click="items.splice(idx, 1)"
        ></el-button>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
export default {
  props: {
    items: Array
  },
  data() {
    return {
      tempItem: ''
    }
  },
  methods: {
    clickTempItem() {
      if (this.items.includes(this.tempItem)) {
        this.notityRepeat()
        return
      }
      this.items.push(this.tempItem)
      this.tempItem = ''
    },
    notityRepeat() {
      this.$notify({
        title: '提示',
        message: '重复数据',
        type: 'warning',
        duration: 2000
      })
    }
  }
}
</script>
