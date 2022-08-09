<template>
    <div class="products">
        <h1 v-if='$fetchState.pending'>fetching</h1>
        <div class="products__cards" v-if="(!$fetchState.pending && !$fetchState.error)">
            <div class="card" v-for="item of products">
                <h3 class="card__title">{{ item.node.title }}</h3>
                <img class="card__image" :src="item.node.featuredImage.url" alt="text" >
            </div>
        </div>

        <NuxtLink to="/">Back to home</NuxtLink>
    </div>
</template>

<script>
import makeApiCall from '../utility/utilities.js'
export default {
    data() {
        return {
            title: 'Products',
            products: []
        }
    },
    head:{
        title: 'Products',
        meta: [
            {
                name: 'descriptions',
                content: 'Products page'
            }
        ]
    },
    async fetch() {
        const query = `query{
                products(first:10){
                        edges{
                            node{
                                title
                                id
                                featuredImage {
                                    id
                                    url
                                }
                            }
                        }
                    }
                }`
        const products = await makeApiCall(query)
        this.products = products.data.products.edges;
    },
    fetchOnServer:true
}
</script>

<style lang="scss">
    .products__cards{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
       .card{
            flex: 0 0 32%;
            padding: 5px;
            &__title{
                font-size: 24px;

            }
            &__image{
                height: 300px;
                width: 100%;
                object-fit: cover;
            }
        }

    }

    @media (max-width: 400px){
        .products__cards .card{
            flex: 0 0 100%
        }
    }
</style>