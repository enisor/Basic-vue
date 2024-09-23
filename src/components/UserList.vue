<script setup lang="ts">
import { useUsersStore } from "@/stores/users";
const users = useUsersStore();
</script>

<template>
  <div class="container">
    <ul role="list" class="divide-y divide-gray-100">
      <li class="flex gap-x-4 py-5 justify-between">
        <div class="flex min-w-0">
          <p class="text-sm font-semibold leading-6 text-gray-900">Name</p>
        </div>
        <div>
          <p class="text-sm font-semibold leading-6 text-gray-900">Phone</p>
        </div>
        <div>
          <p class="text-sm font-semibold leading-6 text-gray-900">Action</p>
        </div>
      </li>
      <li
        v-for="person in users.users"
        :key="person.id"
        class="flex gap-x-4 py-5 justify-between"
      >
        <div class="flex min-w-0">
          <p class="text-sm font-semibold leading-6 text-gray-900">
            {{ person.name }}
          </p>
        </div>
        <div>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">
            {{ person.phone }}
          </p>
        </div>
        <div>
          <RouterLink :to="`/users/${person.id}`" class="btn w-auto btn-green">
            Edit
          </RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>
