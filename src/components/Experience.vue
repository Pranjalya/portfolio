<template>
  <section id="experience" class="my-cv position">
    <Title
      :title="'Experience'"
      :description="'My Knowledge and Achievements'"
    />

    <AnimateWhenVisible name="fadeUp" :duration="1.5" class="section-content">
      <div class="container-fluid">
        <div class="row">
          <Timeline />
        </div>
      </div>
    </AnimateWhenVisible>
  </section>
</template>

<script>
import Title from "./Title";
import Timeline from "./Timeline";

export default {
  name: "Experience",
  components: {
    Title,
    Timeline
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

$linear: map-get($colors, dark);

.row {
  padding-top: 20px;
  text-align: center;
}

@media (min-width: #{map-get($breakpoints, small)}) {
  .left {
    text-align: right;
    border-right: 2px solid lighten($linear, 80%);
  }

  .right {
    text-align: left;
  }
}
</style>
