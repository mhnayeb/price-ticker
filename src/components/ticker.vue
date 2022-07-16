<template>
  <div class="ticker" id="ticker"></div>
</template>

<script setup lang="ts">
import { onMounted, toRef, watch } from "vue";

const props = withDefaults(
  defineProps<{
    price: number | string;
    removeNUmberEffect: number;
    addNumberEffect: number;
  }>(),
  {
    removeNUmberEffect: 300,
    addNumberEffect: 700
  }
);
const price = toRef(props, "price");
watch(price, () => {
  ticker([...price.value.toString().split("")]);
});

onMounted(() => {
  ticker([...price.value.toString().split("")]);
});

function ticker(data: string[]): void {
  const prevSpan: HTMLSpanElement[] = Array.from(
    document.querySelectorAll(`#ticker>span`)
  );
  const tickerNode = document.querySelector("#ticker");
  if (tickerNode === null) return;

  const spanList: HTMLSpanElement[] = [];
  data.forEach((item, i) => {
    const span = document.createElement("span") as HTMLSpanElement;
    span.innerText = String(item);
    span.setAttribute("data-index", i.toString());
    spanList.push(span);
  });

  if (prevSpan.length == 0) {
    tickerNode.replaceChildren(...spanList);
    return;
  }

  data.forEach((item, i) => {
    if (item !== prevSpan[i].innerText) {
      prevSpan[i].classList.add("number__removeEffect");
      setTimeout(() => {
        spanList[i].classList.remove("number__removeEffect");
        spanList[i].classList.add("number__addEffect");
      }, props.removeNUmberEffect);
      setTimeout(() => {
        spanList[i].classList.remove("number__addEffect");
      }, props.addNumberEffect);
    }
  });

  setTimeout(() => {
    tickerNode.replaceChildren(...spanList);
  }, props.removeNUmberEffect);
}
</script>

<style>
#ticker {
  overflow: hidden;
}
.number__addEffect {
  font-weight: bold;
  position: relative;
  animation: addEffect 600ms infinite;
  font-weight: normal;
}
.number__removeEffect {
  font-weight: bold;
  position: relative;
  animation: removeEffect 600ms infinite;
  font-weight: normal;
}

span {
  animation-timing-function: ease;
}

@keyframes addEffect {
  from {
    bottom: 15px;
    opacity: 0;
  }
  to {
    bottom: 0;
  }
}
@keyframes removeEffect {
  from {
    top: 0;
  }
  to {
    top: 15px;
    opacity: 0;
  }
}
</style>
