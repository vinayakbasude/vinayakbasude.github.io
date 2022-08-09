import MyComponent from '../../../../slices/RighTextSlide';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/RighTextSlide'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"righ_text_slide","items":[{"left_text":[{"type":"paragraph","text":"Eiusmod irure nulla duis excepteur fugiat irure. Eiusmod pariatur eu do voluptate id labore quis cupidatat sunt aute incididunt pariatur incididunt mollit nisi.","spans":[]}],"right_image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"}},{"left_text":[{"type":"paragraph","text":"Id eiusmod proident enim in nulla exercitation sunt. Deserunt esse enim ipsum adipisicing aliqua tempor excepteur anim nulla.","spans":[]}],"right_image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"}},{"left_text":[{"type":"paragraph","text":"Qui magna irure aliquip culpa cillum aliquip in proident nostrud dolor aute pariatur.","spans":[]}],"right_image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Generate holistic schemas","spans":[]}],"description":[{"type":"paragraph","text":"Non dolore tempor proident. Elit commodo voluptate do qui nostrud nulla culpa. Aute nostrud eu excepteur.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
