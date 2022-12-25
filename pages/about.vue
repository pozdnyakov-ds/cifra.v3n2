<template>
    <div class="main">
        <v-card style="margin-bottom: 20px;">
            <v-data-table :headers="headers" :items="items">
            </v-data-table>
        </v-card>
    
        <v-btn color="green" @click="$router.push('/')">
            Index
        </v-btn>

        <v-btn color="error" @click="addItem">
            New item
        </v-btn>
    
        <AddItemDialog v-model="showAddItemDialog"></AddItemDialog>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTableStore } from './store/table.js'

showAddItemDialog: false
const addItem = () => { 
    this.showAddItemDialog = true;
}
const headers = computed(() => { 
    return [
        { text: '#', value: 'id' },
        { text: 'Title', value: 'title' },
        { text: 'Price, USD', value: 'price' },
        { text: 'Date and time', value: 'datetime' }
    ]
})
const items = computed(() => { 
    return this.$store.getters['getItems'];
})
</script>

<style lang="scss" scoped>
.main {
    padding: 20px;

}
</style>