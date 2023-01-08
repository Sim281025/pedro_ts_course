import {FC, ChangeEvent, useState} from 'react';

//You give types to props in a component through the interface.
//An interface is a way to describe an obj.
interface Props {
    name: string;
    age: number;
    email: string;
   // getName: (name: string) => string;   // function that returns a string and passes an argument that is a string
}

export const Person: FC<Props> =({name, age, email}) => {
    const [country, setCountry] = useState<string | null>(null)
//destructure prop arguments
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{age}</h1>
            <input placeholder="Write down your country..." onChange={(event) => {setCountry(event.target.value)}}/>
            {country}
        </div>
    )

}