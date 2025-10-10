import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Fetch latest 100 messages
    const { data: msgs, error: msgErr } = await supabase
      .from('global_chat')
      .select('id, user_id, message, created_at')
      .order('created_at', { ascending: true })
      .limit(100);

    if (msgErr) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch messages' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const userIds = Array.from(new Set((msgs || []).map(m => m.user_id)));
    const usernames = new Map<string, string>();

    for (const id of userIds) {
      const { data: u } = await supabase
        .from('users')
        .select('username')
        .eq('id', id)
        .maybeSingle();
      usernames.set(id, u?.username || 'Unknown');
    }

    const enriched = (msgs || []).map(m => ({ ...m, username: usernames.get(m.user_id) || 'Unknown' }));

    return new Response(
      JSON.stringify({ success: true, messages: enriched }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('chat-history error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
