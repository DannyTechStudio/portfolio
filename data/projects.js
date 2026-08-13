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

        architectureImage: "./images/retailprime-architecture.png",

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
    }
};
