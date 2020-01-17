<template>
    <v-app>
        <Navigation/>
        <Toolbar/>
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
    import Header from "@/components/parts/About.vue";
    import Experience from "@/components/parts/Experience.vue";
    import Education from "@/components/parts/Education.vue";
    import Skills from "@/components/parts/Skills.vue";
    import Awards from "@/components/parts/Awards.vue";
    import Contact from "@/components/parts/Contact.vue";
    import Toolbar from "@/components/Toolbar.vue";

    @Component({
        components: {
            Toolbar,
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
