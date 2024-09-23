<script setup lang="ts">
import { ref } from "vue";
import { useUsersStore } from "@/stores/users";
const users = useUsersStore();
const message = ref("test");
</script>
<template>
  <!-- <div>
    <h1>This is user list</h1>
    <p>Message is: {{ users }}</p>
    <li v-for="user in users.users">
      <span>{{ user.name }}</span>
      <span>
        <RouterLink :to="`/users/${user.id}`" class="btn btn-green">
          <button>Edit</button>
        </RouterLink></span
      >
    </li>

    <div>
      <RouterLink :to="`/users/add`" class="btn btn-green">
        <button>Add</button>
      </RouterLink>
    </div>
  </div> -->
</template>
