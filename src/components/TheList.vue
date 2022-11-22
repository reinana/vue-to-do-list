<template>
    <div class="list mr-1 mb-1 p-1">
        <div class="listheader d-flex flex-column align-items-center">
            <p class="list-title m-1">{{ title }}</p>
            <div class="deletelist" @click="removeList">
                <font-awesome-icon icon="fas fa-times" />
            </div>
            <the-card
                v-for="(item, index) in cards"
                :body="item.body"
                :key="item.id"
                :cardIndex="index"
                :listIndex="listIndex"
            />
            <div>
                <button
                    class="btn btn-light addbtn"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="collapseTarget"
                    aria-expanded="false"
                    :aria-controls="collapseId"
                >
                    +カードを追加
                </button>
                <div class="collapse" :id="collapseId">
                    <card-add :listIndex="listIndex" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardAdd from "./CardAdd";
import TheCard from "./TheCard";
export default {
    components: {
        CardAdd,
        TheCard,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        cards: {
            type: Array,
            required: true,
        },
        listIndex: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            collapseId: `collapseExample${this.listIndex}`,
            collapseTarget: `#collapseExample${this.listIndex}`,
        };
    },
    methods: {
        removeList: function () {
            if (confirm("削除しますか？")) {
                this.$store.dispatch("removelist", {
                    listIndex: this.listIndex,
                });
            }
        },
    },
};
</script>
<style scoped>
.addbtn {
    width: 20rem;
    text-align: start;
}
.addbtn:focus {
    outline: none;
}
</style>
