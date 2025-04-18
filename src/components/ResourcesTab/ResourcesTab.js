export default function ItemList() {
    const items = [
      {
        name: "Open Sustainable Technology",
        description: "A collection of open source projects focused on sustainability.",
        url: "https://github.com/protontypes/open-sustainable-technology",
      },
      {
        name: "Eco2AI",
        description: "A repository of AI models and tools for environmental sustainability.",
        url: "https://github.com/sb-ai-lab/Eco2AI",
      },
      {
        name: "Sustainability Commons",
        description: "A digital library dedicated to providing access to sustainability resources.",
        url: "https://www.sustainlv.org/act-locally/united-stands/sustainability-commons/",
      },
      {
        name: "Green Software Foundation",
        description: "An initiative to foster a community of software professionals who wish to contribute to the sustainability cause.",
        url: "https://greensoftware.foundation/projects",
      },
      {
        name: "Sustainable Web Manifesto",
        description: "Guidelines and principles for sustainable web development.",
        url: "https://www.sustainablewebmanifesto.com/",
      },
      {
        name: "Software Sustainability Institute",
        description: "Resources and advice on best practices in software development for sustainability.",
        url: "https://www.software.ac.uk/",
      },
      {
        name: "Low Tech Magazine",
        description: "Insights on sustainable technology and energy-efficient web development.",
        url: "https://solar.lowtechmagazine.com/",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.name} className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Visit Site
            </a>
          </div>
        ))}
      </div>
    );
  }