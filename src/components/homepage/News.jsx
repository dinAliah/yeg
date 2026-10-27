import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const newsItems = [
  {
    date: "MARCH 25, 2022",
    dateTime: "2022-03-25",
    title: "YEG Academy anjur kempen memilih kursus - Kosmo Digital",
    publisher: "Kosmo Digital",
    image: "/newss2.jpg",
    href: "https://www.kosmo.com.my/2022/03/25/yeg-academy-anjur-kempen-memilih-kursus-pengajian/",
  },
  {
    date: "FEBRUARY 3, 2023",
    dateTime: "2023-02-03",
    title: "Diploma Pengurusan Haji & Umrah YEG Academy banyak manfaat - BebasNews",
    publisher: "BebasNews",
    image: "/newss3.jpeg",
    href: "https://bebasnews.my/2023/02/03/diploma-pengurusan-haji-dan-umrah-yeg-academy-banyak-manfaat/",
  },
  {
    date: "MARCH 13, 2023",
    dateTime: "2023-03-13",
    title: "MISA, Ranaco Marine jalin kerjasama lahir tenaga mahir - Utusan Malaysia",
    publisher: "Utusan Malaysia",
    image: "/newss10.jpg",
    href: "https://www.utusan.com.my/nasional/2023/03/misa-renaco-marine-jalin-kerjasama-lahir-tenaga-mahir/",
  },
  {
    date: "MARCH 2, 2023",
    dateTime: "2023-03-02",
    title: "YEG Academy: A career-building platform in the field - Good News",
    publisher: "Good News",
    image: "/newss5.jpg",
    href: "https://www.goodnews.com.my/story/yeg-academy-a-career-building-platform-in-the-field-of-aviation/",
  },
  {
    date: "JANUARY 8, 2024",
    dateTime: "2024-01-08",
    title: "Peluang kerjaya cerah bidang TVET maritim - Kosmo",
    publisher: "Kosmo",
    image: "/newss9.jpg",
    href: "https://www.kosmo.com.my/2023/12/25/peluang-kerjaya-cerah-bidang-tvet-maritim/",
  },
  {
    date: "JANUARY 18, 2024",
    dateTime: "2024-01-18",
    title: "YEG Academy sasar 3,000 lepasan SPM sertai WBL - Kosmo",
    publisher: "Kosmo",
    image: "/newss11.jpg",
    href: "https://www.kosmo.com.my/2024/01/19/yeg-academy-sasar-3000-lepasan-spm-sertai-wbl/",
  },
  {
    date: "AUGUST 18, 2022",
    dateTime: "2022-08-18",
    title: "YEG Academy, MAHSA University jalin kerjasama perkasa kerjaya jururawat - MalaysiaGazette",
    publisher: "MalaysiaGazette",
    image: "/newss7.jpeg",
    href: "https://malaysiagazette.com/2023/12/05/yeg-academy-mahsa-university-jalin-kerjasama-perkasa-kerjaya-jururawat/",
  },
  {
    date: "APRIL 21, 2022",
    dateTime: "2022-04-21",
    title: "PU Amin, PU Riz dilantik sebagai pensyarah YEG Academy - Utusan Malaysia",
    publisher: "Utusan Malaysia",
    image: "/newss8.jpeg",
    href: "https://www.utusan.com.my/gaya/2022/04/pu-amin-pu-riz-dilantik-sebagai-pensyarah-yeg-academy/",
  },
]

function NewsCard({ item, featured = false }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-[0_12px_36px_rgba(15,23,42,0.10)] transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(15,23,42,0.16)] ${
        featured ? "min-h-[28rem] sm:min-h-[32rem] lg:min-h-[42rem]" : "min-h-40"
      }`}
    >
      <a
        href={item.href}
        aria-label={`${item.title} (${item.publisher})`}
        className="flex flex-1 flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-yellow-600"
      >
        <div className={`relative w-full shrink-0 overflow-hidden ${featured ? "h-64 sm:h-80 lg:h-[31rem]" : "h-44 sm:h-40"}`}>
          <Image
            src={item.image}
            alt=""
            fill
            sizes={featured ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 640px) 25vw, 100vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div
          className={`flex-1 border-t border-white/70 bg-white/80 p-4 backdrop-blur-xl transition-colors duration-300 group-hover:bg-white/95 ${
            featured ? "sm:p-6" : ""
          }`}
        >
          <div className="mb-2 flex items-center justify-between gap-3">
            <time
              dateTime={item.dateTime}
              className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-yellow-800 sm:text-xs"
            >
              {item.date}
            </time>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <h3
            className={`font-semibold leading-snug text-slate-900 ${
              featured ? "text-lg sm:text-2xl" : "text-sm sm:text-base"
            }`}
          >
            {item.title}
          </h3>
          <p className="mt-2 text-xs font-medium text-slate-600">{item.publisher}</p>
        </div>
      </a>
    </article>
  )
}

export default function News() {
  const [featuredStory, ...otherStories] = newsItems

  return (
    <section
      aria-labelledby="yeg-news-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-yellow-100/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-yellow-700">
              What&apos;s on
            </p>
            <h2
              id="yeg-news-title"
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              YEG News <span className="text-slate-400">&amp; Events</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Berita, kerjasama dan kisah terkini daripada YEG Academy.
            </p>
          </div>
          <a
            href="/careyeg"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-yellow-500 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Semua berita
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <NewsCard item={featuredStory} featured />
          <div className="grid gap-4 sm:grid-cols-2">
            {otherStories.map((item) => (
              <NewsCard key={item.href} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
