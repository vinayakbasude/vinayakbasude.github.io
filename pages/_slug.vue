<template>
    <div>
        <h2>slug</h2>
        {{this.slug}}
    </div>
</template>

<script>
    export default {
        async asyncData({params}){
            const slug = params.slug
            console.log('collection', slug);
            return {slug}
        }
    }
</script>