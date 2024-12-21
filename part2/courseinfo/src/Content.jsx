function Part({name, number}) {
    return <p>{name}: {number}</p>
}

export default function Content({data}) {
    return (
        <div>
            <Part name={data.part1} number={data.exercises1}/>
            <Part name={data.part2} number={data.exercises2}/>
            <Part name={data.part3} number={data.exercises3}/>
        </div>
    )
}

