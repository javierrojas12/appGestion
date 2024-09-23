<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Editar Nota</div>
      <q-space />
      <q-btn v-close-popup flat round dense icon="close" />
    </q-card-section>

    <q-form @submit.prevent="submitForm">
    <q-card-section>
      <div class="row q-mb-sm">
          <q-input
            autofocus
            class="col"
            v-model="notasSubmit.texto"
            outlined
            type="textarea"
            label="Escribe aquí..."
            :rules="[(val) => (val && val.length > 0) || 'Ingrese su nota']"
          />
      </div>
      <div class="row q-mb-sm">
        <q-input label="Fecha" outlined v-model="notasSubmit.fecha"
        :rules="[(val) => (val && val.length > 0) || 'Ingrese la fecha']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy>
                <q-date v-model="notasSubmit.fecha" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn label="Agregar" color="primary" type="submit" />
    </q-card-actions>

    </q-form>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      notasSubmit: {
        texto: "Lorem ipsum",
        fecha: "06/5/2021",
      },
    };
  },
  methods: {
      submitForm() {

      }
  }
};
</script>
