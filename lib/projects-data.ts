export interface Project {
  slug: string;
  id: string;
  title: string;
  label: string;
  githubUrl: string;
  description: string;
  details: string;
  problemStatement: string;
  architectureOverview: string;
  capabilities: string[];
  techStack: string[];
  implementationSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  environments?: {
    name: string;
    spec: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    slug: "three-tier-eks",
    id: "01",
    title: "Three-Tier Application Deployment on AWS EKS",
    label: "AWS / Kubernetes / Terraform",
    githubUrl: "https://github.com/Shaikh-aman-47",
    description:
      "Provisioned and deployed a three-tier application environment on Amazon EKS using Terraform, Docker, and Kubernetes.",
    details:
      "Provisioned AWS infrastructure for an Amazon EKS environment using Terraform, containerized application components with Docker, and deployed the workloads to Kubernetes using Deployments, Services, and Secrets.",
    problemStatement:
      "Deploying multi-tier web applications manually can lead to configuration drift, environment inconsistency, and networking complexities between frontend, backend APIs, and data tiers.",
    architectureOverview:
      "A modular AWS architecture where Terraform provisions an isolated VPC with public and private subnets, IAM roles, and an Amazon EKS cluster. Application container images are published to Amazon ECR and scheduled as Kubernetes Deployments and Services with Secrets management.",
    capabilities: [
      "Terraform-managed AWS infrastructure",
      "Dockerized application components",
      "Amazon ECR image workflow",
      "Kubernetes Deployments and Services",
      "Secrets management",
      "Helm-based deployment",
      "Grafana monitoring",
    ],
    techStack: [
      "AWS EKS",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Amazon ECR",
      "VPC",
      "IAM",
      "Helm",
      "MongoDB",
      "Grafana",
    ],
    implementationSteps: [
      {
        step: "01",
        title: "VPC & IAM Provisioning with Terraform",
        description:
          "Defined custom VPC with public and private subnets across multiple Availability Zones, NAT Gateways, route tables, and EKS node group IAM execution policies.",
      },
      {
        step: "02",
        title: "Amazon EKS Cluster Creation",
        description:
          "Configured managed node groups with autoscaling policies and mapped security group rules allowing inbound traffic to ingress controllers while protecting backend pods.",
      },
      {
        step: "03",
        title: "Containerization & Registry Publishing",
        description:
          "Built multi-stage Dockerfiles for frontend and backend tiers, tagged images with git commit hashes, and pushed to Amazon ECR repositories.",
      },
      {
        step: "04",
        title: "Kubernetes Manifests & Secrets",
        description:
          "Authored Kubernetes Deployment and ClusterIP/LoadBalancer Service manifests with environment variables sourced securely from Kubernetes Secrets.",
      },
      {
        step: "05",
        title: "Cluster Monitoring Integration",
        description:
          "Deployed Grafana dashboards and metric collectors to observe pod lifecycle, node resource utilization, and container health status.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge: "Pod-to-pod networking and persistent database state on EKS.",
        solution:
          "Leveraged Kubernetes ClusterIP services for stable internal DNS resolution and deployed the database layer as a dedicated StatefulSet with volume claims.",
      },
      {
        challenge: "Managing least-privilege IAM permissions for Kubernetes worker nodes.",
        solution:
          "Attached fine-grained AWS IAM policies restricting node privileges to necessary ECR pull and CloudWatch log streaming operations.",
      },
    ],
  },
  {
    slug: "modular-terraform-aws",
    id: "02",
    title: "Modular AWS Infrastructure with Terraform",
    label: "Terraform / AWS / Infrastructure as Code",
    githubUrl: "https://github.com/Shaikh-aman-47",
    description:
      "Built reusable Terraform infrastructure across development, staging, and production environments.",
    details:
      "Created reusable Terraform modules to provision AWS infrastructure across separate development, staging, and production environments. The infrastructure included EC2 instances, S3 buckets, and DynamoDB tables, with Terraform remote state using Amazon S3 and DynamoDB state locking.",
    problemStatement:
      "Managing separate AWS environments (Dev, Staging, Production) with copy-pasted configuration files causes configuration drift, accidental overrides, and state race conditions.",
    architectureOverview:
      "A modular Terraform layout with reusable root modules for compute, networking, and storage. Remote state is centralized in an encrypted Amazon S3 bucket with DynamoDB table locking to ensure safe, concurrent team automation.",
    capabilities: [
      "Terraform modules",
      "Variables & Outputs",
      "Environment separation",
      "Remote backend",
      "S3 state storage",
      "DynamoDB state locking",
      "Infrastructure reuse",
    ],
    techStack: [
      "Terraform",
      "AWS",
      "EC2",
      "S3",
      "DynamoDB",
      "VPC",
      "Terraform Modules",
    ],
    environments: [
      { name: "DEV", spec: "2 × EC2 t2.micro • S3 • DynamoDB" },
      { name: "STAGING", spec: "1 × EC2 t2.medium • S3 • DynamoDB" },
      { name: "PRODUCTION", spec: "1 × EC2 t2.small • S3 • DynamoDB" },
    ],
    implementationSteps: [
      {
        step: "01",
        title: "Modular Directory Hierarchy",
        description:
          "Structured code into reusable modules (compute, storage, security) consumed by environment-specific root workspaces (`dev/`, `staging/`, `prod/`).",
      },
      {
        step: "02",
        title: "Remote State Storage & Locking",
        description:
          "Configured Terraform S3 backend with server-side AES256 encryption and a DynamoDB table with `LockID` hash key to prevent concurrent state modifications.",
      },
      {
        step: "03",
        title: "Variable Parameterization",
        description:
          "Exposed configurable input variables for instance sizing, subnet placement, resource tags, and environment flags across each target workspace.",
      },
      {
        step: "04",
        title: "Automated Execution & Validation",
        description:
          "Implemented clean `terraform fmt`, `terraform validate`, and plan output generation workflows to verify configuration syntax before execution.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge: "Preventing accidental state overrides during concurrent pipeline runs.",
        solution:
          "Configured DynamoDB state locking which rejects any secondary `terraform apply` until the active execution has successfully committed its state.",
      },
      {
        challenge: "Maintaining parity between Dev and Production while allowing different instance sizes.",
        solution:
          "Used parameterized variables and `terraform.tfvars` files per environment while enforcing identical module logic and security group standards.",
      },
    ],
  },
  {
    slug: "containerized-flask-mysql",
    id: "03",
    title: "Containerized Two-Tier Flask Application",
    label: "Docker / Flask / MySQL",
    githubUrl: "https://github.com/Shaikh-aman-47",
    description:
      "Containerized a Flask application and MySQL database using Docker and Docker networking.",
    details:
      "Built a two-tier application consisting of a Flask application and MySQL database running as separate Docker containers. Configured container networking and service communication to demonstrate containerized application architecture.",
    problemStatement:
      "Running multi-service applications directly on host operating systems results in dependency conflicts ('works on my machine' syndrome) and complex database networking configurations.",
    architectureOverview:
      "Two isolated containerized services connected via a dedicated user-defined Docker bridge network. The Flask backend communicates with the MySQL database container using Docker's built-in DNS service discovery.",
    capabilities: [
      "Docker images & Dockerfiles",
      "Multi-container networking",
      "Service-to-service communication",
      "Database containerization & persistence",
      "Container lifecycle management",
    ],
    techStack: [
      "Docker",
      "Docker Compose",
      "Flask",
      "MySQL",
      "Docker Networking",
    ],
    implementationSteps: [
      {
        step: "01",
        title: "Flask Containerization",
        description:
          "Authored an optimized Dockerfile using Python Alpine base, defined strict dependency installations, and configured entrypoint commands.",
      },
      {
        step: "02",
        title: "Database Container & Volume Persistence",
        description:
          "Configured the MySQL container with initialization scripts, root password management via environment variables, and Docker named volumes for data persistence.",
      },
      {
        step: "03",
        title: "User-Defined Bridge Network",
        description:
          "Provisioned an isolated Docker network enabling automatic DNS resolution between `flask-app` and `mysql-db` without exposing database ports to the host.",
      },
      {
        step: "04",
        title: "Compose Orchestration",
        description:
          "Assembled multi-container lifecycle in `docker-compose.yml` with health checks and restart policies for rapid local reproducibility.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge: "Database connection race condition on startup (Flask starting before MySQL is ready to accept connections).",
        solution:
          "Implemented database connection retry logic with exponential backoff in the Flask application, and configured Docker healthchecks.",
      },
      {
        challenge: "Preserving database records across container restarts and rebuilds.",
        solution:
          "Mapped a persistent Docker volume to `/var/lib/mysql` to decouple storage from the container lifecycle.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
