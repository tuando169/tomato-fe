export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()
  const mockUser = useCookie('mock_user')

  if (!user.value && !mockUser.value) {
    return navigateTo('/login')
  }
})
