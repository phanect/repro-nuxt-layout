<template>
  <p>
    This is index.vue. It should extend non-existent-layout, but since it does not exist, Nuxt should raise an error.<br>
    However, it does not raise any error but extends default.vue instead.
  </p>
</template>

<script>
export default {
  layout: "non-existing-layout",
}
</script>
