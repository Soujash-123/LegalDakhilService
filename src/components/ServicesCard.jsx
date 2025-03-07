import { CheckCircle, Scale, CircleCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  Button,
} from "./ui";

import React from "react";

export default function ServicesCard() {
  return (
    <Card className="bg-[#1a2035] border-gray-700 text-white rounded-xl overflow-hidden">
      <CardHeader className="bg-[#1e2542] pb-4 pt-6 px-6 flex-row items-center gap-4">
        <div className="bg-green-600 rounded-full p-2 flex items-center justify-center">
          <span className="text-xl font-bold text-white"><Scale /></span>
        </div>
        <div>
          <h3 className="text-xl font-bold">Legal Dakhil Services</h3>
          <p className="text-gray-400 text-sm">Premium legal assistance</p>
        </div>
        <div className="ml-auto">
          <span className="bg-gradient-to-r from-green-500 to-yellow-500 text-white text-md font-bold px-3 py-2 rounded-lg">
            Premium
          </span>
        </div>
      </CardHeader>

      <CardContent className="px-6 py-4 space-y-4">
        <div className="flex items-start gap-3">
          <CircleCheck className="text-amber-500 mt-0.5 flex-shrink-0" size={25} />
          <div>
            <h4 className="font-medium">Comprehensive Legal Consultation</h4>
            <p className="text-sm text-gray-400">
              Expert advice on all legal matters
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CircleCheck className="text-green-500 mt-0.5 flex-shrink-0" size={25}/>
          <div>
            <h4 className="font-medium">Document Preparation & Filing</h4>
            <p className="text-sm text-gray-400">
              Accurate preparation of all legal documents
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CircleCheck className="text-blue-500 mt-0.5 flex-shrink-0" size={25}/>
          <div>
            <h4 className="font-medium">Court Representation</h4>
            <p className="text-sm text-gray-400">
              Professional representation in all courts
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 bg-[#1e2542] flex items-center justify-between">
        <div>
            <p className="text-sm text-gray-400">Starting from</p>
            <p className="text-3xl font-bold">₹4,999</p>
        </div>
        <Button className="w-[25%] bg-gradient-to-r from-yellow-500 to-green-600 hover:from-green-600 hover:to-blue-500 transition-all duration-500 text-white">
          View Plans
        </Button>
      </CardFooter>
    </Card>
  );
}
