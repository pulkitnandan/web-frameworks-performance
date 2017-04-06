<template>
  <div>{{users}}</div>
</template>

<script>
import axios from '~plugins/axios'

export default {
  data(){
    return {
      users: ''
    }
  },
  async mounted () {
    let { data } = await axios.get('/api/users')
    this.users = data
  }
}
</script>
