import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function PureCompExample() {
    const navigation = useNavigate()
    console.log("call pure component exe")
    const [name, setName] = React.useState('John');
    useEffect(() => {
        setTimeout(() => {
            setName('Abid');
        }, 3000)
    }, [])

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <h5>Pure Component Example</h5>
                <p style={{ cursor: 'pointer' }} onClick={() => navigation(-1)}>X</p>
            </div>
            <p>Explaination: check console the normal component will render after every 3s while the Momoized component console will only print when the prop value changed</p>
            <div>
                <h5>Child Momoized Component</h5>
                <MemoizedComponent name={name} />
            </div>
            <div>
                <h5>Child Normal Component</h5>
                <NormalComponent name={name} />
            </div>

        </div>
    )
}

const NormalComponent = ({ name }) => {
    console.log("Normal Component Re-rendered");
    return <h6>Name: {name}</h6>;
};
const MemoizedComponent = memo(({ name }) => {
    console.log("Memoized Component Re-rendered");
    return <h6>Name: {name}</h6>;
});
export default PureCompExample