import FamilyMemberCard, { FamilyMember } from "./FamilyMemberCard";
import AddMemberCard from "./AddMemberCard";

const mockFamilyMembers: FamilyMember[] = [
  { id: 1, name: "Mom", status: "OK" },
  { id: 2, name: "Dad", status: "OK" },
  { id: 3, name: "Sister", status: "Warning" },
  { id: 4, name: "You", status: "OK" },
];

export default function FamilyMembersRow() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
      {mockFamilyMembers.map((member) => (
        <FamilyMemberCard key={member.id} member={member} />
      ))}
      <AddMemberCard />
    </div>
  )
}