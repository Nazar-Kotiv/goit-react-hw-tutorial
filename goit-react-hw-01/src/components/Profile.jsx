export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile-container">
      <div className="border-img">
        <img className="avatar" src={image} alt="User avatar" />
        <p className="border-img p">{name}</p>
        <p className="border-img p">@{tag}</p>
        <p className="border-img p">{location}</p>
      </div>

      <ul className="ul-prifile">
        <li className="li-pofile">
          <span className="span">Followers</span>
          <span className="span">{followers}</span>
        </li>
        <li className="li-pofile">
          <span className="span">Views</span>
          <span className="span">{views}</span>
        </li>
        <li className="li-pofile">
          <span className="span">Likes</span>
          <span className="span">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
