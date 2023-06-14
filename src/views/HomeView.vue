<template>
  <div>
    <botao/>
    <RouterLink to="/condutor">condutor</RouterLink>
  </div>
</template>

<script lang="ts">
  import botao from '@/components/botao.vue';
  import { defineComponent } from 'vue';
  

  export default defineComponent({
    name: 'Home',
    components: {
      botao
    }
  });
</script>