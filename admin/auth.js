// admin/auth.js
(function() {
    function waitForSupabase(callback) {
        if (window.supabase && window.supabase.createClient) {
            callback();
        } else {
            setTimeout(function() { waitForSupabase(callback); }, 50);
        }
    }

    waitForSupabase(function() {
        const SUPABASE_URL = 'https://hopssnvzzcwgromqsyyj.supabase.co';
        const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvcHNzbnZ6emN3Z3JvbXFzeXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MTczNTcsImV4cCI6MjA5NDE5MzM1N30.jAgmJV_eq4MkWboMgqDMYbCF5Kjp3nhn21DQ7xsHGCM';

        window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase client ready');

        window.checkAuth = async function() {
            if (!window.supabaseClient) return null;
            const { data: { user } } = await window.supabaseClient.auth.getUser();
            return user; // No redirigir automáticamente
        };

        window.logout = async function() {
            if (!window.supabaseClient) return;
            await window.supabaseClient.auth.signOut();
            window.location.reload(); // Recargar para mostrar login
        };
    });
})();