import MyComponent from '../../../../slices/MyFourthSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MyFourthSlice'
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
      mock: {"variation":"default","name":"Default","slice_type":"my_fourth_slice","items":[{"dummy_pic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"dummy_dates":"2013-06-26"},{"dummy_pic":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"dummy_dates":"2019-05-13"}],"primary":{"title":[{"type":"heading1","text":"Drive impactful experiences","spans":[]}],"description":[{"type":"paragraph","text":"Anim in anim labore ex nisi do nisi.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
