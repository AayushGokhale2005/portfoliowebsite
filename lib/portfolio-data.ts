export type Repo = {
  name: string
  description: string
  url: string
  apiUrl: string
}

export type WorkExperience = {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export const profile = {
  name: "Aayush Gokhale",
  username: "AayushGokhale2005",
  email: "aayushgokhale375@gmail.com",
  linkedin: "https://linkedin.com/in/aayush-gokhale",
  github: "https://github.com/AayushGokhale2005",
  url: "https://codeberg.org/AayushGokhale2005",
  education: {
    school: "Rutgers University",
    location: "New Brunswick, NJ",
    degree: "Bachelor of Science in Computer Science",
    graduation: "May 2027",
  },
  skills: {
    languages: ["Python", "C++", "Java", "SQL", "JavaScript"],
    mlData: [
      "Scikit-learn",
      "PyTorch",
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "ETL Pipelines",
      "Parquet",
    ],
    backendCloud: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Neo4j",
      "AWS S3",
      "GCP",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
    tools: ["BigQuery", "GKE", "Cloud Logging", "Cloud Monitoring", "Vercel"],
  },
}

export const aboutMe = {
  summary: `Hi! I'm Aayush Gokhale, a Computer Science student at Rutgers University (Class of 2027) passionate about building reliable systems at the intersection of data engineering, machine learning, and cloud infrastructure.`,
  paragraphs: [
    "I enjoy taking projects from raw data to production, whether that's designing CI/CD pipelines on GCP, building ETL workflows over millions of financial records, or applying deep learning to microscopy images in a research lab.",
    "My experience spans DevOps, data engineering, ML research, and analytics. I like writing clean Python, shipping containerized services, and making technical work understandable for teammates and stakeholders.",
    "When I'm not coding, you'll find me exploring new repos, refining side projects like AskDocs (a C++ code editor), or learning more about cloud-native tooling.",
  ],
}

export const workExperience: WorkExperience[] = [
  {
    title: "DevOps Engineering Intern",
    company: "Universal Selfcare LLC",
    location: "Remote",
    period: "June 2026 – Present",
    bullets: [
      "Designed and implemented CI/CD pipelines for containerized microservices on GCP using Docker, GitHub Actions, and Kubernetes.",
      "Automated build, testing, and deployment workflows, reducing manual operational overhead and improving deployment reliability.",
      "Managed deployments to Google Kubernetes Engine (GKE) across development and staging environments with automated integration and smoke testing.",
      "Built and managed Docker container images and versioned artifacts using Google Artifact Registry.",
      "Implemented monitoring and observability with Google Cloud Monitoring and Cloud Logging.",
    ],
  },
  {
    title: "Research Assistant",
    company: "Rutgers RWJ Medical School",
    location: "New Brunswick, NJ",
    period: "Sept 2025 – Jan 2026",
    bullets: [
      "Applied Cellpose deep learning segmentation API in Python to process 10,000+ high-resolution microscopy images, improving cell detection accuracy by 20%.",
      "Built reproducible data preprocessing and feature extraction pipelines using Python, NumPy, and scikit-learn, reducing experiment rework by 25%.",
      "Engineered custom post-processing logic on top of the Cellpose API, boosting detection precision across diverse microscopy datasets.",
    ],
  },
  {
    title: "Data Engineering Intern",
    company: "Shoptaki Inc.",
    location: "Remote",
    period: "July 2025 – Sept 2025",
    bullets: [
      "Migrated 5M+ financial records to Parquet, reducing storage costs by 20% and query latency by 40%.",
      "Built ETL pipelines in Python processing multi-year datasets across 20 stock tickers for quantitative analysis.",
      "Presented weekly technical updates to CEO, aligning ML pipeline delivery timelines with cost targets.",
      "Designed a modular backtesting framework and ingested financial data from Polygon REST API into AWS S3 with DynamoDB metadata.",
    ],
  },
  {
    title: "Data Analyst",
    company: "Wicoff Museum",
    location: "Plainsboro, NJ",
    period: "May 2025 – June 2025",
    bullets: [
      "Preprocessed multi-year U.S. Census datasets using Pandas and NumPy, cutting missing-value errors by 35%.",
      "Built scikit-learn regression models with cross-validation, achieving 85% accuracy forecasting immigration trends.",
      "Applied K-Means clustering to identify 4 occupation segments; visualized findings in a Plotly dashboard.",
    ],
  },
]

export const repos: Repo[] = [
  {
    name: "StudentPerformancePredictor",
    description:
      "A linear regression model that predicts student final grades (G3) based on factors like previous grades, study time, failures, and absences. Includes data preprocessing, model training, and visualizations to analyze performance.",
    url: "https://codeberg.org/AayushGokhale2005/StudentPerformancePredictor",
    apiUrl: "https://codeberg.org/api/v1/repos/AayushGokhale2005/StudentPerformancePredictor",
  },
  {
    name: "ChatBot",
    description: "",
    url: "https://codeberg.org/AayushGokhale2005/ChatBot",
    apiUrl: "https://codeberg.org/api/v1/repos/AayushGokhale2005/ChatBot",
  },
  {
    name: "askdocs",
    description: "Low-level C++ code editor with custom text buffer management and multithreaded document processing.",
    url: "https://codeberg.org/AayushGokhale2005/askdocs",
    apiUrl: "https://codeberg.org/api/v1/repos/AayushGokhale2005/askdocs",
  },
  {
    name: "StockSnap",
    description: "",
    url: "https://codeberg.org/AayushGokhale2005/StockSnap",
    apiUrl: "https://codeberg.org/api/v1/repos/AayushGokhale2005/StockSnap",
  },
  {
    name: "finfreedom",
    description: "",
    url: "https://codeberg.org/AayushGokhale2005/finfreedom",
    apiUrl: "https://codeberg.org/api/v1/repos/AayushGokhale2005/finfreedom",
  },
  {
    name: "photosandroidapp",
    description: "",
    url: "https://codeberg.org/AayushGokhale2005/photosandroidapp",
    apiUrl: "https://codeberg.org/api/v1/repos/AayushGokhale2005/photosandroidapp",
  },
  {
    name: "BookManagementSys",
    description: "",
    url: "https://codeberg.org/AayushGokhale2005/BookManagementSys",
    apiUrl: "https://codeberg.org/api/v1/repos/AayushGokhale2005/BookManagementSys",
  },
  {
    name: "immigration-trends-plainsboro",
    description: "",
    url: "https://codeberg.org/AayushGokhale2005/immigration-trends-plainsboro",
    apiUrl: "https://codeberg.org/api/v1/repos/AayushGokhale2005/immigration-trends-plainsboro",
  },
  {
    name: "penscribe",
    description: "",
    url: "https://codeberg.org/AayushGokhale2005/penscribe",
    apiUrl: "https://codeberg.org/api/v1/repos/AayushGokhale2005/penscribe",
  },
  {
    name: "cli-app",
    description: "",
    url: "https://codeberg.org/AayushGokhale2005/cli-app",
    apiUrl: "https://codeberg.org/api/v1/repos/AayushGokhale2005/cli-app",
  },
]
