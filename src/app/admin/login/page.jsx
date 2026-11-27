import Link from 'next/link';

const LOGIN_ERRORS = {
  verification: 'Sign-in could not be verified. Please try again.',
  cancelled: 'Zoho sign-in was cancelled.',
  'admin-only': 'This dashboard is limited to active Zoho CRM Administrator accounts.',
  unavailable: 'Zoho sign-in is unavailable. Please contact your system administrator.',
  setup: 'Zoho is not configured for this website yet. Add the Zoho server environment settings and register the callback URL in Zoho API Console.',
};

export default async function AdminLoginPage({ searchParams }) {
  const params = await searchParams;
  const error = LOGIN_ERRORS[params?.error];

  return (
    <main className="yeg-admin-login">
      <section className="yeg-admin-login-card">
        <Link className="yeg-admin-brand" href="/" aria-label="YEG Academy home">
          <span className="yeg-admin-brand-mark">Y</span>
          <span>YEG <strong>ACADEMY</strong></span>
        </Link>

        <div className="yeg-admin-login-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 3 19 6v5c0 4.7-2.9 8-7 10-4.1-2-7-5.3-7-10V6l7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <p className="yeg-admin-eyebrow">YEG Academy administration</p>
        <h1>Administrator sign in</h1>
        <p className="yeg-admin-login-copy">
          Sign in with Zoho. Access is granted only to active users with the Administrator profile in your CRM.
        </p>

        {error && <p className="yeg-admin-alert" role="alert">{error}</p>}

        <a className="yeg-admin-zoho-button" href="/api/admin/auth/login">
          <span className="yeg-admin-zoho-mark" aria-hidden="true">Z</span>
          Continue with Zoho
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 10h10M10 5l5 5-5 5" />
          </svg>
        </a>

        <p className="yeg-admin-login-note">
          Your CRM credentials are handled by Zoho and are never stored by this site.
        </p>
        <Link className="yeg-admin-home-link" href="/">Back to yegmy.com</Link>
      </section>
    </main>
  );
}
