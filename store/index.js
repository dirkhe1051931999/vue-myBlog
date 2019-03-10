export const state = () => ({
    num: 0
})

export const mutations = {
    increment(state) {
        state.num++
    },
    decrement(state) {
        state.num--
    }
}