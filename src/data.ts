
export const projects = [
    {
        title: "1Full Stack Ecommerce Store",
        description: "Full Stack Ecommerce Clothing store built in Next.js",
        image: "/projects/piaic.png",
        previewLink: "https://ecommerce-clothing-gilt.vercel.app/",
        githubLink: "https://github.com/zaka-urrehman/ecommerce-clothing",
        techStack: 'React.js,Next.js,Tailwind CSS, Redux Toolkit, Vercel PostgreSQL , Drizzle ORM,Stripe, Clerk Auth'
    },
    {
        title: "2Full Stack Ecommerce Store",
        description: "Full Stack Ecommerce Clothing store built in Next.js",
        image: "/projects/piaic.png",
        previewLink: "https://ecommerce-clothing-gilt.vercel.app/",
        githubLink: "https://github.com/zaka-urrehman/ecommerce-clothing",
        techStack: 'React.js,Next.js,Tailwind CSS, Redux Toolkit, Vercel PostgreSQL , Drizzle ORM,Stripe, Clerk Auth'
    },
    {
        title: "3Full Stack Ecommerce Store",
        description: "Full Stack Ecommerce Clothing store built in Next.js",
        image: "/projects/piaic.png",
        previewLink: "https://ecommerce-clothing-gilt.vercel.app/",
        githubLink: "https://github.com/zaka-urrehman/ecommerce-clothing",
        techStack: 'React.js,Next.js,Tailwind CSS, Redux Toolkit, Vercel PostgreSQL , Drizzle ORM,Stripe, Clerk Auth'
    },
    {
        title: "4Full Stack Ecommerce Store",
        description: "Full Stack Ecommerce Clothing  store built in Next.js",
        image: "/projects/piaic.png",
        previewLink: "https://ecommerce-clothing-gilt.vercel.app/",
        githubLink: "https://github.com/zaka-urrehman/ecommerce-clothing",
        techStack: 'React.js,Next.js,Tailwind CSS, Redux Toolkit, Vercel PostgreSQL , Drizzle ORM,Stripe, Clerk Auth'
    },
    {
        title: "4Full Stack Ecommerce Store",
        description: "Full Stack Ecommerce Clothing  store built in Next.js",
        image: "/projects/piaic.png",
        previewLink: "https://ecommerce-clothing-gilt.vercel.app/",
        githubLink: "https://github.com/zaka-urrehman/ecommerce-clothing",
        techStack: 'React.js,Next.js,Tailwind CSS, Redux Toolkit, Vercel PostgreSQL , Drizzle ORM,Stripe, Clerk Auth'
    },

]

// fetches data based on arguments provided
export async function getData(contentType: string) {
    try {
        const apiUrl = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=${contentType}`;
  

        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}, ${res.statusText}`);
        }

        return res.json();
    } catch (error: any) {
        console.error('Error in getData:', error.message);
        throw error; // Re-throw the error to propagate it to the caller
    }
}


// fetches certificaions 
export async function fetchCertifications() {
    try {
        const certifications = await getData("certifications");
        const myCertifications = certifications.items.map((item: Certifications) => item.fields);
        return myCertifications

      
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error here
    }
    
}

// fetches education 
export async function fetchEducation() {
    try {
        const education = await getData("education");
        const myEducation = education.items.map((item: Certifications) => item.fields);
        return myEducation

      
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error here
    }
    
}

// fetches list of skills
export async function fetchSkills() {
    try {
        const skills = await getData("myskills");
        const mySkills = skills.items.map((item: Certifications) => item.fields);
        return mySkills

      
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error here
    }
    
}
// fetches projects
export async function fetchProjects() {
    try {
        const projects = await getData("myProjects");
        const myProjects = projects.items.map((item: Certifications) => item.fields);
        // console.log("Projects:  ", projects)
        // console.log("================================================================")
        // console.log("My Projects:  ", myProjects)
        return projects
      
      
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error here
    }
    
}
fetchProjects()












