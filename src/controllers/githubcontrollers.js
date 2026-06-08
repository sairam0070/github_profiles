const {
  fetchGithubUser
} = require("../services/githubservices");

const {
  saveProfile,
  getAllProfiles,
  getSingleProfile
} = require("../models/profilemodels");

const analyzeProfile = async (req,res)=>{

  try{

    const username = req.params.username;

    const user = await fetchGithubUser(username);

    const profile = {

      username:user.login,
      name:user.name,
      bio:user.bio,
      followers:user.followers,
      following:user.following,
      public_repos:user.public_repos,
      avatar_url:user.avatar_url,
      github_url:user.html_url,
     account_created: new Date(user.created_at)
    };

    saveProfile(profile);

    res.status(200).json({
      success:true,
      data:profile
    });

  }
  catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });
  }
};

const getProfiles = async(req,res)=>{

  const data = await getAllProfiles();

  res.json(data);
};

const getProfile = async(req,res)=>{

  const data = await getSingleProfile(
    req.params.username
  );

  res.json(data);
};

module.exports = {
  analyzeProfile,
  getProfiles,
  getProfile
};