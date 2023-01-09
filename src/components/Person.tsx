import React, {FC, ChangeEvent, useState} from 'react';

// Enums defines options. So it can be an option inside the props
export enum HairColor {
    Blonde= "Your hair is blonde good for you",
    Brown="Your hair is brown. Cool hair color",
    Pink="Your hair is pink. Wow that is so cool",
}

//You give types to props in a component through the interface.
//An interface is a way to describe an obj. You define an obj
interface Props {
    name: string;
    age: number;
    email: string;
    hairColor: HairColor;
   // getName: (name: string) => string;   // function that returns a string and passes an argument that is a string
}


//destructure prop arguments
export const Person: FC<Props> = ({name, age, email, hairColor}) => {
    const [country, setCountry] = useState<string | null>(null)

    type NameType = "Pedro" | "Jack"
    const nameForType: NameType = "Jack"

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }



    return (
        <div>
            <>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{age}</h1>
            <input placeholder="Write down your country..." onChange={handleChange}/>
            {country}
            {hairColor}
            </>
        </div>
)

}