const login = (email: string, password: string): Promise<string> => {
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res.idToken as string;
    });
};

export const api = { login };
