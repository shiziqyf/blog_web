<template>
  <div>
        <mavon-editor ref="md" v-model="content" ></mavon-editor>
  </div>
</template>

<script>
export default {
    data() {
        return {
            content: ''
        }
    }
}
</script>

<style>

</style>