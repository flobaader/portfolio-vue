<template>
    <v-card id="contact">
        <v-card-title> Contact me</v-card-title>
        <v-form name="contact" data-netlify-recaptcha="true" method="POST" data-netlify="true"
                data-netlify-honeypot="bot-field" class="pa-2">
            <v-text-field id="name" label="Your Name:" rounded full-width filled/>
            <v-text-field id="email" label="Your email:" rounded full-width filled type="email"/>
            <v-textarea id="message" label="Your message: " rounded full-width filled/>
            <div data-netlify-recaptcha="true"></div>
        </v-form>
        <v-card-actions>
            <v-spacer/>
            <v-btn type="submit" color="primary" rounded>
                Submit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Contact extends Vue {

    }
</script>

<style scoped lang="scss">

</style>
