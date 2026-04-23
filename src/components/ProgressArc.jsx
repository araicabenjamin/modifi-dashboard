// src/components/ProgressArc.jsx

function ProgressArc({ value = 48 }) {
  const radius = 80;
  const circumference = Math.PI * radius;

  const offset = circumference - (value / 100) * circumference;

  return (
    <svg
      className="progressArc"
      viewBox="0 0 200 100"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background arc */}
      <path
        d="M10 90 A 80 80 0 0 1 190 90"
        fill="none"
        stroke="#D1D5DB"
        strokeWidth="12"
        strokeLinecap="butt"
      />

      {/* Progress arc */}
      <path
        d="M10 90 A 80 80 0 0 1 190 90"
        fill="none"
        stroke="#6FB52D"
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="butt"
      />
    </svg>
  );
}

export default ProgressArc;