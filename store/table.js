import moment from "moment";

export const useTableStore = defineStore("table", {
  state: () => ({
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
    ],
  }),

  actions: {
    setItem(item) {
      this.items.push({
        id: item.id,
        title: item.title,
        price: item.price,
        datetime: item.datetime,
      });
      localStorage.removeUniversal("items");
      localStorage.setUniversal("items", JSON.stringify(state.items));
    },
  },

  getters: {
    getItemsCount() {
      return this.items.length;
    },
    getItems() {
      return this.items;
    },
  },
});
