import App from './app.vue';

const data = window[process.env.GENESIS_NAME!];

export default new App({
    propsData: {
        name: data.name,
        title: data.state.title,
        url: data.url
    }
});
