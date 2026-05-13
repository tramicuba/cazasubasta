// admin/auth.js
(function() {
    const SUPABASE_URL = 'https://hopssnvzzcwgromqsyyj.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvcHNzbnZ6emN3Z3JvbXFzeXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MTczNTcsImV4cCI6MjA5NDE5MzM1N30.jAgmJV_eq4MkWboMgqDMYbCF5Kjp3nhn21DQ7xsHGCM';

    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    window.checkAuth = async function() {
        const { data: { user } } = await window.supabaseClient.auth.getUser();
        return user;
    };
})();