const UserCard = ({ user }) => {
  const { firstName, lastName, photourl, age, gender, about } = user;
  

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photourl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        {about}
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
