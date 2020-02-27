import { GenesisTypes } from '@fmfe/genesis-core';
import App from './app.vue';

export default (ctx: GenesisTypes.RenderContext) => {
    ctx.data.state.title = 'vue-genesis-templace';
    return new App({
        propsData: {
            name: ctx.data.name,
            title: ctx.data.state.title,
            url: ctx.data.url
        }
    });
};
