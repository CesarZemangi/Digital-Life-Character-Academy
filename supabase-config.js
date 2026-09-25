(function () {
    const defaultConfig = {
        url: "https://gnrwdizmmrtkbsxhjzlm.supabase.co",
        anonKey: "sb_publishable_RpN9Vv4ZajvMDvRgjdhq9g_dyBO4ERl"
    };

    const runtimeConfig = window.__SUPABASE_CONFIG__ || defaultConfig;
    const isPlaceholder = !runtimeConfig.url || !runtimeConfig.anonKey || runtimeConfig.url.includes("YOUR_PROJECT_ID") || runtimeConfig.anonKey.includes("YOUR_ANON_KEY");

    window.DigitalAcademySupabase = {
        config: runtimeConfig,
        isPlaceholder,
        getSupabaseClient: function () {
            if (!window.supabase || isPlaceholder) return null;

            return window.supabase.createClient(runtimeConfig.url, runtimeConfig.anonKey, {
                auth: {
                    persistSession: true,
                    autoRefreshToken: true,
                    detectSessionInUrl: true
                }
            });
        }
    };
})();
