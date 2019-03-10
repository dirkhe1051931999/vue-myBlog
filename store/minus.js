export const state = () => ({
    minusNum: 10
})

export const mutations = {
    minus(state) {
        state.minusNum--
    }
}