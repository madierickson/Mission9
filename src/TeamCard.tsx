interface Team {
    school: string;
    name: string;
    city: string;
    state: string;
  }
  
  const TeamCard: React.FC<{ team: Team }> = ({ team }) => {
    return (
      <div className="team-card">
        <h2>{team.school}</h2>
        <p><strong>Mascot:</strong> {team.name}</p> 
        <p><strong>Location:</strong> {team.city}, {team.state}</p>
      </div>
    );
  };
  
  export default TeamCard;
  