import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  return (
    <section aria-labelledby="homepage-faq-title" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 id="homepage-faq-title" className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
          Soalan Lazim
        </h2>
        <Accordion type="single" collapsible className="w-full border-t border-slate-200">
          <AccordionItem value="education-after-spm" className="border-slate-200">
            <AccordionTrigger className="w-full py-5 text-left text-base font-semibold text-slate-900 sm:text-lg">
              Apakah pilihan pendidikan yang tersedia selepas SPM?
            </AccordionTrigger>
            <AccordionContent className="text-base leading-7 text-slate-600">
              Selepas SPM, anda boleh meneroka beberapa laluan pendidikan seperti sijil, diploma,
              program asasi atau pra-diploma, bergantung pada keputusan, syarat kemasukan dan
              program yang ditawarkan. Kenal pasti minat, kelayakan dan matlamat pembelajaran anda
              sebelum memilih program.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
