<script>
export default {
    layout: 'post',
    computed: {
        total() {
            return this.donationData.body.reduce((total, donation) => total + parseFloat(donation.amount), 0)
        }
    },
    async asyncData({ $content, params }) {
        const donationData = await $content('donation').fetch()
        donationData.body = donationData.body.reverse()

        return { donationData }
    }
}
</script>

<template>
    <div class="item row">
        <div class="col-12 col-md-4"></div>

        <div class="col-12 col-md-8">
            <div class="section-content scrollable">

                <article class="article article-light">
                    <div class="article-content">
                        <div class="wrapper">
                            <h1>{{ $t("donation.title") }}</h1>

                            <div class="title-desc mb-3">
                                <span class="display-5 display-title">
                                    {{ $t("donation.balance") }}
                                </span>
                                <span class="display-4 display-title text-primary">{{ total }}€</span>
                            </div>

                            <p>
                                {{ $t("donation.thank") }}
                                <i class="fas fa-heart text-danger" />
                            </p>

                            <table class="table table-responsive table-bordered table-dark">
                                <thead>
                                    <tr>
                                        <th>{{ $t("donation.table.amount") }}</th>
                                        <th>{{ $t("donation.table.from") }}</th>
                                        <th>{{ $t("donation.table.date") }}</th>
                                        <th>{{ $t("donation.table.reason") }}</th>
                                    </tr>
                                </thead>
                                <tr v-for="(donation, index) in donationData.body" :key="index">
                                    <td :class="[donation.amount > 0 ? 'text-success' : 'text-danger']">
                                        <b>{{ donation.amount }}€</b>
                                    </td>
                                    <td>
                                        <template v-if="donation.amount < 0">
                                            Hajime
                                        </template>
                                        <template v-else>
                                            {{ donation.name }}

                                            <span v-if="donation.name.includes('Patreon')" class="badge badge-info">
                                                {{ $t("donation.pledge") }}
                                            </span>
                                        </template>
                                    </td>
                                    <td>{{ donation.date }}</td>
                                    <td>{{ donation.reason }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>