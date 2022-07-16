import { App } from "vue";
import { Ticker } from "./components";

export default{
    install: (app: App , option: any) => {
        app.component('Ticker' , Ticker)
    }
};

export {Ticker};