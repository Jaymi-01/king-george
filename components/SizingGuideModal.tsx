"use client";
import { X } from "lucide-react";

interface SizingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export default function SizingGuideModal({ isOpen, onClose, category }: SizingGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-background border border-gray-200 shadow-2xl overflow-y-auto max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-primary hover:text-secondary transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-8">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-widest text-primary mb-6 text-center">
            Sizing Guide
          </h2>
          
          <div className="space-y-8">
             {/* Dynamic content based on category */}
             {(category === 'shoes' || category === 'slippers') ? (
               <>
                 <div>
                    <h3 className="font-heading text-xl font-bold mb-4">How to Measure Your Foot</h3>
                    <ol className="list-decimal list-inside space-y-3 text-neutral font-light">
                      <li>Place a piece of paper on the floor against a wall.</li>
                      <li>Stand on the paper with your heel against the wall.</li>
                      <li>Mark the longest part of your foot (usually the big toe) on the paper.</li>
                      <li>Measure the distance from the edge of the paper (heel) to the mark.</li>
                      <li>Compare your measurement (in cm/inches) to the chart below.</li>
                    </ol>
                 </div>
                 
                 <div>
                    <h3 className="font-heading text-xl font-bold mb-4">Size Chart (Men's)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-neutral">
                        <thead className="border-b border-gray-200 font-heading font-bold uppercase">
                          <tr>
                            <th className="py-2">US Size</th>
                            <th className="py-2">UK Size</th>
                            <th className="py-2">EU Size</th>
                            <th className="py-2">Inches</th>
                            <th className="py-2">CM</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           <tr><td className="py-2">7</td><td className="py-2">6</td><td className="py-2">40</td><td className="py-2">9.6"</td><td className="py-2">24.4</td></tr>
                           <tr><td className="py-2">8</td><td className="py-2">7</td><td className="py-2">41</td><td className="py-2">10.0"</td><td className="py-2">25.4</td></tr>
                           <tr><td className="py-2">9</td><td className="py-2">8</td><td className="py-2">42</td><td className="py-2">10.3"</td><td className="py-2">26.0</td></tr>
                           <tr><td className="py-2">10</td><td className="py-2">9</td><td className="py-2">43</td><td className="py-2">10.6"</td><td className="py-2">27.0</td></tr>
                           <tr><td className="py-2">11</td><td className="py-2">10</td><td className="py-2">44</td><td className="py-2">11.0"</td><td className="py-2">27.9</td></tr>
                           <tr><td className="py-2">12</td><td className="py-2">11</td><td className="py-2">45</td><td className="py-2">11.3"</td><td className="py-2">28.6</td></tr>
                        </tbody>
                      </table>
                    </div>
                 </div>
               </>
             ) : (
                <div>
                   <h3 className="font-heading text-xl font-bold mb-4">Belt Sizing</h3>
                   <p className="text-neutral font-light mb-4">
                     We recommend ordering a belt one size larger than your pant waist size. For example, if you wear 34" waist pants, order a 36" belt.
                   </p>
                    <table className="w-full text-left text-sm text-neutral">
                        <thead className="border-b border-gray-200 font-heading font-bold uppercase">
                          <tr>
                            <th className="py-2">Pant Size</th>
                            <th className="py-2">Belt Size</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           <tr><td className="py-2">30"</td><td className="py-2">32"</td></tr>
                           <tr><td className="py-2">32"</td><td className="py-2">34"</td></tr>
                           <tr><td className="py-2">34"</td><td className="py-2">36"</td></tr>
                           <tr><td className="py-2">36"</td><td className="py-2">38"</td></tr>
                           <tr><td className="py-2">38"</td><td className="py-2">40"</td></tr>
                        </tbody>
                      </table>
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
