import useInput from "../hooks/useInput";


const Fields = () => {
  const userName = useInput("");
  const userPassword = useInput("");

  return (
    <div>
      <input {...userName} type="text" placeholder="userName" />
      <input {...userPassword} type="text" placeholder="userPassword" />
      <button onClick={() => console.log(userName.value, userPassword.value)}>
        click
      </button>
    </div>
  );
};

export default Fields;
