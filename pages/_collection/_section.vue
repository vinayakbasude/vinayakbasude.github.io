<template>
    <div>
        <h1>Section</h1>
        <h2>{{slug}}</h2>
        {{collection}}
        <div>
            <NuxtLink to="/">Back</NuxtLink>
        </div>
    </div>
</template>

<script>
import makeApiCall from '../../utility/utilities';

export default {
    async asyncData({ params }) {
        const slug = params.section;
        console.log('slug', slug)

        const query = `query AllProducts {
                collection(handle: "${slug}") {
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
        console.log('collection', collection);
        return { slug, collection }
    }
}
</script>