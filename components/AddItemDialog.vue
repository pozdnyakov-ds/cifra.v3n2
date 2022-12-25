<template>
    <v-app>
        <v-dialog v-model="show" persistent max-width="350" @input="refreshIframe">
            <v-card>
                <v-card-title class="text-h5">
                    New item
                </v-card-title>
                <v-form v-model="valid">
                    <v-container>
                                        
                        <div class="input-group mb-3">
                            <v-text-field v-model="item.title" label="Title" type="text" counter=64 outlined
                                :rules="[required('Title'), minLength('Title', 3), maxLength('Title', 64)]" />
                        </div>

                        <div class="input-group mb-3">
                            <v-text-field v-model="item.price" label="Price" type="number" outlined
                                :rules="[required('Price'), minPrice('Price', 1)]" />
                        </div>

                        <div class="input-group mb-3">
                            <v-text-field v-model="item.datetime" label="Date and time" type="text" outlined
                                :rules="[required('Date and time'), validDateTime('Date and time')]" />
                        </div>
                                                        
                    </v-container>
                
                </v-form>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="grey" style="color: white;" @click.stop="show = false">
                        Close
                    </v-btn>
                    <v-btn color="error" @click.stop="addItem(item)" :disabled="!valid">
                        Add
                    </v-btn>
                    
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        value: Boolean
    },
    data() { 
        return {
            valid: false,
            item: {
                id: 0,
                title: '',
                price: 0.00,
                datetime: '24.12.2022 15:00:00'
            },
            required(propertyType) {
                return v => v && v.length > 0 || `Нужно указать ${propertyType}`
            },
            minLength(propertyType, minLength) {
                return v => v && v.length >= minLength || `${propertyType} должно быть минимум ${minLength} символов!`
            },
            maxLength(propertyType, maxLength) {
                return v => v && v.length <= maxLength || `${propertyType} должно быть меньше ${maxLength} символов!`
            },
            minPrice(propertyType, minValue) { 
                return v => v && v >= minValue || `${propertyType} должно быть больше ${minValue}!`
            },
            validDateTime(propertyType) { 
                var dateFormat = "DD.MM.YYYY HH:mm:ss";
                return v => v && moment(v, dateFormat, true).isValid() || `Укажите ${propertyType} в указанном формате!`
            }
        }
    },
    computed: {
        show: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    },
    methods: {
        async addItem(item) {
            this.show = false;
            item.id = this.$store.getters['getItemsCount'];
            await this.$store.commit('setItem', item);
        },
        refreshIframe() {
            const tempUrl = this.iframeUrl;
            iframeUrl = "";
            iframeUrl = tempUrl;
        }
    }
}
</script>

<style scoped>

</style>