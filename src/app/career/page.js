'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const FORM_LINK = 'https://forms.gle/rooVgjVipm83UGzf8'
const FORM_LABEL = 'Job Application Form - Recruitment Q4'

const departments = ['All', 'Administration', 'Creative and Branding', 'Advertising & IT', 'Finance', 'Business Development','Education']

// List of posters. Make sure each one has the right department.
const detail = [
  { gambar: '/career/CareerAdmin3.jpeg', width: 400, department: 'Administration', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerCreative1.jpeg', width: 400, department: 'Creative and Branding', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerYEG.jpeg', width: 400, department: 'Admin', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerIT1.jpeg', width: 400, department: 'Advertising & IT', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerYEG.jpeg', width: 400, department: 'Finance', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerOperation1.jpeg', width: 400, department: 'Administration', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerCreative2.jpeg', width: 400, department: 'Creative and Branding', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerEdu1.jpeg', width: 400, department: 'Education', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerEdu2.jpeg', width: 400, department: 'Education', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerSales1.jpeg', width: 400, department: 'Business Development', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerFPHU1.jpeg', width: 400, department: ['Business Development','Administration'], link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerSales3.jpeg', width: 400, department: 'Business Development', link: FORM_LINK, linkLabel: FORM_LABEL },
  
 
 
]

// Count how many posters a department has
function countPosters(department) {
  if (department === 'All') {
    return detail.length
  }

  const result = detail.filter(function (item) {
    return item.department === department
  })
  return result.length
}

// Get the posters to show for the selected department
function getPosters(department) {
  if (department === 'All') {
    return detail
  }

  return detail.filter(function (item) {
    return item.department === department
  })
}

function Career() {
  // Remember which department is selected
  const [selected, setSelected] = useState('All')

  const posters = getPosters(selected)

  function handleChange(event) {
    setSelected(event.target.value)
  }

  return (
    <main>
      <title>YEG Academy - Career</title>

      {/* Page title */}
       
      <section aria-labelledby="events-title" className="px-4 pb-8 pt-20 sm:px-6 lg:px-8">
              <div className="relative mx-auto flex min-h-56 max-w-7xl items-end overflow-hidden rounded-3xl bg-slate-1200 sm:min-h-72">
                <Image
                  src="/YEGacademy.jpeg"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/35 to-slate-900/10" />
                <div className="relative max-w-2xl px-6 py-8 text-white sm:px-10 sm:py-12">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">
                    YEG Academy ·Career Opportunities
                  </p>
                  <h1 id="events-title" className="text-3xl font-semibold tracking-tight sm:text-5xl">
                    Career Opportunities
                  </h1>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                    Discover what&apos;s happening and revisit the moments that bring our community together.
                  </p>
                </div>
              </div>
            </section>

      {/* Department dropdown */}
      <div className="flex justify-left items-center gap-3 px-8 py-4">
        <label htmlFor="department" className="font-semibold text-slate-700">
          Department:
        </label>
        <select
          id="department"
          value={selected}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
        >
          {departments.map(function (dept) {
            return (
              <option key={dept} value={dept}>
                {dept} ({countPosters(dept)})
              </option>
            )
          })}
        </select>
      </div>

      {/* Poster grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto container gap-4 py-8 px-4">
        {/* Message when there are no posters */}
        {posters.length === 0 && (
          <p className="col-span-full text-center text-slate-500">
            No openings in this department right now.
          </p>
        )}

        {posters.map(function (item) {
          // Posters with a link get a pointer cursor
          let imageClass = 'rounded'
          if (item.link) {
            imageClass = 'rounded cursor-pointer'
          }

          // Use the label as alt text, or a default text if there is no label
          let altText = 'YEG Academy ' + item.department + ' career opportunity'
          if (item.linkLabel) {
            altText = item.linkLabel
          }

          const image = (
            <Image
              className={imageClass}
              src={item.gambar}
              alt={altText}
              width={item.width}
              height={10}
              style={{ width: '100%', height: 'auto' }}
            />
          )

          // If the poster has a link, wrap the image in an <a>
          if (item.link) {
            return (
              <div key={item.gambar}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.linkLabel}
                >
                  {image}
                </a>
              </div>
            )
          }

          // Otherwise just show the image
          return <div key={item.gambar}>{image}</div>
        })}
      </div>
    </main>
  )
}

export default Career