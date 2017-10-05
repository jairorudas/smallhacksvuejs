<template>
  <!-- .container is main centered wrapper -->
  <div class="container">
    <div class="row">
      <div class="column">
        <form>
            <input type="search" @input="filtro = $event.target.value" placeholder="Assunto" id="nameField">
        </form>

        <div>         
          <!-- Ordered list -->
          <ol>
            <li  v-for="(pergunta, index) of filtrarRespostas" @click="toggleCollapsation">
                <h6>{{ pergunta.title }}</h6>
                
               <!-- Conteudo -->
               <transition name="fade">
                <div class="resposta" v-show="isCollapsed">

                  <!--<blockquote v-if="pergunta.pergunta.img">
                    <img :src="pergunta.respostas.img" alt="imagem">
                  </blockquote> -->

                  <blockquote v-for="item of pergunta.respostas"> {{item}} </blockquote>
                </div>
               </transition>
            </li>
          </ol>



          <!--<blockquote>
            <li>
              Ordered list item 2
              <code class="code">jairo</code>
            </li>
            <p><em>Yeah!! Milligram is amazing.</em></p>
          </blockquote> -->
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
import perguntas from '../../static/perguntas.js'
export default {
  name: 'hello',
  /*props: {
    perguntas:{
      type: Array,
      required: true
    }
  },*/
  data () {
    return {
      filtro: '',
      perguntas: [],
      options: {},
      isCollapsed: false
    }
  },
  
  beforeMount() {
    this.options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 1000,
      maxPatternLength: 50,
      minMatchCharLength: 3,
      keys: [
        "title",
        "respostas.a",
        "respostas.b"
    ]};
    this.perguntas = perguntas;
  },

  methods:{
    toggleCollapsation() {
        this.isCollapsed = !this.isCollapsed;
    }
  },

  computed: {
    filtrarRespostas() {
      if(this.filtro.length >= this.options.minMatchCharLength){
        var fuse = new Fuse(this.perguntas, this.options); // "list" is the item array
        return fuse.search(this.filtro); 
      }else{
        return perguntas
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    padding: 0 1.0rem;
  }

  .block{
    display: block;
  }

  .resposta{
    margin-top: 10px;
    transition: display 0.5s ease;
  }

  h6{
    font-size: 1.6rem;
    font-weight: 400;
  }
  li{
    border-bottom: 1px solid #9b4dca;
    margin-bottom: 2rem;
  }
  form{
    margin-bottom: 0.5rem;
  }

  blockquote{
    border-left: 0.3rem solid #9b4dca;
    font-size: 16px;
  }

  .code{
    display: block;
    background: #f4f5f6;
    padding: 4px;
    border-left: 3px dotted #9b4dca;
  }

  pre{
    margin: 0;
  }

  ol{
      list-style: cjk-ideographic;
      margin-left: 0;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
