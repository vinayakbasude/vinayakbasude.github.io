<template>
  <div>
    <h1>{{this.storeName.data.shop.name}}</h1>
    <div>
        <NuxtLink to='/products'>Products</NuxtLink>
        <NuxtLink to='/collections'>Collections</NuxtLink>
    </div>
    <Tutorial />
    <slice-zone :components="components" :slices="document.data.slices" />
    <RouterView></RouterView>
  </div>
</template>

<script>
import { components } from '~/slices';
import makeApiCall from '../utility/utilities';

export default {
    name: "IndexPage",
    data: function () {
        return { components };
    },
    methods: {
        callShop() {
            const query = `{ shop { name } }`;
            this.apiCall(query).then(response => { console.log(response, "here in index"); });
        },
        apiCall(query) {
            return fetch("https://partnercreation1.myshopify.com/api/2022-07/graphql.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/graphql",
                    "Access-Control-Request-Method": "POST",
                    "X-Shopify-Storefront-Access-Token": "ffb10ff882ad6268ab5a27c86c0ebe1a",
                    "Referer": "https://partnercreation1.myshopify.com"
                },
                "body": query
            })
                .then(response => response.json());
        }
    },
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getSingle("first_repeatable_section");
        const storeName = await makeApiCall(`{ shop { name } }`);
        console.log("index", document.data.slices);
        if (document) {
            return { document, storeName };
        }
        else {
            error({ statusCode: 404, message: "Page not found" });
        }
    }
}
</script>
