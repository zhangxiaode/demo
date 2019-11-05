<template>
  <div class="right">
    {{rightData}}
  </div>
</template>

<script>
export default {
  name: "right",
  data() {
    return {};
  },
  computed: {
    rightData() {
      return this.current.join("-")
    }
  },
  props: ["current"],
  components: {},
  mounted() {
    console.log(this.current)
  },
  methods: {}
};
</script>

<style lang='less'>
.right {
}
</style>
