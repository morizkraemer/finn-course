export default function Total(props) {
    const t = props.data.exercises1 + props.data.exercises2 + props.data.exercises3
    return (
    <div>
        <h2>Total number of exercises: {t}</h2> 
    </div>
    )

}
