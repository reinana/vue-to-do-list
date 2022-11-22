<template>
    <div class="card mb-1 justify-content-center" @click="showDetail">
        <div class="cardheader d-flex px-1">
            <p class="body m-1">{{ body }}</p>
            <!-- <div class="" >
                <font-awesome-icon icon="fas fa-times" />
            </div> -->

        </div>

    </div>
</template>

<script>

export default {
    props: {
        body: {
            type: String,
            required: true
        },
        listIndex: {
            type: Number,
            required: true
        },
        cardIndex: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        // removeCard: function() {
        //     if(confirm('削除しますか？')) {
        //         this.$store.dispatch('removecard', { cardIndex: this.cardIndex, listIndex: this.listIndex })
        //     }
        // },
        showDetail: function() {
            console.log("thecardopen")
            this.$emit('detail');
        }
    }
}
</script>
