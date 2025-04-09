
import { useState } from "react";
import { motion } from "framer-motion";
import { Milestone } from "@/types/milestone";
import MilestoneModal from "./MilestoneModal";
import { Compass, Mountain, TreePine, Palmtree, Ship } from "lucide-react";

interface TreasureMapProps {
  onMilestoneClick: () => void;
}

const TreasureMap = ({ onMilestoneClick }: TreasureMapProps) => {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  // Sample milestones data - replace with your actual milestones
  const milestones: Milestone[] = [
    {
      id: 1,
      title: "First Meeting",
      date: "June 15, 2020",
      description: "The day we first met at the coffee shop downtown. You spilled your latte on my new shoes!",
      image: "/images/thumbnails/milestone-1-thumb.jpg",
      position: { x: 25, y: 65 }
    },
    {
      id: 2,
      title: "First Date",
      date: "July 10, 2020",
      description: "Our first official date at the botanical garden. We talked until they had to ask us to leave.",
      image: "/images/thumbnails/milestone-2-thumb.jpg",
      position: { x: 40, y: 40 }
    },
    {
      id: 3,
      title: "First Trip Together",
      date: "December 22, 2020",
      description: "Our weekend getaway to the mountains. Remember that tiny cabin with the leaky roof?",
      image: "/images/thumbnails/milestone-3-thumb.jpg",
      position: { x: 65, y: 25 }
    },
    {
      id: 4,
      title: "The Proposal",
      date: "March 8, 2024",
      description: "When you said yes under the stars at our favorite lookout point.",
      image: "/images/thumbnails/milestone-4-thumb.jpg",
      position: { x: 75, y: 45 }
    },
    {
      id: 5,
      title: "Wedding Day",
      date: "February 13, 2025",
      description: "The day we said 'I do' surrounded by our loved ones. The beginning of forever.",
      image: "/images/thumbnails/wedding1-thumb.jpg",
      position: { x: 85, y: 60 }
    }
  ];

  const handleOpenMilestone = (milestone: Milestone) => {
    setSelectedMilestone(milestone);
    onMilestoneClick();
  };

  const handleCloseMilestone = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden rounded-lg">
      {/* Parchment Background */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4b1c14dc-0f53-4912-b145-d3e0f35ef6a1.png')] bg-cover bg-center"></div>
      
      {/* Map Elements */}
      <div className="absolute w-full h-full">
        {/* Mountain Range */}
        <div className="absolute left-[40%] top-[30%] text-slate-400">
          <Mountain size={80} strokeWidth={1.5} className="fill-slate-200" />
        </div>
        
        {/* Forests */}
        <div className="absolute left-[20%] top-[40%]">
          <div className="flex space-x-1">
            <TreePine size={30} className="text-green-700" />
            <TreePine size={35} className="text-green-600" />
            <TreePine size={32} className="text-green-700" />
          </div>
        </div>
        
        <div className="absolute right-[30%] top-[20%]">
          <div className="flex space-x-1">
            <TreePine size={30} className="text-green-700" />
            <TreePine size={35} className="text-green-600" />
            <TreePine size={30} className="text-green-700" />
          </div>
        </div>
        
        {/* Palm Trees */}
        <div className="absolute left-[30%] bottom-[25%]">
          <div className="flex space-x-2">
            <Palmtree size={30} className="text-green-600" />
            <Palmtree size={35} className="text-green-700" />
          </div>
        </div>
        
        {/* River */}
        <div className="absolute w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M10,75 C30,65 40,80 60,70 C80,60 90,75 100,70" 
              stroke="#60a5fa" 
              strokeWidth="4" 
              fill="none" 
              className="opacity-60"
            />
          </svg>
        </div>
        
        {/* Ship/Boat */}
        <div className="absolute right-[15%] bottom-[28%] text-amber-800">
          <Ship size={30} className="fill-amber-700" />
        </div>
        
        {/* Compass */}
        <div className="absolute right-[10%] bottom-[10%]">
          <Compass size={50} className="text-slate-700" />
        </div>
      </div>
      
      {/* Decorative Path Between Milestones */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#D4AF37" />
          </marker>
        </defs>
        <path 
          d="M25,65 Q32,52 40,40 Q50,30 65,25 Q70,35 75,45 Q80,52 85,60" 
          stroke="#D4AF37" 
          strokeWidth="1" 
          fill="none" 
          strokeDasharray="3"
          markerEnd="url(#arrowhead)"
          className="drop-shadow-md"
        />
      </svg>
      
      {/* Milestones */}
      {milestones.map((milestone) => (
        <motion.div 
          key={milestone.id}
          className="absolute cursor-pointer"
          style={{ 
            left: `${milestone.position.x}%`, 
            top: `${milestone.position.y}%` 
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: milestone.id * 0.2 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => handleOpenMilestone(milestone)}
        >
          {milestone.id === 5 ? (
            // "X" marks the spot for the final milestone (wedding)
            <div className="w-14 h-14 flex items-center justify-center relative">
              <div className="absolute w-14 h-14 rotate-45 border-4 border-rose-600"></div>
              <div className="absolute w-14 h-14 -rotate-45 border-4 border-rose-600"></div>
              <div className="absolute -bottom-8 whitespace-nowrap text-xs md:text-sm font-bold text-white bg-black/50 px-2 py-1 rounded">
                {milestone.title}
              </div>
            </div>
          ) : (
            <div className="w-12 h-12 md:w-12 md:h-12 bg-amber-100 border-2 border-amber-800 rounded-full flex items-center justify-center text-amber-900 font-bold relative drop-shadow-lg">
              {milestone.id}
              <div className="absolute -bottom-8 whitespace-nowrap text-xs md:text-sm font-bold text-white bg-black/50 px-2 py-1 rounded">
                {milestone.title}
              </div>
            </div>
          )}
        </motion.div>
      ))}

      {/* Milestone Modal */}
      {selectedMilestone && (
        <MilestoneModal 
          milestone={selectedMilestone} 
          onClose={handleCloseMilestone} 
        />
      )}
    </div>
  );
};

export default TreasureMap;
