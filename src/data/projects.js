const projects = [
  {
    title: "Forecasting & Market Insight — FMCG Personal Care",
    description: "Sales forecasting and market insight for FMCG personal care products.",
    fullDescription:
      "An FMCG Personal Care sales analysis (2020–2025) developed for DSC Gelar Rasa 2025, focusing on trend forecasting, innovation insights, and cannibalization analysis using a hybrid Prophet and LightGBM approach. I led the team in structuring the analysis and delivering business-focused insights.",
    tech: ["Python", "Prophet", "LightGBM", "Pandas", "Scikit-learn", "Data Visualization"],
    image: "/projects/fmcg-forecasting.png",
    colab:
      "https://colab.research.google.com/drive/1dKeJIzbxyFcD4_gOui9uLmStMXYsNRUe?usp=sharing",
  },
  {
    title: "SciFind — Sci-Fi Movie Search Engine",
    description: "Team project - Developed backend system with NLP and search algorithms",
    fullDescription:
      "Collaborated in a team to build a search engine using React. My role: Designed and implemented the complete backend system including text preprocessing (tokenization, stopword removal, stemming with Sastrawi), inverted indexing, and search algorithms (TF-IDF Vector Space Model and Jaccard Similarity). Developed evaluation metrics (Precision, Recall, F1-Score, Accuracy) to measure algorithm performance and conducted comparative analysis of both methods.",
    tech: [
      "React",
      "Python",
      "Sastrawi",
      "TF-IDF",
      "Jaccard Similarity",
      "Information Retrieval",
    ],
    image: "/projects/scifind.png",
    demo: "https://uas-pi-sci-find.vercel.app",
  },
  {
    title: "Sirkular — Circular Economy Platform for UMKM",
    description:
      "UI/UX design project for a circular economy platform supporting UMKM waste recycling.",
    fullDescription:
      "Sirkular is a UI/UX design project developed for FASILKOMFEST 2025 under the theme Inclusive Digital Economy. The project proposes a digital platform that connects UMKM waste producers with users of recyclable materials to support circular economy practices. As the Team Leader, I was responsible for overall design direction and contributed directly to the UI design and interactive mockups using a human-centered design approach.",
    tech: ["UI/UX Design", "Human-Centered Design", "Figma", "Prototyping"],
    image: "/projects/Sirkular.png",
    figma:
      "https://www.figma.com/proto/4sxkQLO2hJLUNpXphq5CAQ/Sirkular_Sirkular_Prototype?page-id=0%3A1&node-id=3-90&viewport=-327%2C439%2C0.17&t=zs1XTVImJgu1H8qw-1&scaling=contain&content-scaling=fixed",
    github: null,
    demo: null,
  },
  {
    title: "Handwritten Digit Recognition & Generation — CVAE",
    description:
      "Conditional Variational Autoencoder (CVAE) for handwritten digit generation using MNIST.",
    fullDescription:
      "A group project implementing a Conditional Variational Autoencoder (CVAE) for handwritten digit recognition and generation using the MNIST dataset. I contributed as the Model Architect by designing the encoder–decoder structure, defining a 2D latent space, and formulating the loss function using KL Divergence.",
    tech: ["Python", "TensorFlow", "CVAE", "MNIST", "NumPy", "Matplotlib"],
    image: "/projects/cvae-mnist.png",
    demo: "https://kelompok7-variational-autoencoder-h-eight.vercel.app/",
  },
  {
    title: "Schedula — Agenda Management Web App",
    description: "A web app for managing and organizing daily activity schedules.",
    fullDescription:
      "Schedula is a web-based agenda management application that allows users to create, read, update, and delete (CRUD) their activity schedules. The application includes user authentication to ensure secure access and provides an interactive and user-friendly interface. This project was developed using the Laravel framework with custom CSS for UI styling and was created as part of Mini Project 4 for the Web-Based Programming course.",
    tech: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/projects/schedula.png",
    github:
      "https://github.com/tinsarirauhanaa/TinsariRauhana_2308107010038_MiniProject4.git",
  },
  {
    title: "Bundeal — Food Waste Reduction Platform",
    description:
      "UI/UX design project for a food waste reduction and affordable food distribution platform.",
    fullDescription:
      "Bundeal is a UI/UX competition project for INFEST 2025 focused on reducing food waste and improving access to affordable food. I served as the Team Leader and was responsible for designing the UI and creating interactive mockups using a human-centered design approach aligned with SDGs 2: Zero Hunger.",
    tech: [
      "UI/UX Design",
      "Human-Centered Design",
      "Figma",
      "Wireframing",
      "Prototyping",
    ],
    image: "/projects/bundeal.png",
    figma:
      "https://www.figma.com/proto/QpwIr1f5E3hFmzS8J9nU8a/infest-DND?page-pnjualA1&node-id=252-8160&viewport=-5909%2C150%2C1.12&t=UUrPvyoGUFx3CFmFn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=87%3A575&show-proto-sidebar1",
  },

  // ─── NEW PROJECTS ───────────────────────────────────────────────────────────

  {
    title: "MahaVoice — Web-Based Mental Health Chatbox",
    description:
      "Team project - Designed UI and contributed to system architecture for a student stress screening chatbox.",
    fullDescription:
      "MahaVoice is a web-based healthcare chatbox developed as a Software Engineering course project, designed to support university students in identifying and managing stress. The system features an interactive AI chatbot named 'Hava' that guides users through a structured stress screening questionnaire adapted from the Perceived Stress Scale (PSS). Based on user responses, the system calculates a stress score, classifies the level (low, moderate, or high), and delivers personalized recommendations along with a relaxation music feature. I contributed to the UI/UX design of key user-facing pages using Figma, and was involved in the overall system architecture design using the MVC pattern with Laravel as the backend framework. The system was tested using Black Box Testing, with all core features — including registration, login, chatbox interaction, stress screening, and history tracking — verified to work as intended.",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
      "MVC Architecture",
    ],
    image: "/projects/mahavoice.png",
    demo: "https://maha-voice-three.vercel.app",
    github: null,
    figma: null,
  },

  {
    title: "GeoTagging Bencana Aceh — Flood Disaster Mapping System",
    description:
      "KKN project - Built a web-based disaster reporting and interactive mapping system for flood-affected areas in Bireuen, Aceh.",
    fullDescription:
      "Developed during the KKN Tematik Bencana (Community Service) program at Universitas Syiah Kuala, this web-based geotagging system was built in direct response to the major floods that struck Kabupaten Bireuen, Aceh. The platform enables communities and volunteers to submit structured flood impact reports — including location coordinates, damage severity, infrastructure conditions, and photo documentation — which are then visualized in real-time on an interactive map powered by Leaflet and OpenStreetMap. I served as part of the core development team, contributing to both frontend and data integration. The system was deployed and actively used during the KKN period, and was embedded in the official Satgas Senyar USK website (senyar-aceh.usk.ac.id). Our team also conducted direct field verification across six villages — Pantee Lhong, Raya Dagang, Kapa, Balee Panah, Pantee Baro, and Kubu — to ensure data accuracy before publishing to the system.",
    tech: [
      "Next.js",
      "React",
      "Leaflet",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Node.js",
      "GIS",
    ],
    image: "/projects/geotagging.png",
    github: "https://github.com/M-Aidil-Fitrah/geotagging.git",
    demo: null,
  },

  {
    title: "Mold Detection on Bread & Walls — Computer Vision",
    description:
      "Team project - Implemented a computer vision pipeline to detect and classify mold contamination on food and building surfaces.",
    fullDescription:
      "A Computer Vision mid-term project focused on detecting mold growth on two types of surfaces: bread and walls. The system was built using classical image processing techniques without deep learning, making it lightweight and computationally efficient. The pipeline combines HSV color segmentation (weighted at 70%) and adaptive thresholding with CLAHE preprocessing (30%) to create a robust combined mask. Morphological operations (opening and closing) were applied to clean noise and refine detected regions. Texture analysis using Gray-Level Co-occurrence Matrix (GLCM) extracted features such as contrast, homogeneity, and energy to further distinguish mold-affected areas from natural surface textures. The system classifies each image into five severity levels — CLEAN, LOW, MODERATE, HIGH, and SEVERE — based on the percentage of mold coverage, and outputs annotated images with bounding boxes, contour overlays, and a confidence score. Batch processing allows the pipeline to be applied across entire image folders for both bread and wall datasets.",
    tech: [
      "Python",
      "OpenCV",
      "NumPy",
      "Matplotlib",
      "scikit-image",
      "GLCM",
      "HSV Segmentation",
      "Morphological Operations",
    ],
    image: "/projects/mold-detection.png",
    colab:
      "https://colab.research.google.com/drive/1VGSEPk29JNG7c3knV4PYke8k839InB8u?usp=sharing",
    demo: null,
    github: null,
  },

  {
    title: "Pinky Pong Extreme — Computer Vision Game",
    description:
      "Solo project - Built a real-time hand gesture-controlled Pong game using computer vision.",
    fullDescription:
      "Pinky Pong Extreme is a Computer Vision final project that reimagines the classic Pong game through real-time hand gesture recognition. Instead of a keyboard or mouse, the paddle is controlled entirely via webcam input: an open hand moves the paddle up, while a closed fist brings it down. The system was built using OpenCV for frame capture and image processing, with custom gesture detection logic implemented in NumPy. The game features multiple visual themes, a camera/arena mode toggle, and a real-time score tracker — all controlled through keyboard shortcuts. This project demonstrates the practical application of computer vision techniques in an interactive, game-based context.",
    tech: [
      "Python",
      "OpenCV",
      "NumPy",
      "Gesture Recognition",
      "Real-Time Processing",
      "Computer Vision",
    ],
    image: "/projects/pinkypong.png",
    github:
      "https://github.com/tinsarirauhana/TinsariRauhana_2308107010038_ProjekUasViskom.git",
    demo: null,
    colab: null,
  },

  {
    title: "Lung Cancer Risk Factors — Data Visualization & Analysis",
    description:
      "Team project - Explored and visualized lung cancer risk factor datasets to support early detection insights.",
    fullDescription:
      "A Data Visualization course project centered on analyzing and presenting patterns within the Lung Cancer Risk Factors & Prediction dataset. The primary dataset comprises 5,000 records with 18 attributes covering demographic information, lifestyle habits (such as smoking and alcohol consumption), and commonly associated symptoms. A secondary supporting dataset of 1,000 records with 24 more granular attributes was also incorporated to enrich the analysis. The project involved end-to-end data preprocessing — handling missing values, encoding categorical variables, and normalizing features — followed by the creation of a series of interactive and informative visualizations designed to surface key risk patterns. Findings were compiled into a structured presentation using Canva, highlighting correlations between risk factors and lung cancer occurrence to support awareness and early detection efforts.",
    tech: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Canva",
    ],
    image: "/projects/lung-cancer-visdat.png",
    colab:
      "https://colab.research.google.com/drive/1XLoMXm4icIuR2u1YJAVJmBcj-pFecC5P?usp=sharing",
    figma: null,
    github: null,
    demo: "https://www.canva.com/design/DAGmBEmZdg8/lUbjnEC51bkgxoeQEXCtVA/edit?utm_content=DAGmBEmZdg8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

export default projects;