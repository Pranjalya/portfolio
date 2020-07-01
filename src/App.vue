<template>
  <transition name="fade" tag="div" class="wrapper">
    <div class="wrapper" v-if="isLoaded" key="app">
      <FrontPage :user="user" />
      <AboutMe :user="user" />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>

    <div class="loader wrapper" v-else key="loader">
      <div class="spinner-loader"></div>
    </div>
  </transition>
</template>

<script>
import FrontPage from "./components/FrontPage";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    FrontPage,
    AboutMe,
    Experience,
    Portfolio,
    Contacts,
    Footer
  },
  data: () => ({
    isLoaded: false,
    categories: {},
    user: {
      name: "PRANJALYA TIWARI",
      description: "Deep Learning, Data Engineering, Full Stack Development"
    },
    posts: {}
  }),

  methods: {
    getName() {
      return this.user;
    }
  },

  created() {
    document.body.classList.add("loading");
    Promise.all([this.getName()]).then(() => {
      this.isLoaded = true;
      this.$nextTick(() => document.body.classList.remove("loading"));
    });
  }
};
</script>

<style scoped lang="scss">
$spinner-loader-color: rgba(#003, 0.3) !default;

.wrapper {
  height: 100%;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

@keyframes spinner-loader {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

.spinner-loader {
  animation: spinner-loader 1500ms infinite linear;

  border-radius: 0.5em;
  box-shadow: $spinner-loader-color 1.5em 0 0 0,
    $spinner-loader-color 1.1em 1.1em 0 0, $spinner-loader-color 0 1.5em 0 0,
    $spinner-loader-color -1.1em 1.1em 0 0, $spinner-loader-color -1.5em 0 0 0,
    $spinner-loader-color -1.1em -1.1em 0 0, $spinner-loader-color 0 -1.5em 0 0,
    $spinner-loader-color 1.1em -1.1em 0 0;
  display: inline-block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin: 1.5em;
  overflow: hidden;
  text-indent: 100%;
}
</style>
