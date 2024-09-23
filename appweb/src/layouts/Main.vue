<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-footer v-if="this.$store.state.user.id && this.$route.path !== '/Cargando' ">
      <q-tabs>
        <q-route-tab to="Inicio"
        icon="home" label="Inicio" name="inicio" />
      </q-tabs>
    </q-footer> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template> 

<style >
body {
  background-color: white;
}
</style>