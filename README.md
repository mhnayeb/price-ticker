# Price Ticker

This package helps you to create a price update animation with a simple component!

## How to install

you can install it via npm or any other altarnatives from `npmjs.com`

```bash
> npm install price-ticker
```

## How to use this 

First of all you need to import the component and after that pass the `price` variable into compoent! if you need any `css` customization please edit the `.ticker` class in your global css file!


**Example**

```vue
<template>
  <Ticker :price="price"></Ticker>
</template>

<script>
    import { ref } from "vue";
    import Ticker from "ticker.vue"

    const price = ref(50000); // Either you can pass Number or a formatted String
</script>
```

#### Available Props

```ts
price: number | string;
removeNumberEffect: number;
addNumberEffect: number;
```

#### Animation Customization

