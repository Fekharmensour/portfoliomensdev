import tajir_img from "./../assets/tajir.png";
import admin_img from "./../assets/admin_tajir.png";
import backend_img from "./../assets/laravel.jpg";

import package_store_img from "./../assets/package_main.png";
import package2_img from "./../assets/package2.png";


import mycode_main from "./../assets/mycode/mycode_main.png";
import mycode_1 from "./../assets/mycode/mycode1.png";
import mycode_2 from "./../assets/mycode/mycode2.png";
import mycode_3 from "./../assets/mycode/mycode3.png";
import mycode_4 from "./../assets/mycode/mycode4.png";
import mycode_5 from "./../assets/mycode/mycode5.png";
import mycode_6 from "./../assets/mycode/mycode6.png";

import eventix_main from "./../assets/Eventix/eventix_main.png";
import eventix_1 from "./../assets/Eventix/eventix1.png";
import eventix_2 from "./../assets/Eventix/eventix2.png";
import eventix_3 from "./../assets/Eventix/eventix3.png";
import eventix_4 from "./../assets/Eventix/eventix4.png";
import eventix_5 from "./../assets/Eventix/eventix5.png";
import eventix_6 from "./../assets/Eventix/eventix6.png";
import eventix_7 from "./../assets/Eventix/eventix7.png";



export const projects = [
    {
        id: "tajir",
        title: "Tajir Marketplace ",
        date: "22 March 2024 - 20 May 2024",
        second_title: "Graduation project for building a multi-role system to sell, buy, and manage branded products.",
        description: "Tajir is a robust web-based marketplace platform built with React as part of my graduation project. It enables seamless buying and selling of products through a structured, role-based system that includes Admins, Sellers, and Buyers.Sellers can either create a brand or join an existing one, promoting collaboration and brand consistency. Each brand has the ability to create coupons that can be applied to the products sold by its associated sellers. Sellers themselves can also offer discounts on their individual products.The platform includes advanced features such as product filtering by price, rating, and category, allowing buyers to easily compare and find what they need. Admins oversee the platform’s operations, manage users, and ensure a smooth flow across the system. Tajer delivers a full-featured e-commerce experience with a strong focus on brand structure, product visibility, and promotional tools.",
        image: tajir_img,
        images: [tajir_img, admin_img, backend_img],
        comment: { text: "An impressive platform! Your knowledge really shows. Keep up the great work!", stars: 4, username: "Akram" },
    },
    {
        id: "tajir-admin",
        title: "Tajir Admin Panel",
        date: "22 March 2024 - 20 May 2024",
        second_title: "A powerful dashboard to manage users, products, brands, and operations on the Tajer platform",
        description: "Tajir Admin is the administrative panel built with React to manage and oversee the operations of the Tajer marketplace platform. Designed to be fast, intuitive, and responsive, it empowers admins with full control over the system's key components.Through this dashboard, admins can manage sellers and buyers, monitor brand activity, review and moderate products, and track coupon usage. It also includes features for overseeing product discounts, filtering settings, and ensuring compliance across the marketplace. With a clean UI and powerful backend integrations, Tajir Admin ensures platform stability and effective decision-making for administrators.",
        image: admin_img,
        images: [admin_img, tajir_img, backend_img],
        comment: { text: "An impressive platform! Your knowledge really shows. Keep up the great work!", stars: 4, username: "Akram" },
    },
    {
        id: "eventix",
        title: "EVENTIX",
        date: "15 Apr 2025 - 27 Apr 2025",
        second_title: "A smart multi-role event management and booking platform built with Laravel and React.",
        description: "Eventix is a full-featured event booking and management system developed from scratch as a university project. It’s built using Laravel for the backend and React for three distinct user interfaces: Admin, Client, and Organizer.Clients can browse all available events, book tickets, view booking details, and download their ticket in PDF format.Upon successful booking, they also receive their ticket via email with the PDF attached for convenience.Organizers have their own dedicated dashboard where they can create, update, or delete events, manage bookings, and accept or reject reservations.They also have access to key event statistics to track performance and participation.Admins oversee the entire system.They can validate new organizers, approve or reject events, manage user accounts(e.g., deactivate if needed), and review reports.The admin dashboard also includes comprehensive platform - wide statistics to monitor activity and ensure smooth operation.Eventix provides a smart, user - friendly experience for everyone involved in event organization and participation, making it an ideal solution for academic and professional settings",
        image: eventix_main,
        images: [eventix_main, eventix_1, eventix_2, eventix_3, eventix_4, eventix_5, eventix_6, eventix_7],
        comment: { text: "Achieving this level of work in such a short time is truly impressive. You have all the qualities needed to succeed in backend development. Keep pushing forward!", stars: 5, username: "Mohammed GHARZOULI" },
    },
    {
        id: "package-store",
        title: "PackageStore ",
        date: "28 Jun 2025 - 05 Jul 2025",
        second_title: "Landing page system for showcasing products and managing stock with Laravel and Inertia.js.",
        description: "PackageStore  is a web application I developed for a Saudi client to help manage and display store products effectively. Built using Laravel and Inertia.js, the system includes a clean, user-friendly landing page where customers can explore available products and contact the store to place orders directly via WhatsApp. On the backend, I implemented a custom dashboard for the client to manage products, update stock levels, and view essential statistics. This project provides a simple yet powerful solution for small business owners to present their store online and stay in control of their inventory",
        image: package_store_img,
        images: [package_store_img, package2_img, backend_img],
        comment: { text: " Beautiful design, I liked it a lot. Quick response and excellent work! ", stars: 4, username: "Mohammed Adnan" },
    },
    {
        id: "my-code",
        title: "MyCode Platform",
        date: "23 Jun 2025 - 25 Jul 2025",
        second_title: "A multi-platform system with coupons, tasks, points, and product management built for a Saudi client",
        description: "MyCode is a versatile reward-based e-commerce platform developed for a Saudi client. The system enables users to collect points by completing tasks and use them to purchase products or claim coupons. It’s built with a robust tech stack — Laravel for the backend, React for the web client and admin panel, and Flutter for the mobile app (iOS & Android). \n My main contributions to the project included enhancing and extending the system’s backend and admin functionality. I implemented email notifications for account validation, password recovery, and account deletion. I also added full product management (CRUD), linking products with orders and allowing the admin to accept or reject order requests. \n In addition, I developed the task management module, enabling the admin to create, validate, and assign points to user-completed tasks. I integrated a wallet points system per user, a news section for updates, and a real-time chat feature between users and admin — all managed through the admin panel. These additions made the platform more interactive, rewarding, and admin-friendly.",
        image: mycode_main,
        images: [mycode_main, mycode_1, mycode_2, mycode_3, mycode_4, mycode_5, mycode_6],
        comment: { text: "The design is really great, Mashallah. Mansour, you're truly talented — everything is working perfectly in the backend. May God bless you and give you strength", stars: 5, username: "Mohammed adnan" },
    },
    // Add more...
];