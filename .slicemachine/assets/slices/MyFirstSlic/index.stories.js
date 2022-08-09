import MyComponent from '../../../../slices/MyFirstSlic';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MyFirstSlic'
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
      mock: {"variation":"default","name":"Default","slice_type":"my_first_slic","items":[{"my_first_slic_header":[{"type":"paragraph","text":"Labore nisi duis non tempor incididunt elit non culpa esse nostrud qui excepteur amet. Sit non id adipisicing ea dolore enim cillum ex consequat mollit exercitation incididunt velit occaecat dolore.","spans":[]}],"my_first_slic_img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"},"imge":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"}},{"my_first_slic_header":[{"type":"paragraph","text":"Dolor aliqua occaecat ipsum excepteur et aliqua aliquip laboris sit laborum eu excepteur irure eiusmod. Incididunt enim eu ipsum eiusmod in excepteur culpa qui sint ipsum ullamco.","spans":[]}],"my_first_slic_img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"imge":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"}},{"my_first_slic_header":[{"type":"paragraph","text":"Veniam aute duis incididunt ad incididunt velit veniam dolore fugiat exercitation fugiat ex magna esse.","spans":[]}],"my_first_slic_img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"imge":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"}},{"my_first_slic_header":[{"type":"paragraph","text":"Magna aute proident elit est id sint excepteur occaecat magna ut exercitation laborum. Exercitation sunt sint reprehenderit sunt do labore proident magna labore ex incididunt.","spans":[]}],"my_first_slic_img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"imge":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"}},{"my_first_slic_header":[{"type":"paragraph","text":"Aliqua cillum excepteur tempor mollit fugiat aute pariatur exercitation qui culpa nisi. Excepteur pariatur in pariatur nostrud ullamco occaecat in Lorem cillum aute veniam anim velit.","spans":[]}],"my_first_slic_img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"imge":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Architect dynamic technologies","spans":[]}],"description":[{"type":"paragraph","text":"Eu minim reprehenderit eiusmod deserunt id veniam quis in velit adipisicing mollit magna. Et sunt nostrud ea sunt ea ad incididunt.","spans":[]}],"firstSlice":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
