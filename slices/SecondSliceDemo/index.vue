<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />

    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <span>{{ item.select }}</span>
    </div>

  </section>
</template>

<script>
export default {
  name: "SecondSliceDemo",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.section {
  /* background: #f7f7f7; */
  color: #111;
  padding: 4em;
  text-align: center;
}

.title {
  margin-bottom: 2em;
}
</style>