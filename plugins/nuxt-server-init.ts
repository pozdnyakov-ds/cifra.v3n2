export default defineNuxtPlugin(async () => {
    const store = useMainStore();

    if (!process.server) {
        console.log("Процесс на клиенте...")
        store.app = "Client patch app name"
        return;
    }

  });