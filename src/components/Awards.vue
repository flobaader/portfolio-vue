<template>
    <v-container id="awards">
        <h2 class="display-2 text-center ma-3">Awards &amp; Certifications</h2>
        <v-card>
            <v-card-title>Competitions</v-card-title>
            <v-list dense>
                <v-list-item v-for="award in awards" :key="award.title" dense>
                    <v-list-item-avatar size="20">
                        <v-icon color="#ffc107">
                            mdi-trophy
                        </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title>
                        {{award.title}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
        <v-card>
            <v-card-title>
                Scholarships
            </v-card-title>
            <v-list>
                <v-list-item v-for="scholar in scholarships" :key="scholar.title">
                    <v-list-item-avatar size="20">
                        <v-icon>
                            mdi-seal-variant
                        </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title>
                        {{scholar.title}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Awards extends Vue {
        awards = [
            {
                title: 'Federal Environmental Competition Main Award',
                url: 'https://www.km.bayern.de/pressemitteilung/10902/nr-354-vom-18-09-2017.html'
            }, {
                title: 'Deutschland Land der Ideen: Ausgezeichneter Ort 2017',
                url: 'https://land-der-ideen.de/en/project/stand-bye-software-71'
            },
            {
                title: 'Perpetuum 2017: energy efficiency young talent award',
                url: 'https://www.deneff.org/inhalte/aktuelles-detailansicht/archive/2017/08/march/article/perpetuum-2017-energieeffizienzpreis-geht-an-aurelia-turbines-gmbh-und-joulia-sa.html'
            },
            {
                title: '2nd place at infineon chips@school competition',
                url: 'https://www.infineon.com/cms/de/careers/students-and-pupils/chips-at-school/#the-winners-2012-2017'
            },
            {
                title: 'Member of the Google Cloud Startup Program'
            },
            {
                title: 'Jugend Forscht regional winner and 3rd place at the Bavarian state competition',
                url: 'https://www.jugend-forscht-bayern.de/archiv/2016/teilnehmer/technik/florian-baader/'
            },
            {
                title: '3rd place Federal Computer Science Competition'
            }
        ]

        scholarships = [
            {
                title: 'QAware GmbH School Scholar',
            },
            {
                title: 'Leaders in Entrepreneurship',
            }
        ]
    }

</script>

<style scoped lang="scss">

</style>
