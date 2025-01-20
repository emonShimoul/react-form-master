import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Emon Shimoul");

  const emailState = useInputState("emon@mail.com");

  const handleSubmit = (e) => {
    console.log("form data", emailState.value);

    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="Submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
