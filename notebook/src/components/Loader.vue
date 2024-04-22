<template>
  <div class="background"></div>
  <div class="loader"></div>
</template>

<style scoped>
/* HTML: <div class="loader"></div> */
.background {
  background-color: var(--vt-c-white-soft);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  opacity: 0.4;
}
.loader {
  width: 28px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--vt-c-green);
  transform-origin: top;
  display: grid;
  animation: l3-0 1s infinite linear;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader::before,
.loader::after {
  content: '';
  grid-area: 1/1;
  background: var(--vt-c-mint);
  border-radius: 50%;
  transform-origin: top;
  animation: inherit;
  animation-name: l3-1;
}
.loader::after {
  background: var(--vt-c-blue);
  --s: 180deg;
}
@keyframes l3-0 {
  0%,
  20% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes l3-1 {
  50% {
    transform: rotate(var(--s, 90deg));
  }
  100% {
    transform: rotate(0);
  }
}
</style>
