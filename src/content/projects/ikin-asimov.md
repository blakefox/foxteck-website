---
title: "ASIMOV — Generative AI AdTech Platform"
company: "IKIN Technologies"
companySlug: "ikin"
role: "VP of Engineering"
startYear: 2023
endYear: "present"
order: 10
tags: ["Generative AI", "NeRF", "AdTech", "Computer Vision", "FFmpeg", "Sports Entertainment", "Live Video", "Claude / CoPilot AI"]
domains: ["ai", "hardware", "leadership"]
summary: "Built a generative AI platform using NeRF and computer vision to create audience-personalized advertising media — deployed across Formula 1 and Premier League football in partnership with Goaline Studios, Torqhub, and Videon."
heroImage: "/assets/projects/ikin-asimov/AdTechHero.png"
heroVideo: "/assets/projects/ikin-asimov/adtech-clip1.mp4"
images:
  - "/assets/projects/ikin-asimov/AdTech_DescFlow.png"
videos:
  - "/assets/projects/ikin-asimov/f1-ads.mp4"
  - "/assets/projects/ikin-asimov/liverpool-ads.mp4"
externalUrl: "https://ikininc.com/"
featured: true
---

ASIMOV represents the second phase of IKIN's AI evolution — moving from computer vision that recreates presence, to generative AI that creates entirely new content on demand.

Leveraging NeRF (Neural Radiance Field) point cloud technology, the platform rapidly generates and optimizes video content, derives novel views on demand, and builds media-aware systems capable of understanding context for event-driven, audience-personalized advertising.

Deployed within the Sports Entertainment industry in partnership with Goaline Studios, Torqhub, and Videon — ASIMOV generates dynamic advertising content that adapts to the moment: the sport, the event, the audience, the athlete on screen. The result is advertising that doesn't just target a demographic — it understands the context of what's being watched and delivers creative that earns attention.

**Automated Artistic Content Creation** — leveraged ChatGPT, OpenCV, FFmpeg, and IKIN's patented Generative AI IP to automate content pipelines that previously required manual artistic intervention at every stage.

**Parallelized Ad Generation Pipeline** — at the core of ASIMOV's output is a highly parallelized rendering architecture. When a live video frame is trapped, the system fires a simultaneous ASIMOV Analysis call alongside a metadata lookup (driver stats, car data, weather, location, event context) to rapidly identify the best-fit ad template and relevant brand/athlete assets. From there, a set of parallel render jobs executes concurrently — generating brand placements, overlaying driver stats, building profile renders, and producing event-specific content such as celebration sequences — each targeting a predefined slot within a template layout. Once all jobs complete, a final composite raster pass merges every layer into a single cohesive image, delivered as a PNG overlay for injection into the live video stream. Critically, Computer Vision analyzes the source frame before template selection — understanding the spatial content of the scene to ensure the chosen template avoids occluding important visual information, such as the lead athlete or key action, keeping the overlay additive rather than obstructive.

<figure class="inline-figure">
  <img src="/assets/projects/ikin-asimov/AdTech_DescFlow.png" alt="ASIMOV Advertisement Workflow" class="prose-lightbox" />
  <figcaption>ASIMOV Advertisement Workflow — parallel render jobs feed a template compositor, producing a single PNG overlay for live broadcast.</figcaption>
</figure>
