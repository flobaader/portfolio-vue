<template>
    <v-app>
        <Navigation/>
        <v-content>
            <v-container fluid>
                <Header/>
                <Experience/>
                <Education/>
                <Skills/>
                <Awards/>
                <Contact/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navigation from "@/components/Navigation.vue";
    import Header from "@/components/Header.vue";
    import Experience from "@/components/Experience.vue";
    import Education from "@/components/Education.vue";
    import Skills from "@/components/Skills.vue";
    import Awards from "@/components/Awards.vue";
    import Contact from "@/components/Contact.vue";

    @Component({
        components: {
            Contact,
            Awards,
            Skills,
            Education,
            Experience,
            Header,
            Navigation,
        },
    })
    export default class App extends Vue {

    }
</script>

<style lang="scss">
</style>
