import { IconCheck, IconUserOff } from "@tabler/icons-react"

const users = [
    {
        name: "Jeremy",
        job: "Software Engineer",
        isAvailable: true,
    },
    {
        name: "David",
        job: "Software Engineer",
        isAvailable: false,
    },
    
];

export default function UsersPage() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.name}>
                        <td style={{
                            color: !user.isAvailable ? "red" : "green",
                        }}>
                            {user.isAvailable? <IconCheck /> : <IconUserOff />}
                            {user.name}
                        </td>
                        <td>{user.job}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}