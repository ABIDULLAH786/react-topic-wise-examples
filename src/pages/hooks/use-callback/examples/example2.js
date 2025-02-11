import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james',
];


export default function UseCallbackExample3() {
    const [users, setUsers] = useState(allUsers);
    const navigation = useNavigate()
    const handleSearch = useCallback((text) => {
        const filteredUsers = allUsers.filter((user) =>
            user.includes(text),
        );
        setUsers(filteredUsers);
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <h5></h5>
                <p style={{ cursor: 'pointer' }} onClick={() => navigation(-1)}>X</p>
            </div>
            <div>
                <button onClick={() => setUsers(shuffle(allUsers))}>
                    Shuffle
                </button>

                <Search onChange={handleSearch} />
            </div>
            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

const Search = memo(({ onChange }) => {
    console.log('Search rendered!');

    return (
        <input
            type='text'
            placeholder='Search users...'
            onChange={(e) => onChange(e.target.value)}
        />
    );
})

function shuffle(array) {
    const newArray = [...array]; // Create a copy of the original array
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
}
