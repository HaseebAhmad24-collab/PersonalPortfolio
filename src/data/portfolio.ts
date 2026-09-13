export const portfolioData = {
  personalInfo: {
    name: "Haseeb Ahmad",
    title: "DevOps Engineer",
    signature: "DevOps & Cloud Engineer",
    bio: "DevOps Engineer with over 1 year of experience in CI/CD automation, containerization, and cloud infrastructure. Proficient in AWS, Docker, Kubernetes, Jenkins, Terraform, and Linux administration, with a strong focus on optimizing deployments, improving release reliability, and ensuring scalable, secure infrastructure. Skilled in automating multi-environment deployment workflows (Dev, QA, Stage, Pre-Prod, and Production) to accelerate delivery and ensure production stability. Passionate about architecting zero-trust network topologies, high-availability clusters, and self-healing cloud systems while maintaining end-to-end observability with Prometheus/Grafana and rigorous security standards.",
    contact: {
      email: "haseebahmad7473@gmail.com",
      phone: "+92 328-4461291",
      linkedin: "https://www.linkedin.com/in/haseebahmad/",
      github: "https://github.com/HaseebAhmad24-collab",
      upwork: "https://www.upwork.com/freelancers/~01a7445e1d32cd572a",
      location: "Lahore, Pakistan"
    }
  },
  skills: [
    "AWS Cloud Platform",
    "Kubernetes & Docker",
    "CI/CD & Jenkins",
    "Terraform & IaC",
    "Linux Administration",
    "Ansible Automation",
    "CloudWatch & Prometheus",
    "Grafana Monitoring",
    "Git & Version Control"
  ],
  experience: [
    {
      id: 1,
      role: "DevOps Engineer",
      company: "LuminahTech",
      period: "Oct 2025 – Present",
      type: "Full-time",
      highlights: [
        "Managing and maintaining Infrastructure as Code (IaC) for cloud environments using Terraform.",
        "Implemented environment-based CI/CD pipelines (Dev/QA/Stage) using Jenkins with structured, reusable configurations.",
        "Handling multi-environment deployments across Dev, Stage, Pre-Prod, and Production, ensuring environment parity and controlled release flows.",
        "Deploying and managing containerized and serverless workloads on Amazon EKS and AWS Lambda.",
        "Actively involved in release management, coordinating deployments across environments and ensuring production stability.",
        "Working primarily with core AWS services (IAM, Secrets Manager, Route 53) and Git-based workflows to ensure secure, consistent, and automated deployments."
      ]
    },
    {
      id: 2,
      role: "DevOps Engineer Intern",
      company: "NETSOL Technologies Inc.",
      period: "Jul 2025 – Aug 2025",
      type: "Internship",
      highlights: [
        "Deployed a 3-tier notes application on AWS EKS using Kubernetes manifests, EBS-backed persistent storage, and CoreDNS service discovery (zero data loss).",
        "Architected a production-style 3-tier AWS VPC infrastructure with public/private subnet isolation, bastion host, and HTTPS-secured ALB.",
        "Built a self-scaling Django deployment using AWS Auto Scaling Group, CloudWatch metrics, and a Golden AMI (scaled from 1 to 4 instances).",
        "Implemented a Jenkins CI/CD pipeline triggered by webhooks, using AWS Secrets Manager for centralized secrets and least-privilege IAM roles.",
        "Configured Nginx as a reverse proxy and virtual host on AWS EC2 with Let's Encrypt SSL and URL-based routing."
      ]
    }
  ],
  projects: [
    {
      id: "01",
      title: "JusticeBridge",
      role: "AI & RAG System",
      description: "Currently building an agentic RAG system for Pakistani & Religious Law using Python & Gemini API. Implementing semantic search to retrieve accurate context from complex legal datasets.",
      techStack: ["Python", "Gemini API", "FastAPI", "Vector Databases"],
      image: "/projects/justicebridge.jpg" // Placeholder path
    },
    {
      id: "02",
      title: "AI-BOS",
      role: "Business Operating System",
      description: "Developed a full-stack system featuring Future Inventory Prediction models. Integrated an AI Assistant to automate customer support and business workflows.",
      techStack: ["Full-Stack", "Inventory Prediction Models", "AI Assistant"],
      image: "/projects/aibos.jpg" // Placeholder path
    },
    {
      id: "03",
      title: "DevOps & Full-Stack",
      role: "Telecom Billing System & Infrastructure",
      description: "Built an end-to-end Jenkins CI/CD Pipeline on AWS EC2 with Docker and SonarQube. Architected a Full-Stack Telecom Billing System to handle complex backend logic and data.",
      techStack: ["Jenkins", "AWS EC2", "Docker", "SonarQube", "Full-Stack"],
      image: "/projects/devops.jpg" // Placeholder path
    }
  ],
  education: [
    {
      id: 1,
      degree: "BS – Information Engineering Technology",
      institution: "Dept. of Technology | University of Lahore",
      duration: "2023 – 2027",
      status: "Continue"
    },
    {
      id: 2,
      degree: "F.Sc (Pre-Medical)",
      institution: "Sharif Education Complex | BISE-Lahore",
      duration: "",
      status: "Completed"
    }
  ]
};
