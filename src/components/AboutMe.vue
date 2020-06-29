<template>
  <section id="about">
    <Title :title="'About Me'" :description="'Let\'s get to know each other'" />
    <div class="section-content">
      <div class="container-fluid">
        <div class="row">
          <AnimateWhenVisible name="fadeLeft" class="col-12 col-md">
            <Radar />
          </AnimateWhenVisible>
          <Photo class="col-12 col-md text-center" />
          <AnimateWhenVisible name="fadeRight" class="col-12 col-md">
            <PersonalInfo :userName="user.name" />
          </AnimateWhenVisible>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "./Title";
import Photo from "./Photo";
import PersonalInfo from "./PersonalInfo";
import Radar from "./Radar";

export default {
  name: "AboutMe",
  props: ["user"],
  components: {
    Title,
    Photo,
    PersonalInfo,
    Radar
  },
};
</script>

<style scope lang="scss">
@import "@/styles/variables.scss";

$bg-about-me: map-get($colors, dark);

#about {
  background-color: lighten($bg-about-me, 84.6%);

  .col-12 {
    margin-top: 50px;
  }
}

.text-center {
  text-align: center;
}

@media (min-width: #{map-get($breakpoints, medium)}) {
  .section-content {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
