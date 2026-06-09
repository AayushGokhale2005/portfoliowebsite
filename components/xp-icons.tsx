export function FolderIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="folderBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe9a8" />
          <stop offset="0.5" stopColor="#ffd25e" />
          <stop offset="1" stopColor="#f5b916" />
        </linearGradient>
        <linearGradient id="folderTab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe07a" />
          <stop offset="1" stopColor="#f3bb2c" />
        </linearGradient>
      </defs>
      <path
        d="M5 12c0-1.6 1.3-3 3-3h10l4 4h16c1.6 0 3 1.3 3 3v3H5z"
        fill="url(#folderTab)"
        stroke="#d99a13"
        strokeWidth="0.8"
      />
      <path
        d="M4 17c0-1.6 1.3-3 3-3h34c1.6 0 3 1.3 3 3v18c0 1.6-1.3 3-3 3H7c-1.6 0-3-1.3-3-3z"
        fill="url(#folderBody)"
        stroke="#d99a13"
        strokeWidth="0.8"
      />
      <path d="M6 19h36v2H6z" fill="#fff" opacity="0.45" />
    </svg>
  )
}

export function IeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <radialGradient id="ieGlobe" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#bfe6ff" />
          <stop offset="0.5" stopColor="#3aa0e8" />
          <stop offset="1" stopColor="#0b62b3" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="16" fill="url(#ieGlobe)" stroke="#0b4c8c" strokeWidth="1" />
      <ellipse cx="24" cy="24" rx="7" ry="16" fill="none" stroke="#e9f5ff" strokeWidth="1.6" opacity="0.8" />
      <path d="M9 20h30M9 28h30" stroke="#e9f5ff" strokeWidth="1.4" opacity="0.7" />
      <path
        d="M16 33c4 4 18 5 24-1 3-3 2-8 0-10 3 7-2 12-9 13-6 .8-12-1-15-2z"
        fill="#f4c20d"
        stroke="#d99a13"
        strokeWidth="0.6"
      />
    </svg>
  )
}

export function NotepadIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="1" fill="#fff" stroke="#888" strokeWidth="1" />
      <rect x="8" y="6" width="32" height="8" fill="#245edb" />
      <path d="M14 20h20M14 26h20M14 32h14" stroke="#333" strokeWidth="1.5" />
      <path d="M10 10l4-2 4 2" fill="none" stroke="#fff" strokeWidth="1" opacity="0.6" />
    </svg>
  )
}

export function BriefcaseIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="briefcaseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8b6914" />
          <stop offset="1" stopColor="#5c4510" />
        </linearGradient>
      </defs>
      <rect x="8" y="18" width="32" height="22" rx="2" fill="url(#briefcaseGrad)" stroke="#3d2e0a" strokeWidth="0.8" />
      <path d="M18 18v-4c0-2 2-4 6-4s6 2 6 4v4" fill="none" stroke="#3d2e0a" strokeWidth="2" />
      <rect x="20" y="26" width="8" height="6" rx="1" fill="#ffd25e" stroke="#d99a13" strokeWidth="0.6" />
    </svg>
  )
}

export function MyComputerIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="6" y="8" width="28" height="22" rx="2" fill="#c0c0c0" stroke="#666" strokeWidth="1" />
      <rect x="9" y="11" width="22" height="16" fill="#245edb" />
      <rect x="14" y="32" width="12" height="4" fill="#888" />
      <rect x="10" y="36" width="20" height="3" rx="1" fill="#666" />
      <rect x="34" y="14" width="8" height="20" rx="1" fill="#ddd" stroke="#888" strokeWidth="0.8" />
      <circle cx="38" cy="32" r="2" fill="#3c3" />
    </svg>
  )
}

export function RecycleBinIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="14" y="10" width="20" height="3" rx="1" fill="#888" />
      <rect x="12" y="13" width="24" height="2" fill="#666" />
      <path d="M16 15 L14 38 Q14 40 16 40 L32 40 Q34 40 34 38 L32 15 Z" fill="#4a90c2" stroke="#2a6090" strokeWidth="0.8" />
      <path d="M20 18v18M24 18v18M28 18v18" stroke="#2a6090" strokeWidth="1.5" opacity="0.5" />
    </svg>
  )
}

export function StartFlag({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5c4-1.5 7 1.5 10 0v6c-3 1.5-6-1.5-10 0z" fill="#f25022" />
      <path d="M13 5c3-1.5 5 .5 8 0v6c-3 .5-5-1.5-8 0z" fill="#7fba00" />
      <path d="M3 12c4-1.5 7 1.5 10 0v6c-3 1.5-6-1.5-10 0z" fill="#00a4ef" />
      <path d="M13 12c3-1.5 5 .5 8 0v6c-3 .5-5-1.5-8 0z" fill="#ffb900" />
    </svg>
  )
}
