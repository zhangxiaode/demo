<template>
  <div id="app">
    <Left class="left" :leftData="leftData" @parentClick="handleClick" />
    <Right class="right" :current="current" />
  </div>
</template>

<script>
import Left from "@/components/left";
import Right from "@/components/right";
export default {
  name: "app",
  data() {
    return {
      leftData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      current: ["", "", ""]
    };
  },
  components: {
    Left,
    Right
  },
  mounted() {},
  created() {},
  methods: {
    handleClick(obj) {
      this.current = [
        this.leftData[obj.index].label,
        this.leftData[obj.index].children[obj.idx].label,
        this.leftData[obj.index].children[obj.idx].children[obj.i].label
      ];
    }
  }
};
</script>

<style scoped lang='less'>
#app {
  height: 100%;
  display: flex;
  justify-content: space-between;
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
