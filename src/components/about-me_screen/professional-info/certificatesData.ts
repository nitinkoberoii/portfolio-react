// Certificate data for the About Me certificates section

export interface CertificateData {
  org: string;
  date: string;
  content: string;
  pdfPath: string;
}

export const CERTIFICATES: CertificateData[] = [
  {
    org: 'Medhwan EduTech',
    date: 'July 2025',
    content: 'Certificate of Service by Medhwan EduTech for freelance Backend Development on Prajawal',
    pdfPath: '/certificates/Nitin-freelance-cert-medhwan.pdf',
  },
  {
    org: 'Nvidia',
    date: 'September 2024',
    content: 'Certificate of Competency by NVIDIA for completing the Fundamentals of Deep Learning, demonstrating core understanding of neural networks and AI concepts.',
    pdfPath: '/certificates/Nvidia-cert.pdf',
  },
  {
    org: 'Thesis Ace Writers',
    date: 'September 2024',
    content: 'Internship Completion Letter by Thesis Ace Writers, powered by iNeuBytes Technology and Services Pvt. Ltd.',
    pdfPath: '/certificates/Nitin-Intern-cert-TAW.pdf',
  },
  {
    org: 'SSOC 2.0',
    date: 'Jun - Jul 2023',
    content: 'Certificate of Participation in Social Summer of Code (SSOC 2.0), organized by Hack2Skill and Social, for contributing to open-source projects during Jun–Jul 2025.',
    pdfPath: '/certificates/SSOC-cert.pdf',
  },
]; 