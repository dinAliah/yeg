import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Syarat() {
  return (
    <>
    <div className="p-2">
      <div className="py-2">
        <h className="lg:text-5xl text-xl font-bold py-3 text-center">Silibus Utama</h>
      </div>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger> Program Diploma Haji Umrah</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="bg-green-200">
              <p className="font-bolt text-lg">Semester 1</p>
              <li className="">Fiqh Haji & Umrah I (Ibadah Haji & Umrah)</li>
              <li className="">Introduction to Business</li>
              <li className="">Islamic Management</li>
              <li className="">Introduction to tourism & Hospitality</li>
              <li className="">Penghayatan Etika & Peradaban Bahasa Melayu komunikasi</li>
              <li className="">English Proficiency</li>
              <li className="">Travel Geography</li>
              </div>
              <div className="bg-green-100">
              <p className="font-bolt text-lg">Semester 2</p>
              <li className="">Fiqh Haji & Umrah II (Ibadah Haji & Umrah)</li>
              <li className="">Transportation Operation in Tourism</li>
              <li className="">Business Comunication</li>
              <li className="">Computer Applications</li>
              <li className="">Thirds Language (Arabic for Comunication I)</li>
              <li className="">Bahasa Kebangsaan A / Business Etique</li>
              </div>
              <div className="bg-green-200">
              <p className="font-bolt text-lg">Semester 3</p>
              <li className="">Fiqh Haji & Umrah III (Ibadah Haji & Umrah)</li>
              <li className="">Islamic Theology</li>
              <li className="">Third Language (Arabic for Comunication)</li>
              </div>
              <div className="bg-green-100">
              <p className="font-bolt text-lg">Semester 4</p>
              <li className="">Travel & Tour Agency Operation</li>
              <li className="">Profesional Ethics in Malaysia</li>
              <li className="">Airpot Handling & Procedures</li>
              <li className="">Human Resources Management</li>
              <li className="">Principle of Marketing</li>
              </div>
              <div className="bg-green-200">
              <p className="font-bolt text-lg">Semester 5</p>
              <li className="">Principle Operation Management</li>
              <li className="">Tourism Cross Culture and Heritage</li>
              <li className="">Outbound Tour</li>
              <li className="">E-commerce</li>
              <li className="">Community Service / Event Management</li>
              </div>
              <div className="bg-green-100">
              <p className="font-bolt text-lg">Semester 6</p>
              <li className="">Organization ehavior</li>
              <li className="">Tourism & Hospitality Law for Haji & Umrah</li>
              <li className="">Islamic Entreprenuership</li>
              <li className="">Strategic Management</li>
              </div>
              <div className="bg-green-100">
              <p className="font-bolt text-lg">Semester 7</p>
              <li className="">Industri Traning</li>
              </div>
          </div>
        </AccordionContent>
      </AccordionItem>      
      <AccordionItem value="item-2">
        <AccordionTrigger>Pra-Diploma</AccordionTrigger>
        <AccordionContent>
        <div className="bg-green-100">
          <p className="font-bolt text-lg">1st year</p>
          <li className="">Business English</li>
          <li className="">Principle of Management</li>
          <li className="">Introduction of Information Technology</li>
          <li className="">Micoeconomics</li>
          <li className="">Malaysian Studies / Bahasa Melayu Komunikasi 1</li>
          <li className="">Principles of Marketing</li>
          <li className="">Business Comunication</li>
          <li className="">Professional Ethics in Malaysia</li>
          <li className="">Human Resources Management</li>
          <li className="">Micoeconomics</li>
          <li className="">Basic Business Mathematics</li>
          <li className="">Principle of Accounting</li>
          <li className="">Operation Management</li>
          <li className="">Financial Management</li>
          <li className="">Business law</li>
          <li className="">Business Etiquette</li>
          <li className="">Business Services</li>
          </div>
          <div className="bg-green-100">
          <p className="font-bolt text-lg">2nd year</p>
          <li className="">Business Statics</li>
          <li className="">E-Commerce</li>
          <li className="">Organization Behaviour</li>
          <li className="">Enterprenuership</li>
          </div>          
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-3">
        <AccordionTrigger> Program Diploma Haji Umrah - WBL</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="bg-green-200">
              <p className="font-bolt text-lg">Semester 1</p>
              <li className="">Fiqh Haji & Umrah I (Ibadah Haji & Umrah)</li>
              <li className="">Introduction to Business</li>
              <li className="">Islamic Management</li>
              <li className="">Introduction to tourism & Hospitality</li>
              <li className="">Penghayatan Etika & Peradaban Bahasa Melayu komunikasi</li>
              <li className="">English Proficiency</li>
              <li className="">Travel Geography</li>
              </div>
              <div className="bg-green-100">
              <p className="font-bolt text-lg">Semester 2</p>
              <li className="">Fiqh Haji & Umrah II (Ibadah Haji & Umrah)</li>
              <li className="">Transportation Operation in Tourism</li>
              <li className="">Business Comunication</li>
              <li className="">Computer Applications</li>
              <li className="">Thirds Language (Arabic for Comunication I)</li>
              <li className="">Bahasa Kebangsaan A / Business Etique</li>
              </div>
              <div className="bg-green-200">
              <p className="font-bolt text-lg">Semester 3</p>
              <li className="">Fiqh Haji & Umrah III (Ibadah Haji & Umrah)</li>
              <li className="">Islamic Theology</li>
              <li className="">Third Language (Arabic for Comunication)</li>
              </div>
              <div className="bg-green-100">
              <p className="font-bolt text-lg">Semester 4</p>
              <li className="">Travel & Tour Agency Operation</li>
              <li className="">Profesional Ethics in Malaysia</li>
              <li className="">Airpot Handling & Procedures</li>
              <li className="">Human Resources Management</li>
              <li className="">Principle of Marketing</li>
              </div>
              <div className="bg-green-200">
              <p className="font-bolt text-lg">Semester 5</p>
              <li className="">Principle Operation Management</li>
              <li className="">Tourism Cross Culture and Heritage</li>
              <li className="">Outbound Tour</li>
              <li className="">E-commerce</li>
              <li className="">Community Service / Event Management</li>
              </div>
              <div className="bg-green-100">
              <p className="font-bolt text-lg">Semester 6</p>
              <li className="">Organization ehavior</li>
              <li className="">Tourism & Hospitality Law for Haji & Umrah</li>
              <li className="">Islamic Entreprenuership</li>
              <li className="">Strategic Management</li>
              </div>
              <div className="bg-green-100">
              <p className="font-bolt text-lg">Semester 7</p>
              <li className="">Industri Traning</li>
              </div>
          </div>
        </AccordionContent>
      </AccordionItem> */}
      <AccordionItem value="item-4">
        <AccordionTrigger>Bachelor in Haji & Umrah Management (New Student)</AccordionTrigger>
        <AccordionContent>
        <div className="bg-green-100">
          <p className="font-bolt text-lg">1st year</p>
          <li className="">Principle of Tourism</li>
          <li className="">Penghayatan Etika & peradaban english 1</li>
          <li className="">Information System in Organization</li>
          <li className="">Principle of Management</li>
          <li className="">Travel Geography in Tourism</li>
          <li className="">Fiqh in Hajj and Umrah 1</li>
          <li className="">English 2</li>
          <li className="">Touris and Transportation Management</li>
          <li className="">Third language (Arabic 1)</li>
          <li className="">Ethnic Relantions</li>
          <li className="">Bahasa Melayu komunikasi 2</li>
          <li className="">Islamic Tourism</li>
          <li className="">Fiqh in Hajj and Umrah 2</li>
          <li className="">Third language (Arabic 2)</li>
          <li className="">Group Dynamic</li>
          <li className="">Bahasa Kebangsaan A</li>
          </div>
          <div className="bg-green-100">
          <p className="font-bolt text-lg">2nd year</p>
          <li className="">Fiqh in Hajj and Umrah 3</li>
          <li className="">Tourism Cross Calture and Heritage</li>
          <li className="">Foundation of Accounting in Tourism</li>
          <li className="">Business Ethics</li>
          <li className="">Principle of Marketing</li>
          <li className="">Islamic Theology</li>
          <li className="">Human Resources Management</li>
          <li className="">Ticketing and Reservation</li>
          <li className="">Introduction to Statics</li>
          <li className="">Airpot Handling & Procedure</li>
          <li className="">Comunity Services</li>
          <li className="">Even Management</li>
          <li className="">Travel & Tour Agency Operation</li>
          <li className="">Travel Bahaviour</li>
          <li className="">Research Method</li>
          <li className="">Islamic Entrepreneurship</li>
          </div>
          <div className="bg-green-100">
          <p className="font-bolt text-lg">3nd year</p>
          <li className="">Customer Service</li>
          <li className="">Tour Guiding and Product design</li>
          <li className="">Undergraduate Project</li>
          <li className="">Organizational Behaviour</li>
          <li className="">Tour Management and Operation in Hajj & Umrah</li>
          <li className="">Industrial Traning</li>
          <li className="">Tourism Marketing Management in Hajj and Umrah</li>
          <li className="">Outbound Tour</li>
          <li className="">Tourism and Hospitality Law for Hajj and Umrah</li>
          </div>           
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Bachelor in Haji & Umrah Management (Alumni Student)</AccordionTrigger>
        <AccordionContent>
        <div className="bg-green-100">
          <p className="font-bolt text-lg">1st year</p>
          <li className="">Business Statistics</li>
          <li className="">Human Resource Management</li>
          <li className="">Operation Management</li>
          <li className="">Consumer Behavior</li>
          <li className="">Small Business Management</li>
          <li className="">Business Etiquette</li>
          <li className="">Quality Management</li>
          <li className="">Financial Accounting</li>
          <li className="">English Proficiency</li>
          <li className="">Ethnic Relantions</li>
          <li className="">Malaysian Legal Framework</li>
          <li className="">Professional Ethics in Malaysia</li>
          <li className="">Business Law</li>
          <li className="">Business Intelligence</li>
          <li className="">Digital Marketing</li>
          </div>
          <div className="bg-green-100">
          <p className="font-bolt text-lg">2nd year</p>
          <li className="">Business Information System</li>
          <li className="">Managerial Accounting</li>
          <li className="">Keterlibatan Komuniti</li>
          <li className="">Business and Business Environment</li>
          <li className="">Intro of Information Technology</li>
          <li className="">Pengajian Malaysia 2</li>
          <li className="">Marketing Essential</li>
          <li className="">Project Paper</li>
          <li className="">Principle of Management</li>
          <li className="">Principle of Marketing</li>
          <li className="">Organizational Behavior</li>
          <li className="">Innovation and Commercialization</li>
          <li className="">Professional Management and Leaders Pratice</li>
          <li className="">Managing A Successful Business Project</li>
          <li className="">Business Stratergy</li>
          <li className="">E-Commerce</li>
          </div>
        </AccordionContent>
      </AccordionItem>


      
    </Accordion>
    </div>
    </>
  )
}

export default Syarat




