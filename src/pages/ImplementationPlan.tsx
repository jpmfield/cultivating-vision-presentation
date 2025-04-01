
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { exportToPdf } from '@/utils/pdfExport';

const ImplementationPlan = () => {
  const handleExportToPdf = () => {
    exportToPdf('implementation-plan-container', 'Kuguta_Mission_Gardens_Implementation_Plan');
  };

  const tasks = [
    {
      phase: "Phase 1: Preparation (April-May 2025)",
      tasks: [
        { task: "Land preparation and clearing", duration: "2 weeks", responsible: "Farm Manager", resources: "Farm laborers, tractor rental" },
        { task: "Soil testing and analysis", duration: "1 week", responsible: "Agronomist", resources: "Soil testing kits, laboratory services" },
        { task: "Initial infrastructure setup", duration: "3 weeks", responsible: "Project Manager", resources: "Construction materials, local contractors" },
        { task: "Water source development", duration: "4 weeks", responsible: "Water Engineer", resources: "Drilling equipment, pump installation" },
        { task: "Initial procurement of tools and equipment", duration: "2 weeks", responsible: "Procurement Officer", resources: "Budget allocation, supplier contracts" }
      ]
    },
    {
      phase: "Phase 2: Greenhouse Installation (May-June 2025)",
      tasks: [
        { task: "Greenhouse construction", duration: "3 weeks", responsible: "Contractor", resources: "Greenhouse materials, construction team" },
        { task: "Irrigation system setup", duration: "2 weeks", responsible: "Irrigation Specialist", resources: "Drip irrigation components, water tanks" },
        { task: "Growing medium preparation", duration: "1 week", responsible: "Farm Manager", resources: "Soil, compost, fertilizers" },
        { task: "Tomato seedling procurement", duration: "1 week", responsible: "Procurement Officer", resources: "Verified seedling supplier" }
      ]
    },
    {
      phase: "Phase 3: Outdoor Crop Establishment (June-July 2025)",
      tasks: [
        { task: "Cabbage bed preparation", duration: "2 weeks", responsible: "Farm Team", resources: "Tilling equipment, soil amendments" },
        { task: "Potato field preparation", duration: "2 weeks", responsible: "Farm Team", resources: "Land preparation equipment" },
        { task: "Planting of cabbage seedlings", duration: "1 week", responsible: "Farm Workers", resources: "Seedlings, basic tools" },
        { task: "Potato planting", duration: "1 week", responsible: "Farm Workers", resources: "Seed potatoes, fertilizers" }
      ]
    },
    {
      phase: "Phase 4: Poultry Operations Setup (July-August 2025)",
      tasks: [
        { task: "Chicken coop construction", duration: "3 weeks", responsible: "Construction Team", resources: "Building materials, labor" },
        { task: "Equipment installation", duration: "1 week", responsible: "Farm Manager", resources: "Feeders, drinkers, heating systems" },
        { task: "Chick procurement", duration: "1 week", responsible: "Livestock Manager", resources: "Reliable poultry supplier" },
        { task: "Initial feed and veterinary supplies", duration: "1 week", responsible: "Procurement Officer", resources: "Feed suppliers, veterinary contracts" }
      ]
    },
    {
      phase: "Phase 5: Operations & Management (August 2025 onwards)",
      tasks: [
        { task: "Daily greenhouse operations", duration: "Ongoing", responsible: "Greenhouse Supervisor", resources: "Labor, supplies" },
        { task: "Field crop management", duration: "Seasonal", responsible: "Field Manager", resources: "Farm workers, agricultural inputs" },
        { task: "Poultry management", duration: "Ongoing", responsible: "Livestock Manager", resources: "Daily feed, healthcare" },
        { task: "Harvesting and post-harvest handling", duration: "Cyclical", responsible: "Harvest Team", resources: "Harvesting equipment, packaging materials" },
        { task: "Marketing and sales activities", duration: "Ongoing", responsible: "Marketing Officer", resources: "Marketing budget, sales channels" }
      ]
    }
  ];

  const milestones = [
    { date: "May 15, 2025", milestone: "Land preparation and initial infrastructure complete" },
    { date: "June 30, 2025", milestone: "Greenhouse fully operational with tomato seedlings planted" },
    { date: "July 15, 2025", milestone: "All outdoor crops (cabbage, potatoes) planted" },
    { date: "August 15, 2025", milestone: "Poultry operations commence with first batch of chicks" },
    { date: "October 1, 2025", milestone: "First greenhouse tomato harvest" },
    { date: "November 15, 2025", milestone: "First cabbage harvest complete" },
    { date: "December 30, 2025", milestone: "Potato harvest complete" },
    { date: "January 15, 2026", milestone: "First batch of chickens ready for market" },
    { date: "March 31, 2026", milestone: "End of first fiscal year operations with positive cash flow" }
  ];

  const riskManagement = [
    { risk: "Weather disruptions", mitigation: "Install weather monitoring system; develop contingency plans for extreme weather events; consider crop insurance" },
    { risk: "Pest and disease outbreaks", mitigation: "Implement regular monitoring protocols; establish relationships with agricultural extension officers; maintain preventative measures" },
    { risk: "Market price fluctuations", mitigation: "Develop diverse marketing channels; consider forward contracts with buyers; maintain quality to command premium prices" },
    { risk: "Water scarcity", mitigation: "Develop water storage capacity; implement water-efficient irrigation; plan for alternative water sources" },
    { risk: "Input cost increases", mitigation: "Bulk purchasing of stable inputs; develop relationships with multiple suppliers; explore local alternatives" }
  ];

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

      <div id="implementation-plan-container" className="space-y-8 bg-white p-8 rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Kuguta Mission Gardens</h1>
          <h2 className="text-2xl font-semibold">Farm Implementation Plan 2025-2026</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              This implementation plan outlines the strategic approach to establish and operate Kuguta Mission Gardens
              as a sustainable agricultural enterprise. The plan covers a 12-month period from April 2025 to March 2026,
              detailing key phases, activities, responsibilities, and resources needed for successful implementation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {tasks.map((phase, idx) => (
                <div key={idx}>
                  <h3 className="font-medium text-lg text-primary mb-3">{phase.phase}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-2 text-left">Task</th>
                          <th className="border p-2 text-left">Duration</th>
                          <th className="border p-2 text-left">Responsible</th>
                          <th className="border p-2 text-left">Resources</th>
                        </tr>
                      </thead>
                      <tbody>
                        {phase.tasks.map((task, taskIdx) => (
                          <tr key={taskIdx} className="border-b">
                            <td className="border p-2">{task.task}</td>
                            <td className="border p-2">{task.duration}</td>
                            <td className="border p-2">{task.responsible}</td>
                            <td className="border p-2">{task.resources}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-2 text-left">Target Date</th>
                    <th className="border p-2 text-left">Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {milestones.map((milestone, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="border p-2 font-medium">{milestone.date}</td>
                      <td className="border p-2">{milestone.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-2 text-left">Potential Risk</th>
                    <th className="border p-2 text-left">Mitigation Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  {riskManagement.map((risk, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="border p-2 font-medium">{risk.risk}</td>
                      <td className="border p-2">{risk.mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Success Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>All production facilities (greenhouse, fields, chicken coop) operational by target dates</li>
              <li>First harvest of all planned crops completed on schedule</li>
              <li>Production volumes meeting at least 80% of projected targets</li>
              <li>Product quality meeting market standards</li>
              <li>Operating within 10% margin of budgeted costs</li>
              <li>Positive net cash flow achieved by November 2025</li>
              <li>All necessary permits and compliance requirements fulfilled</li>
            </ul>
          </CardContent>
        </Card>

        <Separator />

        <div className="text-center text-sm text-gray-500">
          <p>© Kuguta Mission Gardens 2025. All information is based on projected estimates and subject to revision.</p>
        </div>
      </div>
    </div>
  );
};

export default ImplementationPlan;
