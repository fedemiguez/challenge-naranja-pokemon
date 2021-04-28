<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      color="indigo"
      dark
    >
      <v-toolbar-title>PokemonApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        flat
        hide-details
        solo-inverted
        prepend-inner-icon="mdi-magnify"
        label="Buscar Pokemons"
        v-model="query"
        focus
        clearable
        @keydown.enter="getPokemon(query)"
      />
    </v-toolbar>
    <template v-if="loading">
      <v-card-text class="text-center">
        <v-progress-circular
          indeterminate
          color="red"
        ></v-progress-circular>
      </v-card-text>
    </template>
    <template v-else>
      <v-card-text v-if="hasData === null" class="text-center">
        <h3>Ingresa el nombre de un pókemon para que lo busque!</h3>
        <v-img  :src="require('~/assets/imgs/detective.png')" />
      </v-card-text>
      <v-card-text v-if="hasData === false" class="text-center">
        <h1>No encontre ningun pokemon :(</h1>
        <v-img  :src="require('~/assets/imgs/pikachutriste.png')" />
      </v-card-text>
      <v-card-text v-if="hasData">
        <v-row>
          <v-col cols="12">
            <v-img  :lazy-src="data.sprites.other.dream_world.front_default" :src="data.sprites.other.dream_world.front_default" />
          </v-col>
        </v-row>
        <v-divider class="my-5"></v-divider>
        <v-subheader>Estadisticas</v-subheader>
        <v-row>
          <v-col>
            <v-card
              class="mx-auto"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline">
                    Nombre
                  </div>
                  <v-list-item-title class="headline mb-1">
                    {{data.name}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="mx-auto"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline">
                    Tipo
                  </div>
                  <v-list-item-title class="headline mb-1" v-for="(type, index) in data.types" :key="index">
                    {{type.type.name}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="mx-auto"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline">
                    Experiencia
                  </div>
                  <v-list-item-title class="headline mb-1">
                    {{data.base_experience}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card
              class="mx-auto"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline">
                    Altura
                  </div>
                  <v-list-item-title class="headline mb-1">
                    {{data.height}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="mx-auto"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline">
                    Peso
                  </div>
                  <v-list-item-title class="headline mb-1">
                    {{data.weight}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <v-divider class="mt-5"></v-divider>
        <v-list>
        <v-subheader>Habilidades</v-subheader>
          <v-list-item
            v-for="(item, index) in data.abilities"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.ability.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </template>
  </v-card>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      query:''
    }
  },
  computed:{
    ...mapState(["data", "hasData", "loading", "dataSaved"])
  },
  methods:{
    ...mapActions({
      getPokemon:'getPokemon'
    }),
  },
  mounted(){
    console.log(this.hasData)
  }
}
</script>
