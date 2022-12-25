<template>
    <div class="main">
        <v-card style="margin-bottom: 20px;">
            <v-data-table :headers="headers" :items="items">
            </v-data-table>
        </v-card>

        <v-btn color="error" @click="addItem">
            New item
        </v-btn>

        <v-btn color="green" @click="$router.push('/about')">
            About
        </v-btn>

        <AddItemDialog v-model="showAddItemDialog"></AddItemDialog>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            showAddItemDialog: false
        }
    },
    methods: {
        addItem() { 
            this.showAddItemDialog = true;
        }
    },
    computed: {
        headers() {
            return [
                { text: '#', value: 'id' },
                { text: 'Title', value: 'title' },
                { text: 'Price, USD', value: 'price' },
                { text: 'Date and time', value: 'datetime' }
            ]
            },
            items() { 
                return this.$store.getters['getItems'];
            }
    }
    }
</script>

<style scoped>
.main {
    padding: 20px;
    
}
</style>