<template>
    <div class="ground">

        <Header />

        <Memo />

        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Memo from '@/components/Memo'

export default {
    name: 'Ground',
    components: {
        Header,
        Footer,
        Memo,
    }


};
</script>

<style lang="scss" scoped></style>