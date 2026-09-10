// Church Attendance - Supabase Connection

const SUPABASE_URL = "https://gzjtdjotpmgluyfifujm.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_4M_hw8Ni-yyYo6ahL1h8-g_iJJcWKfS";

const script = document.createElement("script");

script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

script.onload = function () {
    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

    console.log("Supabase connected successfully.");
};

document.head.appendChild(script);
