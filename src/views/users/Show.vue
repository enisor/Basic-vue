<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useUsersStore } from "@/stores/users";
import { useRoute } from "vue-router";
const route = useRoute();

const usersStore = useUsersStore();
const user: any = ref({
  id: "",
  name: "",
  phone: "",
});

watch(
  () => route.params.id,
  (param_id) => {
    user.value = usersStore.users.find((user: any) => user.id == param_id);
  }
);
onMounted(() => {
  console.log("userstore: ", usersStore.users);
  user.value = usersStore.users.find((user: any) => user.id == route.params.id);
  console.log("user: ", user.value);
});

function onSubmit() {
  usersStore.update(user.id, user);
}
</script>
<template>
  <div class="overflow-hidden bg-gray-50 shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Edit User Information
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa
        arcu, convallis vitae lacus vel, tincidunt consectetur velit. Morbi non
        mi non leo suscipit fermentum. Nulla facilisi..
      </p>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="col-span-full">
          <label class="block text-sm font-medium leading-6 text-gray-900"
            >Name</label
          >
          <div class="mt-2">
            <input
              type="text"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              v-model="user.name"
            />
          </div>
        </div>
        <div class="col-span-full">
          <label class="block text-sm font-medium leading-6 text-gray-900"
            >Phone</label
          >
          <div class="mt-2">
            <input
              type="text"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              v-model="user.phone"
            />
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <RouterLink :to="`/users`"
          ><button
            class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Go to Add
          </button>
        </RouterLink>
        <button
          @click="onSubmit"
          class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
