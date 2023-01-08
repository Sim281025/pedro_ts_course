import * as React from  'react';

//You give types to props in a component through the interface.
//An interface is a way to describe an obj.
interface Props {
    name: string;
    age: number;
    email: string;
   // getName: (name: string) => string;   // function that returns a string and passes an argument that is a string
}

export function Person(props: Props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.age}</h1>
        </div>
    )

}