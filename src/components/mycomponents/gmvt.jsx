'use client'

export default function GoogleMap() {
  return (
    <div className="w-full flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1752839715667!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDQ4cEwxVnc.!2m2!1d31.64519181897079!2d74.87736251951033!3f300!4f0!5f0.7820865974627469"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
