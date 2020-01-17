<template>
    <v-container>
        <h2 class="display-2 text-center ma-3">Contact</h2>
        <v-card id="contact" class="pa-2">
            <v-form name="contact" data-netlify-recaptcha="true" method="POST" data-netlify="true"
                    data-netlify-honeypot="bot-field" class="pa-2">
                <v-text-field id="name" label="Name" rounded full-width filled/>
                <v-text-field id="email" label="Email" rounded full-width filled type="email"/>
                <v-textarea id="message" label="Message" rounded full-width filled auto-grow/>
                <div data-netlify-recaptcha="true"></div>
                <v-btn type="submit" color="primary" rounded large>
                    Submit
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Contact extends Vue {

    }
</script>

<style scoped lang="scss">

</style>
