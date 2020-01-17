<template>
    <v-container>
        <h2 class="display-2 text-center ma-3">Experience</h2>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="headline">CEO & Lead Developer</v-list-item-title>
                            <v-list-item-subtitle><a href="https://www.selectcode.de">
                                SelectCode UG</a></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card-text>
                        <p>
                            I founded this startup two years ago to implement own software projects. We're currently
                            developing our
                            own software and doing client projects.
                        <p><b>C#/WPF</b>: I developed the system tool <a href="https://www.econap.de">Econap</a>, which
                            intelligently activates the energy saving mode. In addition to many prizes from various
                            competitions, we
                            successfully sell the tool to private individuals and companies. </p>
                        <p><b>Android</b>: I built, designed and published a <a
                                href="https://play.google.com/store/apps/details?id=de.selectcode.kinderserienquiz">quiz
                            app</a> in
                            Kotlin from scratch. The app has a rating of 4.7 stars and more than 8000 downloads. </p>
                        <p><b>Xamarin</b>: For a gym I developed an app that allows members to view, book and manage
                            courses.</p>
                        <p><b>Cloud</b>: I migrated our entire company infrastructure, e.g. various backends for Econap,
                            to the
                            cloud. I have also built many CI/CD pipelines that allow us to be agile.</p>
                    </v-card-text>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="headline">Working Student</v-list-item-title>
                            <v-list-item-subtitle>QAware GmbH</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card-text>
                        <p>QAware has a so called radiator, which is a software that displays the build state and
                            metrics like
                            lines
                            of code of their projects on big screens.
                            This application had lots of performance problems and stability issues. I've managed to
                            solve them
                            by
                            rebuilding this application with a <b>Spring Boot microservice</b> architecture. The
                            application was
                            deployed to <b>Kubernetes in the Google Cloud</b>.</p>
                    </v-card-text>
                </v-expansion-panel-content>
            </v-expansion-panel>


            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="headline">Team Leader and Lead Developer</v-list-item-title>
                            <v-list-item-subtitle>Project group Stand-Bye!</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content>

                    <v-card-text>
                        <p>I took part in the Youth Research contest with a software that improves the Windows energy
                            saving
                            mode.
                            We won the regional competition and received several special prizes in the national
                            competition. The
                            software was written in C++.</p>

                    </v-card-text>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="headline">Working Student</v-list-item-title>
                            <v-list-item-subtitle>Infineon</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card-text>
                        <p>Developed macros for office planning and helped to modernize management tools.</p>
                    </v-card-text>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Experience extends Vue {

    }
</script>

<style scoped lang="scss">

</style>
