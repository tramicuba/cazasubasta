// admin/auth.js
const SUPABASE_URL = 'https://hopssnvzzcwgromqsyyj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvcHNzbnZ6emN3Z3JvbXFzeXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MTczNTcsImV4cCI6MjA5NDE5MzM1N30.jAgmJV_eq4MkWboMgqDMYbCF5Kjp3nhn21DQ7xsHGCM';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkAuth() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        // No está autenticado, redirigir al login
        // Si ya estamos en admin.html, no redirigir en bucle
        if (!window.location.pathname.includes('admin.html')) {
            window.location.href = 'admin.html';
        }
        return null;
    }
    return user;
}

async function logout() {
    await supabase.auth.signOut();
    window.location.href = 'admin.html';
}

function getSupabase() {
    return supabase;
}