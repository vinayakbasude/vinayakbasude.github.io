import MyComponent from '../../../../slices/SecondSliceDemo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SecondSliceDemo'
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
      mock: {"variation":"default","name":"Default","slice_type":"second_slice_demo","items":[{"select":"1"},{"select":"1"},{"select":"2"},{"select":"1"}],"primary":{"title":[{"type":"heading1","text":"Engineer granular action-items","spans":[]}],"description":[{"type":"paragraph","text":"Esse quis occaecat exercitation adipisicing culpa commodo sit.","spans":[]}],"photoSice":{"dimensions":{"width":100,"height":100},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&h=100&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
