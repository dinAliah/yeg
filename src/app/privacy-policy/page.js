import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'

const policySections = [
  {
    title: '1. Information We Collect',
    content:
      'We may collect personal information such as your name, email address, phone number, education background, and course-related details when you submit forms, contact us, or register for our programmes.'
  },
  {
    title: '2. How We Use Your Information',
    content:
      'The information is used to respond to your enquiries, process applications, provide course information, improve our services, and maintain communication regarding admissions, events, and updates relevant to your interests.'
  },
  {
    title: '3. Data Protection and Security',
    content:
      'We take reasonable security measures to protect your data against unauthorised access, misuse, disclosure, alteration, or destruction. However, no method of transmission over the Internet is completely secure.'
  },
  {
    title: '4. Sharing of Information',
    content:
      'We do not sell or rent your personal information. We may share your information with trusted third parties only when necessary to provide services, comply with legal obligations, or support operational needs.'
  },
  {
    title: '5. Cookies and Website Analytics',
    content:
      'Our website may use cookies and analytics tools to understand visitor behaviour, improve website performance, and enhance user experience. You can manage or disable cookies through your browser settings.'
  },
  {
    title: '6. Your Rights',
    content:
      'You have the right to access, update, correct, or request deletion of your personal data, subject to applicable laws and valid request conditions. You may also withdraw consent for certain communications at any time.'
  },
  {
    title: '7. Contact Us',
    content:
      'If you have any questions regarding this Privacy Policy, please contact us using the information available on our website or through our official enquiry channels.'
  }
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <title>YEG Academy - Privacy Policy</title>
      <Navbar />

      <main className="bg-slate-50 text-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-500">
              YEG Academy
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base text-slate-600">
              Last updated: 23 September 2026
            </p>
          </header>

          <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="text-lg leading-8 text-slate-700">
              At YEG Academy, we respect your privacy and are committed to protecting the
              personal information you share with us. This Privacy Policy explains how we
              collect, use, store, and protect your information when you use our website,
              contact us, or register for our programmes.
            </p>

            {policySections.map((section) => (
              <section key={section.title} className="border-t border-slate-200 pt-7 first:border-t-0 first:pt-0">
                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-700">{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
