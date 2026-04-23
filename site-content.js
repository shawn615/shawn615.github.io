// Edit this file to update site content without changing the HTML layout.
//
// Notes:
// - For `news`, use `segments` so only institution/event names are linked.
// - For `authors`, use `isMe: true` to render your name in bold.
// - Blog post publishing instructions are kept in `_notes/blog-upload.md`.

window.siteContent = {
  profile: {
    name: 'Seunghyeon Seo',
    siteTitle: "Seunghyeon's Homepage",
    title: 'AI Research Scientist / Engineer',
    email: 'zzzlssh@gmail.com',
    avatar: 'Seunghyeon.jpeg',
    cv: 'data/SeunghyeonSeo_CV.pdf',
    intro: [
      'I recently received my Ph.D. in Artificial Intelligence from Seoul National University, where I worked with Prof. Nojun Kwak in the Machine Intelligence and Pattern Analysis Lab (MIPAL). My work focuses on computer vision, machine learning, neural rendering, and generative models, especially when the problem requires both new modeling ideas and careful research engineering.',
      'In recent projects, I have studied sparse-view novel view synthesis, reflective-scene rendering, 3D scene understanding, synthetic data generation, and diffusion-based training pipelines. Fortunately, I also had the chance to intern twice at Meta Reality Labs, where I worked on synthetic data and avatar-related research problems in a more industry-facing setting.',
      'I am most drawn to research scientist and research engineer work that connects strong ideas with strong execution: building models, running serious experiments, understanding failure cases, and turning research into code, datasets, and systems that other people can rely on.'
    ],
    links: [
      { label: 'Email', url: 'mailto:zzzlssh@gmail.com' },
      { label: 'CV', url: 'data/SeunghyeonSeo_CV.pdf' },
      { label: 'Google Scholar', url: 'https://scholar.google.co.kr/citations?user=LL9u-5IAAAAJ&hl=en' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shawn615/' },
      { label: 'GitHub', url: 'https://github.com/shawn615' }
    ]
  },
  news: [
    {
      label: 'Feb. 2026:',
      segments: [
        { text: 'Started a new chapter at ' },
        { text: 'Blizzard Entertainment', url: 'https://www.blizzard.com/en-us/' },
        { text: ' as an Applied Research Scientist!' }
      ]
    },
    {
      label: 'Sep. 2025:',
      segments: [
        { text: 'Excited to join ' },
        { text: 'Kakao Mobility', url: 'https://www.kakaomobility.com/' },
        { text: ' as a Research Scientist!' }
      ]
    },
    {
      label: 'Sep. 2025:',
      segments: [
        { text: 'One paper made it to ' },
        { text: 'SIGGRAPH Asia 2025', url: 'https://asia.siggraph.org/2025/' },
        { text: '. ' },
        { text: '(Journal Track)', kind: 'highlight' }
      ]
    },
    {
      label: 'Aug. 2025:',
      segments: [{ text: 'Officially graduated from SNU with the Best Doctoral Dissertation Award Honorable Mention. 🎓' }]
    },
    {
      label: 'May 2025:',
      segments: [{ text: 'Successfully wrapped up my Ph.D. defense.' }]
    },
    {
      label: 'Mar. 2025:',
      segments: [
        { text: 'One paper was accepted to ' },
        { text: 'CVPR 2025 Workshop on Computer Vision for Metaverse', url: 'https://sites.google.com/view/computer-vision-for-metaverse/' },
        { text: '. ' },
        { text: '(Oral)', kind: 'highlight' }
      ]
    },
    {
      label: 'Feb. 2025:',
      segments: [
        { text: "I'll be heading back to " },
        { text: 'Meta Reality Labs', url: 'https://tech.facebook.com/reality-labs/' },
        { text: ' this summer for another round as a research scientist intern.' }
      ]
    },
    {
      label: 'Sep. 2024:',
      segments: [
        { text: 'I have been acknowledged as an ' },
        { text: 'outstanding reviewer', url: 'https://eccv2024.ecva.net/program/outstanding-reviewers/' },
        { text: ' for ECCV 2024.' }
      ]
    },
    {
      label: 'Apr. 2024:',
      segments: [
        { text: 'One paper was accepted to ' },
        { text: 'CVPR 2024 Workshop on Efficient Large Vision Models', url: 'https://sites.google.com/view/elvm-workshop-cvpr-2024/home' },
        { text: '.' }
      ]
    },
    {
      label: 'Feb. 2024:',
      segments: [
        { text: 'I will be joining ' },
        { text: 'Meta Reality Labs', url: 'https://tech.facebook.com/reality-labs/' },
        { text: ' as a research scientist intern this summer.' }
      ]
    }
  ],
  publications: [
    {
      id: 'bm25',
      title: 'Visual Words Meet BM25: Sparse Auto-encoder Visual Word Scoring for Image Retrieval',
      authors: [
        { name: 'Donghoon Han', url: 'https://dhk1349.github.io/' },
        { name: 'Eunhwan Park', url: 'https://judepark96.github.io/' },
        { name: 'Seunghyeon Seo', isMe: true }
      ],
      venue: 'Under Review',
      summary:
        'Interpretable image retrieval that combines sparse visual tokens with BM25-style scoring for efficient search without giving up competitive retrieval quality.',
      media: {
        type: 'image',
        src: 'images/bm25v_before.png',
        hoverSrc: 'images/bm25v_after.png',
        alt: 'Visual Words Meet BM25 preview'
      },
      links: [
        { label: 'Project Page', url: 'https://dhk1349.github.io/bm25v/' },
        { label: 'arXiv', url: 'https://arxiv.org/abs/2603.05781' }
      ],
      selected: false
    },
    {
      id: 'logocolor',
      title: 'LoGoColor: Local-Global 3D Colorization for 360 Scenes',
      authors: [
        { name: 'Yeonjin Chang', url: 'https://yeonjin-chang.github.io/' },
        { name: 'Juhwan Cho', url: 'https://scholar.google.co.kr/citations?hl=en&user=SKAOLIMAAAAJ' },
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'Wonsik Shin', url: 'https://scholar.google.co.kr/citations?hl=en&user=xWBNuGkAAAAJ' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'Under Review',
      summary:
        '3D colorization for 360 scenes that improves local fidelity and global consistency across viewpoints, a useful step toward controllable multi-view scene editing.',
      media: { type: 'video', src: 'images/logocolor.mp4', alt: 'LoGoColor project preview' },
      links: [
        { label: 'Project Page', url: 'https://yeonjin-chang.github.io/LoGoColor/' },
        { label: 'arXiv', url: 'https://www.arxiv.org/abs/2512.09278' }
      ],
      selected: false
    },
    {
      id: 'genhmc',
      title: 'Generative Head-Mounted Camera Captures for Photorealistic Avatars',
      authors: [
        { name: 'Shaojie Bai*', url: 'https://shaojieb.github.io/' },
        { name: 'Seunghyeon Seo*', isMe: true },
        { name: 'Yida Wang', url: 'https://www.linkedin.com/in/yidaw/' },
        { name: 'Chenghui Li', url: 'https://scholar.google.co.kr/citations?hl=en&user=9I6TYB8AAAAJ' },
        { name: 'Owen Wang', url: 'https://www.linkedin.com/in/ojwang/' },
        { name: 'Te-Li Wang', url: 'https://www.linkedin.com/in/teliwang/' },
        { name: 'Tianyang Ma', url: 'https://scholar.google.co.kr/citations?hl=en&user=dEhdKCAAAAAJ' },
        { name: 'Jason Saragih', url: 'https://scholar.google.co.kr/citations?hl=en&user=ss-IvjMAAAAJ' },
        { name: 'Shih-En Wei', url: 'https://scholar.google.co.kr/citations?hl=en&user=sFQD3k4AAAAJ' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' },
        { name: 'Hyung Jun Kim', url: 'https://www.linkedin.com/in/john-k-4301067a/' }
      ],
      venue: 'SIGGRAPH Asia 2025 (Journal Track)',
      summary:
        'Synthetic data generation for photorealistic avatars using diffusion models, enabling scalable training data for facial encoders and codec-avatar research pipelines.',
      media: { type: 'video', src: 'images/genhmc.mp4', alt: 'GenHMC project preview' },
      links: [
        { label: 'Project Page', url: 'https://shawn615.github.io/genhmc/' },
        { label: 'arXiv', url: 'https://arxiv.org/abs/2507.05620' }
      ],
      selected: true,
      contribution: 'Co-first author'
    },
    {
      id: 'roodi',
      title: 'ROODI: Reconstructing Occluded Objects with Denoising Inpainters',
      authors: [
        { name: 'Yeonjin Chang', url: 'https://yeonjin-chang.github.io/' },
        { name: 'Erqun Dong', url: 'https://scholar.google.co.kr/citations?hl=en&user=SzxgfTIAAAAJ' },
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' },
        { name: 'Kwang Moo Yi', url: 'https://www.cs.ubc.ca/~kmyi/' }
      ],
      venue: 'Under Review',
      summary:
        '3D object reconstruction under occlusion using Gaussian Splatting and diffusion-based inpainting for geometry completion in challenging real scenes.',
      media: { type: 'video', src: 'images/roodi.mp4', alt: 'ROODI project preview' },
      links: [
        { label: 'Project Page', url: 'https://yeonjin-chang.github.io/ROODI/' },
        { label: 'arXiv', url: 'https://arxiv.org/abs/2503.10256' }
      ],
      selected: false
    },
    {
      id: 'divcon',
      title: 'DivCon-NeRF: Generating Augmented Rays with Diversity and Consistency for Few-shot View Synthesis',
      authors: [
        { name: 'Ingyun Lee', url: 'https://scholar.google.co.kr/citations?hl=en&user=ChN2UUkAAAAJ' },
        { name: 'Jae Won Jang', url: 'https://jaewon040.github.io/' },
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'Under Review',
      summary:
        'Few-shot novel view synthesis with ray augmentation that balances diversity and geometric consistency to reduce artifacts in sparse-input rendering.',
      media: {
        type: 'image',
        src: 'images/divcon_before.png',
        hoverSrc: 'images/divcon_after.png',
        alt: 'DivCon-NeRF project preview'
      },
      links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2503.12947' }],
      selected: false
    },
    {
      id: 'arc-nerf',
      title: 'ARC-NeRF: Area Ray Casting for Broader Unseen View Coverage in Few-shot Object Rendering',
      authors: [
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'Yeonjin Chang', url: 'https://yeonjin-chang.github.io/' },
        { name: 'Jayeon Yoo', url: 'https://natureyoo.github.io/' },
        { name: 'Seungwoo Lee', url: 'https://lifrary.github.io/' },
        { name: 'Hojun Lee', url: 'https://scholar.google.co.kr/citations?user=1BOehSUAAAAJ&hl=en' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'CVPR 2025 Workshop on Computer Vision for Metaverse (Oral)',
      summary:
        'Sparse-view object rendering with area ray casting that broadens unseen-view coverage and improves spatial generalization, texture fidelity, and detail recovery.',
      media: {
        type: 'image',
        src: 'images/arc-nerf_before.png',
        hoverSrc: 'images/arc-nerf_after.png',
        alt: 'ARC-NeRF project preview'
      },
      links: [
        { label: 'Project Page', url: 'https://shawn615.github.io/arc-nerf/' },
        { label: 'arXiv', url: 'https://arxiv.org/abs/2403.10906' }
      ],
      selected: true,
      contribution: 'First author'
    },
    {
      id: 'hlclip',
      title: 'Unleash the Potential of CLIP for Video Highlight Detection',
      authors: [
        { name: 'Donghoon Han*', url: 'https://dhk1349.github.io/' },
        { name: 'Seunghyeon Seo*', isMe: true },
        { name: 'Eunhwan Park', url: 'https://judepark96.github.io/' },
        { name: 'SeongUk Nam' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'CVPR 2024 Workshop on Efficient Large Vision Models',
      summary:
        'CLIP-based video highlight detection with lightweight adaptation and temporal aggregation for strong semantic understanding with limited task-specific supervision.',
      media: { type: 'image', src: 'images/hlclip.png', alt: 'HL-CLIP project preview' },
      links: [
        { label: 'Code', url: 'https://github.com/dhk1349/HL-CLIP' },
        { label: 'arXiv', url: 'https://arxiv.org/abs/2404.01745' }],
      selected: true,
      contribution: 'Co-first author'
    },
    {
      id: 'srtensorf',
      title: 'Fast Sun-aligned Outdoor Scene Relighting based on TensoRF',
      authors: [
        { name: 'Yeonjin Chang', url: 'https://yeonjin-chang.github.io/' },
        { name: 'Yearim Kim', url: 'https://scholar.google.co.kr/citations?user=nS8vgAQAAAAJ&hl=en' },
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'Jung Yi', url: 'https://scholar.google.co.kr/citations?user=omgRWh8AAAAJ&hl=en' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'WACV 2024',
      summary:
        'Outdoor scene relighting with a sun-aligned neural scene representation for faster and more consistent lighting control.',
      media: {
        type: 'image',
        src: 'images/srtensorf_before.png',
        hoverSrc: 'images/srtensorf_after.png',
        alt: 'SR-TensoRF project preview'
      },
      links: [
        {
          label: 'arXiv',
          url: 'https://arxiv.org/abs/2311.03965'
        }
      ],
      selected: false
    },
    {
      id: 'concatplexer',
      title: 'ConcatPlexer: Additional Dim1 Batching for Faster ViTs',
      authors: [
        { name: 'Donghoon Han', url: 'https://dhk1349.github.io/' },
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'DongHyeon Jeon', url: 'https://scholar.google.co.kr/citations?user=2kW3474AAAAJ&hl=en' },
        { name: 'Jiho Jang', url: 'https://scholar.google.co.kr/citations?user=-EtUt1wAAAAJ&hl=en' },
        { name: 'Chaerin Kong', url: 'https://scholar.google.co.kr/citations?user=TownIFQAAAAJ&hl=en' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'NeurIPS 2023 Workshop on Advancing Neural Network Training (Oral)',
      summary:
        'Efficient Vision Transformer inference via a simple batching strategy that improves throughput without changing the underlying model architecture.',
      media: {
        type: 'image',
        src: 'images/concatplexer_before.png',
        hoverSrc: 'images/concatplexer_after.png',
        alt: 'ConcatPlexer project preview'
      },
      links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2308.11199' }],
      selected: false
    },
    {
      id: 'flipnerf',
      title: 'FlipNeRF: Flipped Reflection Rays for Few-shot Novel View Synthesis',
      authors: [
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'Yeonjin Chang', url: 'https://yeonjin-chang.github.io/' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'ICCV 2023',
      summary:
        'Neural rendering for reflective scenes from sparse inputs, using flipped reflection rays to improve geometry estimation and novel view synthesis quality.',
      media: {
        type: 'image',
        src: 'images/flipnerf_before.jpg',
        hoverSrc: 'images/flipnerf_after.jpg',
        alt: 'FlipNeRF project preview'
      },
      links: [
        { label: 'Project Page', url: 'https://shawn615.github.io/flipnerf' },
        { label: 'Code', url: 'https://github.com/shawn615/FlipNeRF' },
        {
          label: 'arXiv',
          url: 'https://arxiv.org/abs/2306.17723'
        }
      ],
      selected: true,
      contribution: 'First author'
    },
    {
      id: 'mdpose',
      title: 'MDPose: Real-Time Multi-Person Pose Estimation via Mixture Density Model',
      authors: [
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'Jaeyoung Yoo', url: 'https://scholar.google.co.kr/citations?user=xQ2kWlYAAAAJ&hl=en' },
        { name: 'Jihye Hwang', url: 'https://scholar.google.co.kr/citations?hl=en&user=NpivtnsAAAAJ' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'UAI 2023',
      summary:
        'Real-time multi-person pose estimation with mixture density modeling for crowded scenes, ambiguous poses, and reliable uncertainty-aware prediction.',
      media: {
        type: 'image',
        src: 'images/mdpose_before.png',
        hoverSrc: 'images/mdpose_after.png',
        alt: 'MDPose project preview'
      },
      links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2302.08751' }],
      selected: true,
      contribution: 'First author'
    },
    {
      id: 'drmm',
      title: 'End-to-End Multi-Object Detection with a Regularized Mixture Model',
      authors: [
        { name: 'Jaeyoung Yoo*', url: 'https://scholar.google.co.kr/citations?user=xQ2kWlYAAAAJ&hl=en' },
        { name: 'Hojun Lee*', url: 'https://scholar.google.co.kr/citations?user=1BOehSUAAAAJ&hl=en' },
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'Inseop Chung', url: 'https://scholar.google.co.kr/citations?hl=en&user=6bFY9FgAAAAJ' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'ICML 2023',
      summary:
        'End-to-end object detection with regularized mixture modeling to suppress duplicate predictions and improve stable detection in complex scenes.',
      media: {
        type: 'image',
        src: 'images/drmm_before.jpg',
        hoverSrc: 'images/drmm_after.jpg',
        alt: 'D-RMM project preview'
      },
      links: [
        { label: 'Code', url: 'https://github.com/lhj815/D-RMM' },
        { label: 'arXiv', url: 'https://arxiv.org/abs/2205.08714' }
      ],
      selected: false
    },
    {
      id: 'mixnerf',
      title: 'MixNeRF: Modeling a Ray with Mixture Density for Novel View Synthesis from Sparse Inputs',
      authors: [
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'Donghoon Han*', url: 'https://dhk1349.github.io/' },
        { name: 'Yeonjin Chang*', url: 'https://yeonjin-chang.github.io/' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'CVPR 2023 (Qualcomm Innovation Fellowship Korea 2023 Winner)',
      summary:
        'Sparse-input novel view synthesis with mixture-density ray modeling, improving rendering reliability under multi-modal scene ambiguity and limited views.',
      media: {
        type: 'image',
        src: 'images/mixnerf_before.jpg',
        hoverSrc: 'images/mixnerf_after.jpg',
        alt: 'MixNeRF project preview'
      },
      links: [
        { label: 'Project Page', url: 'https://shawn615.github.io/mixnerf' },
        { label: 'Code', url: 'https://github.com/shawn615/MixNeRF' },
        {
          label: 'arXiv',
          url: 'https://arxiv.org/abs/2302.08788'
        }
      ],
      selected: true,
      contribution: 'First author'
    },
    {
      id: 'mum',
      title: 'MUM: Mix Image Tiles and UnMix Feature Tiles for Semi-Supervised Object Detection',
      authors: [
        { name: 'JongMok Kim', url: 'https://scholar.google.co.kr/citations?hl=en&user=mknAd9cAAAAJ' },
        { name: 'Jooyoung Jang', url: 'https://scholar.google.co.kr/citations?hl=en&user=jl-IZPQAAAAJ' },
        { name: 'Seunghyeon Seo', isMe: true },
        { name: 'Jisoo Jeong', url: 'https://sites.google.com/view/soo89/' },
        { name: 'Jongkeun Na' },
        { name: 'Nojun Kwak', url: 'http://scholar.google.co.kr/citations?user=h_8-1M0AAAAJ&hl=en' }
      ],
      venue: 'CVPR 2022',
      summary:
        'Semi-supervised object detection with image-tile mixing and feature unmixing, improving low-label learning under strong spatial augmentation.',
      media: {
        type: 'image',
        src: 'images/mum_before.png',
        hoverSrc: 'images/mum_after.png',
        alt: 'MUM project preview'
      },
      links: [
        { label: 'Code', url: 'https://github.com/JongMokKim/mix-unmix' },
        {
          label: 'arXiv',
          url: 'https://arxiv.org/abs/2111.10958'
        }
      ],
      selected: false
    }
  ],
  workExperience: [
    {
      organization: 'Blizzard Entertainment',
      role: 'Applied Research Scientist',
      period: 'Feb. 2026 - Present',
      location: 'Irvine, CA',
      bullets: [
        'Build machine learning-driven solutions for 3D asset processing, with a focus on making internal game development pipelines more efficient and scalable.'
      ]
    },
    {
      organization: 'Kakao Mobility',
      role: 'Research Scientist',
      period: 'Sep. 2025 - Feb. 2026',
      location: 'Seongnam, Korea',
      bullets: [
        'Worked on multimodal perception for HD map generation using camera images and LiDAR point clouds, centering on a BEVFusion-based lane detection model.',
        'Improved annotation and manual correction workflows for lane-level map updates, reducing human-in-the-loop effort in map maintenance.'
      ]
    },
    {
      organization: 'Meta Reality Labs',
      role: 'Research Scientist Intern',
      period: 'May 2025 - Aug. 2025',
      location: 'Burlingame, CA',
      bullets: [
        'Worked in XRCIA Datasets with John Kim, Lei Xiao, and Beibei Liu on synthetic data, egocentric vision, and generative modeling problems relevant to embodied AI and AR/VR research.',
        'Researched synthetic egocentric data generation with improved body-extremity quality using video diffusion transformer models.',
        'Adapted Wan 2.1 with LoRA fine-tuning for egocentric viewpoints, turning a general video model into a more useful pipeline for downstream dataset generation.'
      ]
    },
    {
      organization: 'Meta Reality Labs',
      role: 'Research Scientist Intern',
      period: 'Jul. 2024 - Jan. 2025',
      location: 'Burlingame, CA',
      bullets: [
        'Worked in XRCIA Datasets with John Kim, Shaojie Bai, and Tianyang Ma on synthetic data generation and avatar-related representation learning.',
        'Studied conditional multi-view diffusion models for synthetic data generation and training pipelines for universal face encoders using mixed real and synthetic data.',
        'Contributed to a pipeline that reduced data collection cost by more than an order of magnitude compared with traditional real-world capture workflows.',
        'Built high-quality synthetic data that improved key face-encoder metrics by more than 5% over the previous best internal model.'
      ]
    },
    {
      organization: 'ThinkforBL Consulting Group',
      role: 'Machine Learning Engineer',
      period: 'Jun. 2020 - Nov. 2020',
      location: 'Seoul, Korea',
      bullets: [
        'Developed applied ML systems across perception, time-series modeling, and recommendation problems, including livestock behavior analysis, crop growth pattern classification, and large-scale movement visualization.',
        'Used models such as DFLow and CNN-LSTM in production-oriented settings shaped by client requirements and deployment constraints.',
        'Built end-to-end ML services, including an item-based collaborative filtering recommender system and client-facing REST APIs with Django REST Framework.'
      ]
    },
    {
      organization: 'Food and Agriculture Organization of the United Nations (FAO)',
      role: 'Intern',
      period: 'Sep. 2019 - Feb. 2020',
      location: 'Rome, Italy',
      bullets: [
        'Worked with the Committee on World Food Security under Christopher Hegadorn on data-oriented policy support and research coordination tasks.',
        'Researched and documented datasets relevant to the proposed CFS workstream on data collection and analysis tools.'
      ]
    }
  ],
  blog: {
    topics: ['Paper reviews', 'Technical notes', 'Implementation logs', 'Work stories', 'Daily life', 'Hobbies'],
    intro:
      'Mostly paper reviews, technical rabbit holes, implementation notes, and field reports from work that looked easier on the whiteboard. But not everything here will be about models, benchmarks, or GPUs. Some posts will be about everyday life, hobbies, and whatever else earns a spot between experiments.',
    posts: []
  },
  analytics: {
    googleAnalyticsId: 'G-XV9FTV9E2Z',
    goatcounter: 'https://YOUR_CODE.goatcounter.com/count'
  }
};
