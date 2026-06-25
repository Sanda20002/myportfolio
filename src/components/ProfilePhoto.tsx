interface ProfilePhotoProps {
  imageSrc: string;
  alt?: string;
  className?: string;
}

export function ProfilePhoto({ imageSrc, alt = "Profile Photo", className = "" }: ProfilePhotoProps) {
  return (
    <div className={`profile-photo-wrap group ${className}`}>
      <div className="profile-photo-ring" />
      <div className="profile-photo-glow" />
      <div className="profile-photo-shell">
        <img src={imageSrc} alt={alt} className="profile-photo-image" loading="eager" />
      </div>
    </div>
  );
}