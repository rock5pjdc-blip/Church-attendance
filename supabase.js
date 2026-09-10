// Church Attendance - Supabase Connection

const SUPABASE_URL =
  "https://gzjtdjotpmgluyfifujm.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_4M_hw8Ni-yyYo6ahL1h8-g_iJJcWKfS";

window.churchDB = null;

function initializeSupabase() {

  if (!window.supabase) {

    console.error(
      "Supabase library has not loaded."
    );

    return false;

  }

  window.churchDB =
    window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    );

  console.log(
    "✅ Supabase connected successfully"
  );

  return true;

}
