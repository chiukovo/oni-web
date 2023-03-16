<template>
  <div id="root">
    <slot />
  </div>
</template>

<style>
.style1-enter-active,
.style1-leave-active {
  transition: opacity 0.3s ease;
}

.style1-enter-from,
.style1-leave-to {
  opacity: 0;
}
</style>