<template>
    <v-container>
        <h2 class="display-2 text-center ma-3">Education</h2>
        <v-card>
            <v-card-title>
                Technical University of Munich
                <v-spacer/>
                <v-chip color="primary">
                    October 2017 - today
                </v-chip>
            </v-card-title>
            <v-card-subtitle>
                Bachelor of Science
            </v-card-subtitle>
            <v-card-text>
                <span>Computer science</span>
                <p>Courses: Algorithms and data structures, Leadership of High-Tech Enterprises, Software
                    Engineering,
                    Basics Databases, Complex Systems</p>
                <p>Current total gradle: 1.9</p>
            </v-card-text>
        </v-card>
        <v-card>
            <v-card-title>
                Lise-Meitner Gymnasium Unterhaching
                <v-spacer/>
                <v-chip color="primary">
                    September 2009 - June 2017
                </v-chip>
            </v-card-title>
            <v-card-subtitle>
                A-Levels
            </v-card-subtitle>
            <v-card-text>
                <p>GPA: 1.8</p>
            </v-card-text>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                <div class="resume-content">
                    <h3 class="mb-0"></h3>
                    <div class="subheading mb-3"></div>

                </div>
                <div class="resume-date text-md-right">

                </div>
            </div>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Education extends Vue {

    }
</script>

<style scoped lang="scss">

</style>
