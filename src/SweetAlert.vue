<template>
<div>
  <div class="swal2-container swal2-fade swal2-in" v-show="show">
    <div class="swal2-modal swal2-show" style="padding: 20px;" tabindex="0">
      <div class="swal2-icon swal2-success" v-if="icon == 'success'">
        <span class="line tip"></span> <span class="line long"></span>
        <div class="placeholder"></div> <div class="fix"></div>
      </div>
      <div class="swal2-icon swal2-question"  v-if="icon == 'question'">?</div>
      <div class="swal2-icon swal2-warning"  v-if="icon == 'warning'">!</div>
      <div class="swal2-icon swal2-info"  v-if="icon == 'info'">i</div>
      <h2 class="swal2-title">{{ title }}</h2>
      <div class="swal2-content" v-if="show">
        <slot></slot>
      </div>
      
      <hr class="swal2-spacer">
      <button type="button" class="swal2-confirm swal2-styled">OK</button>
      <button type="button" class="swal2-cancel swal2-styled">Cancel</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SweetAlert',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Default"
    },
    icon: {
      type: String,
      default: "none"
    }
  },
  watch: {
    show: function(val) {
      if (val) {
        
        this.$nextTick(() => this.$el.querySelector(".swal2-modal").focus());
        
        document.body.classList.add("swal2-in");
        this.bindKeyEvents();
      } else {
        document.body.classList.remove("swal2-in");    
        this.unbindKeyEvents();
      }
    }
  },
  mounted() {
    this.cancelBut = document.querySelector(".swal2-cancel");
    this.confirmBut = document.querySelector(".swal2-confirm");
    this.container = document.querySelector(".swal2-container");

    this.cancelBut.addEventListener("click", this.closeClickHandler);
    this.container.addEventListener("click", this.closeClickHandler);
    this.confirmBut.addEventListener("click", this.closeClickHandler);
  },
  beforeDestroy() {
    console.log("destroyed");
    
    this.cancelBut.removeEventListener("click", this.outsideClickHandler);
    this.confirmBut.removeEventListener("click", this.outsideClickHandler);
    this.container.removeEventListener("click", this.outsideClickHandler);
  },
  methods: {
    closeClickHandler: function(e) {
      if (e.target.classList.contains("swal2-container") || e.target.classList.contains("swal2-cancel")) {
        this.$emit("modalClosed", { modalResult: "cancel" });
      } else if (e.target.classList.contains("swal2-confirm")) {
        this.$emit("modalClosed", { modalResult: "ok" });
      }
    },
    bindKeyEvents() {
      console.log("key events bound");
      document.addEventListener("keydown", this.keyPressHandler);
    },
    keyPressHandler(event) {
      //console.log("key pressed", e.which);
      const e = event || window.event;
      const keyCode = e.keyCode || e.which;

      //SPACE / ENTER
      if (keyCode === 13 || keyCode === 32) {
        this.$emit("modalClosed", { modalResult: "ok" });
      } 
      // ESC
      else if (keyCode === 27) {
        this.$emit("modalClosed", { modalResult: "cancel" });
      }
    },
    unbindKeyEvents() {
      console.log("key events unbound");
      document.removeEventListener("keydown", this.keyPressHandler);
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
