import React from "react";
import TeamCard from "../components/Team/TeamCard";

function TeamPage() {
  return (
    <div>
      <div className="text-center pb-2">
        <h3 className="font-bold text-2xl pb-2">Meet Our Team</h3>
        <p className="text-[#737373] font-bold">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <TeamCard />
    </div>
  );
}

export default TeamPage;
