import { BarChart, Shield, Users } from 'lucide-react'
import React from 'react'

export default function StatsSection() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-baseline gap-8">
      <div className="flex items-center gap-4">
        <div className="bg-gray-800 p-3 rounded-full">
          <Shield className="h-6 w-6 text-amber-500" />
        </div>
        <div>
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-gray-400">Cases Won</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-gray-800 p-3 rounded-full">
          <Users className="h-6 w-6 text-green-500" />
        </div>
        <div>
          <h3 className="text-3xl font-bold">10,000+</h3>
          <p className="text-gray-400">Clients Served</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-gray-800 p-3 rounded-full">
          <BarChart className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h3 className="text-3xl font-bold">97%</h3>
          <p className="text-gray-400">Success Rate</p>
        </div>
      </div>
    </div>
  )
}
