<template>
  <b-container fluid class="p-3 my-3">
    <b-card-group deck class="d-flex justify-content-center"  >
      <Card v-for="(curso, i) in GETCURSOS" :key="i" :curso="curso" />
    </b-card-group>

  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  computed:{
    ...mapGetters(['GETCURSOS'])
  },
  methods:{

  },
  components: {
    Card
  }
}
</script>
