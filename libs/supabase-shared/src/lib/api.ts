import { isWeb } from './platform';
// import { createClient } from './supabase/client';
import { createClient as createNativeClient } from './supabase/native';
import { createClient as createServerClient } from './supabase/server';

export const getProjects = async () => {

  const client = isWeb ? createNativeClient() : createServerClient();
  const {data, error} = await client.from('project').select('*');
  return {data, error};
}