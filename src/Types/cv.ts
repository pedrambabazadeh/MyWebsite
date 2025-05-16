export interface CV {
        header: string;
         experiences:
            {
                title: string;
                company: string;
                time: string;
                description: string;
            }[]
        ;
        certificates:
            {
                title: string;
                company: string;
                time: string;
                link: string;
            }[];
        technicalSkills: 
            {
                skill: string;
                description: string;
            }[];
        softSkills:
            {
                skill: string;
                description: string;
            }[];
        interests: string[];
    };