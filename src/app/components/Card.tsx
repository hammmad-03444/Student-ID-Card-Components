import React from 'react'
import Image from 'next/image'
interface CardProps {
  name: string;
  age: number;
  rollno: number;
  class: string;
  image: string;
}

const Card = (props:CardProps) => {
  const {name,age,rollno,class:className,image} = props;
  return (
    <>
    <div className=" flex items-center justify-center border-2 border-neutral-400 rounded-lg p-4 shadow-xl  text-center">
        <div className="text-left">
            <h1 className="font-extrabold text-3xl p-2 m-2">Name :{name}</h1>
            <h1 className="text-md font-bold text-3xl p-2 m-2">Age :{age}</h1>
            <h1 className="text-md font-bold text-3xl p-2 m-2">Roll NO :{rollno}</h1>
            <h1 className="text-md font-bold text-3xl p-2 m-2">Class :{className}</h1>
        </div>
        <div className="card-image mb-4">
        <Image
          src={image}
          alt={`${name}'s picture`}
          width={180}
          height={180}
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>

    </>
  )
}

export default Card