<template>
    <div class="list mr-1 mb-1 p-1">
        <div class="listheader d-flex flex-column align-items-center">
            <div class="row w-100">
                <p class="list-title col-9 p-2">{{ title }}</p>
                <p class="list-counter align-self-end col-3 p-0 m-0">
                    タスク: {{ totalCardInList }}個
                </p>
            </div>
            <div class="deletelist" @click="removeList">
                <font-awesome-icon icon="fas fa-times" />
            </div>
            <draggable group="cards" :list="cards" @end="$emit('change')">
                <the-card
                    v-for="(item, index) in cards"
                    :body="item.body"
                    :key="item.id"
                    :cardIndex="index"
                    :listIndex="listIndex"
                    @detail="showDetail"
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
            </draggable>
            <!-- <div>
                <b-button v-b-toggle.collapse-1 class="btn btn-light addbtn"
                >+カードを追加</b-button
                >
                <b-collapse id="collapse-1" class="mt-2">
                    <b-card class="p-0">
                        <card-add :listIndex="listIndex" />
                    </b-card>
                </b-collapse>
            </div> -->
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import CardAdd from "./CardAdd";
import TheCard from "./TheCard";
export default {
    components: {
        CardAdd,
        TheCard,
        draggable,
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
    computed: {
        totalCardInList() {
            return this.cards.length;
        },
    },
    data() {
        return {
            collapseId: `collapseExample${this.listIndex}`,
            collapseTarget: `#collapseExample${this.listIndex}`,
            cardIndex: 0,
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
        showDetail(cardId, listId) {
            console.log("list");
            this.$emit("detailonBoard", cardId, listId);
        },
        hideCollapse() {},
    },
};
</script>
<style scoped>
.addbtn {
    background-color: transparent;
    border: none;
    width: 20rem;
    text-align: start;
}
</style>
