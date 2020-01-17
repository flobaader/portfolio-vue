<template>
    <v-container id="skills">
        <h2 class="display-2 text-center ma-3">Skills</h2>
        <v-card>
            <v-card-title>
                Programming Languages &amp; Tools
            </v-card-title>

            <v-row class="mx-2" dense>
                <v-flex v-for="skill in skills" :key="skill" class="d-flex flex-column">
                    <v-hover v-slot:default="{ hover }" open-delay="25" close-delay="15">
                        <div class="d-flex flex-column">
                            <v-icon :size="hover? 70 : 30" :color="hover? 'primary' : 'black'">
                                {{skill.icon}}
                            </v-icon>
                            <span v-show="hover" class="text-center text--primary font-weight-bold">
                            {{skill.title}}
                        </span>
                        </div>
                    </v-hover>
                </v-flex>
            </v-row>

            <v-card-title>
                Workflow
            </v-card-title>

            <v-list dense>
                <v-list-item v-for="flow in workflow" :key="flow" dense>
                    <v-list-item-avatar size="20">
                        <v-icon>
                            mdi-check
                        </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title>
                        {{flow}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>


            <v-card-title>Languages</v-card-title>
            <v-list dense>
                <v-list-item v-for="lang in languages" :key="lang.title" dense>
                    <v-list-item-avatar size="20">
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
            {icon: 'devicon-java-plain-wordmark', title: 'Java'},
            {icon: 'devicon-csharp-plain', title: 'C#'},
            {icon: 'devicon-nodejs-plain', title: 'Node.JS'},
            {icon: 'devicon-android-plain', title: 'Android Native'},
            {icon: 'devicon-docker-plain', title: 'Docker'},
            {icon: 'devicon-vuejs-plain-wordmark', title: 'Vue.js'},
            {icon: 'devicon-postgresql-plain', title: 'Postgres'},
            {icon: 'devicon-bootstrap-plain', title: 'Bootstrap'},
            {icon: 'devicon-gitlab-plain-wordmark', title: 'GitLab'},
            {icon: 'devicon-linux-plain', title: 'Linux'}
        ];

        workflow = [
            'User centered design of application',
            'Sophisticated software architecture',
            'Cross Functional Teams',
            'Continous Tests & Delivery & Integration',
            'Agile Development & Scrum'
        ];

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
