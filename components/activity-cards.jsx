"'use client'"

import { useState } from "'react'"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "'@/components/ui/card'"
import { RadioGroup, RadioGroupItem } from "'@/components/ui/radio-group'"
import { Label } from "'@/components/ui/label'"
import { Button } from "'@/components/ui/button'"

const activities = [
  {
    name: "'Swimming'",
    description: "'Enjoy our Olympic-sized pool with expert instruction'",
  },
  {
    name: "'Zumba'",
    description: "'High-energy dance workout for all fitness levels'",
  },
]

const schedules = [
  "'Mon - Wed  2:00pm 3:00pm'",
  "'Thu - Sat  4:00pm 5:00pm'",
]

const sessionOptions = [
  { sessions: 1, price: 20 },
  { sessions: 2, price: 30 },
]

export default function ActivityCards() {
  const [selectedSchedules, setSelectedSchedules] = useState([])
  const [selectedSessions, setSelectedSessions] = useState({})

  const handleScheduleSelect = (activity, schedule) => {
    setSelectedSchedules(prev => ({
      ...prev,
      [activity]: schedule
    }))
  }

  const handleSessionSelect = (activity, sessions) => {
    setSelectedSessions(prev => ({
      ...prev,
      [activity]: sessions
    }))
  }

  return (
    (<div>
      <h2 className="text-2xl font-semibold mb-4">Choose Your Activities</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {activities.map((activity, index) => (
          <Card key={index} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle>{activity.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <div className="mb-4">
                <h2 className="font-semibold mb-2">Schedule</h2>
                <RadioGroup
                  value={selectedSchedules[activity.name]}
                  onValueChange={(value) => handleScheduleSelect(activity.name, value)}>
                  {schedules.map((schedule) => (
                    <div key={schedule} className="flex items-center space-x-2">
                      <RadioGroupItem value={schedule} id={`${activity.name}-${schedule}`} />
                      <Label htmlFor={`${activity.name}-${schedule}`}>{schedule}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <h2 className="font-semibold mb-2">Number of Sessions</h2>
                <RadioGroup
                  value={selectedSessions[activity.name]?.toString()}
                  onValueChange={(value) => handleSessionSelect(activity.name, parseInt(value))}>
                  {sessionOptions.map((option) => (
                    <div key={option.sessions} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option.sessions.toString()}
                        id={`${activity.name}-session-${option.sessions}`} />
                      <Label htmlFor={`${activity.name}-session-${option.sessions}`}>
                        {option.sessions} session{option.sessions > 1 ? "'s'" : "''"} (AED {option.price})
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                disabled={!selectedSchedules[activity.name] || !selectedSessions[activity.name]}>
                Book Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>)
  );
}

