import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  projects: any[] = [
    {
      imageUrl: './assets/img/att/att5.jpg',
      companyName: 'ATT.com',
      projectName: 'AT&T',
      jobTitle: 'Software Engineer',
      jobDescription: 'AT&T.com supports millions of customers nationwide shop their favorite AT&T products and manage their cellular services.',
      tags: ['test', 'test2'],
      position: 'left',
      route: '/att',
    },
    {
      imageUrl: './assets/img/ixp/ixp1.jpg',
      companyName: 'Integrated Experience Platform',
      projectName: 'IXP',
      jobTitle: 'Software Engineer',
      jobDescription: 'Leading edge micro-frontend utility to perform order inventory lookup on any web-based application.',
      tags: ['test', 'test2'],
      position: 'right',
      route: '/ixp',
    },
    {
      imageUrl: './assets/img/starship/starship-1.jpg',
      companyName: 'AT&T',
      projectName: 'Starship',
      jobTitle: 'Software Engineer',
      jobDescription: 'Dashboard application providing portals to AT&T internal microservice applications.',
      tags: ['test', 'test2'],
      position: 'left',
      route: '/starship',
    },
    {
      imageUrl: './assets/img/sales_express/dashboard_1.jpg',
      companyName: 'AT&T',
      projectName: 'Sales Express',
      jobTitle: 'Software Engineer',
      jobDescription: 'Internal sales tool for core AT&T products and services.',
      tags: ['test', 'test2'],
      position: 'right',
      route: '/sales-express',
    },
    {
      imageUrl: './assets/img/food2020/food_2020_5.jpg',
      companyName: 'AT&T',
      projectName: 'Food 2020',
      jobTitle: 'Software Developer Intern',
      jobDescription: 'Social event planner to help improve workplace culture.',
      tags: ['test', 'test2'],
      position: 'left',
      route: '/food2020',
    },
    {
      imageUrl: './assets/img/g2l/g2l-banner-com.jpg',
      companyName: 'G2L',
      projectName: 'G2l Redesign',
      jobTitle: 'UX Designer',
      jobDescription: 'Website resdesign of local non-profit.',
      tags: ['test', 'test2'],
      position: 'right',
      route: '/g2l',
    },
    {
      imageUrl: './assets/img/bentogether/login_3_copy.jpg',
      companyName: 'UW',
      projectName: 'BenTogether',
      jobTitle: 'UI Developer & Researcher',
      jobDescription: 'Digital bento box synced with mobile application to improve food education and familial bonding through the lunch making process.',
      tags: ['test', 'test2'],
      position: 'left',
      route: '/bentogether',
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
}
