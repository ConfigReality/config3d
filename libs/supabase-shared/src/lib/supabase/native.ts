import { createClient as create } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Database } from '../../types/supabase';

export const createClient = () => {
    return create<Database>(
    process.env.EXPO_PUBLIC_SUPABASE_URL!,
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    }
  );
}
