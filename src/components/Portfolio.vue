<template>
  <section id="portfolio" class="my-portfolio position">
    <Title :title="'Portfolio'" :description="'My Works'" />

    <div class="section-content">
      <div class="portfolio-table controls">
        <ul class="breadcrumbs">
          <li
            class="filter"
            :class="{ active: isFiltered('all') }"
            @click="filter('all')"
          >
            All works
          </li>
          <li
            class="filter"
            :class="{ active: isFiltered('blog') }"
            @click="filter('blog')"
          >
            Blogs
          </li>
          <li
            class="filter"
            :class="{ active: isFiltered('project') }"
            @click="filter('project')"
          >
            Projects
          </li>
        </ul>
      </div>

      <transition-group
        name="filter"
        tag="div"
        class="row justify-content-center"
      >
        <div
          class="col-md-4 col-lg-auto portfolio-item"
          v-for="post in filteredPosts"
          :key="post.id"
        >
          <img :src="post.media_url" alt="image" />
          <div class="portfolio-link">
            <a :href="post.site_url" class="popup_content" target="_blank"
              >See</a
            >
            <md-tooltip class="tooltiptext">{{ post.title }}</md-tooltip>
          </div>
        </div>
      </transition-group>
    </div>
    <br />

    <Title :title="''" :description="'Tools Known'" />
    <div class="section-content">
      <carousel-3d :autoplay="true" :autoplay-timeout="1000" :display="7">
        <slide v-for="(slide, i) in slides" :key="i" :index="slide.id">
          <figure>
            <img :src="'img/icons/' + slide.src" alt="image" />
            <figcaption>
              <h2>{{ slide.text }}</h2>
            </figcaption>
          </figure>
        </slide>
      </carousel-3d>
    </div>
  </section>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Title from "./Title";

export default {
  name: "Portfolio",
  data() {
    return {
      currentFilter: "all",
      slides: [
        { id: 0, text: "Tensorflow", src: "tf.jpeg" },
        { id: 1, text: "ElasticSearch", src: "Elasticsearch.png" },
        { id: 2, text: "Vue.js", src: "vue.png" },
        { id: 3, text: "Cloudant", src: "cloudant.png" },
        { id: 4, text: "MongoDB", src: "mongodb.png" },
        { id: 5, text: "Docker", src: "docker.webp" },
        { id: 6, text: "MySQL", src: "mysql.jpeg" },
        { id: 7, text: "Scikit Learn", src: "sklearn.webp" },
        { id: 8, text: "CouchDB", src: "couchdb-logo1.png" },
        { id: 9, text: "CircleCI", src: "circleci.png" },
        { id: 10, text: "Google Cloud Platform ", src: "gcp.png" },
        { id: 11, text: "Golang", src: "go.png" }
      ],
      posts: [
        {
          title: "WebRTC Video Chat",
          id: "1",
          site_url: "webrtc.kaissa.io",
          media_url:
            "https://drive.google.com/uc?id=18nft8nnx_1iiSrbcxIgNaqOztb83nOKI",
          tags: ["project"]
        },
        {
          title: "What is Debiasing, and Why is it important?",
          id: "2",
          site_url:
            "https://medium.com/@pranjalyatiwari/what-is-debiasing-and-why-is-it-important-6cad40e8511c",
          media_url:
            "https://drive.google.com/uc?id=1l-tdbX-mRcZODSzSU8nkrKaYIbDO8Tmf",
          tags: ["blog"]
        },
        {
          title: "Did Google Duplex really pass the Turing Test?",
          id: "3",
          site_url:
            "https://medium.com/@pranjalyatiwari/did-google-duplex-really-pass-the-turing-test-ad62fd8286f5",
          media_url:
            "https://drive.google.com/uc?id=11do6CTVeGt9f9CWAQXleDeMl4RFl8NUo",
          tags: ["blog"]
        },
        {
          title: "Student Data Centre",
          id: "4",
          site_url: "https://www.github.com/student-data-centre",
          media_url:
            "https://drive.google.com/uc?id=137WbC_TeBKH6Gig6h17K7yZs70KUVXGn",
          tags: ["project"]
        },
        {
          title: "How Does Google Translate Work?",
          id: "5",
          site_url:
            "https://medium.com/@pranjalyatiwari/how-does-google-translate-work-86429c915cc2",
          media_url:
            "https://drive.google.com/uc?id=1HePuTrXNxVA894lNX36UuAjhC-mu507w",
          tags: ["blog"]
        },
        {
          title: "Millenials",
          id: "6",
          site_url:
            "https://play.google.com/store/apps/details?id=io.kaissa.millennials&hl=en_IN",
          media_url:
            "https://drive.google.com/uc?id=1SpDi_9jTdQyt_jRhWEY1n5G2XwrUduhy",
          tags: ["project"]
        },
        {
          title: "How to download previous versions of a Kaggle Dataset?",
          id: "7",
          site_url:
            "https://medium.com/@pranjalyatiwari/how-to-download-previous-versions-of-a-kaggle-dataset-9a8d62b78dcc",
          media_url:
            "https://drive.google.com/uc?id=18v_DQkdu5U5SyuUs0bY85UoPURttdXjB",
          tags: ["blog"]
        },
        {
          title:
            "Better Neural Network Weight Initializations with Reinforcement Learning",
          id: "8",
          site_url: "https://github.com/Pranjalya/LearningInitializations",
          media_url:
            "https://drive.google.com/uc?id=10KjDqaPWeYqDVeHlL9LJ3VoE3mHIMu4c",
          tags: ["project"]
        }
      ]
    };
  },
  components: {
    Title,
    Carousel3d,
    Slide
  },
  computed: {
    filteredPosts() {
      if (this.currentFilter === "all") {
        return this.posts;
      }

      return this.posts.filter(
        post => post.tags && post.tags.includes(this.currentFilter)
      );
    }
  },
  methods: {
    isFiltered(name) {
      return this.currentFilter === name;
    },

    filter(name) {
      this.currentFilter = name;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.carousel-3d-container {
  .carousel-3d-slide {
    height: 180px;
    width: 250px;
  }
}

figure {
  padding: 3px;
  margin: 1px;
}

figure figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  padding: 10px;
  background-color: black;
  /* IE 8 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  /* IE 5-7 */
  filter: alpha(opacity=50);
  /* Netscape */
  -moz-opacity: 0.5;
  /* Safari 1.x */
  -khtml-opacity: 0.5;
  /* Good browsers */
  opacity: 0.5;
}

$bg-portfolio: map-get($colors, dark) !default;
$btn: map-get($colors, secondary) !default;

.md-tooltip {
  background-color: #f1f5f8 !important;
  border-radius: 6px;
  color: #111111;
  height: 4%;
  font-size: 110%;
  vertical-align: middle;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltiptext {
  visibility: visible;
}

.filter-enter-active,
.filter-leave-active,
.filter-move {
  transition: all 1s;
}
.filter-enter,
.filter-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.filter-leave-active {
  position: absolute;
}

.my-portfolio {
  background-color: $bg-portfolio;
  color: map-get($colors, light);
}

/deep/ .text-wrapper {
  &:after {
    border-bottom: 1px solid map-get($colors, light);
  }
}

.breadcrumbs {
  text-align: center;

  li {
    display: inline-block;
    text-transform: uppercase;
    margin: 0 10px;
    color: lighten($bg-portfolio, 60%);
    cursor: pointer;

    &.active {
      color: map-get($colors, light);
      border-bottom: 1px solid $btn;
    }
  }
}

.portfolio-table {
  margin-bottom: 50px;
}

.portfolio-item {
  width: 20%;
  max-height: 16%;
  overflow: hidden;
  margin-bottom: 20px;

  img {
    width: 100%;
  }
}

.portfolio-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  padding-top: 60%;
  opacity: 0;
  transition: all 0.5s ease-out;

  &:hover {
    opacity: 1;
    padding-top: 30%;
  }

  a {
    background-color: transparent;
    border: 1px solid $btn;
    padding: 10px 35px;
    font-weight: 600;
    font-size: 2rem;
    display: inline-block;
    transition: all 0.5s sceal-out;

    &:hover {
      color: lighten($btn, 30%);
    }
  }
}
</style>
