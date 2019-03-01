import vue from 'vue';
import vc from 'voca';
declare module 'vue/types/vue' {
    interface Vue {
        $voca: vc.VocaStatic;
    }
}
declare const VueVoca: {
    install(Vue: import("vue").VueConstructor<vue>): void;
};
export { VueVoca };
export default VueVoca;
