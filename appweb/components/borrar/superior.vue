<template>
    <div class="row q-pt-none superiorAltura">
      <div class="col columns items-start colStyle">
        <q-btn @click="back()">
          <q-img
            src="~assets/icon-back.png"
            width="100%"
            height="100%"
            class="alignLeft"
          />
        </q-btn>
      </div>

      <div class="col column items-center">
        <h5 class="titulo bajarTitulo">
         <slot> </slot>
        </h5>
      </div>

    </div>
</template>

<script>
import Const from "../assets/const.js";

export default {
  data() {
      return {
      }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.superiorAltura{
  height: 80px;
}

.colStyle{
  position: absolute; 
  top: 64px;
  left:10px;
}

</style>
