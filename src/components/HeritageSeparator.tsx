const HeritageSeparator = ({ className = "" }: { className?: string }) => (
  <div className={`heritage-separator ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
      <path d="M12 2L14.5 9.5H22L16 14L18 22L12 17.5L6 22L8 14L2 9.5H9.5L12 2Z" fill="currentColor" opacity="0.8"/>
    </svg>
  </div>
);

export default HeritageSeparator;
