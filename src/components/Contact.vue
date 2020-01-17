<template>
    <v-card>
        <div class="w-100">
            <h2 class="mb-5">Contact me</h2>
            <form name="contact" data-netlify-recaptcha="true" method="POST" data-netlify="true">
                <div class="form-group">
                    <label for="name">Your Name:</label>
                    <input type="text" class="form-control" id="name" name="name"/>
                </div>

                <div class="form-group">
                    <label for="email">Your Email:</label>
                    <input type="email" class="form-control" id="email" name="email"/>
                </div>

                <div class="form-group">
                    <label for="message">Your Message:</label>
                    <textarea class="form-control" id="message" rows="3" name="message"></textarea>
                </div>
                <div data-netlify-recaptcha="true"></div>
                <p>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </p>
            </form>
        </div>
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
