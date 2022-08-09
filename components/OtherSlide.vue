<template>
  <div>
    <h2>otherslide</h2>
    <!-- <slice-zone :components="components" :slices="document.data.slices" /> -->
  </div>
</template>

<script>
import { components } from '~/slices';

export default {
  name: 'OtherPage',
  data: function () {
    return { components }
  },
  async asyncData({ $prismic, params, error}) {
    console.log('prismic', $prismic);
    // const document = await $prismic.api.getSingle('first_repeatable_section');
    // const storeName = await makeApiCall(`{ shop { name } }`);
    // console.log('index', document.data.slices);
    // if (document) {
    //   return { document, storeName }
    // } else {
    //   error({ statusCode: 404, message: 'Page not found' })
    // }
  }
}
</script>
