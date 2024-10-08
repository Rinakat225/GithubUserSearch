/* eslint-disable react/prop-types */
export default function DisplayResult({ searchResult, repositories }) {
  return (
    <>
      <div className="heading_container">
        <img
          className="avatar"
          src={searchResult.avatar_url}
          alt={searchResult.login}
        />
        <h1>{searchResult.name}</h1>
      </div>
      <div className="info">
        <p>
          <strong>BIO:</strong> {searchResult.bio}
        </p>
        <p>
          <strong>LOCATION:</strong> {searchResult.location}
        </p>
        <p>
          <strong>REPOSITORIES:</strong>
        </p>
        <ul>
          {repositories.map((repository) => (
            <li className="list-element" key={repository.id}>
              {repository.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
