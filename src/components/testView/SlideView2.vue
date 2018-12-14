<template>
  <div class="test-view-2">
    <agile :options="options" >
      <div class="slide slide--1" style="background-image: url('../../../static/1.jpg')"><h3>slide 1</h3></div>
      <div class="slide slide--2" style="background-image: url('../../../static/2.jpg')"><h3>slide 2</h3></div>
      <div class="slide slide--3" style="background-image: url('../../../static/3.jpg')"><h3>slide 3</h3></div>
      <div class="slide slide--4" style="background-image: url('../../../static/4.jpg')"><h3>slide 4</h3></div>
      <div class="slide slide--5" style="background-image: url('../../../static/5.jpg')"><h3>slide 5</h3></div>
      <div class="slide slide--6"><iframe width="1000" height="500" src="https://www.youtube.com/embed/FkkZQjZ_-oM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </agile>
  </div>
</template>

<script>

export default {
  name: 'SlideView2',
  data () {
    return {
      options: {
        arrows: true,
        infinite: true,
        dots: true
      }
    }
  }
}
</script>

<style lang="scss" type="text/css">

@import "../../assets/scss/vue-agile/main"

</style>
