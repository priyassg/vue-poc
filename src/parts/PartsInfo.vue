<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>
<script>
import getPartsMixin from '../parts/get-parts-mixin';

export default {
    name: 'PartsInfo',
    mixins: [getPartsMixin],
    computed: {
        part(){
            const { partType, id } = this.$route.params;
            return this.parts[partType].find(part => part.id === +id);
        }
    },
}
</script>