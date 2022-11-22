<template>
    <div class="popup-back d-flex justify-content-center align-items-center">
        <div class="popup p-2">
            <div class="detail-header d-flex justify-content-between p-2">
                <h2 class="detail-title">タイトル {{ body }}</h2>
                <div class="close-btn" @click="closeDetail">
                    <font-awesome-icon icon="fas fa-times" />
                </div>
            </div>
            <div class="detail-main">
                <div>
                    <p class="p-2">詳細の説明テキスト</p>
                </div>
                <div class="detail-bottom d-flex row">
                    <div class="comment col-8">
                        <div class="comment-card">
                            <form class="m-1">
                                <input
                                    v-model="comment"
                                    type="text"
                                    class="form-control text-input"
                                    placeholder="コメントを入力してください"
                                    required
                                />
                                <div class="d-flex justify-content-start">
                                    <button
                                        type="submit"
                                        class="
                                            btn btn-primary
                                            add-button
                                            mt-1
                                            mr-2
                                        "
                                    >
                                        コメントを追加
                                    </button>
                                    <!-- <div class="close-btn d-flex align-items-center" @click="close">
                    <font-awesome-icon icon="fas fa-times" />
                </div> -->
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="detail-side col-4">
                        <div class="menu mb-2 p-1">参加</div>
                        <div class="menu mb-2 p-1">メンバー</div>
                        <div class="menu mb-2 p-1">ラベル</div>
                        <div class="menu mb-2 p-1">チェックリスト</div>
                        <div class="menu mb-2 p-1">日付</div>
                        <div class="menu mb-2 p-1">アーカイブ</div>
                        <div class="menu mb-2 p-1" @click="removeCard">削除</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        body: {
            type: String,
            required: true,
        },
        // listIndex: {
        //     type: Number,
        //     required: true,
        // },
        cardIndex: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            comment: '',
        }
    },
    methods: {
        closeDetail() {
            this.$emit('close');
        },
        removeCard: function() {
            
            if(confirm('削除しますか？')) {
                this.$store.dispatch('removecard', { cardIndex: this.cardIndex, listIndex: this.listIndex })
            }
        },
    }
};
</script>

<style scoped>
.popup-back {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
}
.popup {
    background: #fff;
    width: 50%;
    border-radius: 5px;
}
.menu {
    background-color: var(--list-color);
    text-align: center;
    font-size: 1rem;
    line-height: 2rem;
    transition: all .2s .1s;

}
.menu:hover {
    background-color:rgba(0, 0, 0, 0.4)
}
</style>
