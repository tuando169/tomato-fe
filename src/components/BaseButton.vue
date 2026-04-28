<template>
  <component
    :is="componentTag"
    v-bind="dynamicProps"
    :class="[
      'inline-flex items-center justify-center rounded font-medium tracking-widest uppercase transition-all duration-300 gap-2',
      sizeClasses,
      variantClasses,
      className
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: String,
    default: undefined
  },
  href: {
    type: String,
    default: undefined
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg', 'full'].includes(value)
  },
  target: {
    type: String,
    default: undefined
  },
  className: {
    type: String,
    default: ''
  }
})

const componentTag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})

const dynamicProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: props.target }
  return { type: 'button' }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-6 py-2.5 text-sm'
    case 'lg':
      return 'px-10 py-5 gap-3'
    case 'full':
      return 'w-full py-4'
    case 'md':
    default:
      return 'px-8 py-3 text-sm'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'outline':
      return 'border border-primary text-primary hover:bg-primary/5 shadow-md shadow-primary/20'
    case 'primary':
    default:
      return 'bg-primary text-white hover:bg-primary-dim  hover:shadow-2xl'
  }
})
</script>
