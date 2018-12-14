<template>
  <carousel :data="data" indicator-type="disc" autoplay="false" stop="stop"></carousel>
</template>

<script>
export default {
  name: 'SlideView1',
  data () {
    return {
      data: [
        '<div class="example-slide"><img src="../../../static/bg-01.jpg"' +
        'style="width: 900px; height: 600px;"></div>',
        '<div class="example-slide"><img src="../../../static/bg-02.jpg"' +
        'style="width: 900px; height: 600px;"></div>',
        '<div class="example-slide"><img src="../../../static/bg-03.jpg"' +
        'style="width: 900px; height: 600px;"></div>',
        '<div class="example-slide"><img src="../../../static/bg-04.jpg"' +
        'style="width: 900px; height: 600px;"></div>',
        '<div class="example-slide"><img src="../../../static/bg-05.jpg"' +
        'style="width: 900px; height: 600px;"></div>',
        '<iframe width="900" height="600" src="https://www.youtube.com/embed/FkkZQjZ_-oM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      ]
    }
  }
}
</script>

<style scoped>
  .example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}
</style>
