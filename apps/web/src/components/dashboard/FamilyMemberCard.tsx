export type FamilyMember = {
  id: number;
  name: string;
  status: "OK" | "Warning";
  initials?: string;
};

type Props = {
  member: FamilyMember;
};

export default function FamilyMemberCard({ member }: Props) {
  return (
    <div className="w-44 bg-white dark:bg-white rounded-xl shadow-md p-5 flex flex-col items-center transition-colors duration-300">
      <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl font-bold text-black dark:text-black">
        {member.initials ?? member.name[0]}
      </div>
      <p className="mt-2 font-semibold text-black dark:text-black">
        {member.name}
      </p>
      <span
        className={`text-sm ${
          member.status === "Warning" ? "text-red-500" : "text-green-600"
        }`}
      >
        {member.status}
      </span>
    </div>
  );
}