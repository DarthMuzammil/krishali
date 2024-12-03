'use client'

export default function DisplayLocation({ location }) {
    return (
      <div className="flex items-center mb-4">
        <span className="text-sky-600 font-semibold">{location}</span>
      </div>
    );
  }