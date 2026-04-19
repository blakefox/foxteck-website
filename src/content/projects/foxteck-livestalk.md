---
title: "Livestalk — Livestock Management Platform"
company: "Foxteck / Livestalk"
companySlug: "foxteck"
role: "Co-Founder / CTO"
startYear: 2018
endYear: 2024
order: 7
tags: ["OpenCV", "TensorFlow", "Machine Learning", "SaaS", "Drone Integration", "AR", "SOC2"]
domains: ["ai", "hardware", "startup", "leadership"]
summary: "Co-founded an AgTech SaaS startup using computer vision and drone integration to automate livestock inventory and preventive care — raising angel capital and achieving SOC2 compliance."
heroImage: "/assets/projects/foxteck-livestalk/banner.png"
images:
  - "/assets/projects/foxteck-livestalk/app-screenshot.png"
  - "/assets/projects/foxteck-livestalk/postcard.png"
  - "/assets/projects/foxteck-livestalk/banner.png"
  - "/assets/projects/foxteck-livestalk/architecture-diagram.png"
youtubeUrls:
  - "https://www.youtube.com/watch?v=clW1V3FW2qU"
featured: false
---

Livestalk simplifies livestock management through technology. The platform is a subscription-based Livestock Management Digital Assistant — with a basic tier providing superior record keeping, and advanced tiers unlocking Automated Inventory via Computer Vision, real-time data viewing in Augmented Reality, and remote monitoring via drone and IP camera integrations.

As Co-Founder and CTO, I architected a SaaS platform to audit and analyze video from security cameras and drones using OpenCV, TensorFlow, and Active Machine Learning to identify, evaluate, and report livestock inventory automatically. Successfully raised angel and incubator capital to fund and execute an 18-month technology roadmap.

Ensured SOC2 Security Compliance and NIH standards throughout, with all personal information maintained in encrypted forms. Operated this as a concurrent startup alongside full-time executive roles at HIA Technologies and IKIN — demonstrating entrepreneurial range, time management, and cross-context technical leadership.

Our primary mission: simplify the duties of livestock managers, freeing them to focus on what matters most — their animals. Our secondary mission: grant livestock managers access to technologies that enable their operation to run smoother and make better business decisions.

<figure class="inline-figure">
  <img src="/assets/projects/foxteck-livestalk/architecture-diagram.png" alt="Livestalk Cloud Architecture and Three-Phase Identification Pipeline" class="prose-lightbox" />
  <figcaption>Livestalk system architecture — cloud-based video processing pipeline (left) and three-phase livestock identification process (right).</figcaption>
</figure>

**Cloud Architecture & End-to-End Pipeline** — the entire platform was deployed on Azure, designed from the ground up for scale and multi-tenancy. Incoming video traffic — from IP security cameras and drone feeds — enters a Video Processing Server that normalizes and queues frames for analysis. A load balancer distributes that workload across a horizontally scalable pool of Image Analysis Servers, ensuring throughput scales with the number of active farms without performance degradation. Processed results and associated metadata flow into a central API Server, which persists records to a NoSQL database and routes raw media assets (videos, images) to dedicated blob storage — keeping hot query data separated from cold media.

The identification pipeline itself runs in three sequential phases on each captured frame. First, a machine learning model trained specifically on livestock detects the presence and type of animal (e.g. cattle) and draws a bounding box around it. Second, a specialized model zooms into that bounding box and identifies the animal's ear tag — the unique identifier physically attached to each head of livestock. Third, an OCR/barcode model reads the tag number, QR code, or barcode, and looks up the corresponding animal record in the database — completing the loop from raw video frame to a fully identified, tracked inventory entry. All without human intervention.

On the user-facing side, the Azure-hosted User Portal Server delivers reports, notifications, and management tools across every platform the operator might be on — web, PC, Mac, iOS, Android, and Magic Leap AR for on-farm hands-free access. The result is a full-stack pipeline from camera to cloud to operator device, running continuously in the background while the rancher goes about their day.
