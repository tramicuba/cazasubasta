// admin/auth.js - Módulo de autenticación para el panel
(function() {
    // Configuración de Supabase
    const SUPABASE_URL = 'https://hopssnvzzcwgromqsyyj.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvcHNzbnZ6emN3Z3JvbXFzeXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MTczNTcsImV4cCI6MjA5NDE5MzM1N30.jAgmJV_eq4MkWboMgqDMYbCF5Kjp3nhn21DQ7xsHGCM';

    // Crear el cliente una sola vez, asignarlo a una variable única
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Función para verificar autenticación y redirigir si es necesario
    window.checkAuth = async function() {
        const { data: { user } } = await window.supabaseClient.auth.getUser();
        if (!user) {
            const currentPath = window.location.pathname;
            if (!currentPath.includes('admin.html')) {
                window.location.href = 'admin.html';
            }
            return null;
        }
        return user;
    };

    // Cerrar sesión
    window.logout = async function() {
        await window.supabaseClient.auth.signOut();
        window.location.href = 'admin.html';
    };

    // Obtener el cliente (por si se necesita)
    window.getSupabase = function() {
        return window.supabaseClient;
    };
})();