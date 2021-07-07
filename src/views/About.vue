<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="loginUser">loading</button>
    <button @click="file">file</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { getList } from "./../api/index";
import { GetListPage, GetList } from "./../modal/getListType";
export default defineComponent({
  setup() {
    async function loginUser() {
      const res: GetListPage | null = await getList({
        page: 1,
        pageSize: 10,
      });
      if (res !== null) {
        const list: Array<GetList> = res.pagedata.records;
        console.log(list[0].id);
      }
    }
    function file(e: InputEvent): void {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const file = e.target!;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const files = file.files as FileList;
      console.log(files.item(0));
    }
    return {
      loginUser,
      file,
    };
  },
});
</script>
