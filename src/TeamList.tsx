import { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch('/src/teams.json')
      .then((response) => response.json())
      .then((data) => setTeams(data.teams))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="team-list">
      {teams.length > 0 ? (
        teams.map((team, index) => <TeamCard key={index} team={team} />)
      ) : (
        <p>Loading teams...</p>
      )}
    </div>
  );
};

export default TeamList;
