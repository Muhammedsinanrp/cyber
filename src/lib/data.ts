export const IDENTITY = {
  name: 'MUHAMMED SINAN R P',
  handle: 'sinan@sec',
  role: 'SOC ANALYST',
  tagline: 'DEFENSIVE & OFFENSIVE CYBERSECURITY',
  location: 'Malappuram, Kerala, India',
  status: 'OPEN TO WORK — IMMEDIATE AVAILABILITY',
  summary:
    'SOC Analyst with hands-on experience in SIEM monitoring, threat detection, incident response, vulnerability assessment, log analysis, network security, and security monitoring — built through 100+ simulated attack labs and production SOC alert triaging.',
  objective:
    'To land an entry-level role as a SOC Analyst or Junior Penetration Tester where I can contribute immediately while continuing to grow.',
  github: 'https://github.com/muhammedsinanrp',
}

export const STATS = [
  { value: '100+', label: 'LABS SOLVED', sub: 'TryHackMe & HTB' },
  { value: '13+', label: 'DAILY ALERTS', sub: 'triaged in SOC sim' },
  { value: '9%', label: 'MTTD REDUCTION', sub: 'tuning detections' },
  { value: '16%', label: 'LOG EFFORT', sub: 'automated parsing' },
]

export const SKILL_GROUPS = [
  {
    title: 'SIEM & DETECTION',
    timecode: '00:01',
    items: ['Splunk', 'Microsoft Sentinel', 'ELK Stack', 'SPL Queries', 'KQL / EQL', 'Sigma Rules'],
  },
  {
    title: 'NETWORK SECURITY',
    timecode: '00:02',
    items: ['Wireshark', 'Nmap', 'Snort IDS', 'TCP/IP Analysis', 'PCAP Forensics', 'pfSense'],
  },
  {
    title: 'OFFENSIVE TOOLS',
    timecode: '00:03',
    items: ['Burp Suite', 'Nessus', 'Metasploit', 'BloodHound', 'Impacket', 'CrackMapExec'],
  },
  {
    title: 'SCRIPTING & OS',
    timecode: '00:04',
    items: ['Python', 'Bash', 'PowerShell', 'Kali Linux', 'Parrot OS', 'Ubuntu Server'],
  },
  {
    title: 'DEFENSIVE DOMAINS',
    timecode: '00:05',
    items: ['Incident Response', 'Threat Hunting', 'Active Directory', 'MITRE ATT&CK', 'Digital Forensics', 'OSINT'],
  },
]

export const DOMAINS = [
  'SIEM MONITORING',
  'INCIDENT RESPONSE',
  'THREAT HUNTING',
  'ACTIVE DIRECTORY',
  'MITRE ATT&CK',
  'DIGITAL FORENSICS',
]

export interface Project {
  id: string
  timecode: string
  category: string
  env: string
  title: string
  desc: string
  stats: { label: string; value: string }[]
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'wazuh-lab',
    timecode: '00:12:01',
    category: 'SIEM & IDS ARCHITECTURE',
    env: 'ENTERPRISE LAB',
    title: 'Network Threat Detection Lab — Wazuh SIEM + Snort IDS + Wireshark',
    desc: 'Built an isolated enterprise-style SOC lab on Ubuntu 22.04 with Wazuh SIEM, Snort IDS, Windows Server 2022, Kali Linux and Wireshark/tcpdump. Simulated Nmap reconnaissance, RDP credential brute force, and DNS C2 tunneling — generating 642 security alerts, custom Snort rules, correlated host and network telemetry, and full MITRE ATT&CK mapping.',
    stats: [
      { label: 'ALERTS GENERATED', value: '642' },
      { label: 'IDS ENGINE', value: 'Snort 3' },
      { label: 'SIEM CORE', value: 'Wazuh 4.x' },
    ],
    tags: ['Wazuh SIEM', 'Snort IDS', 'Wireshark', 'Ubuntu 22.04', 'Windows Server 2022', 'PCAP Forensics', 'DNS C2 Tunneling'],
  },
  {
    id: 'splunk-soc',
    timecode: '00:18:44',
    category: 'SIEM & DETECTION ENGINEERING',
    env: 'SOC SIMULATION',
    title: 'SOC Home Lab — Splunk SIEM & Attack Detection',
    desc: 'Comprehensive SOC lab on Kali Linux, Windows Server 2022, Splunk Enterprise and Universal Forwarder. Implemented SPL detections and dashboards for failed logons, brute force, network reconnaissance and privilege escalation; authored detailed incident-response runbooks and adversary attack simulations.',
    stats: [
      { label: 'SIEM PLATFORM', value: 'Splunk' },
      { label: 'FORWARDER', value: 'Universal' },
      { label: 'COVERAGE', value: 'AD & Network' },
    ],
    tags: ['Splunk Enterprise', 'Universal Forwarder', 'SPL Queries', 'Brute-Force Detection', 'Privilege Escalation', 'Incident Runbooks'],
  },
  {
    id: 'windows-forensics',
    timecode: '00:23:17',
    category: 'WINDOWS THREAT FORENSICS',
    env: 'MULTI-SIEM',
    title: 'Enterprise Windows Log Analysis & SOC Threat Investigation Lab',
    desc: 'End-to-end Windows log investigation workflow across Splunk and Elastic SIEM — RDP brute-force detection, Windows Event ID analysis (4624, 4625, 4672, 4720), MITRE ATT&CK mapping, SPL/KQL/EQL detection logic, and custom Sigma rules for cross-platform threat hunting.',
    stats: [
      { label: 'EVENT IDS', value: 'Security Log' },
      { label: 'RULE STANDARDS', value: 'Sigma' },
      { label: 'SIEM QUERY', value: 'KQL + SPL' },
    ],
    tags: ['Elastic SIEM', 'Splunk', 'Sigma Rules', 'Windows Event IDs', 'RDP Brute Force', 'EQL Queries'],
  },
  {
    id: 'packet-sniffer',
    timecode: '00:27:03',
    category: 'NETWORK SECURITY & TOOLING',
    env: 'CORE PYTHON',
    title: 'Python Packet Sniffer — Deep Packet Inspection',
    desc: 'Robust network packet capture and analysis tool built with Python and Scapy — parses TCP/IP traffic in real time and flags suspicious connections, abnormal packet headers, port sweep signatures, and unusual protocol behavior across internal subnets.',
    stats: [
      { label: 'LANGUAGE', value: 'Python 3' },
      { label: 'FRAMEWORK', value: 'Scapy' },
      { label: 'INSPECTION', value: 'Layer 2-4' },
    ],
    tags: ['Python 3', 'Scapy', 'TCP/IP Stack', 'Raw Sockets', 'Port Scan Mitigation', 'Anomaly Flagging'],
  },
  {
    id: 'proxmox-lab',
    timecode: '00:31:29',
    category: 'INFRASTRUCTURE & VIRTUALIZATION',
    env: 'ENTERPRISE LAB',
    title: 'Proxmox Cybersecurity Home Lab',
    desc: 'Architected and deployed a dedicated multi-node cybersecurity home lab on Proxmox VE — segmented VLANs, Active Directory domain controllers, pfSense firewalls, and logging endpoints for continuous malware testing and SIEM ingestion.',
    stats: [
      { label: 'HYPERVISOR', value: 'Proxmox VE' },
      { label: 'FIREWALL', value: 'pfSense' },
      { label: 'ARCHITECTURE', value: 'VLANs & AD' },
    ],
    tags: ['Proxmox VE', 'Active Directory', 'pfSense', 'VLAN Segmentation', 'Malware Testing', 'SIEM Ingestion'],
  },
  {
    id: 'osint-recon',
    timecode: '00:35:52',
    category: 'INTELLIGENCE GATHERING',
    env: 'OSINT LAB',
    title: 'OSINT Reconnaissance Framework',
    desc: 'Passive intelligence gathering labs using SpiderFoot and WHOIS-based domain reconnaissance across 10+ simulated organizational targets — aggregating threat footprints and leaked asset registers.',
    stats: [
      { label: 'TARGETS SCOPE', value: '10+ Orgs' },
      { label: 'CORE TOOL', value: 'SpiderFoot' },
      { label: 'RECON MODE', value: 'Passive OSINT' },
    ],
    tags: ['SpiderFoot', 'WHOIS', 'Recon-ng', 'DNS Mining', 'Threat Footprinting', 'Asset Registers'],
  },
  {
    id: 'phishing-lab',
    timecode: '00:39:16',
    category: 'SOCIAL ENGINEERING & DEFENSE',
    env: 'SECURITY POSTURE',
    title: 'Phishing Simulation & Awareness',
    desc: 'Executed social engineering awareness setups using MaxPhisher in controlled environments. Analyzed credential capture methods and formulated user defense strategies, mail security policies, and SPF/DKIM/DMARC hygiene.',
    stats: [
      { label: 'SIMULATOR', value: 'MaxPhisher' },
      { label: 'MAIL SECURITY', value: 'SPF/DKIM/DMARC' },
      { label: 'OBJECTIVE', value: 'Defense Posture' },
    ],
    tags: ['MaxPhisher', 'Email Security', 'SPF/DKIM/DMARC', 'Defense Posture', 'Credential Capture', 'User Awareness'],
  },
  {
    id: 'linux-hardening',
    timecode: '00:42:40',
    category: 'OFFENSIVE ENVIRONMENT',
    env: 'SECURITY OPS',
    title: 'Linux Hardening & PenTest Setup',
    desc: 'Configured and hardened custom Kali Linux and Parrot Security OS setups for security assessments — automated network scanning scripts, kernel audit rules, and vulnerability identification suites.',
    stats: [
      { label: 'ENVIRONMENTS', value: 'Kali & Parrot' },
      { label: 'KERNEL AUDIT', value: 'auditd Rules' },
      { label: 'SCRIPTING', value: 'Bash Automation' },
    ],
    tags: ['Kali Linux', 'Parrot OS', 'Hardening', 'Bash Automation', 'Kernel Audit', 'Vuln Scanning'],
  },
]

export const CERTS = [
  {
    no: '#01',
    title: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    desc: 'Industry-recognized gold standard certification in ethical hacking methodologies, penetration testing frameworks, and countermeasure deployments.',
  },
  {
    no: '#02',
    title: 'Certified Penetration Tester',
    issuer: 'Red Team Hacker Academy',
    desc: 'Security credential focusing on real-world hands-on offensive penetration testing concepts, vulnerability weaponization, and remediation techniques.',
  },
  {
    no: '#03',
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Coursera · Aug 2026',
    desc: 'Rigorous professional certification program by Google covering SIEM log analysis, network architecture & packet inspection, Python automation, Linux command line, SQL querying, and incident detection & response.',
  },
]

export const EDUCATION = {
  school: 'University of Calicut',
  degree: "Bachelor's Degree",
  period: 'June 2022 — March 2025',
}

export const FEED_LINES = [
  { ts: '21:16:55', level: 'WARN', source: 'Splunk', text: 'Suspicious PowerShell execution (EncodedCommand) on Host-042' },
  { ts: '21:16:55', level: 'INFO', source: 'Nessus', text: 'Patch verification verified for CVE-2024-XXXX' },
  { ts: '21:16:55', level: 'INFO', source: 'Wireshark', text: 'TCP SYN flood attempt mitigated at edge firewall' },
  { ts: '21:16:55', level: 'WARN', source: 'Defender EDR', text: 'Unauthorized LSASS process dump blocked' },
  { ts: '21:17:02', level: 'INFO', source: 'Wazuh', text: '642 alerts correlated — DNS tunneling signature matched' },
  { ts: '21:17:14', level: 'CRIT', source: 'Snort', text: 'RDP brute-force burst detected from 10.0.0.44' },
  { ts: '21:17:31', level: 'INFO', source: 'Sigma', text: 'Cross-platform rule sync completed — 0 errors' },
  { ts: '21:17:48', level: 'WARN', source: 'Sentinel', text: 'Impossible travel sign-in flagged for analyst review' },
]

export const SPL_QUERY = 'index=firewall action=blocked | stats count by src_ip | sort -count'
