'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const FORM_LINK = 'https://forms.gle/rooVgjVipm83UGzf8'
const FORM_LABEL = 'Job Application Form - Recruitment Q4'

const departments = ['All', 'Administration', 'Creative and Branding', 'Advertising & IT', 'Finance', 'Business Development','Education']

// List of posters. Make sure each one has the right department.
const detail = [
  { gambar: '/career/CareerAdmin3.jpeg', width: 400, department: 'Administration', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerOperation1.jpeg', width: 400, department: 'Administration', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerYEG.jpeg', width: 400, department: 'Admin', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerIT1.jpeg', width: 400, department: 'Advertising & IT', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerYEG.jpeg', width: 400, department: 'Finance', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerCreative1.jpeg', width: 400, department: 'Creative and Branding', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerCreative2.jpeg', width: 400, department: 'Creative and Branding', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerEdu1.jpeg', width: 400, department: 'Education', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerEdu2.jpeg', width: 400, department: 'Education', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerSales1.jpeg', width: 400, department: 'Business Development', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerSales3.jpeg', width: 400, department: 'Business Development', link: FORM_LINK, linkLabel: FORM_LABEL },
  { gambar: '/career/CareerFPHU1.jpeg', width: 400, department: ['Business Development','Administration'], link: FORM_LINK, linkLabel: FORM_LABEL },
 
 
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
      <div className="pt-16">
        <div className="flex justify-center py-8">
          <div className="group w-3/4 h-full grid justify-center">
            <span className="text-slate-700 font-bold text-4xl bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
              CAREER YEG ACADEMY
            </span>
          </div>
        </div>
      </div>

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