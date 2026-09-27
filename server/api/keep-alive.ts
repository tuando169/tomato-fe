import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  try {
    // 1. Tạo Supabase client gắn với request context
    const client = await serverSupabaseClient(event);

    // 2. Query trực tiếp vào bảng (ví dụ bảng 'artworks')
    const { data, error } = await client
      .from('artworks')
      .select('id')

    if (error) throw error;

    return { success: true, status: 200, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});