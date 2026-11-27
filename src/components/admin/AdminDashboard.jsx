'use client';

import React from 'react';
import {
  Activity,
  BadgeCheck,
  Clock3,
  ExternalLink,
  LayoutDashboard,
  LogOut,
  Mail,
  RefreshCw,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react';

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase() || 'U';
}

function formatStatus(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export default function AdminDashboard() {
  const [admin, setAdmin] = React.useState(null);
  const [crmUrl, setCrmUrl] = React.useState('https://crm.zoho.com');
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [signingOut, setSigningOut] = React.useState(false);

  const loadDashboard = React.useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const [sessionResponse, usersResponse] = await Promise.all([
        fetch('/api/admin/session', { cache: 'no-store' }),
        fetch('/api/admin/users', { cache: 'no-store' }),
      ]);

      if (sessionResponse.status === 401 || usersResponse.status === 401) {
        window.location.assign('/admin/login');
        return;
      }

      const sessionBody = await sessionResponse.json();
      const usersBody = await usersResponse.json();
      if (sessionResponse.status === 403 || usersResponse.status === 403) {
        window.location.assign('/admin/login?error=admin-only');
        return;
      }
      if (!sessionResponse.ok) throw new Error(sessionBody.error || 'Could not verify the Zoho admin session.');
      if (!usersResponse.ok) throw new Error(usersBody.error || 'Could not load Zoho CRM users.');
      if (!Array.isArray(usersBody.users)) throw new Error('Zoho CRM returned an invalid user list.');

      setAdmin(sessionBody.user);
      setCrmUrl(sessionBody.crmUrl);
      setUsers(usersBody.users);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Could not load the admin dashboard.');
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      const response = await fetch('/api/admin/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('Could not sign out. Please try again.');
      window.location.assign('/admin/login');
    } catch (signOutError) {
      setError(signOutError instanceof Error ? signOutError.message : 'Could not sign out.');
      setSigningOut(false);
    }
  };

  const activeUsers = users.filter((user) => user.status.toLowerCase() === 'active').length;
  const inactiveUsers = users.filter((user) => user.status.toLowerCase() !== 'active').length;
  const adminUsers = users.filter((user) => user.profile.toLowerCase() === 'administrator').length;
  const normalizedSearch = search.trim().toLowerCase();
  const visibleUsers = users.filter((user) => {
    const matchesSearch = !normalizedSearch ||
      user.fullName.toLowerCase().includes(normalizedSearch) ||
      user.email.toLowerCase().includes(normalizedSearch) ||
      user.profile.toLowerCase().includes(normalizedSearch) ||
      user.role.toLowerCase().includes(normalizedSearch);
    const matchesStatus = statusFilter === 'all' || user.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="yeg-admin">
      <aside className="yeg-admin-sidebar">
        <a className="yeg-admin-brand" href="/" aria-label="YEG Academy home">
          <span className="yeg-admin-brand-mark">Y</span>
          <span>YEG <strong>ACADEMY</strong></span>
        </a>

        <div className="yeg-admin-sidebar-label">WORKSPACE</div>
        <a className="yeg-admin-nav-item is-active" href="/admin" aria-current="page">
          <LayoutDashboard size={17} aria-hidden="true" />
          <span>Overview</span>
        </a>
        <a className="yeg-admin-nav-item" href="#crm-users">
          <Users size={17} aria-hidden="true" />
          <span>CRM users</span>
          {!loading && <span className="yeg-admin-nav-count">{users.length}</span>}
        </a>

        <div className="yeg-admin-sidebar-bottom">
          <div className="yeg-admin-secure-note">
            <ShieldCheck size={18} aria-hidden="true" />
            <div>
              <strong>Secure access</strong>
              <span>Zoho administrator verified</span>
            </div>
          </div>
          <button className="yeg-admin-signout" type="button" onClick={handleSignOut} disabled={signingOut}>
            <LogOut size={17} aria-hidden="true" />
            {signingOut ? 'Signing out…' : 'Sign out'}
          </button>
        </div>
      </aside>

      <main className="yeg-admin-main">
        <header className="yeg-admin-topbar">
          <div>
            <p className="yeg-admin-breadcrumb">YEG Academy <span>/</span> Admin</p>
            <h1>Admin overview</h1>
          </div>
          <div className="yeg-admin-topbar-actions">
            <a className="yeg-admin-crm-link" href={crmUrl} target="_blank" rel="noreferrer">
              Open Zoho CRM <ExternalLink size={14} aria-hidden="true" />
            </a>
            <div className="yeg-admin-profile">
              <span className="yeg-admin-avatar">{initials(admin?.fullName || 'YEG Admin')}</span>
              <span className="yeg-admin-profile-copy">
                <strong>{admin?.fullName || 'YEG Administrator'}</strong>
                <small>CRM Administrator</small>
              </span>
            </div>
          </div>
        </header>

        <section className="yeg-admin-welcome">
          <div>
            <p className="yeg-admin-eyebrow">YOUR CRM, AT A GLANCE</p>
            <h2>Welcome back{admin?.fullName ? `, ${admin.fullName.split(' ')[0]}` : ''}</h2>
            <p>Monitor Zoho CRM users connected to your YEG Academy account.</p>
          </div>
          <div className="yeg-admin-welcome-icon"><Activity size={26} aria-hidden="true" /></div>
        </section>

        <section className="yeg-admin-stats" aria-label="CRM user summary">
          <article className="yeg-admin-stat-card">
            <span className="yeg-admin-stat-icon is-violet"><Users size={18} aria-hidden="true" /></span>
            <span className="yeg-admin-stat-label">Total CRM users</span>
            <strong>{loading ? '—' : users.length}</strong>
            <small>Zoho CRM directory</small>
          </article>
          <article className="yeg-admin-stat-card">
            <span className="yeg-admin-stat-icon is-green"><Activity size={18} aria-hidden="true" /></span>
            <span className="yeg-admin-stat-label">Active users</span>
            <strong>{loading ? '—' : activeUsers}</strong>
            <small>Active CRM accounts</small>
          </article>
          <article className="yeg-admin-stat-card">
            <span className="yeg-admin-stat-icon is-amber"><Clock3 size={18} aria-hidden="true" /></span>
            <span className="yeg-admin-stat-label">Inactive users</span>
            <strong>{loading ? '—' : inactiveUsers}</strong>
            <small>Inactive CRM accounts</small>
          </article>
          <article className="yeg-admin-stat-card">
            <span className="yeg-admin-stat-icon is-blue"><BadgeCheck size={18} aria-hidden="true" /></span>
            <span className="yeg-admin-stat-label">Administrators</span>
            <strong>{loading ? '—' : adminUsers}</strong>
            <small>Users with admin profile</small>
          </article>
        </section>

        <section className="yeg-admin-users-panel" id="crm-users">
          <div className="yeg-admin-panel-heading">
            <div>
              <p className="yeg-admin-eyebrow">ACCESS DIRECTORY</p>
              <h2>Zoho CRM users</h2>
              <p>Read-only directory synced directly from your Zoho CRM organization.</p>
            </div>
            <button className="yeg-admin-refresh" type="button" onClick={loadDashboard} disabled={loading}>
              <RefreshCw size={15} className={loading ? 'is-spinning' : ''} aria-hidden="true" />
              Refresh
            </button>
          </div>

          <div className="yeg-admin-table-tools">
            <label className="yeg-admin-search">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search name, email or role"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search users"
              />
            </label>
            <label className="yeg-admin-filter">
              <span className="yeg-admin-visually-hidden">Filter by status</span>
              <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                <option value="all">All statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </label>
          </div>

          {error && (
            <div className="yeg-admin-error" role="alert">
              <strong>Couldn’t load the CRM directory</strong>
              <span>{error}</span>
              <button type="button" onClick={loadDashboard}>Try again</button>
            </div>
          )}

          <div className="yeg-admin-table-wrap">
            <table className="yeg-admin-table">
              <thead>
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Role</th>
                  <th scope="col">Account status</th>
                  <th scope="col">Confirmation</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr><td className="yeg-admin-table-message" colSpan={5}>Loading users from Zoho CRM…</td></tr>
                )}
                {!loading && !error && visibleUsers.length === 0 && (
                  <tr>
                    <td className="yeg-admin-table-message" colSpan={5}>
                      {users.length ? 'No users match your search.' : 'No CRM users were returned.'}
                    </td>
                  </tr>
                )}
                {!loading && !error && visibleUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="yeg-admin-user-cell">
                        <span className="yeg-admin-user-avatar">{initials(user.fullName)}</span>
                        <span className="yeg-admin-user-copy">
                          <strong>{user.fullName}</strong>
                          <small><Mail size={12} aria-hidden="true" />{user.email || 'No email listed'}</small>
                        </span>
                      </div>
                    </td>
                    <td><span className={`yeg-admin-role${user.profile.toLowerCase() === 'administrator' ? ' is-admin' : ''}`}>{user.profile}</span></td>
                    <td>{user.role}</td>
                    <td><span className={`yeg-admin-status${user.status.toLowerCase() === 'active' ? ' is-active' : ' is-inactive'}`}><span />{formatStatus(user.status)}</span></td>
                    <td><span className={`yeg-admin-confirm${user.confirmed ? ' is-confirmed' : ''}`}>{user.confirmed ? 'Confirmed' : 'Pending'}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <footer className="yeg-admin-table-footer">
            <span>{loading ? 'Loading directory…' : `Showing ${visibleUsers.length} of ${users.length} users`}</span>
            <span><span className="yeg-admin-live-dot" /> Live from Zoho CRM</span>
          </footer>
        </section>

        <footer className="yeg-admin-page-footer">
          <span>YEG Academy admin portal</span>
          <span>Account permissions are managed in Zoho CRM.</span>
        </footer>
      </main>
    </div>
  );
}
