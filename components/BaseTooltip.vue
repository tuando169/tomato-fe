<template>
  <div class="group/tooltip relative inline-flex items-center">
    <slot />
    <!-- Tooltip Bubble -->
    <span 
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-on-surface text-surface text-[10px] font-bold uppercase tracking-[0.1em] rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[600] translate-y-1 group-hover/tooltip:translate-y-0 shadow-xl border border-white/10"
    >
      {{ text }}
    </span>
    <!-- Subtle Arrow -->
    <div 
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-2 h-2 bg-on-surface rotate-45 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none translate-y-1 group-hover/tooltip:translate-y-0 z-[599]"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
