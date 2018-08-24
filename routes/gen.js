var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

  let info = {};
  if(req.body["position"] !== ""){
    info.position = req.body["position"];
  }

  let personalinfo = {
    phone: {
      txt: req.body["personalinfo.phone.txt"],
      value: req.body["personalinfo.phone.value"]
    },
    email: req.body["personalinfo.email"],
    PGPKEY: {
      txt: req.body["personalinfo.PGPKEY.txt"],
      url: req.body["personalinfo.PGPKEY.url"]
    },
    github: req.body["personalinfo.github"],
    linkedin: req.body["personalinfo.linkedin"],
    website: req.body["personalinfo.website"]
  };

  let techs = null
  if (req.body["techs"]) {
    techs = [];
    if (Array.isArray(req.body["techs"])) {
      for(x=0 ; x < req.body["techs"].length ; x++) {
        let tech = req.body["techs"][x];
        techs.push(tech);
      }
    } else {
      techs.push(req.body["techs"]);
    }
  }

  let langs = [];
  if (Array.isArray(req.body["langs"])) {
    for(y=0 ; y < req.body["langs"].length || y < req.body["langlvls"].length ; y++) {
      let lang = {
        name: req.body["langs"][y],
        level: req.body["langlvls"][y]
      };
      langs.push(lang);
    }
  } else {
    langs.push({name: req.body["langs"], level: req.body["langlvls"]});
  }

  let skills = null
  if(req.body["skills"]) {
    skills = [];
    if (Array.isArray(req.body["skills"])) {
      for(z=0 ; z < req.body["skills"].length ; z++) {
        let skill = req.body["skills"][z];
        skills.push(skill);
      }
    } else {
      skills.push(req.body["skills"]);
    }
  }

  let experiences = [];
  let i = 0;
  while (req.body["exp."+i+".org"]) {
    let exp = {
      org: req.body["exp."+i+".org"],
      location: req.body["exp."+i+".location"],
      start:  req.body["exp."+i+".start"],
      end: req.body["exp."+i+".end"]
    };
    if (Array.isArray(req.body["exp."+i+".title"])) {
      exp.title = req.body["exp."+i+".title"];
    } else {
      exp.title = [req.body["exp."+i+".title"]];
    }
    if (Array.isArray(req.body["exp."+i+".desc"])) {
      exp.desc = req.body["exp."+i+".desc"];
    } else {
      exp.desc = [req.body["exp."+i+".desc"]];
    }
    experiences.push(exp);
    i++;
  }

  let education = [];
  let j = 0;
  while (req.body["educ."+j+".org"]) {
    let educ = {
      title: req.body["educ."+j+".title"],
      org: req.body["educ."+j+".org"],
      location: req.body["educ."+j+".location"],
      year:  req.body["educ."+j+".year"]
    };
    if (Array.isArray(req.body["educ."+j+".desc"])) {
      educ.desc = req.body["educ."+j+".desc"];
    } else {
      educ.desc = [req.body["educ."+j+".desc"]];
    }
    education.push(educ);
    j++;
  }

  res.render('resume', {
    title: 'Resume',
    info: info,
    personalinfo: personalinfo,
    experiences: experiences,
    education: education,
    skills: skills,
    techs: techs,
    langs: langs
  });
});

module.exports = router;