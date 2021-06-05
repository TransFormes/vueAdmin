<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="loginUser">loading</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { getList } from "./../api/index";
import { GetListPage, GetList } from "./../modal/getListType";
export default defineComponent({
  setup() {
    async function loginUser() {
      const res: GetListPage = await getList({
        page: 1,
        pageSize: 10,
      });
      if (res !== null) {
        const list: Array<GetList> = res.pagedata.records;
        console.log(list[0].id);
      }
    }
    return {
      loginUser,
    };
  },
});
</script>
