type Props = {
  member: {
    name: string
    status: 'OK' | 'Warning'
  }
}

export default function FamilyMemberCard({ member }: Props) {
  return (
    <div className="min-w-[140px] rounded-xl border p-4 bg-white shadow-sm">
      <div className="font-medium">{member.name}</div>

      <div
        className={`mt-2 text-sm ${
          member.status === 'OK'
            ? 'text-green-600'
            : 'text-yellow-600'
        }`}
      >
        {member.status}
      </div>
    </div>
  )
}