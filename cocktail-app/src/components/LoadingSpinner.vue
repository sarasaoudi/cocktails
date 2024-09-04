<template>
  <div class="loading-spinner">
    <ChRefresh class="refresh-icon" />
  </div>
</template>

<script>
import { ChRefresh } from '@kalimahapps/vue-icons';

export default {
  components: {
    ChRefresh
  }
};
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.refresh-icon {
  font-size: 50px;
  color: currentColor;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
