<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="loginUser">loading</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { login } from "./../api/index";
export default defineComponent({
  setup() {
    async function loginUser() {
      const res = await login({
        userName: "111",
        pwd: "222",
      });
      console.log(res);
    }
    return {
      loginUser,
    };
  },
});
</script>
