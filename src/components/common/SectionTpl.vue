<script setup lang="ts">
import SectionHeaderTpl from '@/components/common/SectionHeaderTpl.vue'

const props = defineProps<{ id: string; title: { ico: string; txt: string }}>()
</script>

<template>
  <section :id="id">
    <SectionHeaderTpl :ico="props.title.ico" :txt="props.title.txt"/>
    <slot/>
  </section>
</template>

<style lang="scss">

ul {
  list-style-type: none;
  padding-left: 0;
  li.subsection {
    padding-left:0 !important;
    //padding: .5rem 0;
    &:first-of-type {
      //border-top:none;
      margin-top: .3rem;
    }
  }
}
.details {
  display:inline-block;
  border: 1px solid lightgray;
  border-radius: .3rem;
  padding: .3rem 1rem;
  margin-bottom: 1rem;
  &.open {
    min-width:100%;
    background: linear-gradient(145deg, #f7f3ef, #fff0);
    color:black;
    box-shadow: 3px 3px 8px lightgrey !important;
    border-radius: 5px;
    border:1px solid #eeeeee;
    .subsection {
      display:inline-block;
      min-width: 100%;
    }
  }
  a.show_details {
    text-decoration: none;
    color: black;
    span {
      margin-left: .5rem;
    }
  }
  ul {
    margin-bottom: 0;
  }
}
</style>