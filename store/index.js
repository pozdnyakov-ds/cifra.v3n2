import moment from "moment";

export const state = () => ({
  items: [],
  template: [
    {
      id: 0,
      title: "Headphones",
      price: 10.0,
      datetime: "11.01.2021 10:00:00",
    },
    {
      id: 1,
      title: "Mouse",
      price: 15.2,
      datetime: "12.01.2021 15:01:00",
    },
    {
      id: 2,
      title: "Keyboard",
      price: 9.99,
      datetime: "12.01.2021 15:01:10",
    },
  ],
});

export const mutations = {
  setItem(state, item) {
    state.items.push({
      id: item.id,
      title: item.title,
      price: item.price,
      datetime: item.datetime,
    });
    this.$storage.removeUniversal("items");
    this.$storage.setUniversal("items", JSON.stringify(state.items));
  },
};

export const actions = {
  async nuxtServerInit({ state, dispatch }) {
    var data =
      this.$storage.getUniversal("items") !== undefined
        ? this.$storage.getUniversal("items")
        : [];

    if (data.length == 0) {
      this.$storage.setUniversal("items", JSON.stringify(state.template));
      data = state.template;
    }

    state.items = data;
  },
};

export const getters = {
  getItemsCount: (state) => {
    return state.items.length;
  },
  getItems: (state) => {
    return state.items;
  },
};
