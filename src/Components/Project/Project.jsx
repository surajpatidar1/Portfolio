import React from 'react';
import Glass3DCard from '../../component/ui/Glass3DCard';

const Project = () => {
  return (
    <div className="bg-gradient-to-br from-purple-200 to-gray-800 py-16 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-white tracking-wide mb-12">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <Glass3DCard
          title="Hotel Booking"
          subtitle="MERN STACK"
          description="JavaScript, MongoDB, Express.js, Passport.js, React.js, Bootstrap, Cloudinary"
          githubLink="https://github.com/surajpatidar1/booking--webapplication"
          demoLink="#"
          imageSrc="/booking .png"
        />

        <Glass3DCard
          title="Workwith.ai"
          subtitle="Next JS"
          description="Next.js (App Router + TypeScript), TailwindCSS, Shadcn UI, Acertinity, Clerk Authentication, TypeScript API Routes, Neon.tech (PostgreSQL), Clipdrop AI, Gemini AI, Cloudinary."
          githubLink="https://github.com/surajpatidar1/Workwith.ai"
          demoLink="https://workwith-ai.vercel.app"
          imageSrc="/ai.png"
        />

        <Glass3DCard
          title="Food Delivery"
          subtitle="MERN STACK"
          description="React, Redux Toolkit, Tailwind CSS / Bootstrap, Node.js, Express.js, MongoDB, JWT Authentication, bcrypt, Stripe API."
          githubLink="https://github.com/surajpatidar1/food-delivery"
          demoLink="#"
          imageSrc="/fooddel.png"
        />
      </div>
    </div>
  );
};

export default Project;
