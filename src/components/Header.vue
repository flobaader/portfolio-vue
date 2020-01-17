<template>
    <v-container>
        <v-card>
            <v-card-title class="display-1">
                Welcome 👋🏻
            </v-card-title>
            <v-card-text>
                <p>
                    Hi 👋, I am a passionate programmer and have a lot of practical experience in software engineering,
                    as I
                    founded a company during my school days to implement my own software projects.
                </p>
                <p>
                    Personally, I am a big fan of good software architecture, CI/CD and good testing.
                    Using user-centric design and agile development is the best way for me to develop effective software
                    that solves real problems.
                </p>
            </v-card-text>
            <v-card-actions class="mr-3">
                <v-spacer/>
                <v-btn v-for="social in socialitems" :key="social.url" :href="social.url" target="_blank" icon dark
                       class="socialicon">
                    <v-hover v-slot:default="{ hover }">
                        <v-icon :color="hover ? 'primary' : 'white'" small class="ma-1">{{social.icon}}</v-icon>
                    </v-hover>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Header extends Vue {

        socialitems = [
            {
                url: 'https://www.linkedin.com/in/florianbaader',
                icon: 'fab fa-linkedin-in'
            },
            {
                url: 'https://github.com/flobaader',
                icon: 'fab fa-github'
            },
            {
                url: 'https://twitter.com/flobaader',
                icon: 'fab fa-twitter'
            },
            {
                url: 'https://medium.com/@florian.baader',
                icon: 'fab fa-medium'
            }
        ]


    }
</script>

<style scoped lang="scss">

    .socialicon {
        background-color: #495057;

        &:hover {

        }

    }

</style>
