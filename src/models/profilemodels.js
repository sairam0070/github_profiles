const db = require("../config/db");

const saveProfile = (data) => {

  const query = `
  INSERT INTO github_profiles
  (
    username,
    name,
    bio,
    followers,
    following,
    public_repos,
    avatar_url,
    github_url,
    account_created
  )
  VALUES (?,?,?,?,?,?,?,?,?)

  ON DUPLICATE KEY UPDATE

    name=VALUES(name),
    bio=VALUES(bio),
    followers=VALUES(followers),
    following=VALUES(following),
    public_repos=VALUES(public_repos),
    avatar_url=VALUES(avatar_url),
    github_url=VALUES(github_url)
  `;

  db.query(
    query,
    [
      data.username,
      data.name,
      data.bio,
      data.followers,
      data.following,
      data.public_repos,
      data.avatar_url,
      data.github_url,
      data.account_created
    ]
  );
};

const getAllProfiles = () => {

  return new Promise((resolve, reject) => {

    db.query(
      "SELECT * FROM github_profiles",
      (err, result) => {

        if(err){
          reject(err);
        }

        resolve(result);
      }
    );

  });
};

const getSingleProfile = (username) => {

  return new Promise((resolve,reject)=>{

    db.query(
      "SELECT * FROM github_profiles WHERE username=?",
      [username],
      (err,result)=>{

        if(err){
          reject(err);
        }

        resolve(result);
      }
    );
  });
};

module.exports = {
  saveProfile,
  getAllProfiles,
  getSingleProfile
};