import { FormEvent, useRef } from "react";

export const FormManual = () => {
  // could use useState instead
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };
  return (
    <form
      onSubmit={(event: FormEvent) => {
        event.preventDefault();
        if (nameRef.current !== null) person.name = nameRef.current.value;
        if (ageRef.current !== null)
          person.age = parseInt(ageRef.current.value);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
