import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  pp = '-366629684';

  projects: any[] = [
    {
      imageUrl: './assets/img/att/att5.jpg',
      companyName: 'ATT.com',
      projectName: 'AT&T',
      jobTitle: 'Software Engineer',
      jobDescription: 'AT&T.com supports millions of customers nationwide shop their favorite AT&T products and manage their cellular services.',
      tags: ['React', 'Next.js', 'SEO', 'Responsive', 'Accessibility'],
      position: 'left',
      route: '/att',
      protected: false,
    },
    {
      imageUrl: './assets/img/ixp/ixp1.jpg',
      companyName: 'Integrated Experience Platform',
      projectName: 'IXP',
      jobTitle: 'Software Engineer',
      jobDescription: 'Leading edge micro-frontend utility to perform order inventory lookup on any web-based application.',
      tags: ['Angular 8', 'Node.js', 'Web Components', 'Responsive', 'Microservices'],
      position: 'right',
      route: '/ixp',
      protected: true,
    },
    {
      imageUrl: './assets/img/starship/starship-1.jpg',
      companyName: 'AT&T',
      projectName: 'Starship',
      jobTitle: 'Software Engineer',
      jobDescription: 'Dashboard application providing portals to AT&T internal microservice applications.',
      tags: ['Angular 4', 'High Availability', 'Microservices', 'Kubernetes'],
      position: 'left',
      route: '/starship',
      protected: true,
    },
    {
      imageUrl: './assets/img/sales_express/dashboard_1.jpg',
      companyName: 'AT&T',
      projectName: 'Sales Express',
      jobTitle: 'Software Engineer',
      jobDescription: 'Internal sales tool for core AT&T products and services.',
      tags: ['Java', 'SQL', 'DevOps', 'Reporting', 'Mobile-First'],
      position: 'right',
      route: '/sales-express',
      protected: true,
    },
    {
      imageUrl: './assets/img/food2020/food_2020_5.jpg',
      companyName: 'AT&T',
      projectName: 'Food 2020',
      jobTitle: 'Software Developer Intern',
      jobDescription: 'Social event planner to help improve workplace culture.',
      tags: ['AngularJS', 'Bootstrap', 'Parse', 'Coding Challenge'],
      position: 'left',
      route: '/food2020',
      protected: false,
    },
    {
      imageUrl: './assets/img/g2l/g2l-banner-com.jpg',
      companyName: 'G2L',
      projectName: 'G2l Redesign',
      jobTitle: 'UX Designer',
      jobDescription: 'Website resdesign of local non-profit.',
      tags: ['User Research', 'User Testing', 'Prototyping'],
      position: 'right',
      route: '/g2l',
      protected: false,
    },
    {
      imageUrl: './assets/img/bentogether/login_3_copy.jpg',
      companyName: 'UW',
      projectName: 'BenTogether',
      jobTitle: 'UI Developer & Researcher',
      jobDescription: 'Digital bento box synced with mobile application to improve food education and familial bonding through the lunch making process.',
      tags: ['Physical Computing', 'Apache Cordova', 'User Research', 'User Testing'],
      position: 'left',
      route: '/bentogether',
      protected: false,
    },
  ];

  constructor() { }

  getAllProjects(): any[] {
    return this.projects;
  }

  getNumberOfSlides(numberPerSlide): number {
    return this.projects.length / numberPerSlide;
  }

  shortenText(text: string): string {
    if (text.length >= 80) {
      return text.substring(0, 80) + '...';
    }
    return text;
  }

  getOtherProjects(currentRoute): any[] {
    const otherProjects: any[] = [];
    this.projects.map((project) => {
      if (currentRoute !== project.route) {
        otherProjects.push(project);
      }
    });
    return otherProjects;
  }

  hashCode (str) {
      let hash = 0;
      if (str.length == 0) return hash;
      for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          hash = ((hash<<5) - hash) + char;
          hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
  }

  isMatch(p: string): boolean {
    if (p && this.hashCode(p).toString() === this.pp) {
      return true;
    } else {
      return false;
    }
  }
}
