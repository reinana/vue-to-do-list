import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// localStrageに保存してあるリストを取得
const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists): [
        {
            title: 'Backlog',
            cards: [
                {body: 'English'},
                {body: 'Mathematics'},
            ]
        },
        {
            title: 'Todo',
            cards: [
                {body: 'Sicence'}
            ]
        },
        {
            title: 'Doing',
            cards: []
        }
    ],
  },
  getters: {
    totalCardCount(state) {
        let count = 0;
        state.lists.map(content => count += content.cards.length)
        return count
    },
    getCard: state => num => state.cards[num] // メソッドアクセススタイル
  },
  mutations: {
    addlist(state, payload) {
        state.lists.push({ title: payload.title, cards:[] })
    },
    removelist(state, payload) {
        state.lists.splice(payload.listIndex, 1)
    },
    addcard(state, payload) {
        state.lists[payload.listIndex].cards.push({ body: payload.body})
    },
    removecard(state, payload) {
        state.lists[payload.listIndex]["cards"].splice(payload.cardIndex, 1)
    },
    updateList(state, payload) {
        state.lists = payload.lists
    }
  },
  actions: {
    addlist(context, payload) {
        context.commit('addlist', payload)
    },
    removelist(context, payload) {
        context.commit('removelist' , payload)
    },
    addcard(context, payload) {
        context.commit('addcard', payload)
    },
    removecard(context, payload) {
        context.commit('removecard', payload)
    },
    updateList(context, payload) {
        context.commit('updateList', payload)
    }

  },
  modules: {
  }
})

//storeのインスタンスメソッドsubscribeをmutationの後に呼ぶ
store.subscribe((mutation, state) => {
    localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store