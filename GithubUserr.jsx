import useGithubUser from "./UseGithubUser";

const GithubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {user && (
        <>
          <img src={user.avatar_url} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.login}</p>
        </>
      )}
    </div>
  );
};

export default GithubUser;
