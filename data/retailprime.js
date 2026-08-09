const projectData = {
    id: "retailprime",

    title: "RetailPrime",
    category: "Backend Project",
    shortDescription: "A single-vendor eCommerce backend that streamlines online retail through secure APIs, inventory management, Paystack payments, and order processing.",
    longDescription: "RetailPrime is a scalable backend solution built for modern online retail businesses. It provides secure RESTful APIs for product management, customer accounts, shopping carts, orders, payments, inventory tracking, coupons, reviews, and order fulfillment.",
    status: "Completed",
    featured: true,
    role: "Backend Developer",
    duration: "6 weeks",
    projectType: "Persoanl Project",
    
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
    
    overview: "RetailPrime demonstrates my ability to design and build production-ready backend systems for eCommerce applications. The project emphasizes modular architecture, secure authentication, clean REST API design, relational database modeling, payment integration, and maintainable code structure.",

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
            "Postman"
        ]

    },

    architectureDescription: "RetailPrime follows a layered backend architecture that separates API endpoints, authentication, business logic, and database operations into reusable components.",

    architecture: [
        "Client Applications",

        "REST API",

        "Authentication",

        "Business Logic",

        "MySQL Database"

    ],

    challenges: [
        {
            challenge: "Designing an extensible database structure capable of supporting products, inventory, orders, payments, coupons, and reviews.",

            solution: "Designed normalized relational models with reusable relationships to simplify future expansion."
        },

        {
            challenge: "Ensuring secure access to protected resources.",

            solution: "Implemented JWT authentication with permission-based access control across secured endpoints."
        }
    ],

    contributions: [
        "Designed the complete database schema.",

        "Built secure RESTful APIs.",

        "Implemented JWT authentication.",

        "Integrated Paystack payment processing.",

        "Developed inventory and order management.",

        "Created reusable serializers and API views.",

        "Tested endpoints using Postman."
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
};
