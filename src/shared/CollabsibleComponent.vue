<template>
<div>
    <div class="header">
        <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
        <span v-if="!open" @click="open = !open"> &#x25BC; Expand</span>
    </div>
    <slot v-if="open">
        Default Content
    </slot>
</div>
</template>

<script>
export default {
    name: 'CollapsibleComponent',
    data(){
        return{
            open: true
        }
    }
}
</script>

<style scoped>
    .header{
        padding: 3px;
        background-color: #bbb;
        cursor: pointer;
    }
</style>