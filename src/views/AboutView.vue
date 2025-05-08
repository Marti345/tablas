<template>
  <div class="USUARIO">
    <div class="USUARIO-panel"> 
      <ButtonPrime @click="Nuevousuario()" label="Ver" severity="success" />
    <Dialog v-model:activarmodalnuevo="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
   <input text="usuario.cedula">

  
   <input text="usuario.usuario">
   <input text="usuario.clave">
   <input text="usuario.repetirClave">
   <input text="usuario.genero">
   <input text="usuario.programa">
   <ButtonPrime @click="guardar()" label="Ver" severity="success" />
    </Dialog>
  </div>
    <DataTable :value="usuarios" tableStyle="min-width: 50rem">
      <ColumnPrime field="cedula" header="Cedula"></ColumnPrime>
      <ColumnPrime field="nombre" header="Nombre"></ColumnPrime>
      <ColumnPrime field="usuario" header="Usuario"></ColumnPrime>
      <ColumnPrime field="programa" header="Programa"></ColumnPrime>
      <ColumnPrime header="Acción">
        <template #body="slotProps">
          <ButtonPrime @click="ver(slotProps.data)" label="Ver" severity="success" />
        </template>
        
>
      </ColumnPrime>
    </DataTable>

  </div>
</template>
<script>
export default {
  data() {
    
    return {
      usuarios: [],
      usuario: {
        cedula: 0,
        nombre: "",
        clave: "",
        repetirClave:"",
        genero: "",
        programa: "",
      },
      activarmodalnuevo: false
    };
  },



  methods: {
    getALLMotos: async function () {
      let url = "http://cobuses.com.co/APIV2/model/usuarios.php?dato=getallusuarios";

      let vue = this;
      await this.axios
        .get(url)
        .then(function (response) {
          // handle success
          console.log("estos son los datos");
          console.log(response.data);

          console.log("STATUS");
          console.log(response.status);

          vue.usuarios = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
          console.log("Proceso terminando");
        });
    },
    NuevogetALLMotos: async function () {
      let url = "http://cobuses.com.co/APIV2/model/usuarios.php?dato=getallusuarios";

      let vue = this;
      await this.axios
        .get(url)
        .then(function (response) {
          // handle success
          console.log("estos son los datos");
          console.log(response.data);

          console.log("STATUS");
          console.log(response.status);

          vue.usuarios = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
          console.log("Proceso terminando");
        });
    },
    Nuevousuario: function() {
      activarmodalnuevo = true;
    },
    ver: function (u) {
      activarmodalnuevo = true;
      console.log(usuario);
    },
    guardar: function(usuarios) {
      console.log(usuarios)
    }
  },

  created: function () {
    this.getALLMotos();
  },

}
</script>
<style scoped>
.USUARIO {
  background-color: gray;
  padding: 20px;
  display: grid;
  gap: 4rem;
  width: 100%;

}

.USUARIO-panel {
  width: 10%;
  margin: 2rem auto;

}
</style>