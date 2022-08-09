<template>
    <div>
        <h2>
            collections
        </h2>   

        <div v-for="item in this.collections">
            <NuxtLink :to='`collection/${item.node.title}`' @click="getCollectionsData" >
                {{ item.node.title }}
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import makeApiCall from '../utility/utilities'

export default {
    async asyncData() {
        const collections = await makeApiCall(
            `query{
                collections(first:10){
                    edges{
                        node {
                            id,
                            title
                        }
                    }
                }
            }`
        )
        const data = collections.data.collections.edges;
        return { collections:data }
    },
    methods:{
        async getCollectionsData(){
            const query = `query AllProducts {
                collection(handle: "Bracelets") {
                    handle
                        products(first: 10) {
                        edges {
                            node {
                            handle
                            }
                        }
                    }
                }
            }`
            const collection = await makeApiCall(query);
            console.log('collection', collection)
        }
    }
}
</script>