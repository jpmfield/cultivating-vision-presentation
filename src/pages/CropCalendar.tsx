
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { exportToPdf } from '@/utils/pdfExport';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DataTable from '@/components/DataTable';

const CropCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [searchTerm, setSearchTerm] = useState('');

  const handleExportToPdf = () => {
    exportToPdf('crop-calendar-container', 'Kuguta_Mission_Gardens_Crop_Calendar');
  };

  // Crop calendar data
  const crops = [
    {
      name: "Tomatoes (Greenhouse)",
      variety: "Roma VF",
      activities: [
        { activity: "Seed preparation", startMonth: "April", duration: "2 weeks" },
        { activity: "Seedling nursery", startMonth: "May", duration: "3-4 weeks" },
        { activity: "Transplanting", startMonth: "June", duration: "1 week" },
        { activity: "Growth management", startMonth: "June-Sep", duration: "12-14 weeks" },
        { activity: "Harvesting", startMonth: "Oct-Jan", duration: "12-16 weeks" },
      ],
      notes: "Requires regular pruning, staking, and pest monitoring. Maintain greenhouse temperature between 21-29°C."
    },
    {
      name: "Cabbage",
      variety: "Copenhagen Market",
      activities: [
        { activity: "Land preparation", startMonth: "June", duration: "2 weeks" },
        { activity: "Seedling preparation", startMonth: "June", duration: "3-4 weeks" },
        { activity: "Transplanting", startMonth: "July", duration: "1 week" },
        { activity: "Growth management", startMonth: "Jul-Oct", duration: "10-12 weeks" },
        { activity: "Harvesting", startMonth: "Nov-Dec", duration: "4-6 weeks" },
      ],
      notes: "Requires consistent moisture and regular monitoring for pests, especially diamondback moth and cabbage loopers."
    },
    {
      name: "Potatoes",
      variety: "Kenya Mpya",
      activities: [
        { activity: "Land preparation", startMonth: "June", duration: "2 weeks" },
        { activity: "Planting", startMonth: "July", duration: "1 week" },
        { activity: "Weeding & Hilling", startMonth: "Aug-Sep", duration: "4-6 weeks" },
        { activity: "Growth management", startMonth: "Jul-Nov", duration: "12-16 weeks" },
        { activity: "Harvesting", startMonth: "Nov-Dec", duration: "3-4 weeks" },
      ],
      notes: "Requires hilling to protect tubers from light. Monitor for late blight, especially during rainy periods."
    },
    {
      name: "Chickens (Layers)",
      variety: "Isa Brown",
      activities: [
        { activity: "Brooder preparation", startMonth: "July", duration: "2 weeks" },
        { activity: "Chick rearing (0-8 weeks)", startMonth: "Aug-Sep", duration: "8 weeks" },
        { activity: "Grower phase (9-20 weeks)", startMonth: "Oct-Dec", duration: "12 weeks" },
        { activity: "Layer phase begins", startMonth: "Jan", duration: "Ongoing" },
        { activity: "Peak egg production", startMonth: "Feb-Mar", duration: "Ongoing" },
      ],
      notes: "Vaccination schedule must be strictly followed. Layer feed formulation changes based on age."
    }
  ];

  const quarterlyActivities = [
    {
      quarter: "Q1 (Apr-Jun 2025)",
      activities: [
        "Land preparation for all crops",
        "Greenhouse construction and setup",
        "Tomato seedling preparation",
        "Irrigation system installation",
        "Soil testing and amendment",
        "Procurement of initial supplies and tools",
        "Cabbage seedbed preparation"
      ]
    },
    {
      quarter: "Q2 (Jul-Sep 2025)",
      activities: [
        "Tomato transplanting and management in greenhouse",
        "Cabbage transplanting to main field",
        "Potato planting and initial care",
        "Poultry house preparation and setup",
        "First batch of chicks arrival",
        "Initial pest and disease management",
        "Early stage crop maintenance activities"
      ]
    },
    {
      quarter: "Q3 (Oct-Dec 2025)",
      activities: [
        "Tomato harvesting begins",
        "Cabbage harvesting",
        "Potato harvesting",
        "Continued chicken management (grower phase)",
        "Post-harvest handling and storage",
        "Marketing and sales of first produce",
        "Field preparation for next planting cycle"
      ]
    },
    {
      quarter: "Q4 (Jan-Mar 2026)",
      activities: [
        "Continued tomato harvesting",
        "Chicken layer phase begins, egg collection",
        "Planning for next season crops",
        "Equipment maintenance",
        "Soil regeneration and preparation",
        "Evaluation of first production cycle",
        "Procurement planning for next season"
      ]
    }
  ];

  const monthlySchedule = [
    { month: "April 2025", tasks: "Land clearing, soil testing, greenhouse site preparation" },
    { month: "May 2025", tasks: "Greenhouse construction, irrigation setup, tomato seed sowing" },
    { month: "June 2025", tasks: "Tomato seedling care, land preparation for cabbage and potatoes, cabbage seedbed setup" },
    { month: "July 2025", tasks: "Tomato transplanting in greenhouse, cabbage transplanting, potato planting, poultry house construction" },
    { month: "August 2025", tasks: "Crop management, first batch of chicks arrival, pest monitoring, irrigation management" },
    { month: "September 2025", tasks: "Greenhouse tomato management, cabbage and potato weeding/hilling, chick vaccination and care" },
    { month: "October 2025", tasks: "First tomato harvest begins, late-stage crop management for cabbage and potatoes, chicken grower management" },
    { month: "November 2025", tasks: "Tomato harvesting continues, cabbage harvesting begins, potato harvesting, marketing activities" },
    { month: "December 2025", tasks: "Continue harvesting all crops, post-harvest handling, storage management, sales activities" },
    { month: "January 2026", tasks: "Final tomato harvesting from first cycle, chicken layer phase begins, egg collection starts, planning for next crop cycle" },
    { month: "February 2026", tasks: "Greenhouse maintenance/preparation for next cycle, equipment maintenance, egg production management" },
    { month: "March 2026", tasks: "Season evaluation, preparation for new planting cycle, chicken and egg production management" }
  ];

  // Filter crops based on search term
  const filteredCrops = crops.filter(crop => 
    crop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    crop.variety.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sample rainfall patterns for the region
  const rainfallData = {
    headers: ["Month", "Average Rainfall (mm)", "Rainy Days", "Growing Conditions"],
    data: [
      ["April", 130, 18, "Excellent - Main rainy season"],
      ["May", 90, 15, "Very Good - Continued rains"],
      ["June", 50, 10, "Good - Ending rains"],
      ["July", 40, 8, "Moderate - Drier period"],
      ["August", 35, 7, "Moderate - Dry period"],
      ["September", 40, 8, "Moderate - Start of short rains"],
      ["October", 65, 12, "Good - Short rainy season"],
      ["November", 90, 14, "Very Good - Peak short rains"],
      ["December", 60, 10, "Good - Ending short rains"],
      ["January", 40, 8, "Moderate - Drier period"],
      ["February", 35, 7, "Challenging - Dry season"],
      ["March", 60, 12, "Good - Beginning of long rains"]
    ]
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <Link to="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Dashboard
          </Button>
        </Link>
        <Button onClick={handleExportToPdf} className="flex items-center gap-2">
          <Download size={16} />
          Export to PDF
        </Button>
      </div>

      <div id="crop-calendar-container" className="space-y-8 bg-white p-8 rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Kuguta Mission Gardens</h1>
          <h2 className="text-2xl font-semibold">Farm Crop Calendar 2025-2026</h2>
        </div>

        <Tabs defaultValue="crops">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="crops">Crop Calendar</TabsTrigger>
            <TabsTrigger value="quarterly">Quarterly Plan</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Schedule</TabsTrigger>
            <TabsTrigger value="climate">Climate Data</TabsTrigger>
          </TabsList>

          <TabsContent value="crops" className="space-y-6">
            <div className="flex items-center mb-4">
              <Label htmlFor="search-crops" className="mr-2">Search:</Label>
              <Input 
                id="search-crops"
                placeholder="Search crops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-xs"
              />
            </div>

            {filteredCrops.map((crop, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{crop.name}</CardTitle>
                  <CardDescription>Variety: {crop.variety}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-2 text-left">Activity</th>
                          <th className="border p-2 text-left">Timing</th>
                          <th className="border p-2 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {crop.activities.map((activity, actIdx) => (
                          <tr key={actIdx} className="border-b">
                            <td className="border p-2">{activity.activity}</td>
                            <td className="border p-2">{activity.startMonth}</td>
                            <td className="border p-2">{activity.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-gray-700 text-sm"><strong>Notes:</strong> {crop.notes}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="quarterly" className="space-y-6">
            {quarterlyActivities.map((quarter, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{quarter.quarter}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {quarter.activities.map((activity, actIdx) => (
                      <li key={actIdx}>{activity}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Monthly Schedule</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Month</th>
                        <th className="border p-2 text-left">Key Activities</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlySchedule.map((month, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="border p-2 font-medium">{month.month}</td>
                          <td className="border p-2">{month.tasks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Calendar View</h3>
                <div className="flex flex-col items-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow"
                  />
                  {date && (
                    <div className="mt-4 p-4 border rounded-md w-full">
                      <h4 className="font-medium">{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h4>
                      <p className="text-sm mt-2">
                        {monthlySchedule.find(m => m.month.includes(date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })))?.tasks || 
                        "No specific activities scheduled for this month in the current plan."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="climate" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Regional Rainfall and Growing Conditions</CardTitle>
                <CardDescription>
                  Understanding the local climate patterns is crucial for effective crop planning and management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DataTable 
                  headers={rainfallData.headers}
                  data={rainfallData.data}
                  caption="Annual rainfall pattern for Kuguta region"
                />
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-md">
                    <h4 className="font-medium mb-2">Main Growing Seasons</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Long Rains: March to June (Primary planting season)</li>
                      <li>Short Rains: October to December (Secondary planting season)</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-md">
                    <h4 className="font-medium mb-2">Climate Considerations</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Temperature ranges from 15°C to 28°C throughout the year</li>
                      <li>Greenhouse operations help mitigate climate variability</li>
                      <li>Irrigation is essential during dry periods (Jan-Feb, Jul-Aug)</li>
                      <li>Consider water harvesting during rainy seasons</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Separator />

        <div className="text-center text-sm text-gray-500 mt-8">
          <p>© Kuguta Mission Gardens 2025. This crop calendar is based on historical climate data and may require adjustments based on actual weather conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default CropCalendar;
