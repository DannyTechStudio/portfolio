/*-------------------------------------------
        All Projects Data
-------------------------------------------*/
const projectData = {

    retailprime: {
        
        id: "retailprime",
        
        title: "RetailPrime",
        
        category: "● Backend Project",
        
        shortDescription: "A single-vendor eCommerce backend that streamlines online retail through secure APIs, inventory management, Paystack payments, and order processing.",
        
        longDescription: "RetailPrime is a scalable backend solution built for modern online retail businesses. It provides secure RESTful APIs for product management, customer accounts, shopping carts, orders, payments, inventory tracking, coupons, reviews, and order fulfillment.",
        
        status: "Completed",
        
        featured: true,
        
        role: "Backend Developer",
        
        duration: "6 weeks",
        
        year: "2026",
        
        projectType: "Personal Project",

        liveDemo: "",
        
        github: "https://github.com/DannyTechStudio/ecommerce_project.git",

        technologies: [
            "Python",
            "Django",
            "Django REST Framework",
            "MySQL",
            "JWT Authentication",
            "Postman",
            "Git",
            "GitHub"
        ],

        metrics: [
            {
                title: "Models",
                value: "12+"
            },

            {
                title: "API Endpoints",
                value: "30+"
            },

            {
                title: "Core Features",
                value: "10+"
            },

            {
                title: "Authentication",
                value: "JWT"
            }
        ],

        overview: "RetailPrime demonstrates my ability to design and build production-ready backend systems for modern eCommerce applications. The project was developed with a strong focus on creating a modular and maintainable architecture capable of supporting essential online retail operations, including product management, inventory tracking, shopping carts, order processing, customer interactions, and payments. It emphasizes secure JWT-based authentication, clean RESTful API design, well-structured relational database models, and Paystack payment integration. Beyond implementing individual features, the project reflects my approach to solving real-world backend challenges by separating responsibilities, designing reusable components, and building a system that can be extended as business requirements evolve.",

        problem: "Small and medium-sized retailers need a centralized backend capable of managing products, inventory, customers, shopping carts, payments, coupons, reviews, and orders securely without relying on fragmented systems.",

        solution: "I designed a modular backend using Django REST Framework that exposes secure REST APIs for every stage of the customer journey, from browsing products to completing Paystack-powered payments and tracking orders.",

        features: [
            {
                title: "JWT Authentication",
                description: "Secure user authentication using JSON Web Tokens."
            },

            {
                title: "Product Management",
                description: "Complete CRUD functionality for products, categories, and images."
            },

            {
                title: "Shopping Cart",
                description: "Customers can add, update, and remove products before checkout."
            },

            {
                title: "Order Processing",
                description: "End-to-end order creation, tracking, and management."
            },

            {
                title: "Paystack Integration",
                description: "Secure online payments through the Paystack payment gateway."
            },

            {
                title: "Inventory Management",
                description: "Automatic inventory updates based on customer purchases."
            }
        ],

        stack: {

            language: [
                "Python"
            ],

            framework: [
                "Django",
                "Django REST Framework"
            ],

            database: [
                "MySQL"
            ],

            authentication: [
                "JWT"
            ],

            tools: [
                "Git",
                "GitHub",
                "Postman",
                "Draw.io"
            ]

        },

        architectureDescription: "RetailPrime follows a layered backend architecture where client applications communicate with Django REST Framework through HTTPS-based REST APIs. Authentication and permission checks protect secured resources before requests reach the appropriate business logic, which manages products, carts, inventory, orders, and payments. The application persists relational data in MySQL and integrates with Paystack for payment processing.",

        architectureImage: "images/retailPrime_backend_architecture_design.png",
        
        architectureDesignImgAltText: "Retailprime architecture image",

        challenges: [

            {
                challenge:
                    "Designing an extensible database structure capable of supporting products, inventory, orders, payments, coupons, and reviews.",
            
                solution:
                    "Designed normalized relational models with reusable relationships to simplify future expansion."
            },
        
            {
                challenge:
                    "Ensuring secure access to protected resources and preventing unauthorized users from accessing sensitive operations.",
            
                solution:
                    "Implemented JWT authentication with permission-based access control across secured endpoints."
            },
        
            {
                challenge:
                    "Managing inventory accurately as customers add products to carts, complete purchases, or cancel orders.",
            
                solution:
                    "Designed inventory logic that tracks product availability and updates stock levels as orders are processed."
            },
        
            {
                challenge:
                    "Integrating an external payment gateway while keeping payment processing secure and reliable.",
            
                solution:
                    "Integrated Paystack to handle payment processing and structured the payment workflow to verify transactions before completing orders."
            },
        
            {
                challenge:
                    "Designing RESTful API endpoints that remain consistent, predictable, and easy for frontend or client applications to consume.",
            
                solution:
                    "Applied REST principles with organized URL structures, appropriate HTTP methods, serializers, and consistent response handling."
            },
        
            {
                challenge:
                    "Keeping the backend codebase modular and maintainable as the number of features and API endpoints increased.",
            
                solution:
                    "Organized functionality into reusable components and separated responsibilities across models, serializers, views, authentication, and business logic."
            },
        
            {
                challenge:
                    "Verifying that API endpoints behave correctly across successful requests, invalid inputs, authentication failures, and different resource operations.",
            
                solution:
                    "Tested the REST API extensively with Postman to validate endpoints, request data, authentication, responses, and common error scenarios."
            },

            {
                challenge:
                    "Managing the relationships between users, carts, products, orders, payments, reviews, and other related resources without creating unnecessary complexity.",
            
                solution:
                    "Used Django's relational modeling capabilities and carefully structured model relationships to maintain data integrity and simplify resource management."
            },
        
        ],       

        contributions: [
            "Designed the complete database schema.",

            "Built secure RESTful APIs.",

            "Implemented JWT authentication.",

            "Integrated Paystack payment processing.",

            "Developed inventory and order management.",

            "Created reusable serializers and API views.",

            "Tested API endpoints using Postman."
        ],

        screenshots: [],

        lessons: [
            "Designing modular applications improves long-term maintainability.",

            "Proper database planning reduces future complexity.",

            "Reusable serializers minimize duplicated code.",

            "Authentication should be considered from the beginning of development."
        ],

        futureImprovements: [
            {
                title: "More Payment Service Integrations",

                description: "Integrate more payment services like FlutterWave, Stripe etc."
            },

            {
                title: "Docker Support",

                description: "Containerize the application for consistent deployment."
            },

            {
                title: "Redis Caching",

                description: "Improve response times for frequently requested data."
            },

            {
                title: "CI/CD Pipeline",

                description: "Automate testing and deployment workflows."
            },

            {
                title: "Cloud Deployment",

                description: "Deploy the application to a production cloud environment."
            }

        ],
    },


    purselens: {

        id: "purselens",

        title: "PurseLens",

        category: "● Full-Stack Project",

        shortDescription: "A personal finance and budgeting API that helps users track transactions, manage budgets, organize expenses, and gain financial insights through analytics.",

        longDescription: "PurseLens is a full-stack personal finance and budgeting application designed to help users take control of their financial activity. The platform provides secure authentication, social login, transaction management, category organization, budgeting, and financial analytics through a Django REST Framework backend and a responsive web frontend.",

        status: "In Development",

        featured: true,

        role: "Full-Stack Developer",

        duration: "Ongoing",

        year: "2026",

        projectType: "Personal Project",

        liveDemo: "",

        github: "https://github.com/DannyTechStudio/purselens_app.git",

        technologies: [
            "Python",
            "Django",
            "Django REST Framework",
            "HTML5",
            "CSS3",
            "JavaScript",
            "MySQL",
            "JWT Authentication",
            "Google OAuth",
            "Django Allauth",
            "Postman",
            "Git",
            "GitHub"
        ],

        metrics: [
            {
                title: "Models",
                value: "3+"
            },

            {
                title: "API Endpoints",
                value: "25+"
            },

            {
                title: "Core Features",
                value: "10+"
            },

            {
                title: "Authentication",
                value: "JWT + OAuth"
            }
        ],

        overview: "PurseLens is a full-stack personal finance application built to provide users with a structured and centralized way to manage their financial activity. The application combines a Django and Django REST Framework backend with a web-based frontend to provide functionality for transaction tracking, category management, budgeting, and financial analytics. The backend exposes secure RESTful APIs while the frontend consumes these services to provide an interactive user experience. Authentication is implemented using JWT for API security alongside social authentication capabilities such as Google login. The project focuses not only on CRUD functionality but also on implementing meaningful financial business logic, including budget tracking, spending calculations, remaining balances, and dashboard summaries. As an ongoing personal project, PurseLens reflects my ability to design and develop a complete application across both backend and frontend layers while continuously improving its architecture and functionality.",

        problem: "Managing personal finances across disconnected spreadsheets, notes, and financial applications can make it difficult to understand spending patterns, monitor budgets, and maintain an accurate picture of one's financial position. Users need a centralized platform where transactions, categories, budgets, and financial insights can be managed in one place.",

        solution: "I designed and developed a full-stack financial management application with a Django REST Framework backend and web frontend. The system allows authenticated users to manage transactions, organize financial activity into categories, create budgets, and retrieve calculated financial insights through analytics and dashboard endpoints.",
        
        features: [
            {
                title: "JWT Authentication",
                description: "Secure authentication using JSON Web Tokens to protect user-specific financial resources."
            },

            {
                title: "Transaction Management",
                description: "Complete CRUD functionality for recording, updating, retrieving, and deleting financial transactions."
            },

            {
                title: "Category Management",
                description: "Organize income and expenses into structured financial categories for easier tracking and analysis."
            },

            {
                title: "Budget Management",
                description: "Create and manage category-based budgets to monitor planned spending against actual expenses."
            },

            {
                title: "Financial Analytics",
                description: "Generate calculated financial insights including total income, expenses, budget amounts, spending, and remaining balances."
            },

            {
                title: "Dashboard Summary",
                description: "Provide consolidated financial metrics and budget overviews through dedicated analytics endpoints."
            }
        ],

        stack: {

            language: [
                "Python",
                "HTML5",
                "CSS3",
                "JavaScript",
            ],

            framework: [
                "Django",
                "Django REST Framework"
            ],

            database: [
                "MySQL"
            ],

            authentication: [
                "JWT",
                "Google OAuth",
                "Django Allauth",
            ],

            tools: [
                "Git",
                "GitHub",
                "Postman",
                "Draw.io",
                "Figma",
            ]

        },

        architectureDescription: "PurseLens follows a full-stack architecture where the web frontend communicates with the Django REST Framework backend through RESTful APIs. Incoming requests to protected resources pass through authentication and permission controls before reaching the application's business logic. The backend handles transaction, category, budget, and analytics operations before interacting with MySQL for persistent data storage. JWT authentication is used for API authorization, while Django Allauth and OAuth provide social authentication capabilities such as Google login. The frontend consumes the backend APIs and presents financial information through the application's web interface.",
        
        architectureImage: "./images/purselens_backend_architecture_design.png",

        architectureDesignImgAltText: "PurseLens architecture image",

        challenges: [

            {
                challenge:
                    "Designing a relational data structure that accurately represents the relationships between users, categories, transactions, and budgets.",

                solution:
                    "Designed structured Django models with appropriate relationships and constraints to maintain data integrity while keeping the financial resources easy to query and extend."
            },

            {
                challenge:
                    "Implementing financial calculations that accurately reflect income, expenses, budgets, spending, and remaining balances.",

                solution:
                    "Implemented backend calculation logic that aggregates transaction and budget data to generate reliable financial summaries and analytics."
            },

            {
                challenge:
                    "Ensuring users can only access and modify their own financial information.",

                solution:
                    "Applied authentication and permission controls to protect user-specific resources and prevent unauthorized access to financial data."
            },

            {
                challenge:
                    "Managing the relationship between budgets and actual transaction spending.",

                solution:
                    "Designed the budgeting logic around financial categories so actual spending can be compared against defined budget amounts and remaining balances can be calculated dynamically."
            },

            {
                challenge:
                    "Handling financial data accurately while avoiding inconsistent calculations across different API responses.",

                solution:
                    "Centralized financial calculations and structured the API responses so related financial metrics are derived consistently from the underlying transaction and budget data."
            },

            {
                challenge:
                    "Designing RESTful endpoints that remain predictable and easy for frontend applications to consume.",

                solution:
                    "Applied REST principles with resource-based URL structures, appropriate HTTP methods, serializers, validation, and consistent API response handling."
            },

            {
                challenge:
                    "Testing different financial scenarios such as income, expenses, overspending, remaining budgets, and invalid requests.",

                solution:
                    "Used Postman to test API endpoints, authentication flows, request validation, CRUD operations, and financial calculations across different scenarios."
            },

            {
                challenge:
                    "Keeping the backend maintainable as transaction management, budgeting, and analytics functionality were introduced.",

                solution:
                    "Separated responsibilities across Django applications, models, serializers, views, and business logic to keep individual components focused and reusable."
            }

        ],

        contributions: [
            "Designed the database schema and financial data relationships.",

            "Built the RESTful API using Django REST Framework.",

            "Implemented JWT-based authentication and protected resources.",

            "Developed transaction management functionality.",

            "Implemented category management functionality.",

            "Developed budget creation and management functionality.",

            "Implemented financial analytics and dashboard calculations.",

            "Created reusable serializers and API views.",

            "Tested API endpoints and financial scenarios using Postman."
        ],

        screenshots: [],

        lessons: [
            "Good database design is essential when building systems around interconnected financial data.",

            "Business logic should be carefully separated from basic CRUD operations when an application requires meaningful calculations.",
            
            "Financial applications require consistent validation and calculation logic to maintain data accuracy.",
            
            "Designing APIs around clear resources makes backend systems easier for frontend applications to consume.",
            
            "Authentication and data ownership should be considered from the beginning when handling user-specific financial information.",
            
            "Integrating multiple authentication strategies requires careful consideration of user identity and authentication flows.",
            
            "Building a full-stack application provides a deeper understanding of how frontend and backend systems communicate and depend on one another.",
            
            "Real-world applications require more than CRUD operations; meaningful business rules and data processing are what make a system useful."
        ],

        futureImprovements: [
            {
                title: "Advanced Financial Analytics",

                description: "Add more detailed spending trends, income-versus-expense analysis, category breakdowns, and historical financial comparisons."
            },

            {
                title: "Recurring Transactions",

                description: "Support recurring income and expenses such as salaries, subscriptions, rent, and utility payments."
            },

            {
                title: "More Social Login Providers",

                description: "Expand social authentication beyond Google by supporting additional providers such as Apple, Facebook, LinkedIn, and other configured OAuth providers."
            },

            {
                title: "Notifications & Alerts",

                description: "Notify users when they approach or exceed their budget limits or when important financial events occur."
            },

            {
                title: "PostgreSQL Migration",

                description: "Move the production database from MySQL to PostgreSQL to support a more deployment-oriented production environment."
            },

            {
                title: "Docker Support",

                description: "Containerize the application to provide a consistent development and deployment environment."
            },

            {
                title: "Redis Caching",

                description: "Cache frequently requested analytics and dashboard data to improve API response times."
            },

            {
                title: "CI/CD Pipeline",

                description: "Automate testing, validation, and deployment workflows using a continuous integration and delivery pipeline."
            },

            {
                title: "Cloud Deployment",

                description: "Deploy the API and database infrastructure to a production cloud environment."
            }

        ]

    },
};
