"use client"

export default function DisplayActivities({ activities }) {
    return (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-sky-900 mb-2">Activities</h4>
        <div className="flex flex-wrap gap-2">
          {activities.map((activity, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm"
            >
              {activity.name}
            </span>
          ))}
        </div>
      </div>
    );
  }