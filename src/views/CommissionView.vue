<template>
  <div class="commission py-12 md:py-24">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
      
      <!-- Content -->
      <div class="md:w-1/2 flex flex-col gap-8 order-2 md:order-1">
        <div class="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-xs font-medium text-primary uppercase tracking-widest self-start">
          Dịch vụ Đặt vẽ Riêng
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-dim leading-tight">
          Câu chuyện của bạn,<br>qua góc nhìn của<br>nghệ thuật.
        </h1>
        <div class="text-gray-600 leading-relaxed flex flex-col gap-4 text-lg">
          <p>Mỗi không gian sống và mỗi câu chuyện cá nhân đều mang một nguồn cảm hứng độc bản. Dịch vụ đặt vẽ riêng (Commission) cho phép chúng ta cùng nhau kiến tạo nên một tác phẩm nghệ thuật không chỉ để trưng bày, mà còn để kể lại câu chuyện đó bằng ngôn ngữ của ánh sáng và chất liệu.</p>
          <p>Quá trình hợp tác bao gồm các buổi trao đổi chi tiết về không gian, màu sắc và cảm hứng, kèm theo các bản phác thảo ý tưởng (study) trước khi thực hiện trên toan chính.</p>
        </div>
        
        <div class="pt-8 mt-4 border-t border-surface-container">
          <p class="text-sm text-gray-500 mb-6">Để đảm bảo chất lượng, tôi chỉ nhận giới hạn số lượng đơn đặt vẽ mỗi năm. Hãy liên hệ trực tiếp qua tin nhắn để thảo luận về ý tưởng của bạn.</p>
          
          <a href="https://instagram.com/elenavance" target="_blank" class="inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-primary text-white rounded shadow-xl shadow-primary/10 hover:bg-primary-dim hover:shadow-2xl transition-all duration-300 font-medium tracking-widest uppercase">
            <span class="material-symbols-outlined">chat_bubble</span>
            Nhắn tin Đặt vẽ
          </a>
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
