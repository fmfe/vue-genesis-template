import App from './app.vue';

export interface Context {
    el: Element;
    name: string;
    id: string;

    state: { [x: string]: any };
    url: string;
}

export default (context: Context) => {
    return new App({
        el: context.el,
        propsData: {
            name: context.name,
            title: context.state.title,
            url: context.url
        }
    });
};
