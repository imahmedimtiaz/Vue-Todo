<template>
    <div class="addItem">
        <input type="text" placeholder="Enter your Todo" v-model="item.name"
        v-on:keyup.enter="addItem"/>
        <font-awesome-icon icon="plus-square"
        @click="addItem()"
        :class="[item.name ? 'active' : 'inactive', 'plus']"
        />

    </div>
</template>

<script>
export default {
    data: function(){
        return {
            item:{
                name:""
            }
        }
    },
    methods:{
        addItem(){
            if(this.item.name == '')
            {
                return;
            }
            axios.post('api/item/store', {
                item: this.item
            })
            .then(response => {
                if(response.status == 201){
                    this.item.name = "";
                    this.$emit('reloadlist');
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
.addItem{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
input{
    background: #f7f7f7;
    border: 0px;
    outline: none;
    margin-right: 10px;
    padding: 5px;
    width: 100%;
}
.plus{
    font-size: 20px;
}
.active{
    color: #00ec25;
}
.inactive{
    color: #999999;
}
</style>