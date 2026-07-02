const projects = [
  {
    title: "Gym Management System (In Progress)",
    description: "A comprehensive management system for gyms to handle user memberships, check-ins, and administrative tasks. Currently in active development, heavily utilizing Object-Oriented Programming (OOP) concepts to build scalable logic.",
    technologies: ["Java", "OOP"],
    githubUrl: "https://github.com/Brotheryuth/Object_Oriented_Concept",
    liveUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Schex - Student Schedule UI",
    description: "A modern, intuitive user interface design for Schex, an application aimed at helping students manage their daily academic schedules more smartly and efficiently.",
    technologies: ["Figma", "UI/UX Design"],
    githubUrl: "",
    liveUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Vision Assistant Prototype (Unipreneur)",
    description: "A prototype mobile application designed to assist visually impaired individuals in their daily lives. Developed the core system architecture and functional prototype during the Unipreneur Hackathon.",
    technologies: ["Mobile App Prototype", "Hackathon"],
    githubUrl: "",
    liveUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1470&auto=format&fit=crop"
  }
];

async function seed() {
  for (const project of projects) {
    try {
      const response = await fetch("http://localhost:5001/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
      });
      
      const data = await response.json();
      console.log(`Added: ${data.title || project.title}`);
    } catch (err) {
      console.error(`Error adding ${project.title}:`, err.message);
    }
  }
}

seed();
