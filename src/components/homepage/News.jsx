import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const newsItems = [
  {
    date: "MAY 24, 2026",
    title: "YEG Academy & Innovative Universities College Rakan Strategik Merancang Masa Depan Gemilang Industri Haji & Umrah!",
    publisher: "Malaysia Gazette",
    image: "/newss2.jpg",
    href: "https://malaysiagazette.com/2026/05/24/fakulti-pengurusan-haji-dan-umrah-yegcyberjaya-perkukuh-laluan-pendidikan-profesional-industri-haji-umrah/",
  },
  {
    date: "MAY 29, 2026",
    title: "YEG Academy & Innovative Universities College Rakan Strategik Merancang Masa Depan Gemilang Industri Haji & Umrah!",
    publisher: "KOSMO",
    image: "/newss3.jpeg",
    href: "https://www.kosmo.com.my/2026/05/29/berapa-orang-mutawif-kita-hari-ini-bergelar-profesional/",
  },
  {
    date: "MARCH 13, 2023",
    title: "MISA, Ranaco Marine jalin kerjasama lahir tenaga mahir",
    publisher: "Utusan Malaysia",
    image: "/newss10.jpg",
    href: "https://www.utusan.com.my/nasional/2023/03/misa-renaco-marine-jalin-kerjasama-lahir-tenaga-mahir/",
  },
  {
    date: "MARCH 2, 2023",
    title: "YEG Academy: A career-building platform in the field of aviation",
    publisher: "Good News",
    image: "/newss5.jpg",
    href: "https://www.goodnews.com.my/story/yeg-academy-a-career-building-platform-in-the-field-of-aviation/",
  },
  {
    date: "JANUARY 8, 2024",
    title: "Peluang kerjaya cerah bidang TVET maritim",
    publisher: "Kosmo",
    image: "/newss9.jpg",
    href: "https://www.kosmo.com.my/2023/12/25/peluang-kerjaya-cerah-bidang-tvet-maritim/",
  },
  {
    date: "JANUARY 18, 2024",
    title: "YEG Academy sasar 3,000 lepasan SPM sertai WBL",
    publisher: "Kosmo",
    image: "/newss11.jpg",
    href: "https://www.kosmo.com.my/2024/01/19/yeg-academy-sasar-3000-lepasan-spm-sertai-wbl/",
  },
  {
    date: "AUGUST 18, 2022",
    title: "YEG Academy, MAHSA University jalin kerjasama perkasa kerjaya jururawat",
    publisher: "MalaysiaGazette",
    image: "/newss7.jpeg",
    href: "https://malaysiagazette.com/2023/12/05/yeg-academy-mahsa-university-jalin-kerjasama-perkasa-kerjaya-jururawat/",
  },
  {
    date: "APRIL 21, 2022",
    title: "PU Amin, PU Riz dilantik sebagai pensyarah YEG Academy",
    publisher: "Utusan Malaysia",
    image: "/newss8.jpeg",
    href: "https://www.utusan.com.my/gaya/2022/04/pu-amin-pu-riz-dilantik-sebagai-pensyarah-yeg-academy/",
  },
]

export default function News() {
  return (
    <section aria-labelledby="yeg-news-title" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-3 sm:mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-700">
            What&apos;s on
          </p>
          <h2 id="yeg-news-title" className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            YEG News <span className="text-yellow-600">&amp; Events</span>
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            The latest stories, partnerships and milestones from across YEG Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {newsItems.map((item) => (
            <article
              key={item.href}
              className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-600"
                aria-label={`${item.title} — ${item.publisher} (opens in a new tab)`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
                      {item.publisher}
                    </span>
                    <span className="shrink-0 text-[11px] font-medium text-slate-500">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="flex-1 text-lg font-semibold leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-hover:text-yellow-700">
                    Read story
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
