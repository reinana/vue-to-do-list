<template>
    <div class="add-box d-flex align-items-center">
        <form class="addlist m-1 needs-validation" @submit.prevent="addList">
            <input
                v-model="title"
                type="text"
                class="form-control text-input"
                placeholder="リストのタイトルを入力"
                required
            />
            <div class="d-flex justify-content-start">
                <button type="submit" class="btn btn-primary add-button mt-1 mr-2">
                    リストを追加
                </button>
                <!-- <div class="close-btn d-flex align-items-center" @click="close">
                    <font-awesome-icon icon="fas fa-times" />
                </div> -->
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "",
        };
    },
    methods: {
        addList: function () {
            this.$store.dispatch("addlist", { title: this.title });
            this.title = "";
        },
    },
};
</script>