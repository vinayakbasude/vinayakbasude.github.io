<template>
  <section class="section">
    <div class="section__text-left">
      <prismic-rich-text :field="slice.primary.title" class="title" />
      <prismic-rich-text :field="slice.primary.description" />    
    </div>
    <div class="section__img-right">
      <prismic-image :field="slice.primary.firstSlice" />
    </div>
    <!-- <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <prismic-rich-text :field="item.my_first_slic_header" />
    </div>

    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <prismic-image :field="item.my_first_slic_img" />
    </div>


    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <prismic-image :field="item.imge" />
    </div> -->


  </section>
</template>

<script>
export default {
  name: "MyFirstSlic",
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

<style scoped lang="scss">
.section {
  // background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
  display: flex;
  height: 300px;
  &__text-left{
    text-align: left;
    flex: 0 0 70%
  }
  &__img-right{ 
    flex: 0 0 30%;

    img{
      height: 100%;
      width: 100%;
      object-fit: contain;
      
    }
  }
}

.title {
  margin-bottom: 2em;
}
</style>