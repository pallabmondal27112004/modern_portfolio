import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
} from 'react-icons/fa';
import { SiDjango, SiFlutter, SiLaravel, SiLivewire } from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';
// For GetX
import '../nevbar/nevbar.css';

const skills = [
  { icon: FaHtml5, label: 'HTML', color: '#e34c26' },
  { icon: FaCss3Alt, label: 'CSS', color: '#264de4' },
  { icon: FaJs, label: 'JavaScript', color: '#f0db4f' },
  { icon: FaReact, label: 'React', color: '#61dafb' },
  { icon: SiDjango, label: 'Django', color: '#092e20' },
  { icon: SiFlutter, label: 'Flutter', color: '#02569B' },
  { icon: FaPhp, label: 'PHP', color: '#8993be' },
  { icon: FaDatabase, label: 'SQL', color: '#4DB33D' },
  { icon: GiBrain, label: 'DSA', color: '#6C63FF' },
  { icon: SiLaravel, label: 'Laravel', color: '#FF2D20' },
  { icon: SiLivewire, label: 'Livewire', color: '#4E3F95' },

];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-5 px-5 text-center" style={{ overflowX: 'hidden' }}>
      <h2 className="mb-5 fw-bold display-5 text-dark nevitems"> My Skills</h2>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              className="d-flex flex-column align-items-center justify-content-center text-dark"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                rotate: 3,
                y: -10,
                transition: { type: 'spring', stiffness: 300 },
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                width: '140px',
                height: '140px',
                backgroundColor: '#FAE586',
                clipPath:
                  'polygon(0 20%, 20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%)',
                padding: '10px',
                fontWeight: 500,
                color: '#1c1c1c',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{
                  fontSize: '2.5rem',
                  color: skill.color,
                }}
              >
                <Icon />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="mt-2"
                style={{ fontSize: '0.9rem' }}
              >
                {skill.label}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
