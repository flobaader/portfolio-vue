<template>
    <v-navigation-drawer permanent color="primary" dark app height="100vh" class="d-flex">
        <v-flex class="d-flex flex-column flex-grow-1" id="navcontainer">
            <v-flex align-self-center class="text-center">
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

                <v-divider/>

                <v-list
                        dense
                        nav
                >
                    <v-list-item
                            v-for="item in items"
                            :key="item"
                            link
                            @click="$vuetify.goTo('#' + item, scrollOptions)"
                    >
                        <v-list-item-content>
                            <v-list-item-title class="text-center">{{ item }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-flex>
            <v-flex id="buttons" align-self-center align-self-end>
                <v-spacer/>
                <v-btn text>Imprint</v-btn>
                <v-btn text>Privacy</v-btn>
                <v-spacer/>
            </v-flex>
        </v-flex>
    </v-navigation-drawer>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Navigation extends Vue {
        items = [
            'about',
            'experience',
            'education',
            'skills',
            'awards',
            'contact'
        ];

        scrollOptions = {
            duration: 700,
            easing: 'easeInOutQuint',
        }

    }
</script>

<style scoped lang="scss">

    #navcontainer {
        height: 100%;
    }

</style>
