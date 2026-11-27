import { redirect } from 'next/navigation';
import AdminDashboard from '@/components/admin/AdminDashboard';
import { getSignedInAdmin } from '@/lib/zohoAdmin';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const session = await getSignedInAdmin();
  if (!session) redirect('/admin/login');

  return <AdminDashboard />;
}
