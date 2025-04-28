
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowUp, ArrowDown, User, Home, Settings, Search, 
  Bell, Calendar, Layout, FileText, LogOut, Menu, X 
} from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("John Doe");
  
  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    toast({
      title: "Welcome back, " + userName,
      description: "Your dashboard is up to date.",
    });
  }, [userName, toast]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="px-4 py-6 border-b border-sidebar-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-gradient text-lg">CI Portal</span>
              </div>
              <button
                onClick={toggleSidebar}
                className="md:hidden text-sidebar-foreground hover:text-sidebar-accent-foreground"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <SidebarNavItem key={item.name} {...item} />
            ))}
          </nav>
          
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User size={18} className="text-sidebar-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  {userName}
                </p>
                <p className="text-xs text-sidebar-foreground/70 truncate">
                  john.doe@example.com
                </p>
              </div>
              <button className="text-sidebar-foreground/70 hover:text-sidebar-foreground">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top navigation */}
        <header className="bg-background border-b border-border z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              <button
                onClick={toggleSidebar}
                className="md:hidden text-foreground hover:text-primary"
              >
                <Menu size={20} />
              </button>
              
              <div className="flex-1 px-4 flex justify-between sm:px-0">
                <div className="flex-1">
                  <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="p-1 text-foreground/70 hover:text-foreground rounded-full">
                    <Search size={20} />
                  </button>
                  <button className="p-1 text-foreground/70 hover:text-foreground rounded-full relative">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-primary"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="h-12 w-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <p className="text-muted-foreground">Loading your dashboard...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Dashboard header */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      Welcome back, {userName.split(" ")[0]}
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      Here's what's happening with your projects today.
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <Button>Create New Request</Button>
                  </div>
                </div>
              </div>
              
              {/* Summary cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatCard
                  title="Total Requests"
                  value="124"
                  change={12}
                  isPositive={true}
                />
                <StatCard
                  title="Pending Requests"
                  value="8"
                  change={-3}
                  isPositive={true}
                />
                <StatCard
                  title="Data Usage"
                  value="76%"
                  change={5}
                  isPositive={false}
                />
                <StatCard
                  title="AI Insights"
                  value="32"
                  change={7}
                  isPositive={true}
                />
              </div>
              
              {/* Tabs */}
              <Tabs defaultValue="insights" className="space-y-6">
                <div className="border-b border-border">
                  <TabsList className="bg-transparent">
                    <TabsTrigger value="insights">AI Insights</TabsTrigger>
                    <TabsTrigger value="requests">My Requests</TabsTrigger>
                    <TabsTrigger value="tools">Self-Service Tools</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="insights">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="col-span-1 lg:col-span-2 p-6">
                      <h3 className="text-lg font-medium mb-4">Recent AI Insights</h3>
                      <div className="space-y-4">
                        {[1, 2, 3].map((insight) => (
                          <div
                            key={insight}
                            className="p-4 border border-border rounded-lg hover-lift"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium">Insight #{insight}</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                  AI-generated insight about your business patterns
                                </p>
                              </div>
                              <Button variant="outline" size="sm">View</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                    
                    <Card className="p-6">
                      <h3 className="text-lg font-medium mb-4">Recommended Actions</h3>
                      <div className="space-y-4">
                        {[1, 2, 3].map((action) => (
                          <div
                            key={action}
                            className="flex items-center space-x-3 p-3 border border-border rounded-lg hover-lift"
                          >
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              {action}
                            </div>
                            <div>
                              <p className="text-sm font-medium">Recommended Action</p>
                              <p className="text-xs text-muted-foreground">
                                Based on recent activity
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="requests">
                  <Card className="p-6">
                    <h3 className="text-lg font-medium mb-4">Recent Requests</h3>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((request) => (
                        <div
                          key={request}
                          className="p-4 border border-border rounded-lg hover-lift flex items-center justify-between"
                        >
                          <div>
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                              REQ-{1000 + request}
                            </span>
                            <h4 className="font-medium mt-1">Request Title</h4>
                            <p className="text-sm text-muted-foreground">
                              Submitted on April {request + 10}, 2023
                            </p>
                          </div>
                          <div>
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                              In Progress
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="tools">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool) => (
                      <Card key={tool.title} className="p-6 hover-lift">
                        <div className="flex flex-col h-full">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl mb-4">
                            {tool.icon}
                          </div>
                          <h3 className="text-lg font-medium">{tool.title}</h3>
                          <p className="text-muted-foreground text-sm mt-2 flex-grow">
                            {tool.description}
                          </p>
                          <div className="mt-4">
                            <Button variant="outline" className="w-full">
                              Launch Tool
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  isPositive: boolean;
}

const StatCard = ({ title, value, change, isPositive }: StatCardProps) => (
  <Card className="p-6 hover-lift">
    <div className="flex items-center justify-between">
      <h3 className="text-muted-foreground">{title}</h3>
      <div
        className={`flex items-center ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        <span className="text-xs ml-1">{Math.abs(change)}%</span>
      </div>
    </div>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </Card>
);

interface NavItemProps {
  name: string;
  icon: React.ReactNode;
  current: boolean;
}

const SidebarNavItem = ({ name, icon, current }: NavItemProps) => (
  <a
    href="#"
    className={`
      group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
      ${
        current
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
      }
    `}
  >
    <span className="mr-3 h-5 w-5">{icon}</span>
    {name}
  </a>
);

const navItems = [
  { name: "Dashboard", icon: <Home size={20} />, current: true },
  { name: "Requests", icon: <FileText size={20} />, current: false },
  { name: "Calendar", icon: <Calendar size={20} />, current: false },
  { name: "Analytics", icon: <Layout size={20} />, current: false },
  { name: "Settings", icon: <Settings size={20} />, current: false },
];

const tools = [
  {
    icon: "📊",
    title: "Data Explorer",
    description: "Visual exploration tool for your data sources with AI-assisted analysis."
  },
  {
    icon: "🔄",
    title: "Workflow Builder",
    description: "Create custom automated workflows with drag-and-drop simplicity."
  },
  {
    icon: "📝",
    title: "Report Generator",
    description: "AI-powered reporting tool with customizable templates and insights."
  },
  {
    icon: "🔍",
    title: "Anomaly Detection",
    description: "Identify unusual patterns and outliers in your business data."
  },
  {
    icon: "🎯",
    title: "Goal Tracker",
    description: "Set, monitor, and achieve your business goals with AI-driven recommendations."
  },
  {
    icon: "📈",
    title: "Predictive Analytics",
    description: "Forecast future trends based on historical data and market conditions."
  }
];

export default Dashboard;
