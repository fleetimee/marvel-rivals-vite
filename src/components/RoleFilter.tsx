import { Tag } from "../services/Heroes";

interface RoleFilterProps {
  activeFilter: Tag | "ALL";
  onFilterChange: (filter: Tag | "ALL") => void;
}

export const RoleFilter = ({
  activeFilter,
  onFilterChange,
}: RoleFilterProps) => {
  const roles: (Tag | "ALL")[] = [
    "ALL",
    Tag.Duelist,
    Tag.Strategist,
    Tag.Vanguard,
  ];

  return (
    <div className="role-filter">
      {roles.map((role) => (
        <button
          key={role}
          className={`filter-btn ${activeFilter === role ? "active" : ""}`}
          onClick={() => onFilterChange(role)}
        >
          {role}
        </button>
      ))}
    </div>
  );
};
