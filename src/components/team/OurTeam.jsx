import React from "react";
import "./OurTeam.css";
import aman from "../../assets/aman.png";
import dipak from "../../assets/dipak.png";
import dipesh from "../../assets/dipesh.png";
import manta from "../../assets/manta.png";
import rajan from "../../assets/rajan.png";
import prajwal from "../../assets/prajwal.png";
import prayusha from "../../assets/prayusha.png";
import sujan from "../../assets/sujan.png";
import { Link } from "react-router-dom";
// Sample team data
const teamMembers = [
  {
    name: "Dipesh Karki",
    role: "Finance Manager",
    image: dipesh,
  },
  {
    name: "Prayusha Shrestha",
    role: "HR Officer",
    image: prayusha,
  },
  {
    name: "Manta Lama",
    role: "Digital Marketing Coordinator",
    image: manta,
  },
  {
    name: "Dipak B K",
    role: "Motion Graphics Designer & Video Editor",
    image: dipak,
  },
  {
    name: "Aman Shrestha",
    role: "Sr. Graphics Designer",
    image: aman,
  },
  {
    name: "Rajan Sharma",
    role: "Marketing Officer",
    image: rajan,
  },
  {
    name: "Prajwol KC",
    role: "Software Engineer",
    image: prajwal,
  },
  {
    name: "Sujan Karki",
    role: "Graphics Designer Intern",
    image: sujan,
  },
];

function OurTeam() {
  return (
    <div>
      <div className="context__heading">
        <h2 className="heading-primary">Meet Our Teams</h2>
      </div>

      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <img
                src={member.image}
                alt={member.name}
                className="team-card-image"
              />
              <div className="text-content">
                <p className="role">{member.role}</p>
                <h3 className="name">{member.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
