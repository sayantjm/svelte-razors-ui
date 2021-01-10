import {writable} from 'svelte/store';

const globalStore = writable({
    sidebar:false,
    cart:false,
    alert:false,
    alertText: 'default alert',
    alertDanger:false 
});

const store = {
    subscribe : globalStore.subscribe,
    toggleItem: (item, value, alertText="default", alertDanger=false) => {
        if(item === 'alert') {
            globalStore.update(storeValues => {
                return {...storeValues, [item]:value, alertText, alertDanger};
            });
        } else {
            globalStore.update(storeValues => {
                return {...storeValues, [item]:value};
            });
        }
    }
/*     toggleCart: (value)=>{
        globalStore.update(storeValues => {
            return {...storeValues, cart:value}
        });
    } */
};

export default store;