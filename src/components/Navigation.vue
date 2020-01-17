<template>
    <div>
        <v-toolbar dark color="primary" class="d-block d-lg-none">
            <v-app-bar-nav-icon @click="drawer= !drawer"/>
            <v-spacer/>
            <v-toolbar-title>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title text-center">
                            Florian Baader
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-center">
                            Portfolio
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-toolbar-title>
            <v-spacer/>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" color="primary" dark app height="100vh" class="d-flex">
            <v-flex class="d-flex flex-column flex-grow-1" id="navcontainer">
                <v-flex align-self-center class="text-center">
                    <v-list-item class="mb-4 d-none d-lg-block">
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


                    <scrollactive active-class="v-list-item--active" class="mt-5">
                        <v-list nav rounded v-model="item" subheader>
                            <v-list-item
                                    v-for="item in items"
                                    :key="item"
                                    :value="true"
                                    link
                                    :href="'#' + item"
                                    @click="navClick"
                                    class="scrollactive-item">
                                <v-list-item-content>
                                    <v-list-item-title class="text-center subtitle-1 font-weight-medium">{{ item }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </scrollactive>
                </v-flex>

                <v-footer color="transparent">
                    <v-spacer/>
                    <v-btn class="font-weight-light" text target="_blank" href="https://www.selectcode.de/impressum/">
                        Imprint
                    </v-btn>
                    <v-btn class="font-weight-light" text target="_blank"
                           href="https://www.selectcode.de/privacy-policy/">
                        Privacy
                    </v-btn>
                    <v-spacer/>
                </v-footer>
            </v-flex>
        </v-navigation-drawer>
    </div>
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

        navClick() {
            if (!this.$vuetify.breakpoint.lgAndUp) {
                this.drawer = false
            }
        }

        drawer = this.$vuetify.breakpoint.lgAndUp

    }
</script>

<style scoped lang="scss">

    #navcontainer {
        height: 100%;
    }


</style>
