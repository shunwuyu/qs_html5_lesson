<template>
    <div class="todo-content-title">
      <h2>Your tasks</h2>
      <p class="task-report"><span class="task-remain">{{ taskDone }} done</span> / {{ taskTotal }} task(s)</p>
  </div>
</template>
<script>
import ListStore from "../../data/store.js";
    export default {
        data() {
            return {
                listState: ListStore.state.items
                
                // listState: [
                //     {
                //         text: "买火车票",
                //         status: "done"
                //     },
                //     {
                //         text: "牛客网刷题",
                //         status: "undo"
                //     }
                // ]
            }
        },
        computed: {
            taskTotal() {
                return this.listState.length
            },
            taskDone() {
                let total = 0;
                if(this.listState.length > 0) {
                    for(let i of this.listState) {
                    if(i.status == 'done') total++;
                    }
                }
                return total;
            }
        },
    }
</script>
<style lang="stylus">
base_dark = #4C4646
  .todo-content
    .todo-content-title
      padding 20px
      
      h2
        font-size 1.5em
        font-weight normal
        color base_dark
    
    .task-report
      font-size 0.9em
      color #afafaf
      margin-top 5px

</style>