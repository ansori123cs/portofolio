"use client";

import HeroSection from "@/sections/HeroSection";
import HuntersNoteSection from "@/sections/HuntersNoteSection";
import MapsOfTrialsSection from "@/sections/MapsOfTrialsSection";
import SkillsToolsSection from "@/sections/SkillsToolsSection";
import TimelineOfStagesSection from "@/sections/TimelineOfStagesSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col p-2 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HeroSection></HeroSection>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HuntersNoteSection></HuntersNoteSection>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SkillsToolsSection></SkillsToolsSection>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <MapsOfTrialsSection></MapsOfTrialsSection>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TimelineOfStagesSection></TimelineOfStagesSection>
      </motion.div>
    </div>
  );
}
