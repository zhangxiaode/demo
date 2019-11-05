<template>
  <div class="left">
    <div class="parent" v-for="(item,index) in childData" :key="index">
      <div>{{item.label}}</div>
      <div v-if="item.children && item.children.length > 0">
        <div class="children" v-for="(children,idx) in item.children" :key="idx">
          <div>{{children.label}}</div>
          <div v-if="children.children && children.children.length > 0">
            <div
              class="child"
              v-for="(child,i) in children.children"
              :key="i"
              @click="childClick(index,idx,i)"
            >{{child.label}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "left",
  data() {
    return {
      childData: []
    };
  },
  props: ["leftData"],
  computed: {},
  components: {},
  mounted() {
    this.childData = this.leftData;
  },
  methods: {
    childClick(index, idx, i) {
      this.$emit("parentClick", { index, idx, i });
    }
  }
};
</script>

<style lang='less'>
.left {
  .parent,
  .children,
  .child {
    margin-left: 20px;
  }
}
</style>
