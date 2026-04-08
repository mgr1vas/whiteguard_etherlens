# Etherlens by Whiteguard - Threat Scanner 

**Etherlens** is an advanced, lightweight cybersecurity scanning interface designed to provide instant threat analysis for suspicious URLs and domains. 

> **Current Phase:** Minimum Viable Product (MVP) / Prototype.
> The current version runs entirely client-side as a static application, simulating threat intelligence checks via a local heuristic decoy database.

## Features
* **Zero-Latency UI:** Built with raw HTML, Tailwind CSS, and Vanilla JavaScript for instant loading.
* **Heuristic Decoy Engine:** Simulates deep-scan threat analysis against known malicious keywords locally.
* **Client-Side Execution:** Requires no backend servers or API keys for the current MVP phase.
* **Responsive Design:** Fully optimized for both desktop Enterprise environments and mobile devices.

## How to Run (Local Development)
Because Whiteguard MVP is a completely static frontend application, no complex installation is required.
1. Clone the repository: `git clone https://github.com/mgr1vas/whiteguard_etherlens.git`
2. Open the directory.
3. Simply double-click `index.html` to run it in your browser.

## Deployment
This project is optimized for direct hosting on **GitHub Pages**, Vercel, or Netlify. Since it requires no backend runtime, it can be deployed in seconds with 100% uptime.

## Roadmap
- [ ] Integration with live global Threat Intelligence APIs (e.g., VirusTotal).
- [ ] Backend routing implementation (FastAPI/Node.js).
- [ ] Email attachment and file hash scanning capabilities.
- [ ] User authentication and historical scan logs.

## License
This project is licensed under the [MIT License](LICENSE).
*See at whiteguard_etherlens/LICENSE*
