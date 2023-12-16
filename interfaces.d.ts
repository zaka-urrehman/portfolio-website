interface Certifications {
    fields: {
        title: string,
        name: string,
        organization: string,
        by: string,
        completionDate: string
    }
}
interface singleCertificate {
    
        title: string,
        name: string,
        organization: string,
        by: string,
        completionDate: string
    
}

type Skill = string

interface Skills {
    title?: string;
    skills: Skill[]
  }