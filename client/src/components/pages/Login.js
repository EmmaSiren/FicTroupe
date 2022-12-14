import React from 'react';

export default function Login () {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div className="">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div className="">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
          />
        </div>
        <div className="">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}