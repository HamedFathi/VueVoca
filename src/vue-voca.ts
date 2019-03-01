import vue from 'vue';
import vc from 'voca';
declare module 'vue/types/vue' {
  export interface Vue {
    $voca: vc.VocaStatic;
  }
}

const VueVoca = {
  install(Vue: typeof vue) {
    Vue.prototype.$voca = vc;
  }
};

if (typeof window !== 'undefined' && (window as any)['Vue']) {
  (window as any)['Vue'].use(VueVoca);
}

export { VueVoca };
export default VueVoca;
