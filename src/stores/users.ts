import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const users = ref([{id:1, name: "Ismael Sama", phone: "01111111111"}, {id:2, name: "Yahya Esa", phone: "02222222222"}])

  function add(body:any) {
    users.value.push({id: users.value.length +1, ...body})
  }

  function update(id:number, body:any) {
    users.value =users.value.map((user) => {
      if (user.id == id){
        return {...user, name: body.name, phone: body.phone}
      } 
      else{
        return user
      }
      
    })
  }

  function findById(id:any){
    users.value.find((user: any) => user.id == id);
  }

  return { users: computed(() => users.value), add, update, findById }
})
