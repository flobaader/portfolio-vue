<template>
    <v-navigation-drawer permanent color="primary" dark app>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-avatar size="200px">
                    <v-img src="profile.jpg" contain/>
                </v-list-item-avatar>
                <v-list-item-title class="title">
                    Florian Baader
                </v-list-item-title>
                <v-list-item-subtitle>
                    Portfolio
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
                dense
                nav
        >
            <v-list-item
                    v-for="item in items"
                    :key="item"
                    link
            >
                <v-list-item-content>
                    <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Navigation extends Vue {
        items = [
            'ABOUT',
            'EXPERIENCE',
            'EDUCATION',
            'SKILLS',
            'AWARDS',
            'CONTACT ME'
        ]
    }
</script>

<style scoped lang="scss">

</style>
