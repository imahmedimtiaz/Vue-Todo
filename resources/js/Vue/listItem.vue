<template>
    <div class="item">
       <input type="checkbox"
       @change="updateCheck()"
       v-model="item.completed"
       />
       <span :class="[item.completed ? 'completed' : '' , 'itemText']">
           {{ item.name }}
        </span> 
        <button @click="removeItem()" class="trashCan">
             <font-awesome-icon icon="trash"/>
        </button>
    </div>
</template>

<script>
export default {
    props:['item'],
    methods:{
        updateCheck(){
            axios.put('api/item/' + this.item.id , {
                item: this.item
            })
            .then(response => {
                if(response.status == 200){
                    this.$emit('itemChanged');
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        removeItem(){
            axios.delete('api/item/' + this.item.id)
            .then(response => {
                if(response.status == 200){
                    this.$emit('itemChanged');
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>
.completed{
    text-decoration: line-through;
    color:#999999;
}
.itemText{
    width:100%;
    margin-left: 20px;
}
.item{
    justify-content: center;
    display: flex;
    align-items: center;
}
.trashCan{
    color: red;
    background: #e6e6e6;
    border: none;
    outline: none;
    cursor: pointer;
}
</style>