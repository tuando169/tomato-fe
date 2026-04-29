<template>
  <div class="h-screen overflow-hidden bg-surface flex items-center justify-center p-6">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-xl shadow-primary/5 p-8 border border-surface-container overflow-hidden relative">
      <!-- Decorative background element -->
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <header class="text-center mb-10">
          <h1 class="font-serif text-3xl text-primary-dim mb-2">bochoinuoc</h1>
        </header>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div v-if="errorMsg" class="p-4 bg-error/10 border border-error/20 rounded-lg text-error text-sm text-center">
            {{ errorMsg }}
          </div>

          <div class="space-y-2">
            <label for="username" class="text-xs font-bold uppercase tracking-widest text-outline">Username</label>
            <input 
              id="username"
              v-model="username"
              type="text" 
              required
              class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
              placeholder="admin"
            />
          </div>

          <div class="space-y-2">
            <label for="password" class="text-xs font-bold uppercase tracking-widest text-outline">Password</label>
            <input 
              id="password"
              v-model="password"
              type="password" 
              required
              class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
              placeholder="••••••••"
            />
          </div>

          <BaseButton 
            type="submit" 
            :disabled="loading"
            size="full"
            className="mt-4 shadow-lg shadow-primary/20"
          >
            <span v-if="loading">Logging in...</span>
            <span v-else>Login</span>
          </BaseButton>
        </form>

        <footer class="mt-6 text-center">
          <router-link to="/" class="text-primary hover:border-primary border-b border-transparent pb-1 font-bold transition-all uppercase tracking-widest text-sm">
            Back to home
          </router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const router = useRouter()

const username = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

definePageMeta({
  layout: false // No default navbar/footer
})

const handleLogin = async () => {
  try {
    loading.value = true
    errorMsg.value = ''
    
    const { error } = await client.auth.signInWithPassword({
      email: username.value,
      password: password.value,
    })
    
    if (error) throw error
    
    // Redirect to admin on success
    router.push('/admin')
  } catch (error: any) {
    errorMsg.value = error.message || 'An error occurred during login'
  } finally {
    loading.value = false
  }
}

// Redirect if already logged in
const user = useSupabaseUser()
watchEffect(() => {
  if (user.value) {
    router.push('/admin')
  }
})
</script>
