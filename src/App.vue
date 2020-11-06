<template>
  <div class="maxcontainer">
    <div class="menu">
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/posts">Posts</router-link>
      <router-link to="/pages">Pages</router-link>
    </div>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
.menu {
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
}
.menu a {
  margin-right: 2%;
}
</style>
