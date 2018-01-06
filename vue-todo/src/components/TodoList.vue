<template>
    <ul class="todo-list">
        <todo-item v-for="(item, key) in collection" v-bind:key="key" :model="item"></todo-item>
    </ul>
</template>
<script>
    import TodoItem from "./TodoItem.vue";
    export default {
        // 父子之间传数据： props
        // collection 是从父级 App.vue 传进来的，名字也是父组件随便取的
        props: ["collection"],
        components: {
            "todo-item": TodoItem
        }
    }
</script>
<style lang="stylus">
.todo-list
    list-style none
</style>