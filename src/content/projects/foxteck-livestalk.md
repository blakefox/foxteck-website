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
externalUrl: "https://www.livestalk.org"
featured: false
---

Livestalk simplifies livestock management through technology. The platform is a subscription-based Livestock Management Digital Assistant — with a basic tier providing superior record keeping, and advanced tiers unlocking Automated Inventory via Computer Vision, real-time data viewing in Augmented Reality, and remote monitoring via drone and IP camera integrations.
\
\
As Co-Founder and CTO, I architected a SaaS platform to audit and analyze video from security cameras and drones using OpenCV, TensorFlow, and Active Machine Learning to identify, evaluate, and report livestock inventory automatically. Successfully raised angel and incubator capital to fund and execute an 18-month technology roadmap.
\
\
Ensured SOC2 Security Compliance and NIH standards throughout, with all personal information maintained in encrypted forms. Operated this as a concurrent startup alongside full-time executive roles at HIA Technologies and IKIN — demonstrating entrepreneurial range, time management, and cross-context technical leadership.
\
\
<span style="color:#C04A1A;font-weight:700;font-size:30px">
**Why I Built This** 

— I grew up as a cattle rancher's son in central Nebraska. 4-H and FFA shaped who I became — from horse shows and livestock shows to summer camps and rodeos. I watched my family manage hundreds of head of cattle using nothing but handwritten notes, memory, and manual walkthroughs. When I became a software engineer, I knew eventually those two worlds would intersect. Livestalk was the product of that collision — built by someone who understood both the technology and the mud on the boots.
\
\
Our primary mission: simplify the duties of livestock managers, freeing them to focus on what matters most — their animals. Our secondary mission: grant livestock managers access to technologies that enable their operation to run smoother and make better business decisions.

<figure class="inline-figure">
  <img src="/assets/projects/foxteck-livestalk/slide-prototype.png" alt="Livestalk working prototype — Android MVP with live cattle detection and automated ear tag record lookup" class="prose-lightbox" />
  <figcaption>The working prototype — Android MVP (left) capturing cattle in the field alongside the image processing server identifying individual animals by breed, ear tag, and record history in real time.</figcaption>
</figure>
<figure class="inline-figure">
  <img src="/assets/projects/foxteck-livestalk/architecture-diagram.png" alt="Livestalk Cloud Architecture and Three-Phase Identification Pipeline" class="prose-lightbox" />
  <figcaption>Livestalk system architecture — cloud-based video processing pipeline (left) and three-phase livestock identification process (right).</figcaption>
</figure>

<span style="color:#C04A1A;font-weight:700;">
**Cloud Architecture & End-to-End Pipeline** </span>
— the entire platform was deployed on Azure, designed from the ground up for scale and multi-tenancy. Incoming video traffic — from IP security cameras and drone feeds — enters a Video Processing Server that normalizes and queues frames for analysis. A load balancer distributes that workload across a horizontally scalable pool of Image Analysis Servers, ensuring throughput scales with the number of active farms without performance degradation. Processed results and associated metadata flow into a central API Server, which persists records to a NoSQL database and routes raw media assets (videos, images) to dedicated blob storage — keeping hot query data separated from cold media.

The identification pipeline itself runs in three sequential phases on each captured frame. First, a machine learning model trained specifically on livestock detects the presence and type of animal (e.g. cattle) and draws a bounding box around it. Second, a specialized model zooms into that bounding box and identifies the animal's ear tag — the unique identifier physically attached to each head of livestock. Third, an OCR/barcode model reads the tag number, QR code, or barcode, and looks up the corresponding animal record in the database — completing the loop from raw video frame to a fully identified, tracked inventory entry. All without human intervention.

On the user-facing side, the Azure-hosted User Portal Server delivers reports, notifications, and management tools across every platform the operator might be on — web, PC, Mac, iOS, Android, and AR headsets for on-farm hands-free access. The result is a full-stack pipeline from camera to cloud to operator device, running continuously in the background while the rancher goes about their day.

<span style="color:#C04A1A;font-weight:700;">**Bringing It to the Field** </span>— Technology built in a lab for a problem you've never lived is theory. In June 2019, I packed up the prototype and drove to the 30th Annual Sandhills Ranch Expo in Bassett, Nebraska — one of the region's premier gatherings for working ranchers. We set up a booth, ran live demos, and listened. The response validated everything we'd built toward.

<figure class="inline-figure">
  <img src="/assets/projects/foxteck-livestalk/slide-traction.png" alt="Livestalk traction — Sandhills Ranch Expo demo results, survey statistics, and key account partnerships in Central Nebraska" class="prose-lightbox" />
  <figcaption>Traction results from the 2019 Sandhills Ranch Expo in Bassett, Nebraska — live tech demos, structured survey data, and the first key account relationships formed with regional veterinarians and livestock market operators.</figcaption>
</figure>

Survey results from the expo were unambiguous: **93.8%** of livestock managers said they were in dire need of better tools. **78.1%** were still keeping records in handwritten notebooks. **80.6%** said they would use Livestalk today if it were available. The three key accounts we left Bassett with — a regional livestock veterinarian managing 100,000+ head across Central Nebraska, the main livestock sale barn for the region, and a feedlot manager running five major yards — each represented not just pilot customers but domain experts who shaped how the product continued to evolve.

**What the Ranching Community Said**

<figure class="inline-figure">
  <img src="/assets/projects/foxteck-livestalk/slide-feedback.png" alt="Livestalk user feedback — rancher, veterinarian, and livestock market testimonials from the 2019 Sandhills Ranch Expo" class="prose-lightbox" />
  <figcaption>Unprompted feedback from working ranchers, livestock market operators, and veterinary professionals — collected during live demos of the cattle detection pipeline at the 2019 Sandhills Ranch Expo.</figcaption>
</figure>

The feedback wasn't polished investor language — it was practical and direct, from people who have spent their lives managing animals. Todd Eberle, co-owner of the Broken Bow Livestock Sale Barn with 30+ years of market experience, saw a more ethical and cost-effective replacement to livestock branding. Brady Dillon, managing intake for five Central Nebraska feedlots, saw a deterrent for the cattle theft crisis. Mavis Fleming, a working rancher, spoke for the room: *"I've been waiting for a solution to quickly make note of vaccinations and important cattle health concerns."* Roberta Stout put it plainest: *"This is the simplistic solution to record keeping that I wanted CattleMax to be."*
\
\
<span style="color:#C04A1A;font-weight:700;">**In the Field**



<figure class="inline-figure">
  <img src="/assets/projects/foxteck-livestalk/slide-field.png" alt="Blake Fox testing the Livestalk prototype on Fox Ranch cattle in Central Nebraska" class="prose-lightbox" />
  <figcaption>Testing the prototype on working cattle in Central Nebraska — scanning the herd with technology built specifically to serve the ranching communities that shaped this work from the beginning.</figcaption>
</figure>

This wasn't a university research project or a corporate pilot program. It was built and tested on working ranches, by someone who grew up on one. The person scanning cattle in that Nebraska pasture is the same person who, decades earlier, was learning to care for animals and lead through 4-H and FFA. That origin doesn't leave you. It shapes what you build, who you build it for, and why it matters.
