<template>
  <div class="commission py-12 md:py-24">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
      
      <!-- Content -->
      <div class="md:w-1/2 flex flex-col gap-8 order-2 md:order-1">
        <div class="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-xs font-medium text-primary uppercase tracking-widest self-start">
          Custom Commission Service
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-dim leading-tight">
          Your story,<br>through the lens<br>of art.
        </h1>
        <div class="text-gray-600 leading-relaxed flex flex-col gap-4 text-lg">
          <p>Every living space and every personal story carries a unique source of inspiration. The commission service allows us to collaborate on creating a piece of art that doesn't just hang on a wall, but tells that story through the language of light and material.</p>
          <p>The collaborative process includes detailed discussions about space, color, and inspiration, along with conceptual sketches (studies) before the final execution on canvas.</p>
        </div>
        
        <div class="pt-8 mt-4 border-t border-surface-container">
          <p class="text-sm text-gray-500 mb-6">To ensure quality, I only accept a limited number of commissions each year. Please contact me directly via message to discuss your vision.</p>
          
          <BaseButton href="https://instagram.com/elenavance" target="_blank" size="lg" className="w-full md:w-auto">
            <span class="material-symbols-outlined">chat_bubble</span>
            Message for Commission
          </BaseButton>
        </div>
      </div>

      <!-- Illustration Image -->
      <div class="md:w-1/2 w-full order-1 md:order-2 relative">
        <div class="aspect-[4/5] bg-surface-container rounded-2xl overflow-hidden shadow-xl relative z-10">
          <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2058&auto=format&fit=crop" alt="Artist painting in studio" class="w-full h-full object-cover" />
        </div>
        
        <!-- Decorative shape -->
        <div class="absolute -top-12 -right-12 w-72 h-72 bg-seafoam/50 rounded-full blur-3xl z-0 pointer-events-none"></div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>
