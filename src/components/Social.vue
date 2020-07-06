<template>
  <div class="social-wrap">
    <ul>
      <li v-for="social in socialMedias" v-bind:key="social.index">
        <a :href="social.link" target="_blank" aria-label="icons">
          <i :class="social.icon"> </i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Social",
  data() {
    return {
      socialMedias: [
        {
          icon: "icon-linkedin",
          link: "https://www.linkedin.com/in/pranjalya-tiwari-456a7a179/"
        },
        {
          icon: "icon-github-circled",
          link: "https://www.github.com/Pranjalya"
        },
        {
          icon: "icon-facebook",
          link: "https://www.facebook.com/pranjalya.tiwari"
        },
        {
          icon: "icon-maxcdn",
          link: "https://www.medium.com/@pranjalyatiwari"
        },
        {
          icon: "icon-instagram",
          link: "https://www.instagram.com/pranjalya_kvothe/"
        },
        {
          icon: "icon-quora",
          link: "https://www.quora.com/profile/Pranjalya-Tiwari"
        },
        {
          icon: "icon-stackoverflow",
          link: "https://stackoverflow.com/users/10142251/pranjalya/"
        }
      ]
    };
  },
  computed: {
    socialUrls() {
      return this.socialMedias.map(iconObject => {
        return iconObject;
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.social-wrap {
  li {
    display: inline-block;
    margin-right: 10px;
  }

  i {
    font-size: 3rem;
  }
}
</style>
