(() => {
  const publications = [
    { file: "03_SEGAN_Compressed_Sensing_MRI_Reconstruction_AAAI_2019.pdf", title: "SEGAN: Structure-Enhanced Generative Adversarial Network for Compressed Sensing MRI Reconstruction", venue: "AAAI-19", year: 2019, kind: "conference", role: "CO-AUTHOR" },
    { file: "04_Robust_Multimodal_Survival_Prediction_CVPR_2025.pdf", title: "Robust Multimodal Survival Prediction with Conditional Latent Differentiation Variational AutoEncoder", venue: "CVPR", year: 2025, kind: "conference", role: "CO-AUTHOR" },
    { file: "06_Tumor_Microenvironment_Graph_Survival_CVPR_2024.pdf", title: "Tumor Micro-environment Interactions Guided Graph Learning for Survival Analysis of Human Cancers from Whole-slide Pathological Images", venue: "CVPR", year: 2024, kind: "conference", role: "CO-AUTHOR" },
    { file: "1-s2.0-S0031320323004144-main.pdf", title: "Optimal transport based pyramid graph kernel for autism spectrum disorder diagnosis", venue: "Pattern Recognition", year: 2023, kind: "journal", role: "CO-AUTHOR" },
    { file: "1-s2.0-S0031320324004473-main.pdf", title: "Global-local consistent semi-supervised segmentation of histopathological image with different perturbations", venue: "Pattern Recognition", year: 2024, kind: "journal", role: "CO-AUTHOR" },
    { file: "1-s2.0-S0895611126001023-main.pdf", title: "Learning generalizable representations across Heterogeneous Acquisition Environments for Breast Ultrasound Diagnosis", venue: "Computerized Medical Imaging and Graphics", year: 2026, kind: "journal", role: "CO-AUTHOR" },
    { file: "1-s2.0-S1361841525001045-main.pdf", title: "Image by co-reasoning: A collaborative reasoning-based implicit data augmentation method for dual-view CEUS classification", venue: "Medical Image Analysis", year: 2025, kind: "journal", role: "FIRST AUTHOR" },
    { file: "15_Robust_Multimodal_Survival_Prediction_arXiv_2503.09496.pdf", title: "Robust Multimodal Survival Prediction with Conditional Latent Differentiation Variational AutoEncoder", venue: "arXiv:2503.09496", year: 2025, kind: "preprint", role: "CO-AUTHOR" },
    { file: "16_Multimodal_Topology_Graph_Spatial_Genes_CVPR_2025.pdf", title: "Multi-modal Topology-embedded Graph Learning for Spatially Resolved Genes Prediction from Pathology Images with Prior Gene Similarity Information", venue: "CVPR", year: 2025, kind: "conference", role: "CO-AUTHOR" },
    { file: "18_OSAL-ND_Open-Set_Active_Learning_MICCAI_2024.pdf", title: "OSAL-ND: Open-set Active Learning for Nucleus Detection", venue: "MICCAI", year: 2024, kind: "conference", role: "CO-AUTHOR" },
    { file: "19_MAPLE_Few-Shot_WSI_Classification_NeurIPS_2025.pdf", title: "MAPLE: Multi-scale Attribute-enhanced Prompt Learning for Few-shot Whole Slide Image Classification", venue: "NeurIPS", year: 2025, kind: "conference", role: "CO-AUTHOR" },
    { file: "21_PathCoT_arXiv_2507.01029.pdf", title: "PathCoT: Chain-of-Thought Prompting for Zero-shot Pathology Visual Reasoning", venue: "arXiv:2507.01029", year: 2025, kind: "preprint", role: "CO-AUTHOR" },
    { file: "23_Correlation_Adaptive_Multiview_CEUS_Fusion_MICCAI_2024.pdf", title: "Correlation-adaptive Multi-view CEUS Fusion for Liver Cancer Diagnosis", venue: "MICCAI", year: 2024, kind: "conference", role: "FIRST AUTHOR" },
    { file: "24_COME_Universal_Lesion_Detection_arXiv_2508.09886.pdf", title: "COME: Dual Structure-Semantic Learning with Collaborative MoE for Universal Lesion Detection Across Heterogeneous Ultrasound Datasets", venue: "arXiv:2508.09886", year: 2025, kind: "preprint", role: "CO-AUTHOR" },
    { file: "25_LTSE_Tissue_Referring_Segmentation_MICCAI_2025.pdf", title: "LTSE: Language-guided Tissue Referring Segmentation in Pathology Images with Adaptive Expert Mixture", venue: "MICCAI", year: 2025, kind: "conference", role: "CO-AUTHOR" },
    { file: "29_Transport_Based_Graph_Kernels_arXiv_2011.00745.pdf", title: "Transport based Graph Kernels", venue: "arXiv:2011.00745", year: 2020, kind: "preprint", role: "CO-AUTHOR" },
    { file: "33_AcZeroTS_ICCV_2025.pdf", title: "AcZeroTS: Active Learning for Zero-shot Tissue Segmentation in Pathology Images", venue: "ICCV", year: 2025, kind: "conference", role: "CO-AUTHOR" },
    { file: "34_Cost_Effective_Active_Learning_Nucleus_Detection_MICCAI_2025.pdf", title: "Cost-effective Active Learning for Nucleus Detection Using Crowdsourced Annotations with Dynamic Weighting Adjustment", venue: "MICCAI", year: 2025, kind: "conference", role: "CO-AUTHOR" },
    { file: "978-3-030-59713-9_43.pdf", title: "Transport-Based Joint Distribution Alignment for Multi-site Autism Spectrum Disorder Diagnosis Using Resting-State fMRI", venue: "MICCAI 2020 · LNCS 12262", year: 2020, kind: "book", role: "CO-AUTHOR" },
    { file: "978-3-030-60639-8_14.pdf", title: "Depth-Adaptive Discriminant Projection with Optimal Transport", venue: "PRCV 2020 · LNCS 12306", year: 2020, kind: "book", role: "CO-AUTHOR" },
    { file: "978-3-030-68763-2_29.pdf", title: "Exploiting Saliency in Attention Based Convolutional Neural Network for Classification of Vertical Root Fractures", venue: "ICPR 2020 Workshops · LNCS 12661", year: 2021, kind: "book", role: "CO-AUTHOR" },
    { file: "978-3-030-87237-3_61.pdf", title: "Identifying Quantitative and Explanatory Tumor Indexes from Dynamic Contrast Enhanced Ultrasound", venue: "MICCAI 2021 · LNCS 12908", year: 2021, kind: "book", role: "FIRST AUTHOR" },
    { file: "978-3-031-34048-2_12.pdf", title: "Multi-task Multi-instance Learning for Jointly Diagnosis and Prognosis of Early-Stage Breast Invasive Carcinoma from Whole-Slide Pathological Images", venue: "IPMI 2023 · LNCS 13939", year: 2023, kind: "book", role: "CO-AUTHOR" },
    { file: "978-3-031-46664-9_17.pdf", title: "Anatomical-Functional Fusion Network for Lesion Segmentation Using Dual-View CEUS", venue: "ADMA 2023 · LNAI 14177", year: 2023, kind: "book", role: "FIRST AUTHOR" },
    { file: "978-3-031-73290-4_21.pdf", title: "Characterizing the Histology Spatial Intersections Between Tumor-Infiltrating Lymphocytes and Tumors for Survival Prediction of Cancers Via Graph Contrastive Learning", venue: "MLMI 2024 · LNCS 15242", year: 2025, kind: "book", role: "CO-AUTHOR" },
    { file: "CEUS-Net_Lesion_Segmentation_in_Dynamic_Contrast-Enhanced_Ultrasound_with_Feature-Reweighted_Attention_Mechanism.pdf", title: "CEUS-Net: Lesion Segmentation in Dynamic Contrast-Enhanced Ultrasound with Feature-Reweighted Attention Mechanism", venue: "IEEE ISBI", year: 2020, kind: "conference", role: "FIRST AUTHOR" },
    { file: "CUSTrack_Causality-Inspired_Liver_Ultrasound_Tracking_With_Periodic_Motion_Bias_Mitigation.pdf", title: "CUSTrack: Causality-Inspired Liver Ultrasound Tracking With Periodic Motion Bias Mitigation", venue: "IEEE Transactions on Medical Imaging", year: 2026, kind: "journal", role: "CO-AUTHOR" },
    { file: "Deep Learning Algorithm Based on Con Source Ultrasound Med Biol SO 2026.pdf", title: "Deep Learning Algorithm Based on Contrast-Enhanced Ultrasound Potentially Optimizes Treatment Strategies for Solitary Primary Hepatocellular Carcinoma", venue: "Ultrasound in Medicine & Biology", year: 2026, kind: "journal", role: "CO-AUTHOR" },
    { file: "Do_as_Sonographers_Think_Contrast-Enhanced_Ultrasound_for_Thyroid_Nodules_Diagnosis_via_Microvascular_Infiltrative_Awareness.pdf", title: "Do as Sonographers Think: Contrast-Enhanced Ultrasound for Thyroid Nodules Diagnosis via Microvascular Infiltrative Awareness", venue: "IEEE Transactions on Medical Imaging", year: 2024, kind: "journal", role: "CO-AUTHOR" },
    { file: "Dynamic_Perfusion_Representation_and_Aggregation_Network_for_Nodule_Segmentation_Using_Contrast-Enhanced_US.pdf", title: "Dynamic Perfusion Representation and Aggregation Network for Nodule Segmentation Using Contrast-Enhanced US", venue: "IEEE Journal of Biomedical and Health Informatics", year: 2023, kind: "journal", role: "FIRST AUTHOR" },
    { file: "Foundation_Model-Based_Zero-Shot_Tissue_Segmentation_of_Pathological_Images_via_the_Mixture_of_Local-to-Global_Experts.pdf", title: "Foundation Model-Based Zero-Shot Tissue Segmentation of Pathological Images via the Mixture of Local-to-Global Experts", venue: "IEEE Transactions on Image Processing", year: 2026, kind: "journal", role: "CO-AUTHOR" },
    { file: "Hierarchical_Temporal_Attention_Network_for_Thyroid_Nodule_Recognition_Using_Dynamic_CEUS_Imaging.pdf", title: "Hierarchical Temporal Attention Network for Thyroid Nodule Recognition Using Dynamic CEUS Imaging", venue: "IEEE Transactions on Medical Imaging", year: 2021, kind: "journal", role: "FIRST AUTHOR" },
    { file: "Irregular_Respiratory_Motion_Compensation_for_Liver_Contrast-Enhanced_Ultrasound_via_Transport-Based_Motion_Estimation.pdf", title: "Irregular Respiratory Motion Compensation for Liver Contrast-Enhanced Ultrasound via Transport-Based Motion Estimation", venue: "IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control", year: 2021, kind: "journal", role: "FIRST AUTHOR" },
    { file: "Joint_Segmentation_and_Differential_Diagnosis_of_Thyroid_Nodule_in_Contrast-Enhanced_Ultrasound_Images.pdf", title: "Joint Segmentation and Differential Diagnosis of Thyroid Nodule in Contrast-Enhanced Ultrasound Images", venue: "IEEE Transactions on Biomedical Engineering", year: 2023, kind: "journal", role: "CO-AUTHOR" },
    { file: "Liver International - 2026 - Chen - CEUS%E2%80%90Based Microvascular Invasion Predictor in HCC  Improving Prognostic Stratification.pdf", title: "CEUS-Based Microvascular Invasion Predictor in HCC: Improving Prognostic Stratification Following Thermal Ablation", venue: "Liver International", year: 2026, kind: "journal", role: "CO-AUTHOR" },
    { file: "Transport-Based_Anatomical-Functional_Metric_Learning_for_Liver_Tumor_Recognition_Using_Dual-View_Dynamic_CEUS_Imaging.pdf", title: "Transport-Based Anatomical-Functional Metric Learning for Liver Tumor Recognition Using Dual-View Dynamic CEUS Imaging", venue: "IEEE Transactions on Biomedical Engineering", year: 2023, kind: "journal", role: "FIRST AUTHOR" },
    { file: "Trustworthy_Multi-Modal_Ultrasound_Fusion_via_Uncertainty_Calibration_and_Conflict_Resolution.pdf", title: "Trustworthy Multi-Modal Ultrasound Fusion via Uncertainty Calibration and Conflict Resolution", venue: "IEEE Transactions on Medical Imaging", year: 2026, kind: "journal", role: "FIRST AUTHOR" }
  ];

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const progress = document.querySelector("[data-scroll-progress]");
  const year = document.querySelector("[data-current-year]");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const publicationList = document.querySelector("#publication-list");
  const publicationCount = document.querySelector("[data-publication-count]");
  const filterButtons = [...document.querySelectorAll("[data-publication-filter]")];
  const searchInput = document.querySelector("[data-publication-search]");
  const publicationKindLabel = { journal: "JOURNAL", conference: "CONFERENCE", preprint: "PREPRINT", book: "BOOK CHAPTER" };
  const publicationTag = { journal: "JOURNAL", conference: "PROCEEDINGS", preprint: "ARXIV", book: "LNCS / BOOK" };

  const publicationHref = (file) => "个人发表/" + file.split("/").map((part) => encodeURIComponent(part)).join("/");
  const renderPublications = () => {
    if (!publicationList) return;
    const activeFilter = filterButtons.find((button) => button.classList.contains("is-active"))?.dataset.publicationFilter || "all";
    const searchTerm = searchInput?.value.trim().toLowerCase() || "";
    const filtered = publications.filter((publication) => {
      const matchesFilter = activeFilter === "all" || publication.kind === activeFilter;
      const haystack = (publication.title + " " + publication.venue).toLowerCase();
      return matchesFilter && (!searchTerm || haystack.includes(searchTerm));
    }).sort((a, b) => b.year - a.year);
    if (publicationCount) publicationCount.textContent = filtered.length;
    publicationList.innerHTML = filtered.map((publication, index) => `
      <article class="publication-row reveal is-visible">
        <div class="publication-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="publication-main">
          <p class="publication-type">${publicationKindLabel[publication.kind]} · ${publication.role} · ${publication.year}</p>
          <h3>${publication.title}</h3>
          <p class="publication-venue">${publication.venue} <span>·</span> Wan Peng</p>
        </div>
        <a class="publication-side publication-pdf-link" href="${publicationHref(publication.file)}" target="_blank" rel="noreferrer" aria-label="打开 ${publication.title} PDF">
          <span class="badge">${publicationTag[publication.kind]}</span><span class="publication-arrow">↗</span>
        </a>
      </article>
    `).join("");
    if (!filtered.length) {
      publicationList.innerHTML = '<p class="publication-empty">没有匹配的发表记录，请尝试更换关键词。</p>';
    }
  };
  filterButtons.forEach((button) => button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderPublications();
  }));
  searchInput?.addEventListener("input", renderPublications);
  renderPublications();

  if (year) year.textContent = new Date().getFullYear();

  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  const updateProgress = () => {
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const active = navLinks.find((link) => link.getAttribute("href") === "#" + entry.target.id);
          navLinks.forEach((link) => link.classList.toggle("is-active", link === active));
        });
      },
      { rootMargin: "-28% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const canvas = document.querySelector("[data-signal-canvas]");
  const visual = canvas?.parentElement;
  if (!canvas || !visual || !window.requestAnimationFrame) return;
  const ctx = canvas.getContext("2d");
  const points = Array.from({ length: 15 }, (_, index) => ({
    x: 0.1 + (index % 5) * 0.2 + Math.random() * 0.08,
    y: 0.21 + Math.floor(index / 5) * 0.27 + Math.random() * 0.08,
    phase: Math.random() * Math.PI * 2,
    speed: 0.004 + Math.random() * 0.005,
  }));
  let frame = 0;
  let width = 0;
  let height = 0;
  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const rect = visual.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  const draw = () => {
    frame += 1;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(27, 122, 123, .24)";
    ctx.beginPath();
    for (let index = 0; index < 5; index += 1) {
      const y = height * (0.2 + index * 0.14);
      ctx.moveTo(width * 0.04, y);
      for (let x = 0; x <= width * 0.94; x += 7) {
        const wave = Math.sin(x * 0.03 + frame * 0.008 + index) * (6 + index * 1.5);
        ctx.lineTo(width * 0.04 + x, y + wave);
      }
      ctx.stroke();
    }
    points.forEach((point, index) => {
      const pulse = 1.8 + Math.sin(frame * point.speed * 10 + point.phase) * 1.2;
      const x = width * (point.x + Math.sin(frame * point.speed + point.phase) * 0.018);
      const y = height * (point.y + Math.cos(frame * point.speed + point.phase) * 0.012);
      ctx.beginPath();
      ctx.fillStyle = index % 4 === 0 ? "rgba(198, 142, 74, .85)" : "rgba(27, 122, 123, .8)";
      ctx.arc(x, y, pulse, 0, Math.PI * 2);
      ctx.fill();
      if (index > 0 && index % 3 === 0) {
        const previous = points[index - 1];
        ctx.beginPath();
        ctx.strokeStyle = "rgba(27, 122, 123, .16)";
        ctx.moveTo(x, y);
        ctx.lineTo(width * previous.x, height * previous.y);
        ctx.stroke();
      }
    });
    if (!reduceMotion) window.requestAnimationFrame(draw);
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });
  draw();
})();
