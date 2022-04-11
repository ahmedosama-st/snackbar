<template>
  <a href="#" @click.prevent="triggerSnack">Trigger snack</a>
  <Snack />
</template>

<script>
import Snack from '@/components/Snack';
import useSnack from '@/composables/useSnack';
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: { Snack },

  setup() {
    const store = useStore();

    function triggerSnack() {
      useSnack(store, {
        text: 'This is a snack',
      });
    }

    return {
      triggerSnack,
    };
  },
};
</script>

<style src="@/assets/styles/main.css" />
