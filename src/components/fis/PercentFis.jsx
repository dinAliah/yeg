import React from 'react'
import { Progress } from "@/components/ui/progress"


function PercentFis() {
  return (
    <main>
      <div className="w-full h-full space-y-4">
        <div className="flex justify-between">
          <h className="text-lg font-semibold">Ilmu Ibadah</h>
          <h className="text-xl font-bold ">81%</h>
        </div>
        <div>
      <Progress value={81} />
      <div/>
    </div>
    <div className="flex justify-between">
      <h className="text-lg font-semibold">Kajian Sirah</h>
      <h className="text-xl font-bold ">57%</h>
    </div>
    <div>
      <Progress value={57} />
    </div>
    <div className="flex justify-between">
      <h className="text-lg font-semibold">Komunikasi Komersial</h>
      <h className="text-xl font-bold ">93%</h>
    </div>
    <div>
      <Progress value={93} />
    </div>
    </div>
    </main>
    
    
  )
}

export default PercentFis