<template>
    <div class="add-box d-flex align-items-center">
        <form class="addlist m-1 needs-validation" @submit.prevent="addCard">
            <input
                v-model="body"
                type="text"
                class="form-control text-input"
                placeholder="このカードにタイトルを入力"
                required
            />
            <div class="d-flex justify-content-start">
                <button
                    type="submit"
                    class="btn btn-primary add-button mt-1 mr-2"
                >
                    カードを追加
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        listIndex: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            body: "",
        };
    },
    methods: {
        addCard: function () {
            this.$store.dispatch("addcard", { body: this.body, listIndex: this.listIndex });
            this.body = "";
        },
    },
};
</script>
