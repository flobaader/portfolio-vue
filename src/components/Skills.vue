<template>
    <v-container id="skills">
        <h2 class="display-2 text-center ma-3">Skills</h2>
        <v-card>
            <v-card-title>
                Programming Languages &amp; Tools
            </v-card-title>

            <v-row class="mx-2">
                <v-col v-for="skill in skills" :key="skill">
                    <v-icon>
                        {{skill}}
                    </v-icon>
                </v-col>
            </v-row>

            <v-card-title>
                Workflow
            </v-card-title>

            <v-list dense>
                <v-list-item v-for="flow in workflow" :key="flow">
                    <v-list-item-avatar>
                        <v-icon size="20">
                            mdi-check
                        </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title>
                        {{flow}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>


            <v-card-title>Languages</v-card-title>
            <v-list two-line>
                <v-list-item v-for="lang in languages" :key="lang.title" two-line>
                    <v-list-item-avatar>
                        {{lang.icon}}
                    </v-list-item-avatar>
                    <v-list-item-title>
                        {{lang.title}}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{lang.level}}
                    </v-list-item-subtitle>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Skills extends Vue {

        skills = [
            'devicon-java-plain-wordmark',
            'devicon-csharp-plain',
            'devicon-dot-net-plain-wordmark',
            'devicon-go-plain',
            'devicon-nodejs-plain',
            'devicon-android-plain',
            'devicon-docker-plain',
            'devicon-vuejs-plain-wordmark',
            'devicon-mongodb-plain-wordmark',
            'devicon-postgresql-plain',
            'devicon-bootstrap-plain',
            'devicon-gitlab-plain-wordmark',
            'devicon-git-plain',
            'devicon-linux-plain'
        ]

        workflow = [
            'User centered design of application',
            'Sophisticated software architecture',
            'Cross Functional Teams',
            'Continous Tests &amp; Delivery &amp; Integration',
            'Agile Development &amp; Scrum'
        ]

        languages = [
            {
                title: 'German',
                icon: '🇩🇪',
                level: 'Native'
            },
            {
                title: 'English',
                icon: '🇺🇸',
                level: 'C1 DAAD Certificate'
            },
            {
                title: 'French',
                icon: '🇫🇷',
                level: 'B2 Level:  [A-Levels]'
            }
        ]

    }
</script>

<style scoped lang="scss">

</style>
