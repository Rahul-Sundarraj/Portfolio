/* ==========================================================================
   RAHUL O S - PORTFOLIO INTERACTIVITY SCRIPT
   ========================================================================== */

// --------------------------------------------------------------------------
// A. PROJECT DATABASE (Extracted from Markdown project files)
// --------------------------------------------------------------------------
const projectsData = {
  1: {
    title: "Ticket Management System (ITSM)",
    category: "Industry Consultancy Project",
    color: "#E8604C",
    stats: [
      { val: "DDD", lbl: "Architecture" },
      { val: "PostgreSQL", lbl: "Database" },
      { val: "Postman", lbl: "API QA Suite" },
      { val: "Consultancy", lbl: "Project Type" }
    ],
    tech: ["PostgreSQL", "Domain-Driven Design", "Postman", "SLA Engine", "Escalation Logic", "Knowledge Base"],
    github: "https://github.com/Rahul-Sundarraj", // Consultancy project code is private/under NDAs
    demo: "#",
    description: "Contributed to a full-scale IT Service Management (ITSM) ticketing platform designed for real-world industrial and commercial deployment. Built using Domain-Driven Design (DDD) principles to ensure clean boundaries between Ticket, SLA, Access, and Knowledge Base bounded contexts. Designed the core database schema in PostgreSQL, implementing dynamic SLA deadline calculations based on regional business hours, timer pause/resume triggers, and automated escalations. Built a comprehensive API QA suite in Postman to validate access controls, routing rules, and notification flows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    chartType: "donut",
    chartData: {
      labels: ["Ticket Bounded Context", "SLA Timing & Escalations", "Access Control & Roles", "Knowledge Base Module"],
      values: [35, 25, 20, 20],
      colors: ["#E8604C", "#f08070", "#f5b0a7", "#ffe5e2"]
    }
  },
  2: {
    title: "TEKHORA'26 Symposium",
    category: "Team Academic Project",
    color: "#F5C542",
    stats: [
      { val: "100%", lbl: "Live Payments" },
      { val: "React/Vite", lbl: "Frontend Stack" },
      { val: "Firebase", lbl: "Functions/Auth" },
      { val: "Custom Domain", lbl: "Hostinger/DNS" }
    ],
    tech: ["React + Vite", "Node.js + Express", "Firebase Firestore", "Cashfree SDK", "Webhooks", "DNS Configuration"],
    github: "https://github.com/Gojo-Satoru-git/TEKHORA26",
    demo: "https://tekhora26.live/",
    description: "Built the event registration, seat management, and payment core for TEKHORA'26, a production event registration portal for a college symposium. Handled capacity management and seat locking, layered in Cashfree gateway integrations, and calculated processing fees (2% gateway fees + 18% GST). Designed and implemented a robust payment webhook listener on Firebase Functions that verified signatures, processed callbacks, updated Firestore statuses ('PENDING' to 'PAID' or 'FAILED'), and triggered automated confirmation emails with QR codes.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    chartType: "donut",
    chartData: {
      labels: ["React Frontend UI", "Express Backend APIs", "Firebase Database/Auth", "Cashfree SDK Integrations"],
      values: [30, 30, 25, 15],
      colors: ["#F5C542", "#f7d26c", "#f9e097", "#fdf4d2"]
    }
  },
  3: {
    title: "Intelligent On-Board Weighing (OBW)",
    category: "Sponsored Research Project",
    color: "#2A9D8F",
    stats: [
      { val: "1.57 kg", lbl: "Overall MAE" },
      { val: "Raspberry Pi 4", lbl: "Deployment Hardware" },
      { val: "int8", lbl: "TF Lite Quantization" },
      { val: "OBD-II @ 1Hz", lbl: "ECU Telemetry Stream" }
    ],
    tech: ["Python", "GRU RNN", "TensorFlow Lite", "Raspberry Pi 4", "OBD-II (ELM327)", "Signal Processing (Butterworth)"],
    github: "https://github.com/Rahul-Sundarraj/Intelligent-On-Board-Weighing-OBW-System",
    demo: "#",
    description: "Trained a deep learning mass-estimator that predicts a vehicle's weight directly from engine performance metrics, eliminating the need for expensive physical load cells. Preprocessed ECU telemetry using Butterworth filtering, trained a 2-layer Gated Recurrent Unit (GRU) model, and performed Leave-One-Mass-Out (LOMO) validation showing high generalization capacity. Shrank the model (1.2MB to 400KB) through int8 TensorFlow Lite quantization and deployed it on a Raspberry Pi 4 edge node connected to the OBD-II port, serving inference in under 80ms and updating a 16x2 LCD.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    chartType: "bar",
    chartData: {
      labels: ["1000kg (LOMO)", "2000kg (LOMO)", "3000kg (LOMO)", "4000kg (LOMO)", "5000kg (LOMO)", "Overall System"],
      values: [2.10, 1.85, 1.40, 1.65, 2.30, 1.57],
      yLabel: "MAE (kg)",
      colors: ["#2A9D8F", "#2A9D8F", "#2A9D8F", "#2A9D8F", "#2A9D8F", "#E8604C"]
    }
  },
  4: {
    title: "ADS-B Anomaly Detection",
    category: "Deep Learning Mini Project",
    color: "#3D7EA6",
    stats: [
      { val: "0.898", lbl: "LSTM-VAE AUC-ROC" },
      { val: "0.566", lbl: "Transformer AUC-ROC" },
      { val: "14.2K", lbl: "OpenSky Trajectories" },
      { val: "Custom ELBO", lbl: "Training Loss Loop" }
    ],
    tech: ["TensorFlow", "Keras Custom Loops", "Variational Autoencoders", "Attention Mechanism", "Flask Dashboard", "D3.js / Chart.js"],
    github: "https://github.com/Rahul-Sundarraj/ADSB_Anomaly_Detection",
    demo: "https://dlprj-anomaly-dashboard-production.up.railway.app",
    description: "Designed and trained two deep learning architectures (a baseline LSTM-VAE and an attention-enhanced Transformer-LSTM Fusion VAE) to isolate flight anomaly spoofing on OpenSky Network trajectory records. Built a sliding-window data loader, implemented the reparameterization trick with custom ELBO loss, and injected noise anomalies to measure performance. The project documents a transparent comparative review of why the baseline LSTM-VAE outperformed the complex Transformer under restricted data scales, serving analysis on an interactive Flask comparison screen.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    chartType: "groupedBar",
    chartData: {
      labels: ["Accuracy", "Precision", "Recall", "F1-Score", "AUC-ROC"],
      datasets: [
        { label: "LSTM-VAE (Baseline)", values: [95.40, 74.29, 12.15, 20.88, 89.80], color: "#3D7EA6" },
        { label: "Transformer VAE", values: [94.46, 12.90, 1.87, 3.27, 56.60], color: "#9B5DE5" }
      ],
      yLabel: "% Score / Metric"
    }
  },
  5: {
    title: "Hostel Outpass System",
    category: "Full-Stack Backend Project",
    color: "#9B5DE5",
    stats: [
      { val: "Node.js", lbl: "Backend Runtime" },
      { val: "React Native", lbl: "Frontend App" },
      { val: "2 Roles", lbl: "Student & RC Warden" },
      { val: "14", lbl: "Active REST API Routes" }
    ],
    tech: ["Node.js", "Express.js", "React Native (Expo)", "Role-Based Authentication", "REST APIs", "CRUD Workflows"],
    github: "https://github.com/Rahul-Sundarraj/HostelOP",
    demo: "#",
    description: "My first full-stack project. Built the complete Node.js/Express.js backend powering a mobile campus hostel outpass permission manager. Designed role-based routing enabling students to create requests, monitor status histories, and update profiles, and Resident Coordinators (RCs) to retrieve pending student batches, approve/reject outpasses with text feedback, and view historic logs. Collaborated on frontend integration, wiring React Native Expo clients to REST API endpoints using Retrofit/Axios.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=600&q=80",
    chartType: "donut",
    chartData: {
      labels: ["Authentication Routes", "Profile & User Roster API", "Outpass Lifecycle Workflows"],
      values: [2, 6, 6],
      colors: ["#9B5DE5", "#b485ee", "#d2b4f5"]
    }
  },
  6: {
    title: "Satellite Orbit Prediction",
    category: "Academic Machine Learning",
    color: "#FF9F1C",
    stats: [
      { val: "0.9999 R²", lbl: "LSTM Predictor" },
      { val: "1.0000 R²", lbl: "Random Forest" },
      { val: "SGP4 + ML", lbl: "Hybrid Correction" },
      { val: "Flask/React", lbl: "Full Stack UI" }
    ],
    tech: ["Python", "PyTorch / TensorFlow", "Scikit-Learn", "SGP4 Propagator", "Skyfield API", "React + Flask"],
    github: "https://github.com/Rahul-Sundarraj/SatelliteOrbitPrediction",
    demo: "https://mlm-prj.web.app/",
    description: "Engineered a satellite tracking predictor using TLE records. Benchmarked classical estimators against an LSTM deep sequence model, and designed a hybrid physics+ML corrector: SGP4 models deterministic orbital physics, and a neural network predicts SGP4's error residuals against true satellite coordinates. Deployed the LSTM backend behind a Flask server and built a React visualization dashboard mapping actual vs predicted orbits in space.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    chartType: "bar",
    chartData: {
      labels: ["Linear Reg", "Gradient Boosting", "Random Forest", "LSTM Variant 1", "LSTM Variant 2"],
      values: [0.019, 0.380, 1.000, 0.9997, 0.9999],
      yLabel: "Model R² Score",
      colors: ["#E8604C", "#F5C542", "#2A9D8F", "#3D7EA6", "#9B5DE5"]
    }
  },
  7: {
    title: "Email Reminder System",
    category: "Personal Full-Stack",
    color: "#00F5D4",
    stats: [
      { val: "MongoDB Atlas", lbl: "Cloud Database" },
      { val: "node-schedule", lbl: "Trigger Engine" },
      { val: "Nodemailer", lbl: "SMTP Server" },
      { val: "Render", lbl: "Live Deployment" }
    ],
    tech: ["React.js", "Node.js + Express", "MongoDB Atlas", "Nodemailer", "Node-Schedule", "Axios Rest Integrations"],
    github: "https://github.com/Rahul-Sundarraj/Email-Remainder",
    demo: "https://email-remainder-1.onrender.com/",
    description: "Built a fully automatic calendar reminder system from scratch. Users configure custom text notifications, emails, and exact trigger dates/times in a clean React interface. Express backend persists alerts to MongoDB Atlas, and a backend schedule daemon (node-schedule) polls and automates email dispatch via Nodemailer SMTP. Deployed both frontend and backend to live environments on Render.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=600&q=80",
    chartType: "donut",
    chartData: {
      labels: ["React UI & Axios", "Express Backend APIs", "MongoDB Persistence", "Scheduling & Nodemailer"],
      values: [25, 45, 20, 10],
      colors: ["#00F5D4", "#50fce7", "#90fdf1", "#cbfefa"]
    }
  },
  8: {
    title: "YOLOv8 Spacecraft Detection",
    category: "Computer Vision Project",
    color: "#F15BB5",
    stats: [
      { val: "95.3% mAP", lbl: "YOLOv8 Model" },
      { val: "99.5%", lbl: "Debris Precision" },
      { val: "110,000", lbl: "Dataset Scale" },
      { val: "YOLOv5", lbl: "Baseline Benchmark" }
    ],
    tech: ["YOLOv8 & YOLOv5", "OpenCV Image Preprocess", "Roboflow / BBox Conversion", "Data Augmentation", "Ablation Study"],
    github: "https://github.com/Rahul-Sundarraj/CV_Project_Spark",
    demo: "#",
    description: "Developed an automated spacecraft type identification and debris hazard classification model using the SPARK 2022 dataset (~110K images across 11 classes). Programmed custom scripts converting raw corner bounding boxes `(x1,y1)-(x2,y2)` into normalized YOLO parameters, executed hyperparameter tuning with Albumentations augmentations, and conducted a comparative ablation study proving anchor-free decoupled head architectures outpace anchor-based models.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80",
    chartType: "groupedBar",
    chartData: {
      labels: ["mAP@0.5", "Precision", "Recall"],
      datasets: [
        { label: "YOLOv5 Baseline", values: [83.2, 85.0, 82.5], color: "#7209B7" },
        { label: "YOLOv8 Fine-tuned", values: [95.3, 93.7, 90.1], color: "#F15BB5" }
      ],
      yLabel: "% Performance Score"
    }
  },
  9: {
    title: "Smart Agriculture Recommender",
    category: "Precision Farming Team Project",
    color: "#588157",
    stats: [
      { val: "99.55% Acc", lbl: "Naive Bayes Winner" },
      { val: "10 Models", lbl: "Benchmarked" },
      { val: "22 Crops", lbl: "Target Categories" },
      { val: "Joblib", lbl: "Model Serialization" }
    ],
    tech: ["Python", "Scikit-Learn", "Flask APIs", "Pandas & NumPy", "StandardScaler", "NPK Guidance Engine"],
    github: "https://github.com/Rahul-Sundarraj/SmartAgriRecommender",
    demo: "#",
    description: "Co-authored aprecision farming crop recommendation portal. Evaluated 10 classification algorithms on a multi-feature dataset (Nitrogen, Phosphorus, Potassium, temperature, humidity, pH, rainfall) predicting the optimal crop out of 22 classes. Programmed a Flask API endpoint serving predictions, organic fertilizer guidance, and real-time local market commodity pricing from the Tamil Nadu Agricultural Department.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    chartType: "bar",
    chartData: {
      labels: ["Naive Bayes", "Random Forest", "Bagging", "Decision Tree", "KNN", "SVM", "Logistic Reg", "Extra Trees", "AdaBoost"],
      values: [99.55, 99.32, 98.86, 98.18, 97.05, 96.82, 91.82, 91.14, 14.55],
      yLabel: "Accuracy (%)",
      colors: ["#588157", "#588157", "#588157", "#588157", "#588157", "#588157", "#588157", "#588157", "#E8604C"]
    }
  },
  10: {
    title: "AI Algorithms Hub",
    category: "Personal Algorithms Visualizer",
    color: "#3D7EA6",
    stats: [
      { val: "8 Algorithms", lbl: "Visualized on Map" },
      { val: "GoogLeNet", lbl: "PyTorch Inference" },
      { val: "Flask/JS", lbl: "Web Sandbox" },
      { val: "8-Puzzle/N-Queens", lbl: "AI Solvers" }
    ],
    tech: ["Flask / Python", "PyTorch / ImageNet", "SVG Custom Animations", "Graph Search Algorithms", "GoogLeNet Inference", "REST Endpoints"],
    github: "https://github.com/Rahul-Sundarraj/AI-Lab-EX",
    demo: "#",
    description: "Turned static academic AI scripts into an interactive browser learning suite. Implemented A* search (8-Puzzle solver with Manhattan heuristic), backtracking (N-Queens CSP), PyTorch image classifier (pretrained GoogLeNet serving top-5 confidence logs), and a full graph pathfinder mapping searches over a Tamil Nadu district graph. It shows live SVG step-by-step exploration metrics (nodes expanded, path cost, time taken).",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80",
    chartType: "bar",
    chartData: {
      labels: ["A* (Optimal)", "Greedy Best-First", "UCS (Dijkstra)", "BFS (Unweighted)", "DFS (Depth Search)"],
      values: [12, 10, 24, 28, 31],
      yLabel: "Nodes Expanded (Lighter is Better)",
      colors: ["#2A9D8F", "#FF9F1C", "#3D7EA6", "#9B5DE5", "#E8604C"]
    }
  },
  11: {
    title: "NM Bank (Android App)",
    category: "Team Mobile Project",
    color: "#4A90E2",
    stats: [
      { val: "Java / Android", lbl: "Frontend Native" },
      { val: "Spring Boot", lbl: "Backend API" },
      { val: "2 Flows", lbl: "User & Administrator" },
      { val: "SessionManager", lbl: "Shared Preferences" }
    ],
    tech: ["Java (Android SDK)", "Retrofit HTTP Client", "Spring Boot", "Role-Based Routing", "Session Persistence", "UI Mockup & Vibe-Coding"],
    github: "https://github.com/Rahul-Sundarraj/NM_Bank",
    demo: "#",
    description: "Designed a role-based native Android banking application. Regular user flows cover checking accounts, fund transfers, and retrofitted transaction details. Administrator flows cover creating users, deposit/withdrawal postings, and global user tables. Built utilizing AI-assisted developer models (Vibe-Coding), defining feature sets and architectures, mapping Retrofit clients, and testing routes against a colleague's Spring Boot backend.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=600&q=80",
    chartType: "donut",
    chartData: {
      labels: ["User-Flow Features", "Admin-Flow Features"],
      values: [3, 4],
      colors: ["#4A90E2", "#ffb2a7"]
    }
  },
  12: {
    title: "Task Manager (Java Swing)",
    category: "First Java Desktop App",
    color: "#7209B7",
    stats: [
      { val: "Java Swing", lbl: "Desktop GUI" },
      { val: "Java2D Graphics", lbl: "No-Chart-Lib Canvas" },
      { val: "Gson File I/O", lbl: "Local Persistence" },
      { val: "Google Drive OAuth", lbl: "Cloud Backup" }
    ],
    tech: ["Java SDK", "Swing UI Framework", "Gson Library", "Java2D API (Graphics2D)", "Google Drive API", "OAuth2 Flow"],
    github: "https://github.com/Rahul-Sundarraj/TaskManager",
    demo: "#",
    description: "My programming origin story: a custom task manager desktop app built to master Object-Oriented Programming (OOP) in Java. Features task sorting along routine (Daily/Weekly/Monthly) and difficulty (Easy/Medium/Hard) dimensions using nested data structures. Implemented local JSON serialization via Gson, streak tracking, a radar chart drawn from scratch using the Java2D vector graphics engine, and a Google Drive OAuth2 backup sync.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80",
    chartType: "radar",
    chartData: {
      labels: ["Desktop GUI (Swing)", "File I/O & JSON (Gson)", "2D Vector Math (Java2D)", "Cloud APIs & Auth (OAuth2)"],
      values: [80, 75, 90, 85],
      color: "#7209B7"
    }
  }
};

// --------------------------------------------------------------------------
// B. TYPEWRITER EFFECT IN HERO
// --------------------------------------------------------------------------
const typedTextSpan = document.getElementById("typed-text");
const textArray = [
  "B.Tech AI & Data Science Student.",
  "Building systems that scale.",
  "Training neural networks that generalize.",
  "Solving real-world problems with code."
];
const typingSpeed = 60;
const erasingSpeed = 30;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

// --------------------------------------------------------------------------
// C. INTERACTIVE SCREEN SCANNER: HERO LAPTOP TELEMETRY PLOT
// --------------------------------------------------------------------------
const heroCanvas = document.getElementById("hero-chart-canvas");
const heroCtx = heroCanvas.getContext("2d");
let nodes = [];
const numNodes = 25;
let animationFrameId;

function resizeHeroCanvas() {
  const rect = heroCanvas.parentElement.getBoundingClientRect();
  heroCanvas.width = rect.width;
  heroCanvas.height = rect.height;
}

class Node {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.radius = Math.random() * 2 + 1.5;
  }
  update(w, h) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }
  draw() {
    heroCtx.beginPath();
    heroCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    heroCtx.fillStyle = "rgba(42, 157, 143, 0.7)"; // Teal
    heroCtx.fill();
  }
}

function initTelemetryAnimation() {
  resizeHeroCanvas();
  nodes = [];
  for (let i = 0; i < numNodes; i++) {
    nodes.push(new Node(heroCanvas.width, heroCanvas.height));
  }
  
  function animate() {
    heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    const w = heroCanvas.width;
    const h = heroCanvas.height;
    
    // Draw background matrix grid lines
    heroCtx.strokeStyle = "rgba(255, 255, 255, 0.03)";
    heroCtx.lineWidth = 1;
    const gridSize = 20;
    for (let x = 0; x < w; x += gridSize) {
      heroCtx.beginPath();
      heroCtx.moveTo(x, 0);
      heroCtx.lineTo(x, h);
      heroCtx.stroke();
    }
    for (let y = 0; y < h; y += gridSize) {
      heroCtx.beginPath();
      heroCtx.moveTo(0, y);
      heroCtx.lineTo(w, y);
      heroCtx.stroke();
    }

    // Connect node pathways
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update(w, h);
      nodes[i].draw();
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 65) {
          heroCtx.beginPath();
          heroCtx.moveTo(nodes[i].x, nodes[i].y);
          heroCtx.lineTo(nodes[j].x, nodes[j].y);
          heroCtx.strokeStyle = `rgba(61, 126, 166, ${1 - dist / 65})`; // Fade blue line
          heroCtx.lineWidth = 0.8;
          heroCtx.stroke();
        }
      }
    }
    animationFrameId = requestAnimationFrame(animate);
  }
  animate();
}

// --------------------------------------------------------------------------
// D. LIGHTWEIGHT CUSTOM CANVAS CHARTING ENGINE (Sketchy Hand-drawn Style)
// --------------------------------------------------------------------------

// Helper for drawing sketchy straight lines
function drawSketchyLine(ctx, x1, y1, x2, y2, color, width = 1.5) {
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  
  // Draw twice with slight variations to look hand-sketched
  for (let pass = 0; pass < 2; pass++) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Divide line into small segments and add random wobble
    const segments = Math.max(3, Math.floor(distance / 10));
    for (let i = 1; i <= segments; i++) {
      const t = i / segments;
      let x = x1 + dx * t;
      let y = y1 + dy * t;
      
      if (i < segments) {
        // Add perpendicular jitter wobble
        const wobble = (Math.random() - 0.5) * 1.4;
        const perpX = -dy / distance;
        const perpY = dx / distance;
        x += perpX * wobble;
        y += perpY * wobble;
      }
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

// Helper for drawing sketchy arcs/circles
function drawSketchyArc(ctx, cx, cy, radius, startAngle, endAngle, color, width = 1.5) {
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  
  for (let pass = 0; pass < 2; pass++) {
    ctx.beginPath();
    const angleDiff = endAngle - startAngle;
    const steps = Math.max(8, Math.floor(Math.abs(angleDiff) * 16)); // steps per radian
    
    for (let i = 0; i <= steps; i++) {
      const angle = startAngle + (angleDiff * (i / steps));
      const wobble = (Math.random() - 0.5) * 1.3;
      const r = radius + wobble;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

function drawDonutChart(canvas, data) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(cx, cy) * 0.8;
  const innerRadius = radius * 0.45;
  
  let total = data.values.reduce((a, b) => a + b, 0);
  let startAngle = -Math.PI / 2;
  
  data.values.forEach((val, idx) => {
    const sliceAngle = (val / total) * Math.PI * 2;
    const endAngle = startAngle + sliceAngle;
    const color = data.colors[idx % data.colors.length];
    
    // 1. Light crayon-style fill
    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.arc(cx, cy, innerRadius, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.22;
    ctx.fill();
    ctx.globalAlpha = 1.0;
    
    // 2. Sketchy border boundaries
    drawSketchyArc(ctx, cx, cy, radius, startAngle, endAngle, color, 1.5); // Outer
    drawSketchyArc(ctx, cx, cy, innerRadius, startAngle, endAngle, color, 1.2); // Inner
    
    // Radial dividing lines
    const x1 = cx + Math.cos(startAngle) * innerRadius;
    const y1 = cy + Math.sin(startAngle) * innerRadius;
    const x2 = cx + Math.cos(startAngle) * radius;
    const y2 = cy + Math.sin(startAngle) * radius;
    drawSketchyLine(ctx, x1, y1, x2, y2, color, 1.2);
    
    const xe1 = cx + Math.cos(endAngle) * innerRadius;
    const ye1 = cy + Math.sin(endAngle) * innerRadius;
    const xe2 = cx + Math.cos(endAngle) * radius;
    const ye2 = cy + Math.sin(endAngle) * radius;
    drawSketchyLine(ctx, xe1, ye1, xe2, ye2, color, 1.2);
    
    // 3. Shading hatches
    ctx.globalAlpha = 0.35;
    for (let t = 0.2; t < 0.9; t += 0.2) {
      const curAngle = startAngle + sliceAngle * t;
      const hx1 = cx + Math.cos(curAngle) * (innerRadius + 4);
      const hy1 = cy + Math.sin(curAngle) * (innerRadius + 4);
      const hx2 = cx + Math.cos(curAngle) * (radius - 4);
      const hy2 = cy + Math.sin(curAngle) * (radius - 4);
      drawSketchyLine(ctx, hx1, hy1, hx2, hy2, color, 0.8);
    }
    ctx.globalAlpha = 1.0;
    
    startAngle += sliceAngle;
  });
}

function drawBarChart(canvas, data) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  
  const paddingLeft = 35;
  const paddingBottom = 22;
  const paddingTop = 12;
  const paddingRight = 10;
  
  const chartW = w - paddingLeft - paddingRight;
  const chartH = h - paddingBottom - paddingTop;
  const maxVal = Math.max(...data.values) * 1.15;
  
  // Sketchy axes
  drawSketchyLine(ctx, paddingLeft, paddingTop, paddingLeft, h - paddingBottom, "#5c5248", 1.2);
  drawSketchyLine(ctx, paddingLeft, h - paddingBottom, w - paddingRight, h - paddingBottom, "#5c5248", 1.2);
  
  const barCount = data.values.length;
  const barSpacing = chartW / barCount;
  const barWidth = barSpacing * 0.6;
  
  data.values.forEach((val, idx) => {
    const barH = (val / maxVal) * chartH;
    const barX = paddingLeft + (idx * barSpacing) + (barSpacing - barWidth) / 2;
    const barY = h - paddingBottom - barH;
    
    const color = Array.isArray(data.colors) ? data.colors[idx % data.colors.length] : data.colors;
    
    // 1. Transparent light fill
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.2;
    ctx.fillRect(barX, barY, barWidth, barH);
    ctx.globalAlpha = 1.0;
    
    // 2. Sketchy borders
    drawSketchyLine(ctx, barX, barY, barX + barWidth, barY, color, 1.5); // Top
    drawSketchyLine(ctx, barX, barY, barX, barY + barH, color, 1.2); // Left
    drawSketchyLine(ctx, barX + barWidth, barY, barX + barWidth, barY + barH, color, 1.2); // Right
    
    // 3. Diagonal shading strokes
    ctx.globalAlpha = 0.45;
    const step = 6;
    for (let offset = 4; offset < barWidth + barH; offset += step) {
      const xStart = Math.min(barX + barWidth, barX + offset);
      const yStart = barY + Math.max(0, offset - barWidth);
      const xEnd = Math.max(barX, barX + offset - barH);
      const yEnd = barY + Math.min(barH, offset);
      if (xStart > xEnd && yEnd > yStart) {
        drawSketchyLine(ctx, xStart, yStart, xEnd, yEnd, color, 0.7);
      }
    }
    ctx.globalAlpha = 1.0;
    
    // 4. Handwritten text label for value
    ctx.fillStyle = "#2B2620";
    ctx.font = "bold 13px 'Caveat', cursive";
    ctx.textAlign = "center";
    ctx.fillText(val.toFixed(1), barX + barWidth/2, barY - 4);
    
    // 5. Handwritten categories
    ctx.fillStyle = "#5c5248";
    ctx.font = "12px 'Caveat', cursive";
    ctx.fillText(data.labels[idx].substring(0, 10), barX + barWidth/2, h - paddingBottom + 14);
  });
}

function drawGroupedBarChart(canvas, data) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  
  const paddingLeft = 35;
  const paddingBottom = 22;
  const paddingTop = 15;
  const paddingRight = 10;
  
  const chartW = w - paddingLeft - paddingRight;
  const chartH = h - paddingBottom - paddingTop;
  
  let maxVal = 0;
  data.datasets.forEach(ds => {
    maxVal = Math.max(maxVal, ...ds.values);
  });
  maxVal *= 1.15;
  
  // Sketchy axes
  drawSketchyLine(ctx, paddingLeft, paddingTop, paddingLeft, h - paddingBottom, "#5c5248", 1.2);
  drawSketchyLine(ctx, paddingLeft, h - paddingBottom, w - paddingRight, h - paddingBottom, "#5c5248", 1.2);
  
  const groupCount = data.labels.length;
  const groupSpacing = chartW / groupCount;
  const dsCount = data.datasets.length;
  const barWidth = (groupSpacing * 0.7) / dsCount;
  
  for (let g = 0; g < groupCount; g++) {
    const groupX = paddingLeft + (g * groupSpacing);
    const totalBarsW = barWidth * dsCount;
    const startX = groupX + (groupSpacing - totalBarsW) / 2;
    
    for (let d = 0; d < dsCount; d++) {
      const val = data.datasets[d].values[g];
      const barH = (val / maxVal) * chartH;
      const barX = startX + (d * barWidth);
      const barY = h - paddingBottom - barH;
      
      const color = data.datasets[d].color;
      
      // 1. Transparent fill
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.2;
      ctx.fillRect(barX, barY, barWidth * 0.9, barH);
      ctx.globalAlpha = 1.0;
      
      // 2. Sketchy outline
      drawSketchyLine(ctx, barX, barY, barX + barWidth * 0.9, barY, color, 1.5);
      drawSketchyLine(ctx, barX, barY, barX, barY + barH, color, 1.2);
      drawSketchyLine(ctx, barX + barWidth * 0.9, barY, barX + barWidth * 0.9, barY + barH, color, 1.2);
      
      // 3. Shading hatches
      ctx.globalAlpha = 0.45;
      const step = 6;
      for (let offset = 4; offset < (barWidth * 0.9) + barH; offset += step) {
        const xStart = Math.min(barX + barWidth * 0.9, barX + offset);
        const yStart = barY + Math.max(0, offset - (barWidth * 0.9));
        const xEnd = Math.max(barX, barX + offset - barH);
        const yEnd = barY + Math.min(barH, offset);
        if (xStart > xEnd && yEnd > yStart) {
          drawSketchyLine(ctx, xStart, yStart, xEnd, yEnd, color, 0.7);
        }
      }
      ctx.globalAlpha = 1.0;
      
      // Value labels
      if (w > 200) {
        ctx.fillStyle = "#2B2620";
        ctx.font = "bold 11px 'Caveat', cursive";
        ctx.textAlign = "center";
        ctx.fillText(val.toFixed(0), barX + (barWidth * 0.9)/2, barY - 4);
      }
    }
    
    // Group label
    ctx.fillStyle = "#5c5248";
    ctx.font = "12px 'Caveat', cursive";
    ctx.textAlign = "center";
    ctx.fillText(data.labels[g].substring(0, 12), groupX + groupSpacing/2, h - paddingBottom + 14);
  }
}

function drawRadarChart(canvas, data) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(cx, cy) * 0.75;
  const points = data.labels.length;
  
  // Concentric background grid polygons (3 rings) in sketchy line segments
  for (let r = 1; r <= 3; r++) {
    const curR = radius * (r / 3);
    for (let i = 0; i < points; i++) {
      const angle1 = (i / points) * Math.PI * 2 - Math.PI / 2;
      const angle2 = ((i + 1) % points) * Math.PI * 2 - Math.PI / 2;
      const x1 = cx + Math.cos(angle1) * curR;
      const y1 = cy + Math.sin(angle1) * curR;
      const x2 = cx + Math.cos(angle2) * curR;
      const y2 = cy + Math.sin(angle2) * curR;
      drawSketchyLine(ctx, x1, y1, x2, y2, "rgba(0,0,0,0.06)", 1.0);
    }
  }
  
  // Axis spokes
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    drawSketchyLine(ctx, cx, cy, x, y, "rgba(0,0,0,0.08)", 1.0);
  }
  
  // Draw actual value polygon path
  const valuePoints = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2 - Math.PI / 2;
    const valueMultiplier = data.values[i] / 100;
    const x = cx + Math.cos(angle) * radius * valueMultiplier;
    const y = cy + Math.sin(angle) * radius * valueMultiplier;
    valuePoints.push({ x, y });
  }
  
  // 1. Transparent fill
  ctx.beginPath();
  valuePoints.forEach((pt, idx) => {
    if (idx === 0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(114, 9, 183, 0.15)";
  ctx.fill();
  
  // 2. Sketchy border lines
  for (let i = 0; i < points; i++) {
    const p1 = valuePoints[i];
    const p2 = valuePoints[(i + 1) % points];
    drawSketchyLine(ctx, p1.x, p1.y, p2.x, p2.y, data.color, 2.0);
  }
  
  // Labels on axes endpoints
  ctx.fillStyle = "#5c5248";
  ctx.font = "12px 'Caveat', cursive";
  ctx.textAlign = "center";
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(angle) * (radius + 12);
    const y = cy + Math.sin(angle) * (radius + 8);
    ctx.fillText(data.labels[i].substring(0, 15), x, y);
  }
}

// Helper to detect Software Development (SDE) projects to avoid rendering placeholder "art graphs"
function isSdeProject(project) {
  const title = project.title;
  return (
    title.includes("Ticket Management System") ||
    title.includes("TEKHORA") ||
    title.includes("Hostel Outpass") ||
    title.includes("Email Reminder") ||
    title.includes("NM Bank") ||
    title.includes("Task Manager")
  );
}

// Master draw dispatcher
function drawChart(canvasId, project) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  const box = canvas.closest(".project-chart-box") || canvas.closest(".modal-chart-container");
  
  if (isSdeProject(project)) {
    if (box) box.style.display = "none";
    return;
  }
  
  // Ensure the chart box is visible for ML/AI projects
  if (box) box.style.display = "";
  
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;
  
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  
  const drawObj = {
    width: rect.width,
    height: rect.height,
    getContext: () => ctx,
    values: project.chartData.values,
    labels: project.chartData.labels,
    colors: project.chartData.colors,
    datasets: project.chartData.datasets,
    color: project.color
  };
  
  if (project.chartType === "donut") {
    drawDonutChart(drawObj, drawObj);
  } else if (project.chartType === "bar") {
    drawBarChart(drawObj, project.chartData);
  } else if (project.chartType === "groupedBar") {
    drawGroupedBarChart(drawObj, project.chartData);
  } else if (project.chartType === "radar") {
    drawRadarChart(drawObj, project.chartData);
  }
}

// Render all small card charts
function renderAllCardCharts() {
  for (const id in projectsData) {
    const project = projectsData[id];
    
    // Setup SDE project card structures dynamically (use actual images instead of art graphs)
    const card = document.querySelector(`.project-card[data-project-id="${id}"]`);
    if (card) {
      // Add Live Demo Badge dynamically if a live demo exists
      if (project.demo && project.demo !== "#") {
        if (!card.querySelector(".live-demo-badge")) {
          const badge = document.createElement("div");
          badge.className = "live-demo-badge";
          badge.textContent = "LIVE";
          card.appendChild(badge);
        }
      }

      if (isSdeProject(project)) {
        card.classList.add("sde-card");
        
        let imgSlot = card.querySelector(".project-img-slot");
        if (!imgSlot && project.image) {
          imgSlot = document.createElement("div");
          imgSlot.className = "project-img-slot";
          const img = document.createElement("img");
          img.src = project.image;
          img.alt = project.title;
          img.loading = "lazy";
          imgSlot.appendChild(img);
          
          const header = card.querySelector(".project-card-header");
          if (header) {
            card.insertBefore(imgSlot, header);
          } else {
            card.appendChild(imgSlot);
          }
        }
      }
    }
    
    drawChart(`chart-card-${id}`, project);
  }
}

// --------------------------------------------------------------------------
// E. THREE.JS SCENE CREATION & RENDER LOOP (Present Timeline Layer)
// --------------------------------------------------------------------------
let scene, camera, renderer;
let mainLight, ambientLight;
let threeObjects = [];
let shadowPlane;
let usingFallback = false;

// 3D parameters matching scroll markers
const travelDistance = 22; // Height of scroll camera vector
const startCameraY = 5;

// Coordinate matrices for scattered geometry
// Left margins are X < 0, Right margins are X > 0.
const desktopCoordinates = [
  { type: "rubiksCube", state: "scrambled", x: 3.5, y: 3.5, z: 0 },   // Hero Section Right
  { type: "pencil", x: 3.2, y: 0.8, z: 0.5 },                        // Education Right
  { type: "compass", x: -3.4, y: 0.2, z: 0.2 },                      // Education Left
  { type: "eraser", x: -3.5, y: -2.5, z: 0 },                        // Skills Left
  { type: "rubiksCube", state: "solved", x: -3.8, y: -7.0, z: 0.4 },  // Projects Left Upper
  { type: "ruler", x: 3.6, y: -11.0, z: 0.1 },                       // Projects Right
  { type: "shavings", x: 2.8, y: -11.8, z: 0 }                       // Shavings scattered near ruler
];

// Mobile clusters: stacked at top (hero) and bottom (contact)
const mobileCoordinates = [
  { type: "rubiksCube", state: "scrambled", x: 0, y: 4.8, z: 0 },     // Top of notebook
  { type: "pencil", x: 1.2, y: 4.5, z: 0.2 },
  { type: "eraser", x: -1.2, y: 4.6, z: 0.1 },
  { type: "rubiksCube", state: "solved", x: 0.5, y: -8.5, z: 0.3 },   // Bottom near contact
  { type: "ruler", x: -0.8, y: -8.8, z: 0.1 }
];

function initThreeScene() {
  const container = document.getElementById("canvas-container");
  if (!container) return;
  
  try {
    // 1. Create Scene & Camera
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, startCameraY, 12);
    camera.lookAt(0, startCameraY - 1.2, 0); // Subtle 3D look-down angle (keeps volume and shadow proportions natural)
    
    // 2. Renderer with Transparency
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // 3. Lighting (Directional + Ambient environment)
    ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);
    
    mainLight = new THREE.DirectionalLight(0xffffff, 0.85);
    mainLight.position.set(5, 12, 8);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 25;
    mainLight.shadow.camera.left = -6;
    mainLight.shadow.camera.right = 6;
    mainLight.shadow.camera.top = 8;
    mainLight.shadow.camera.bottom = -8;
    mainLight.shadow.bias = -0.0005;
    scene.add(mainLight);
    
    // 4. Shadow Catcher Plane (Invisible, receives only contact shadows)
    const planeGeo = new THREE.PlaneGeometry(50, 50); // Large enough to cover screen
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.35 }); // Blend shadow opacity with CSS wood underneath
    shadowPlane = new THREE.Mesh(planeGeo, planeMat);
    shadowPlane.position.set(0, startCameraY, -0.02); // Position flat behind components (no rotation!)
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);
    
    // 5. Construct & Populate procedural 3D Meshes
    build3DWorld();
    
    // 6. Handle Raycast Hover triggers
    setupRaycasting();
    
    // 7. Fire scroll-synchronized renderer updates
    window.addEventListener("scroll", onScrollCameraUpdate);
    onScrollCameraUpdate(); // Initial position trigger
    
    // Render loop
    animate3D();
    
    console.log("Three.js Scene Loaded: WebGL active.");
  } catch (err) {
    console.error("Three.js failed initialization. Launching CSS 3D fallback.", err);
    initCss3DFallback();
  }
}

// --------------------------------------------------------------------------
// F. 3D OBJECT MESH CONSTRUCTORS
// --------------------------------------------------------------------------
function createRubiksCubeMesh(isSolved) {
  const cubeGroup = new THREE.Group();
  const size = 0.22;
  const gap = 0.015;
  const totalOffset = size + gap;
  
  // Custom Materials matching plastic Rubik's stickers
  const stickerColors = {
    core: 0x151515, // Matte black body plastic
    white: 0xFFFFFF,
    yellow: 0xF5C542,
    green: 0x2A9D8F,
    blue: 0x3D7EA6,
    red: 0xE8604C,
    orange: 0xFF9F1C
  };
  
  const faceColorMaterials = {};
  for (const colorName in stickerColors) {
    faceColorMaterials[colorName] = new THREE.MeshStandardMaterial({
      color: stickerColors[colorName],
      roughness: 0.2,
      metalness: 0.1
    });
  }
  
  // 3x3x3 grid builder
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        // Skip rendering center core to optimize memory
        if (x === 0 && y === 0 && z === 0) continue;
        
        const subGeo = new THREE.BoxGeometry(size, size, size);
        
        // Form sticker maps based on voxel coordinate boundary positions
        // Face indices: 0 = Right, 1 = Left, 2 = Top, 3 = Bottom, 4 = Front, 5 = Back
        const mats = [];
        
        // Right face
        mats.push(x === 1 ? (isSolved ? faceColorMaterials.red : getRandomStickerMat(faceColorMaterials)) : faceColorMaterials.core);
        // Left face
        mats.push(x === -1 ? (isSolved ? faceColorMaterials.orange : getRandomStickerMat(faceColorMaterials)) : faceColorMaterials.core);
        // Top face
        mats.push(y === 1 ? (isSolved ? faceColorMaterials.white : getRandomStickerMat(faceColorMaterials)) : faceColorMaterials.core);
        // Bottom face
        mats.push(y === -1 ? (isSolved ? faceColorMaterials.yellow : getRandomStickerMat(faceColorMaterials)) : faceColorMaterials.core);
        // Front face
        mats.push(z === 1 ? (isSolved ? faceColorMaterials.green : getRandomStickerMat(faceColorMaterials)) : faceColorMaterials.core);
        // Back face
        mats.push(z === -1 ? (isSolved ? faceColorMaterials.blue : getRandomStickerMat(faceColorMaterials)) : faceColorMaterials.core);
        
        const cubelet = new THREE.Mesh(subGeo, mats);
        cubelet.position.set(x * totalOffset, y * totalOffset, z * totalOffset);
        cubelet.castShadow = true;
        cubelet.receiveShadow = true;
        
        cubeGroup.add(cubelet);
      }
    }
  }
  
  // If scrambled, turn one outer slice around axis slightly for realism
  if (!isSolved) {
    const randomTurnSlice = Math.random() > 0.5 ? 1 : -1;
    const turnGroup = new THREE.Group();
    scene.add(turnGroup); // Temp holder
    
    // Filter out cubelets located on the outer layer (e.g. x = 1)
    const listToMove = [];
    cubeGroup.children.forEach(cubelet => {
      if (cubelet.position.x > 0.1 && randomTurnSlice === 1) {
        listToMove.push(cubelet);
      } else if (cubelet.position.x < -0.1 && randomTurnSlice === -1) {
        listToMove.push(cubelet);
      }
    });
    
    listToMove.forEach(cubelet => {
      turnGroup.add(cubelet); // Reparent temporarily
    });
    
    turnGroup.rotation.x = Math.PI / 4; // Turn slice by 45 degrees
    
    // Reparent back to original group with matrices baked
    while (turnGroup.children.length > 0) {
      const child = turnGroup.children[0];
      child.applyMatrix4(turnGroup.matrixWorld);
      cubeGroup.add(child);
    }
    scene.remove(turnGroup);
  }
  
  return cubeGroup;
}

function getRandomStickerMat(mats) {
  const keys = ["white", "yellow", "green", "blue", "red", "orange"];
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return mats[randKey];
}

function createPencilMesh() {
  const pencil = new THREE.Group();
  
  // Pencil body (Thicker hexagonal cylinder)
  const bodyGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.4, 6);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xE8604C, roughness: 0.6 }); // Coral body
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.castShadow = true;
  body.receiveShadow = true;
  pencil.add(body);
  
  // Pencil tip cone (Thicker wood core)
  const tipGeo = new THREE.ConeGeometry(0.08, 0.25, 6);
  const tipMat = new THREE.MeshStandardMaterial({ color: 0xd2b48c, roughness: 0.8 }); // Tannish wood tip
  const tip = new THREE.Mesh(tipGeo, tipMat);
  tip.position.y = -0.825; // Base connects exactly at Y = -0.7
  tip.rotation.x = Math.PI; // Flip cone downwards!
  tip.castShadow = true;
  pencil.add(tip);
  
  // Lead core tip (Thicker lead point overlapping tip)
  const leadGeo = new THREE.ConeGeometry(0.026, 0.08, 6);
  const leadMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 }); // Graphite black
  const lead = new THREE.Mesh(leadGeo, leadMat);
  lead.position.y = -0.95; // Blends into wood tip and extends downwards
  lead.rotation.x = Math.PI; // Flip cone downwards!
  pencil.add(lead);
  
  // Ferrule (Metal adapter collar at top)
  const ferGeo = new THREE.CylinderGeometry(0.083, 0.083, 0.12, 8);
  const ferMat = new THREE.MeshStandardMaterial({ color: 0xadadb2, metalness: 0.8, roughness: 0.3 }); // Silver collar
  const ferrule = new THREE.Mesh(ferGeo, ferMat);
  ferrule.position.y = 0.75;
  ferrule.castShadow = true;
  pencil.add(ferrule);
  
  // Rubber eraser
  const eraserGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.14, 8);
  const eraserMat = new THREE.MeshStandardMaterial({ color: 0xffb2a7, roughness: 0.8 }); // Pink eraser rubber
  const eraser = new THREE.Mesh(eraserGeo, eraserMat);
  eraser.position.y = 0.86;
  eraser.castShadow = true;
  pencil.add(eraser);
  
  return pencil;
}

function createEraserMesh() {
  const eraserGroup = new THREE.Group();
  
  // White rubber block (Thicker box)
  const rubGeo = new THREE.BoxGeometry(0.24, 0.13, 0.38);
  const rubMat = new THREE.MeshStandardMaterial({ color: 0xFAF6F0, roughness: 0.7 });
  const rubber = new THREE.Mesh(rubGeo, rubMat);
  rubber.castShadow = true;
  rubber.receiveShadow = true;
  eraserGroup.add(rubber);
  
  // Cardboard sleeve wrapped around rubber
  const slvGeo = new THREE.BoxGeometry(0.246, 0.136, 0.22);
  const slvMat = new THREE.MeshStandardMaterial({ color: 0x3D7EA6, roughness: 0.4 }); // Blue sleeve
  const sleeve = new THREE.Mesh(slvGeo, slvMat);
  sleeve.position.z = -0.05; // Slightly offset to expose rubber head
  sleeve.castShadow = true;
  eraserGroup.add(sleeve);
  
  return eraserGroup;
}

function createRulerMesh() {
  const ruler = new THREE.Group();
  
  // Ruler body (Thicker and wider wood/acrylic ruler)
  const bodyGeo = new THREE.BoxGeometry(0.24, 0.03, 1.8);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xe6dfd3, roughness: 0.5 }); // Translucent yellow plastic
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.castShadow = true;
  body.receiveShadow = true;
  ruler.add(body);
  
  return ruler;
}

function createCompassMesh() {
  const compass = new THREE.Group();
  
  const legMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9, roughness: 0.2 });
  const hingeMat = new THREE.MeshStandardMaterial({ color: 0xe5c158, metalness: 0.9, roughness: 0.2 });
  
  // Leg 1 (Thicker tapered metal pointer, positioned mathematically to connect at hinge)
  const leg1Geo = new THREE.CylinderGeometry(0.03, 0.015, 1.1, 8);
  const leg1 = new THREE.Mesh(leg1Geo, legMat);
  leg1.position.set(0.142, -0.531, 0); // Math offset so top face touches hinge (0,0)
  leg1.rotation.z = Math.PI / 12; // Outwards pivot angle
  leg1.castShadow = true;
  compass.add(leg1);
  
  // Leg 2 (Mirror copy)
  const leg2 = leg1.clone();
  leg2.position.x = -0.142; // Correct mirror placement
  leg2.rotation.z = -Math.PI / 12;
  compass.add(leg2);
  
  // Top connector hinge cylinder (Thicker joint lock cylinder)
  const hingeGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.12, 12);
  const hinge = new THREE.Mesh(hingeGeo, hingeMat);
  hinge.rotation.x = Math.PI / 2;
  hinge.castShadow = true;
  compass.add(hinge);
  
  return compass;
}

function createPenMesh() {
  const pen = new THREE.Group();
  
  // Pen barrel (dark glossy plastic - Thicker barrel)
  const barrelGeo = new THREE.CylinderGeometry(0.07, 0.07, 1.2, 12);
  const barrelMat = new THREE.MeshStandardMaterial({ color: 0x1d3557, roughness: 0.2, metalness: 0.1 }); // Navy blue glossy
  const barrel = new THREE.Mesh(barrelGeo, barrelMat);
  barrel.rotation.x = Math.PI / 2;
  barrel.castShadow = true;
  barrel.receiveShadow = true;
  pen.add(barrel);
  
  // Gold accents (clip, bands)
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8, roughness: 0.2 }); // Gold metallic
  
  // Pen cap band (Thicker accent)
  const bandGeo = new THREE.CylinderGeometry(0.074, 0.074, 0.06, 12);
  const band = new THREE.Mesh(bandGeo, goldMat);
  band.position.set(0, 0, 0.1);
  band.rotation.x = Math.PI / 2;
  band.castShadow = true;
  pen.add(band);
  
  // Pocket clip
  const clipGeo = new THREE.BoxGeometry(0.02, 0.025, 0.35);
  const clip = new THREE.Mesh(clipGeo, goldMat);
  clip.position.set(0, 0.078, 0.3);
  clip.castShadow = true;
  pen.add(clip);
  
  // Pen tip (gold writing point - Thicker tip)
  const tipGeo = new THREE.ConeGeometry(0.07, 0.18, 12);
  const tip = new THREE.Mesh(tipGeo, goldMat);
  tip.position.set(0, 0, -0.68);
  tip.rotation.x = -Math.PI / 2;
  tip.castShadow = true;
  pen.add(tip);
  
  return pen;
}

function createSharpenerMesh() {
  const sharpener = new THREE.Group();
  
  // Body (rectangular steel block - Thicker sharpener)
  const bodyGeo = new THREE.BoxGeometry(0.24, 0.12, 0.34);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 0.75, roughness: 0.35 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.castShadow = true;
  body.receiveShadow = true;
  sharpener.add(body);
  
  // Blade (flat steel piece secured to the top face - Thicker blade)
  const bladeGeo = new THREE.BoxGeometry(0.05, 0.008, 0.22);
  const bladeMat = new THREE.MeshStandardMaterial({ color: 0xe0e0e0, metalness: 0.95, roughness: 0.1 });
  const blade = new THREE.Mesh(bladeGeo, bladeMat);
  blade.position.set(0.03, 0.064, 0.015);
  blade.castShadow = true;
  sharpener.add(blade);
  
  // Center holding screw
  const screwGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.012, 6);
  const screwMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.9, roughness: 0.4 });
  const screw = new THREE.Mesh(screwGeo, screwMat);
  screw.position.set(0.03, 0.07, 0.015);
  sharpener.add(screw);
  
  return sharpener;
}

// --------------------------------------------------------------------------
// G. POPULATING THE 3D SCENE
// --------------------------------------------------------------------------
// Helper to get offset top of elements
function getElementScrollTop(id) {
  const el = document.getElementById(id);
  if (!el) return 0;
  return el.offsetTop;
}

// --------------------------------------------------------------------------
// G. POPULATING THE 3D SCENE
// --------------------------------------------------------------------------
function build3DWorld() {
  // Clear any existing elements
  threeObjects.forEach(obj => scene.remove(obj.mesh));
  threeObjects = [];
  
  if (usingFallback || !camera) return;

  // Calculate WebGL frustum visible height at distance Z=12 (camera is at Z=12, items are at Z=0)
  const fovRad = (camera.fov * Math.PI) / 180;
  const visibleHeight = 2 * Math.tan(fovRad / 2) * 12;
  const unitsPerPixel = visibleHeight / window.innerHeight;
  
  const isMobile = window.innerWidth < 768;
  
  // Calculate dynamic boundaries for desktop margin placements (relative to 900px wide centered text container)
  const minMarginX = (450 * unitsPerPixel) + 0.6; // Keep 0.6 units safety gap outside 900px columns
  const maxMarginX = Math.max(minMarginX + 0.8, (window.innerWidth / 2) * unitsPerPixel - 0.8); // Stay inside screen edges
  
  // Query element scroll offsets
  const heroTop = 0;
  const eduTop = getElementScrollTop("education");
  const skillsTop = getElementScrollTop("skills");
  const projTop = getElementScrollTop("projects");
  const contactTop = getElementScrollTop("contact");
  
  let coordsList = [];
  
  if (isMobile) {
    // Stack items at simple pixel intervals on mobile
    coordsList = [
      { type: "rubiksCube", state: "scrambled", x: 0, pixelY: heroTop + 120, z: 0 },
      { type: "pen", x: -0.6, pixelY: heroTop + 200, z: 0.1 },
      { type: "pencil", x: 1.2, pixelY: heroTop + 280, z: 0.2 },
      { type: "eraser", x: -1.2, pixelY: heroTop + 360, z: 0.1 },
      { type: "sharpener", x: 0.8, pixelY: contactTop + 80, z: 0.1 },
      { type: "rubiksCube", state: "solved", x: -0.5, pixelY: contactTop + 180, z: 0.3 },
      { type: "ruler", x: 0.8, pixelY: contactTop + 280, z: 0.1 }
    ];
  } else {
    // Generate randomized desk layout for desktop (excluding Projects height zones to avoid obstruction)
    const rawItems = [
      { type: "rubiksCube", state: "scrambled" },
      { type: "pen" },
      { type: "pencil" },
      { type: "compass" },
      { type: "eraser" },
      { type: "sharpener" },
      { type: "rubiksCube", state: "solved" },
      { type: "ruler" }
    ];
    
    // Fisher-Yates shuffle
    for (let i = rawItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rawItems[i], rawItems[j]] = [rawItems[j], rawItems[i]];
    }
    
    const totalHeight = document.documentElement.scrollHeight || 5800;
    
    // Define 4 safe sections to place items (avoiding the wide Projects grid height zone)
    const zones = [
      { minY: 250, maxY: eduTop - 150 },                               // Zone 1: Hero area
      { minY: eduTop + 100, maxY: skillsTop - 150 },                   // Zone 2: Education area
      { minY: skillsTop + 100, maxY: projTop - 150 },                   // Zone 3: Skills area
      { minY: contactTop + 100, maxY: totalHeight - 400 }               // Zone 4: Contact area
    ];
    
    rawItems.forEach((item, index) => {
      // 8 items total = 2 items per zone (1 left, 1 right)
      const zoneIndex = Math.floor(index / 2);
      const zone = zones[zoneIndex];
      
      const isLeft = (index % 2 === 0);
      const xRange = maxMarginX - minMarginX;
      const x = isLeft ? (-maxMarginX + Math.random() * xRange) : (minMarginX + Math.random() * xRange);
      
      const minY = zone.minY;
      const maxY = Math.max(zone.minY + 100, zone.maxY);
      const pixelY = minY + Math.random() * (maxY - minY);
      
      coordsList.push({
        type: item.type,
        state: item.state,
        x: x,
        pixelY: pixelY,
        z: (item.type === "pencil") ? 0.5 : (item.type === "rubiksCube" ? 0.4 : 0.2)
      });
      
      // If it's a ruler, spawn shavings adjacent to it
      if (item.type === "ruler") {
        const shavingsX = x + (isLeft ? 0.8 : -0.8);
        coordsList.push({
          type: "shavings",
          x: shavingsX,
          pixelY: pixelY + (Math.random() - 0.5) * 60,
          z: 0
        });
      }
    });
  }
  
  coordsList.forEach(coord => {
    let mesh;
    
    if (coord.type === "rubiksCube") {
      mesh = createRubiksCubeMesh(coord.state === "solved");
      mesh.rotation.set(
        0.3 + Math.random() * 0.1,
        0.4 + Math.random() * 0.1,
        Math.random() * Math.PI
      );
    } else if (coord.type === "pen") {
      mesh = createPenMesh();
      mesh.rotation.set(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * Math.PI
      );
    } else if (coord.type === "pencil") {
      mesh = createPencilMesh();
      mesh.rotation.set(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * Math.PI
      );
    } else if (coord.type === "compass") {
      mesh = createCompassMesh();
      mesh.rotation.set(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * Math.PI
      );
    } else if (coord.type === "eraser") {
      mesh = createEraserMesh();
      mesh.rotation.set(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * Math.PI
      );
    } else if (coord.type === "sharpener") {
      mesh = createSharpenerMesh();
      mesh.rotation.set(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * Math.PI
      );
    } else if (coord.type === "ruler") {
      mesh = createRulerMesh();
      mesh.rotation.set(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * Math.PI
      );
    } else if (coord.type === "shavings") {
      mesh = new THREE.Group();
      const shavingsMat = new THREE.MeshStandardMaterial({ color: 0xd2b48c, roughness: 0.8, side: THREE.DoubleSide });
      for (let s = 0; s < 3; s++) {
        const shvGeo = new THREE.TorusGeometry(0.03, 0.015, 6, 12, Math.PI);
        const shv = new THREE.Mesh(shvGeo, shavingsMat);
        shv.position.set((Math.random() - 0.5) * 0.2, 0, (Math.random() - 0.5) * 0.2);
        shv.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        mesh.add(shv);
      }
    }
    
    if (mesh) {
      // Scale up all stationery items to make them bigger (1.5x)
      mesh.scale.setScalar(1.5);
      
      // Calculate precise WebGL Y coordinate matching pixel layout top offset at 0.2 parallax rate
      const yPos = startCameraY - (coord.pixelY * 0.2 * unitsPerPixel);
      mesh.position.set(coord.x, yPos, coord.z);
      scene.add(mesh);
      
      threeObjects.push({
        type: coord.type,
        mesh: mesh,
        initialPos: new THREE.Vector3(coord.x, yPos, coord.z),
        targetRotX: mesh.rotation.x,
        targetRotY: mesh.rotation.y,
        isHovered: false
      });
    }
  });
}

// Update camera y vector relative to viewport scrolling percentage
// Update camera y vector and translate background elements for 3D parallax depth scrolling
function onScrollCameraUpdate() {
  const scrollY = window.scrollY;
  const backgroundScrollY = scrollY * 0.2;
  
  // Parallax background translations (translates wood layers at 0.2 speed)
  const grainElement = document.querySelector('.bench-grain');
  const carvingsElement = document.querySelector('.carvings-container');
  const canvasElement = document.getElementById('carving-canvas');
  
  if (grainElement) {
    grainElement.style.transform = `translateY(${-backgroundScrollY}px)`;
  }
  if (carvingsElement) {
    carvingsElement.style.transform = `translateY(${-backgroundScrollY}px)`;
  }
  if (canvasElement) {
    canvasElement.style.transform = `translateY(${-backgroundScrollY}px)`;
  }

  if (usingFallback || !camera) return;
  
  const fovRad = (camera.fov * Math.PI) / 180;
  const visibleHeight = 2 * Math.tan(fovRad / 2) * 12;
  const unitsPerPixel = visibleHeight / window.innerHeight;
  
  // Camera moves down at 0.2 speed to lock perfectly with wood parallax scroll!
  camera.position.y = startCameraY - (backgroundScrollY * unitsPerPixel);
  camera.lookAt(0, camera.position.y - 1.2, 0); // Keep looking downwards at a subtle 3D angle!
  
  // Keep shadow plane locked behind camera viewport
  if (shadowPlane) {
    shadowPlane.position.y = camera.position.y;
  }
  
  // Keep directional light following camera closely to secure consistent shadows
  mainLight.position.y = camera.position.y + 7;
}

// Setup raycasting vector math and 3D drag-and-drop / Carving handlers
let raycaster, mouse;
let isDragging = false;
let isCarving = false;
let selectedObject = null;
const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // desk plane at Z = 0
const intersectionPoint = new THREE.Vector3();
const dragOffset = new THREE.Vector3();

// Dynamic Carving Canvas properties
let lastCarveX = 0;
let lastCarveY = 0;
let carveCanvas, carveCtx;

function initCarvingCanvas() {
  const bg = document.querySelector(".bench-background");
  if (!bg) return;
  
  carveCanvas = document.createElement("canvas");
  carveCanvas.id = "carving-canvas";
  carveCanvas.style.position = "absolute";
  carveCanvas.style.top = "0";
  carveCanvas.style.left = "0";
  carveCanvas.style.zIndex = "-8"; // Behind text cards, above wood grain
  carveCanvas.style.pointerEvents = "none"; // Clicks pass through to canvas
  bg.appendChild(carveCanvas);
  
  carveCtx = carveCanvas.getContext("2d");
  resizeCarvingCanvas();
}

function resizeCarvingCanvas() {
  if (!carveCanvas) return;
  const newWidth = window.innerWidth;
  const maxScroll = (document.documentElement.scrollHeight - window.innerHeight) || 3000;
  const newHeight = window.innerHeight + maxScroll * 0.2 + 200; // Match slow parallax boundaries
  
  // Only execute resize if dimensions have actually changed
  if (carveCanvas.width === newWidth && carveCanvas.height === newHeight) return;
  
  // Save current carved content
  let tempImage = null;
  if (carveCtx && carveCanvas.width > 0 && carveCanvas.height > 0) {
    try {
      tempImage = carveCtx.getImageData(0, 0, carveCanvas.width, carveCanvas.height);
    } catch (e) {
      console.warn("Could not backup carving image data", e);
    }
  }
  
  carveCanvas.width = newWidth;
  carveCanvas.height = newHeight;
  carveCanvas.style.width = newWidth + "px";
  carveCanvas.style.height = newHeight + "px";
  
  // Restore carved content on the resized canvas
  if (tempImage && carveCtx) {
    try {
      carveCtx.putImageData(tempImage, 0, 0);
    } catch (e) {
      console.warn("Could not restore carving image data", e);
    }
  }
}

// Carve a realistic bevel/shadow double-line stroke in the wood desk
function drawCarveLine(x1, y1, x2, y2) {
  if (!carveCtx) return;
  
  // 1. Bevel Highlight (white, shifted slightly down-right)
  carveCtx.beginPath();
  carveCtx.moveTo(x1 + 1, y1 + 1);
  carveCtx.lineTo(x2 + 1, y2 + 1);
  carveCtx.strokeStyle = "rgba(255, 255, 255, 0.38)";
  carveCtx.lineWidth = 2.2;
  carveCtx.lineCap = "round";
  carveCtx.lineJoin = "round";
  carveCtx.stroke();
  
  // 2. Crevice Shadow (deep brown, shifted slightly up-left)
  carveCtx.beginPath();
  carveCtx.moveTo(x1 - 1, y1 - 1);
  carveCtx.lineTo(x2 - 1, y2 - 1);
  carveCtx.strokeStyle = "rgba(52, 28, 10, 0.82)";
  carveCtx.lineWidth = 2.0;
  carveCtx.lineCap = "round";
  carveCtx.lineJoin = "round";
  carveCtx.stroke();
}

function updateMouseCoords(e) {
  let clientX, clientY;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  mouse.x = (clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(clientY / window.innerHeight) * 2 + 1;
}

let lastLeftClickTime = 0;
let lastRightClickTime = 0;

function onPointerDown(e) {
  if (usingFallback || !camera || !raycaster) return;
  
  updateMouseCoords(e);
  raycaster.setFromCamera(mouse, camera);
  
  // Check intersection with actual 3D objects
  const meshesToIntersect = threeObjects.map(obj => obj.mesh);
  const intersects = raycaster.intersectObjects(meshesToIntersect, true);
  
  if (intersects.length > 0) {
    let hitMesh = intersects[0].object;
    while (hitMesh.parent && hitMesh.parent !== scene) {
      hitMesh = hitMesh.parent;
    }
    
    const foundObj = threeObjects.find(obj => obj.mesh === hitMesh);
    if (foundObj) {
      isDragging = true;
      selectedObject = foundObj;
      isCarving = false;
      
      // Intercept event so it doesn't click HTML components underneath!
      e.stopPropagation();
      
      // Prevent selection during drags
      document.body.classList.add("dragging-active");
      document.getSelection()?.removeAllRanges();
      
      if (e.type === "touchstart") {
        e.preventDefault();
      }
      
      raycaster.ray.intersectPlane(dragPlane, intersectionPoint);
      dragOffset.copy(foundObj.mesh.position).sub(intersectionPoint);
      
      document.body.style.cursor = "grabbing";
      return;
    }
  }
  
  // Check double left-click for carving (prevents context menu conflicts)
  if (e.type === "mousedown" && e.button === 0) {
    const now = Date.now();
    const isDoubleClick = (now - lastLeftClickTime) < 350;
    lastLeftClickTime = now;
    
    if (isDoubleClick) {
      const isInteractive = e.target.closest("a, button, input, .project-card, .skill-note, .education-card, .modal, .projects-grid");
      if (!isInteractive) {
        isCarving = true;
        isDragging = false;
        
        // Intercept event so it doesn't click HTML components underneath!
        e.stopPropagation();
        
        // Prevent selection during carving strokes
        document.body.classList.add("dragging-active");
        document.getSelection()?.removeAllRanges();
        
        lastCarveX = e.clientX;
        lastCarveY = e.clientY + window.scrollY * 0.2;
      }
    }
  }
}

function onPointerMove(e) {
  if (usingFallback || !camera || !raycaster) return;
  
  updateMouseCoords(e);
  
  if (isDragging && selectedObject) {
    // Intercept dragging mousemoves to prevent text selection and hover states
    e.stopPropagation();
    
    if (e.type === "touchmove") {
      e.preventDefault();
    }
    
    raycaster.setFromCamera(mouse, camera);
    if (raycaster.ray.intersectPlane(dragPlane, intersectionPoint)) {
      const targetPos = intersectionPoint.clone().add(dragOffset);
      targetPos.z = selectedObject.initialPos.z;
      
      selectedObject.mesh.position.copy(targetPos);
      selectedObject.initialPos.copy(targetPos);
    }
  } else if (isCarving && e.type === "mousemove") {
    // Intercept carving mousemoves to prevent text selection and hover states
    e.stopPropagation();
    
    const carveX = e.clientX;
    const carveY = e.clientY + window.scrollY * 0.2;
    drawCarveLine(lastCarveX, lastCarveY, carveX, carveY);
    lastCarveX = carveX;
    lastCarveY = carveY;
  } else {
    // Hover cursor updates
    raycaster.setFromCamera(mouse, camera);
    const meshesToIntersect = threeObjects.map(obj => obj.mesh);
    const intersects = raycaster.intersectObjects(meshesToIntersect, true);
    
    if (intersects.length > 0) {
      document.body.style.cursor = "grab";
    } else {
      document.body.style.cursor = "";
    }
  }
}

function onPointerUp() {
  isDragging = false;
  isCarving = false;
  selectedObject = null;
  document.body.style.cursor = "";
  document.body.classList.remove("dragging-active"); // Restore text selection
}

function setupRaycasting() {
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  
  // Mouse listeners (capture phase 'true' intercepts pointer inputs before bubbling to HTML cards)
  window.addEventListener("mousemove", onPointerMove, true);
  window.addEventListener("mousedown", onPointerDown, true);
  window.addEventListener("mouseup", onPointerUp, true);
  
  // Touch listeners (capture phase intercepts touch input events)
  window.addEventListener("touchmove", onPointerMove, { capture: true, passive: false });
  window.addEventListener("touchstart", onPointerDown, { capture: true, passive: false });
  window.addEventListener("touchend", onPointerUp, { capture: true });
}

// --------------------------------------------------------------------------
// H. RENDER LOOP
// --------------------------------------------------------------------------
function animate3D() {
  if (usingFallback) return;
  
  // Raycast hover states (only to toggle pointer cursor shapes)
  if (raycaster && mouse) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    
    threeObjects.forEach(obj => { obj.isHovered = false; });
    if (intersects.length > 0) {
      let hitMesh = intersects[0].object;
      while (hitMesh.parent && hitMesh.parent !== scene) {
        hitMesh = hitMesh.parent;
      }
      const found = threeObjects.find(obj => obj.mesh === hitMesh);
      if (found) {
        found.isHovered = true;
      }
    }
  }
  
  // Dynamic Hover Animations & Dragging Heights
  const time = Date.now() * 0.001;
  threeObjects.forEach(obj => {
    const isCurrentDrag = (isDragging && selectedObject === obj);
    
    if (obj.isHovered && !isCurrentDrag) {
      // Hover feedback: Lift up slightly on the Z axis and wobble gently!
      const hoverLiftZ = obj.initialPos.z + 0.2;
      obj.mesh.position.z += (hoverLiftZ - obj.mesh.position.z) * 0.15;
      
      // Wobble rotation animation
      obj.mesh.rotation.y += 0.012;
      obj.mesh.rotation.x = obj.targetRotX + Math.sin(time * 5) * 0.08;
    } else if (!isCurrentDrag) {
      // Drift back flat to the desk surface
      obj.mesh.position.z += (obj.initialPos.z - obj.mesh.position.z) * 0.15;
      obj.mesh.rotation.x += (obj.targetRotX - obj.mesh.rotation.x) * 0.1;
      obj.mesh.rotation.y += (obj.targetRotY - obj.mesh.rotation.y) * 0.1;
    }
  });
  
  renderer.render(scene, camera);
  requestAnimationFrame(animate3D);
}

// --------------------------------------------------------------------------
// I. CSS 3D FALLBACK ENGINE (Triggers on systems with missing/disabled WebGL)
// --------------------------------------------------------------------------
function initCss3DFallback() {
  usingFallback = true;
  const container = document.getElementById("canvas-container");
  if (!container) return;
  container.innerHTML = ""; // Clear canvas element
  
  // Render clean browser native CSS 3D cubes instead
  container.classList.add("css-fallback-active");
  
  // Insert container styles
  const sheet = window.document.styleSheets[0];
  sheet.insertRule(`
    .css-fallback-active {
      perspective: 1200px;
      overflow: hidden;
      pointer-events: none;
    }
  `, sheet.cssRules.length);
  sheet.insertRule(`
    .css-cube {
      position: absolute;
      width: 100px;
      height: 100px;
      transform-style: preserve-3d;
      pointer-events: auto;
      cursor: pointer;
      transition: transform 0.1s linear;
    }
  `, sheet.cssRules.length);
  sheet.insertRule(`
    .css-cube-face {
      position: absolute;
      width: 100px;
      height: 100px;
      border: 3px solid #111;
      border-radius: 6px;
      background-size: 33% 33%;
      background-repeat: repeat;
    }
  `, sheet.cssRules.length);

  // Position fallback elements (2 Rubik's cubes: 1 in Hero, 1 in Projects)
  const cube1 = createCssCube("scrambled");
  cube1.style.top = "15%";
  cube1.style.right = "8%";
  container.appendChild(cube1);
  
  const cube2 = createCssCube("solved");
  cube2.style.top = "60%";
  cube2.style.left = "6%";
  container.appendChild(cube2);
  
  // Simple CSS 3D rotation loops
  let angle = 0;
  function rotateCssCubes() {
    angle += 0.4;
    cube1.style.transform = `rotateX(${angle * 0.5}deg) rotateY(${angle}deg) rotateZ(${angle * 0.2}deg)`;
    cube2.style.transform = `rotateX(${25}deg) rotateY(${-angle * 0.6}deg) rotateZ(${15}deg)`;
    requestAnimationFrame(rotateCssCubes);
  }
  rotateCssCubes();
}

function createCssCube(type) {
  const cube = document.createElement("div");
  cube.className = "css-cube";
  
  const faces = [
    { trans: "rotateY(0deg) translateZ(50px)", color: "#E8604C" },    // Front (Red)
    { trans: "rotateY(180deg) translateZ(50px)", color: "#FF9F1C" },  // Back (Orange)
    { trans: "rotateY(90deg) translateZ(50px)", color: "#2A9D8F" },   // Right (Green)
    { trans: "rotateY(-90deg) translateZ(50px)", color: "#3D7EA6" },  // Left (Blue)
    { trans: "rotateX(90deg) translateZ(50px)", color: "#FAF6F0" },   // Top (White)
    { trans: "rotateX(-90deg) translateZ(50px)", color: "#F5C542" }   // Bottom (Yellow)
  ];
  
  faces.forEach(f => {
    const face = document.createElement("div");
    face.className = "css-cube-face";
    face.style.transform = f.trans;
    
    if (type === "solved") {
      face.style.backgroundColor = f.color;
    } else {
      // Scramble stickers visually using subgrids
      face.style.display = "grid";
      face.style.gridTemplateColumns = "repeat(3, 1fr)";
      face.style.gridTemplateRows = "repeat(3, 1fr)";
      const stickerColors = ["#E8604C", "#FF9F1C", "#2A9D8F", "#3D7EA6", "#FAF6F0", "#F5C542"];
      for (let s = 0; s < 9; s++) {
        const stick = document.createElement("div");
        stick.style.border = "1px solid #111";
        stick.style.backgroundColor = stickerColors[Math.floor(Math.random() * stickerColors.length)];
        face.appendChild(stick);
      }
    }
    cube.appendChild(face);
  });
  
  return cube;
}

// --------------------------------------------------------------------------
// J. DASHBOARD MODAL AND DETAILS CONTROL
// --------------------------------------------------------------------------
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-project-title");
const modalCategory = document.getElementById("modal-project-category");
const modalStatsGrid = document.getElementById("modal-stats-grid");
const modalDescription = document.getElementById("modal-project-description");
const modalTechList = document.getElementById("modal-tech-list");
const modalGithub = document.getElementById("modal-github-link");
const modalDemo = document.getElementById("modal-demo-link");
const modalImageSlot = document.getElementById("modal-image-slot");
const modalCloseBtn = modal.querySelector(".modal-close");
const modalBackdrop = modal.querySelector(".modal-backdrop");

let modalChartInstance = null;

function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;
  
  // 1. Populate text fields
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalDescription.textContent = project.description;
  
  // Configure color styling
  modal.style.setProperty("--accent-color", project.color);
  
  // 2. Populate stats tiles
  modalStatsGrid.innerHTML = "";
  project.stats.forEach(s => {
    const tile = document.createElement("div");
    tile.className = "stat-tile";
    tile.innerHTML = `
      <span class="stat-val" style="color: ${project.color}">${s.val}</span>
      <span class="stat-lbl">${s.lbl}</span>
    `;
    modalStatsGrid.appendChild(tile);
  });
  
  // 3. Populate tech tags
  modalTechList.innerHTML = "";
  project.tech.forEach(t => {
    const tag = document.createElement("span");
    tag.className = "tech-tag";
    tag.textContent = t;
    modalTechList.appendChild(tag);
  });
  
  // 4. Configure Links
  modalGithub.href = project.github;
  if (project.github === "https://github.com/Rahul-Sundarraj" && projectId === 1) {
    modalGithub.innerHTML = "Request Access (Private Repo)";
  } else {
    modalGithub.innerHTML = "View on GitHub";
  }
  
  if (project.demo && project.demo !== "#") {
    modalDemo.href = project.demo;
    modalDemo.textContent = "Launch Live Demo";
    modalDemo.classList.remove("btn-disabled");
    modalDemo.removeAttribute("tabindex");
    modalDemo.style.display = "inline-block";
  } else {
    modalDemo.href = "#";
    modalDemo.textContent = "Backend-only — No Public Demo";
    modalDemo.classList.add("btn-disabled");
    modalDemo.setAttribute("tabindex", "-1");
    modalDemo.style.display = "inline-block";
  }
  
  // 5. Populate images
  modalImageSlot.innerHTML = "";
  if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title + " System Interface";
    modalImageSlot.appendChild(img);
  }
  
  // Configure SDE label/chart hide states
  const modalRight = modal.querySelector(".modal-right");
  if (modalRight) {
    const metaLabel = modalRight.querySelector(".meta-label");
    const chartContainer = modalRight.querySelector(".modal-chart-container");
    if (isSdeProject(project)) {
      if (metaLabel) metaLabel.style.display = "none";
      if (chartContainer) chartContainer.style.display = "none";
    } else {
      if (metaLabel) metaLabel.style.display = "";
      if (chartContainer) chartContainer.style.display = "";
    }
  }
  
  // 6. Draw expanded visualization chart (drawChart will auto-skip if SDE)
  setTimeout(() => {
    drawChart("modal-main-chart", project);
  }, 100);
  
  // 7. Make modal visible
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Lock scroll
}

function closeProjectModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Unlock scroll
}

// --------------------------------------------------------------------------
// K. WINDOW ADAPTER & INITIALIZATION TRIGGERS
// --------------------------------------------------------------------------
window.addEventListener("resize", () => {
  // Handle Canvas resizes
  resizeHeroCanvas();
  renderAllCardCharts();
  
  // If Three.js active, adjust camera/renderer matrices
  if (renderer && camera && !usingFallback) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Re-build 3D coordinates based on new viewport layouts
    build3DWorld();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. Kick off Typewriter Effect
  if (textArray.length) setTimeout(type, 1000);
  
  // 2. Initialize screen matrix animation
  initTelemetryAnimation();
  
  // 3. Render all 12 project preview charts
  setTimeout(renderAllCardCharts, 200);
  
  // 4. Initialize Three.js viewport scene
  initThreeScene();
  
  // 4b. Initialize wood drawing carving canvas
  initCarvingCanvas();
  setTimeout(resizeCarvingCanvas, 500);
  setTimeout(resizeCarvingCanvas, 2000);
  
  // 5. Bind click handlers to project cards
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const pid = card.getAttribute("data-project-id");
      openProjectModal(pid);
    });
  });
  
  // 6. Bind close handlers to modal closes
  modalCloseBtn.addEventListener("click", closeProjectModal);
  modalBackdrop.addEventListener("click", closeProjectModal);
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal();
    }
  });

  // 7. Bind scroll event globally for background parallax scrolling
  window.addEventListener("scroll", onScrollCameraUpdate);
  onScrollCameraUpdate(); // Initial call
  
  // 8. Rebuild Three.js coordinates on window load when document layout is final
  window.addEventListener("load", () => {
    if (!usingFallback) {
      build3DWorld();
    }
  });
});
