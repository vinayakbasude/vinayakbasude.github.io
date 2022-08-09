<script>
export default {
  async asyncData({ $prismic, params, error }) {
    console.log('test in uid')
    const document = await $prismic.api.getByUID('firstrepeatablesection', params.uid)

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>