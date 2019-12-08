<template>
  <div id="app">
    <!-- <Left class="left" :leftData="leftData" @parentClick="handleClick" />
    <Right class="right" :current="current" /> -->
    <el-tree
      ref="elTree"
      :data="leftData"
      :props="defaultProps"
      node-key="$treeNodeId"
      accordion
      @node-click="handleNodeClick"
    ></el-tree>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="index"
        >{{ item }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      breadcrumbData: [],
      leftData: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      current: ['', '', '']
    }
  },
  mounted() {},
  created() {},
  methods: {
    // handleClick(obj) {
    //   this.current = [
    //     this.leftData[obj.index].label,
    //     this.leftData[obj.index].children[obj.idx].label,
    //     this.leftData[obj.index].children[obj.idx].children[obj.i].label
    //   ]
    // }
    handleNodeClick(data,data1,data2) {
      // if(data.$treeNodeId==3) {
      //   this.breadcrumbData[2] = data.label
      // }
      // console.log(this.$refs.elTree.getCurrentKey())
      // console.log(this.$refs.elTree.getCheckedNodes())
      this.breadcrumbData.push(data1.parent.parent.label);
      this.breadcrumbData.push(data1.parent.label);
      this.breadcrumbData.push(data1.label);
    }
  }
}
</script>

<style scoped lang='less'>
#app {
  height: 100%;
  display: flex;
  // justify-content: space-between;
  .left {
    flex: 1;
    height: 100%;
  }
  .right {
    flex: 1;
    height: 100%;
  }
}
</style>
