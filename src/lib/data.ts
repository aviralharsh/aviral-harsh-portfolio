export const basics = {
  "name": "Aviral Harsh",
  "title": "DevOps / SRE / Infra",
  "subTitle": "Senior DevOps Engineer @ Paytm | Ex-Navi | CEH (Master) | Cybersecurity Enthusiast | Kubernetes | Docker | AWS | GCP | OCI",
  "location": "Bengaluru, Karnataka, India",
  "email": "aviralharsh05@gmail.com",
  "phone": "7397430455",
  "summary": "DevOps Engineer with 5+ years of experience architecting and automating scalable, secure infrastructure across AWS, GCP, and OCI. Proven track record of reducing infrastructure provisioning time by up to 80% and improving deployment consistency in high-availability, production-grade environments. Experienced in implementing and managing AI-driven automation workflows and integrating MLOps practices within DevOps ecosystems.",
  "links": [
    { "label": "LinkedIn", "url": "https://www.linkedin.com/in/aviral-harsh-557481152" },
    { "label": "GitHub", "url": "https://github.com/aviralharsh" },
    { "label": "Medium", "url": "https://medium.com/@aviralharsh05" }
  ]
};

export const topImpact = [
  { "metric": "80%", "context": "Reduction in infrastructure provisioning time" },
  { "metric": "4x", "context": "Surge traffic handling via NGINX optimizations" },
  { "metric": "99.98%", "context": "Platform availability maintained via proactive monitoring" }
];

export const experience = [
  {
    "company": "Paytm",
    "location": "Bengaluru, India",
    "roles": [
      {
        "role": "Senior DevOps Engineer",
        "date": "August 2025 – Present",
        "bullets": [
          "Developed Ansible playbooks to provision and configure RabbitMQ, Kafka clusters, and Redis on AWS EC2 with automated security hardening, IAM roles, and high-availability topology.",
          "Engineered NGINX gateway optimisations to handle 4× surge traffic through advanced connection tuning, caching, rate limiting, and load-balancing.",
          "Conducted load testing (ab testing/JMeter) and performance profiling to validate configuration improvements.",
          "Automated AWS cost anomaly detection using Python, CloudWatch, and Cost Explorer APIs, integrating alerts with Slack and email pipelines for proactive budget governance.",
          "Developed Python-based automation scripts for cloud resource scaling, monitoring data ingestion (Prometheus/Grafana), and service health verification.",
          "Designed and implemented AI-powered automation pipelines in n8n to analyze operational data, trigger alerts, and accelerate issue identification and remediation."
        ]
      }
    ]
  },
  {
    "company": "Navi Technologies Pvt. Ltd.",
    "location": "Bengaluru, India",
    "roles": [
      {
        "role": "DevOps Engineer II",
        "date": "January 2025 – August 2025",
        "bullets": [
          "Automated end-to-end production account setup on Oracle Cloud Infrastructure (OCI) using Terraform, building reusable modules for compartments, tenancies, KMS, IAM, and alerting.",
          "Replicated complex AWS architecture on OCI, ensuring parity in security, performance, and compliance standards.",
          "Designed and deployed fully automated Oracle Kubernetes Engine (OKE) environments with Terraform and Packer, covering AMI builds, network security groups, and kubelet/CNI optimization.",
          "Implemented autoscaling, HA topology, and cost-efficient compute provisioning, enabling repeatable IaC-based cluster rollouts.",
          "Partnered with the GenAI team to integrate AI tooling, deploying LLMs (DeepSeek-based) and onboarding GitHub Copilot and Windsurf IDE on Kubernetes.",
          "Enabled AI-driven developer workflows for 150+ engineers, improving productivity and code quality.",
          "Deployed Karpenter across all production Kubernetes environments to optimize node lifecycle management and cost efficiency.",
          "Configured dynamic provisioning with on-demand and spot instance fallback policies, reducing EC2 costs by ~25%."
        ]
      },
      {
        "role": "DevOps Engineer I",
        "date": "July 2022 – December 2024",
        "bullets": [
          "Configured Cloudflare as a global CDN and WAF replacement, improving latency by ~30% and reducing ingress traffic load by 40%.",
          "Enhanced DDoS mitigation beyond AWS WAF capabilities.",
          "Implemented centralized access management using Teleport, enforcing least-privilege, time-bound access; reduced unauthorized session risks by >90%.",
          "Automated end-to-end AWS account provisioning (VPC, EKS, TGW, IAM, SGs) using Terraform + Python, cutting manual effort by 80%.",
          "Developed in-house Prometheus exporters to extend metric visibility, improving incident detection time by 40%.",
          "Executed zero-downtime migration from Docker CRI → containerd across 13 clusters, improving efficiency by ~20%.",
          "Led Kubernetes upgrade (v1.22.17 → v1.24.17) across 13 production clusters with zero customer impact, reducing cycle time by 50%.",
          "Deployed Istio service mesh to secure inter-cluster communications, cutting cross-service latency by ~15%.",
          "Managed production-grade self-hosted Kubernetes clusters via kOps; conducted upgrades with <2 min downtime per cluster.",
          "Built hardened in-house AMIs reducing EC2 node bootstrap time by ~25% and improving image pull speed by 35%.",
          "Participated in 24×7 on-call rotation, maintaining 99.98% platform availability."
        ]
      }
    ]
  },
  {
    "company": "Quinbay",
    "location": "Bengaluru, India",
    "roles": [
      {
        "role": "DevOps Engineer",
        "date": "April 2021 – July 2022",
        "bullets": [
          "Responsible for monitoring and alerting of Blibli's production environment using Prometheus and Grafana.",
          "Led the effort for migrating 350+ micro-services on GKE from Helm2 to Helm3.",
          "Led the task of providing HA setup to Prometheus using Thanos.",
          "Improved upon Jenkins CI/CD pipeline to add functionality and reduce deployment times.",
          "Wrote Helm Charts for deployment of various apps on kubernetes.",
          "Developed Ansible Playbooks and Groovy pipeline to automate deployment of apps like Tomcat, Nginx, Springboot etc.",
          "Developed Ansible playbooks to streamline creation of Solr and Redis instances.",
          "Automated playbooks with Jenkins to reduce creation time during high-load events like Sales or Promo days.",
          "Part of the 24x7 on-call rotation to ensure availability and wellness of production services."
        ]
      },
      {
        "role": "DevOps Intern",
        "date": "January 2021 – April 2021",
        "bullets": [
          "Internship focused on DevOps practices and automation within the cloud ecosystem."
        ]
      }
    ]
  }
];

export const skills = {
  "core": [
    { "name": "Kubernetes", "level": 4, "desc": "Production-grade orchestration, EKS/GKE/OKE, Karpenter, Istio" },
    { "name": "Cloud", "level": 4, "desc": "Architecting solutions with AWS, GCP, and OCI" },
    { "name": "IaC", "level": 4, "desc": "Terraform, Ansible, CloudFormation" },
    { "name": "Python + Bash", "level": 4, "desc": "Automation, custom exporters, and cloud-native scripting" },
    { "name": "Nginx", "level": 4, "desc": "Gateway optimization, load balancing, and surge traffic tuning" },
    { "name": "Prometheus", "level": 4, "desc": "Monitoring, alerting, and Thanos HA setup" },
    { "name": "CI/CD", "level": 4, "desc": "Jenkins, GoCD, ArgoCD, Groovy pipelines" }
  ],
  "additional": [
    "Python", "Shell Scripting", "Linux (Servers & Containers)", "Istio Service Mesh", "Karpenter", "Teleport", "ELK Logging (ElasticSearch, Fluentd, Kibana)", "Git", "GitHub Copilot", "n8n AI Automation", "Ethical Hacking"
  ]
};

export const certifications = [
  "CEH (Master)",
  "Regional Mathematics Olympiad",
  "Machine Learning with Python - Level 1",
  "Running Redis at Scale"
];

export const education = [
  {
    "degree": "B.Tech. Computer Science",
    "school": "Vellore Institute of Technology",
    "date": "2017 – 2021",
    "details": "CGPA - 8.3"
  },
  {
    "degree": "CBSE XII",
    "school": "Delhi Public School",
    "date": "2016 – 2017",
    "details": "Scored Percentage - 83%"
  },
  {
    "degree": "CBSE X",
    "school": "Delhi Public School",
    "date": "2014 – 2015",
    "details": "Completed secondary education"
  }
];

export const languages = [
  "English (Full Professional)",
  "Python (Professional Working)",
  "C++ (Professional Working)",
  "C (Professional Working)"
];
