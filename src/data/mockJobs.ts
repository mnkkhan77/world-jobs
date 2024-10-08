import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    salaryMin: 120000,
    salaryMax: 180000,
    description: 'Join our team as a Senior Frontend Developer and help build the next generation of web applications.',
    requirements: ['5+ years React experience', 'TypeScript', 'State Management', 'CI/CD'],
    type: 'Full-time',
    postedDate: '2024-03-15',
    applicationUrl: 'https://example.com/jobs/1',
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    companyDescription: `TechCorp Solutions is a leading innovator in enterprise software solutions. Founded in 2010, we've been at the forefront of digital transformation, helping businesses modernize their operations through cutting-edge technology.

Our mission is to empower organizations with intuitive, powerful software tools that drive efficiency and growth. With offices in major tech hubs around the world and a team of over 500 talented professionals, we're committed to pushing the boundaries of what's possible in software development.

We foster a culture of innovation, collaboration, and continuous learning. Our teams work in an agile environment, using the latest technologies and best practices to deliver exceptional solutions to our global client base.`,
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Unlimited PTO policy',
      'Remote work flexibility',
      '401(k) matching',
      'Professional development budget',
      'Gym membership reimbursement',
      'Regular team events and retreats'
    ],
    culture: `At TechCorp Solutions, we believe in:
- Innovation: We encourage creative thinking and novel approaches to problem-solving
- Collaboration: Our success is built on strong teamwork and open communication
- Work-Life Balance: We support flexible schedules and prioritize employee wellbeing
- Diversity: We celebrate different perspectives and foster an inclusive environment
- Growth: We invest in our employees' professional development and career advancement`
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Innovation Labs',
    location: 'Remote',
    salaryMin: 90000,
    salaryMax: 150000,
    description: 'Looking for a Full Stack Developer to join our remote-first team.',
    requirements: ['React', 'Node.js', 'MongoDB', 'AWS'],
    type: 'Remote',
    postedDate: '2024-03-14',
    applicationUrl: 'https://example.com/jobs/2',
    companyLogo: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=100&h=100&fit=crop',
    companyDescription: `Innovation Labs is a dynamic startup revolutionizing the way businesses handle data analytics. Since our inception in 2018, we've been dedicated to making data-driven decisions accessible to companies of all sizes.

Our platform combines cutting-edge technology with user-friendly interfaces, enabling businesses to unlock the full potential of their data. As a remote-first company, we bring together talented individuals from around the globe to create innovative solutions.

We're backed by leading venture capital firms and have experienced rapid growth, serving clients across various industries.`,
    benefits: [
      'Competitive remote salary',
      'Health insurance stipend',
      'Home office setup allowance',
      'Flexible working hours',
      'Learning and development budget',
      'Regular virtual team building events',
      'Annual in-person company retreat',
      'Mental health support'
    ],
    culture: `Innovation Labs culture is built on:
- Remote-First: We embrace asynchronous work and global collaboration
- Transparency: Open communication and shared decision-making
- Learning: Continuous improvement and knowledge sharing
- Impact: Focus on delivering meaningful results
- Autonomy: Trust in our team members to manage their work effectively`
  }
];