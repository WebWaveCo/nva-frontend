import Vue from "vue";
import Vuex from "vuex";
import api from "@/api/user";

Vue.use(Vuex);

const initialState = {
  user: {},
  userLoaded: false,
  loading: false,
};

export default new Vuex.Store({
  state: { ...initialState },
  getters: {
    getUser: (state) => state.user,
    isUserLoaded: (state) => state.userLoaded,
    isLoading: (state) => state.loading,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.userLoaded = true;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    resetState(state) {
      localStorage.removeItem("authToken");
      Object.assign(state, initialState);
    },
  },
  actions: {
    async authenticateAndLoadUser({ commit }) {
      commit("setLoading", true);
      try {
        const response = await api.fetchUser();
        if (response.code == 200) {
          commit("setUser", response.data.user);
        } else {
          throw new Error("Unable to load user");
        }
      } catch (error) {
        console.error("Error loading user: ", error);
        commit("resetState");
        throw error;
      } finally {
        commit("setLoading", false);
      }
    },
  },
  modules: {
    // Here you can add other modules if necessary
  },
});
