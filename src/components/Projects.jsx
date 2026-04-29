import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const majorProjects = [
  {
    title: 'MicroLift – Microservices Crowdfunding',
    desc: 'Designed and implemented a scalable microservices-based crowdfunding platform using Spring Boot, Spring Cloud Gateway, and Eureka. Features a React.js admin dashboard and an abstracted mock payment module.',
    tech: ['Java', 'Spring Boot', 'React.js', 'Microservices', 'Eureka'],
    github: 'https://github.com/Samyak-create/microlift-microservices-crowdfunding',
    details: [
      'MicroLift is a robust, highly scalable microservices-based platform designed to facilitate and secure social impact crowdfunding.',
      'Core Features & Architecture:',
      '- User Registration & KYC verification workflows for transparency.',
      '- Campaign Creation with Admin approval processes.',
      '- Secure Donation Workflow leveraging an abstracted mock payment service.',
      '- Real-time transactional email notifications via EmailJS.',
      'The architecture is powered by Spring Boot microservices (Auth, Campaign, Donation), coordinated tightly by Spring Cloud Gateway and Eureka Service Registry. The frontend is a fully responsive React.js web application offering distinct operational panels for Donors, Beneficiaries, and Admins.'
    ]
  },
  {
    title: 'Finance Dashboard System',
    desc: 'Finance Dashboard Backend built with Spring Boot featuring secure authentication, role-based access control (RBAC), and transaction analytics with pagination and filtering.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST API'],
    github: 'https://github.com/Samyak-create/finance-dashboard-system',
    details: [
      'A production-style backend system built using Spring Boot that manages financial transactions with secure authentication, role-based access control (RBAC), and analytics capabilities.',
      'Core Features:',
      '- Secure authentication using Spring Security (Basic Auth) with encrypted passwords (BCrypt).',
      '- Role-based authorization (ADMIN, ANALYST, VIEWER) to control access to transaction APIs.',
      '- Comprehensive API for user management and full CRUD operations on transactions.',
      '- Advanced data filtering, paginated transaction retrieval, and chronological tracking.',
      '- Financial trends analysis endpoints for generating monthly, yearly, and category-wise insights.'
    ]
  },
  {
    title: 'Resource Booking System',
    desc: 'A comprehensive Full-Stack application designed for managing resources and internal bookings, offering user access for reservations and an Admin platform for oversight.',
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Docker'],
    github: 'https://github.com/Samyak-create/resource-booking-system',
    details: [
      'A comprehensive Full-Stack application divided symmetrically between a Vite Frontend and a Spring Backend, communicating via RESTful JSON APIs.',
      'Key Technologies & Features:',
      '- Frontend built with React.js, Vite, and Axios for streamlined backend integration.',
      '- Backend powered by Spring Boot (Java 17) and a MySQL relational database with Spring Data JPA.',
      '- Stateless authentication using JWT (jjwt, BCrypt, Spring Security) with role-based access control (ROLE_ADMIN vs standard users).',
      '- Admins can query, insert, or remove resources via secured endpoints, while standard users can seamlessly execute reservations.',
      '- Containerized using Docker for streamlined microservices operation and deployment.'
    ]
  },
  {
    title: 'Student Course Registration System',
    desc: 'Backend application using ASP.NET Core Web API and Entity Framework Core. Managed students, courses, and enrollments with RESTful APIs, complex relational mappings, and cloud-hosted database integration.',
    tech: ['C#', 'ASP.NET Core', 'EF Core', 'REST API', 'SQL'],
    github: 'https://github.com/Samyak-create/student-course-registration-system',
    details: [
      'The Student Course Registration System (SCRS) is a comprehensive API-first backend solution built for educational institutions.',
      'Key Capabilities:',
      '- Complete end-to-end management of Students, Courses, Instructors, and their Enrollments.',
      '- Implements highly complex relational data models featuring many-to-many relationships (e.g., Students enrolling in multiple Courses).',
      '- RESTful architecture developed with ASP.NET Core Web API, featuring strict and reliable business logic validations.',
      '- Database schema evolution elegantly managed via Entity Framework Core Migrations.',
      '- Seamless integration with a cloud-hosted SQL server.',
      '- Fully documented Swagger UI included for immediate developer testing and consumption of API endpoints.'
    ]
  },
  {
    title: 'Hospital Management System',
    desc: 'A robust Java-based application designed to manage hospital operations efficiently, utilizing Object-Oriented Programming principles and JDBC for persistent data storage.',
    tech: ['Java', 'JDBC', 'MySQL', 'OOP'],
    github: 'https://github.com/Samyak-create/Hospital-Management-System',
    details: [
      'A comprehensive local software application crafted efficiently to digitize and streamline demanding hospital administrative operations.',
      'Operational Highlights:',
      '- Doctor Management System: Full CRUD (Create, Read, Update, Delete) operations for doctor details (IDs, Names, Specializations).',
      '- Patient Management System: Securely add, update, and rapidly retrieve detailed patient admission records.',
      '- Engineered entirely using core Java featuring strong Object-Oriented Programming (OOP) paradigms for modularity.',
      '- Reliable and performant data persistence engineered through direct JDBC connections to a local or remote MySQL database.'
    ]
  },
  {
    title: 'Expense Tracker',
    desc: 'An interactive web application helping users track their daily expenses and visualize their financial health with an intuitive user interface.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Web APIs'],
    github: 'https://github.com/Samyak-create/Expense-Tracker',
    details: [
      'A clean, highly responsive Vite and React application dedicated to tracking and organizing personal finances.',
      'Application Features:',
      '- Instantly add new expenses recording precise transaction dates and financial amounts.',
      '- Safely delete or manage incorrect expense entries in real-time.',
      '- Features a pleasing, fully centered UI utilizing modern CSS Flexbox and grid layouts.',
      '- Automatically deployed and integrated into Vercel ensuring instantaneous updates on commits.'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="section-padding container">
        <h2 className="section-title observe-me">Featured Work</h2>
        <div className="projects-grid">
          {majorProjects.map((project, index) => (
            <div 
              key={index} 
              className="project-card glass-card observe-me" 
              style={{ animationDelay: `${(index + 1) * 100}ms`}}
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map(t => <span key={t}>#{t}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
           <a href="https://github.com/Samyak-create" target="_blank" rel="noreferrer" className="btn btn-outline observe-me">
             View All on GitHub <FaExternalLinkAlt style={{ marginLeft: '8px' }}/>
           </a>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-body">
              <h3>{selectedProject.title}</h3>
              <div className="project-tech" style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.tech.map(t => <span key={t} style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontFamily: 'Outfit' }}>#{t}</span>)}
              </div>
              <h4>Project Details</h4>
              {selectedProject.details.map((paragraph, idx) => {
                if (paragraph.startsWith('-')) {
                  return <li key={idx} style={{ marginLeft: '1.5rem' }}>{paragraph.substring(1).trim()}</li>;
                }
                return <p key={idx}>{paragraph}</p>;
              })}
              
              <div style={{ marginTop: '2.5rem' }}>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <FaGithub style={{ marginRight: '8px' }}/> View Full Code / README
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
