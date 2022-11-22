<template>
    <!-- ここにHTMLを書きます -->
    <div>
        <card-detail
            v-if="detailView"
            @close="hideDetail"
        />
        <header>
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex">
                    <div class="font-icon grass-back m-1 px-1">
                        <font-awesome-icon icon="fa fa-th" />
                    </div>
                    <div class="font-icon grass-back m-1 px-1">
                        <font-awesome-icon icon="fa-solid fa-house" />
                    </div>
                    <form
                        method="get"
                        action="#"
                        class="search_container grass-back m-1 px-2"
                    >
                        <input type="text" size="10" placeholder="" />
                        <span>
                            <font-awesome-icon
                                icon="fa-solid fa-magnifying-glass"
                            />
                        </span>
                    </form>
                </div>
                <div class="title">
                    <font-awesome-icon icon="fa-brands fa-trello" /> Trellu
                </div>
                <div class="d-flex">
                    <div class="font-icon grass-back m-1 px-1">
                        <font-awesome-icon icon="fa-solid fa-plus" />
                    </div>
                    <div class="font-icon grass-back m-1 px-1">
                        <font-awesome-icon icon="fa-solid fa-circle-info" />
                    </div>
                    <div class="font-icon grass-back m-1 px-1">
                        <font-awesome-icon icon="fa-regular fa-bell" />
                    </div>
                    <div class="mb-1 mx-1">
                        <img
                            src="../assets/img/icon-octopus.png"
                            class="icon-img"
                        />
                    </div>
                </div>
            </div>
        </header>
        <main class="d-flex p-0">
            <div class="side-bar">
                <div
                    class="
                        side-bar-icon
                        d-flex
                        justify-content-center
                        bg-white
                        my-2
                        py-1
                    "
                >
                    <img
                        src="../assets/img/icon-rocket.png"
                        class="team-icon"
                    />
                </div>
            </div>
            <div class="board container m-1">
                <div class="board-head d-flex align-items-center row">
                    <div class="grass-back m-1 px-2">
                        <font-awesome-icon icon="fas fa-th-list" class="pr-2" />
                        <font-awesome-icon icon="fa-solid fa-caret-down" />
                    </div>
                    <div class="d-flex align-items-center m-1">
                        <p class="team-name m-0">チーム</p>
                    </div>
                    <div class="grass-back m-1 px-2">
                        <font-awesome-icon icon="far fa-star" />
                    </div>
                    <div
                        class="contributor d-flex align-items-center mb-1 mx-1"
                    >
                        <img
                            src="../assets/img/icon-octopus.png"
                            class="icon-img"
                        />
                        <img
                            src="../assets/img/icon-squid.png"
                            class="icon-img"
                        />
                    </div>
                    <div
                        class="
                            more
                            grass-back
                            d-flex
                            align-items-center
                            px-2
                            m-1
                        "
                    >
                        <p class="m-0">+ 12</p>
                    </div>
                    <div
                        class="
                            invite-button
                            d-flex
                            align-items-center
                            grass-back
                            m-1
                            px-2
                        "
                    >
                        <p class="mb-0">招待する</p>
                    </div>
                    <p class="mb-0">All: 0 tasks</p>
                </div>
                <div class="board-main row align-items-start p-1">
                    <the-list
                        v-for="(item, index) in lists"
                        :key="item.id"
                        :title="item.title"
                        :cards="item.cards"
                        :listIndex="index"
                    />
                    <div>
                        <button
                            class="btn btn-light addbtn"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            +もう一つリストを追加
                        </button>
                        <div class="collapse" id="collapseExample">
                            <list-add />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
// ここにJSを書きます
import ListAdd from "./ListAdd.vue";
import TheList from "./TheList.vue";
import CardDetail from "./CardDetail.vue";

import "bootstrap/js/dist/collapse";

import { mapState } from "vuex";
export default {
    // 他のコンポーネントからimportして使用できる
    data() {
        return {
            detailView: true,
        };
    },
    components: {
        ListAdd,
        TheList,
        CardDetail,
    },
    computed: {
        ...mapState(["lists"]),
    },
    methods: {
        hideDetail() {
            if (this.detailView) this.detailView = false;
        },
    },
};
</script>

<style scoped>
input {
    background-color: transparent;
    border: none;
}
/* form > button {
    background-color: transparent;
    border: none;
    color: white;
} */
p {
    font-size: 1rem;
}
.title {
    opacity: 0.5;
    font-weight: bold;
}
.icon-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}
.font-icon {
    width: 3rem;
    height: 3rem;
}
.side-bar {
    width: 3.5rem;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.218);
}
.side-bar-icon {
    width: 3rem;
    border-radius: 5px;
    margin: auto;
}
.board-head {
    color: white;
    /* height: 3rem; */
    font-size: 2rem;
    text-align: center;
}
.team-icon {
    width: 2.5rem;
    height: 2.5rem;
}
.team-name {
    width: 10rem;
    font-size: 1.5rem;
}
.invite-button {
    height: 3rem;
}
.more {
    border-radius: 30px;
    height: 2rem;
}
.addbtn {
    width: 20rem;
    text-align: start;
}
.addbtn:focus {
    outline: none;
}
</style>
    