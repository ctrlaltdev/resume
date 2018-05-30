console.warn("I have become self aware!");

var buttons = document.querySelectorAll('button');
[].forEach.call(buttons, function(button) {
  button.addEventListener("click", btnClick);
});

function btnClick() {
  switch(this.id) {
    case "btnlang":
      addLang();
      break;
    case "btntech":
      addTech();
      break;
    case "btnskill":
      addSkill();
      break;
    case "btnexp":
      addExp(this.previousSibling.lastChild.id);
      break;
    case "btnexpdesc":
      addExpDesc(this.parentElement.id);
      break;
    case "btneduc":
      addEduc(this.previousSibling.lastChild.id);
      break;
    case "btneducdesc":
      addEducDesc(this.parentElement.id);
      break;
  }
}

function addLang() {
  let input = document.createElement('input');
  input.setAttribute('list', 'langs');
  input.setAttribute('placeholder', 'Langs');
  input.setAttribute('name', 'langs');

  let select = document.createElement('select');
  select.setAttribute('name', 'langlvls');
  select.setAttribute('placeholder', 'Proficiency');

  let proficiency = ['Beginner', 'Intermediate', 'Advanced', 'Fluent', 'Native'];
  for (i=0 ; i < proficiency.length ; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', proficiency[i]);
    let optionTxt = document.createTextNode(proficiency[i]);

    option.appendChild(optionTxt);
    select.appendChild(option);
  }

  document.querySelector('fieldset.lang').appendChild(input);
  document.querySelector('fieldset.lang').appendChild(select);
}

function addTech() {
  let input = document.createElement('input');
  input.setAttribute('list', 'techs');
  input.setAttribute('placeholder', 'Tech');
  input.setAttribute('name', 'techs');

  let range = document.createElement('input');
  range.setAttribute('type', 'range');
  range.setAttribute('list', 'lvls');
  range.setAttribute('placeholder', 'Level');
  range.setAttribute('name', 'techlvls');
  range.setAttribute('min', '0');
  range.setAttribute('max', '5');
  range.setAttribute('step', '1');

  document.querySelector('fieldset.tech').appendChild(input);
  document.querySelector('fieldset.tech').appendChild(range);
}

function addSkill() {
  let input = document.createElement('input');
  input.setAttribute('list', 'skills');
  input.setAttribute('placeholder', 'Skill');
  input.setAttribute('name', 'skills');

  document.querySelector('fieldset.skill').appendChild(input);
}

function addExp(id) {
  let index = getIndex(id, 1);

  let div = document.createElement('div');
  div.id = "exp"+index;

  let title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Title');
  title.setAttribute('name', 'exp.'+index+'.');

  let company = document.createElement('input');
  company.setAttribute('type', 'text');
  company.setAttribute('placeholder', 'Company');
  company.setAttribute('name', 'exp.'+index+'.org');

  let location = document.createElement('input');
  location.setAttribute('type', 'text');
  location.setAttribute('placeholder', 'Location');
  location.setAttribute('name', 'exp.'+index+'.location');

  let start = document.createElement('input');
  start.setAttribute('type', 'text');
  start.setAttribute('placeholder', 'Start');
  start.setAttribute('name', 'exp.'+index+'.start');

  let end = document.createElement('input');
  end.setAttribute('type', 'text');
  end.setAttribute('placeholder', 'End');
  end.setAttribute('name', 'exp.'+index+'.end');

  let descdiv = document.createElement('div');
  descdiv.classList.add('desc');

  let desc = document.createElement('input');
  desc.setAttribute('type', 'text');
  desc.setAttribute('placeholder', 'Description');
  desc.setAttribute('name', 'exp.'+index+'.desc');

  descdiv.appendChild(desc);

  let btndesc = document.createElement('button');
  btndesc.setAttribute('type', 'button');
  btndesc.id = "btnexpdesc";
  btndesc.classList.add('more');

  let btndescTxt = document.createTextNode('+');
  btndesc.appendChild(btndescTxt);

  div.appendChild(title);
  div.appendChild(company);
  div.appendChild(location);
  div.appendChild(start);
  div.appendChild(end);
  div.appendChild(descdiv);
  div.appendChild(btndesc);

  document.querySelector('fieldset.experience').appendChild(div);
  document.querySelector('#exp'+index+' #btnexpdesc').addEventListener('click', btnClick);
}

function addExpDesc(id) {
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Description');
  input.setAttribute('name', id+".desc");

  let selector = '#'+id+' .desc';
  document.querySelector(selector).appendChild(input);
}

function addEduc(id) {
  let index = getIndex(id, 2);

  let div = document.createElement('div');
  div.id = "educ"+index;

  let title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Major');
  title.setAttribute('name', 'educ.'+index+'.');

  let school = document.createElement('input');
  school.setAttribute('type', 'text');
  school.setAttribute('placeholder', 'School');
  school.setAttribute('name', 'educ.'+index+'.org');

  let location = document.createElement('input');
  location.setAttribute('type', 'text');
  location.setAttribute('placeholder', 'Location');
  location.setAttribute('name', 'educ.'+index+'.location');

  let year = document.createElement('input');
  year.setAttribute('type', 'text');
  year.setAttribute('placeholder', 'Year');
  year.setAttribute('name', 'educ.'+index+'.year');

  let descdiv = document.createElement('div');
  descdiv.classList.add('desc');

  let desc = document.createElement('input');
  desc.setAttribute('type', 'text');
  desc.setAttribute('placeholder', 'Description');
  desc.setAttribute('name', 'educ.'+index+'.desc');

  descdiv.appendChild(desc);

  let btndesc = document.createElement('button');
  btndesc.setAttribute('type', 'button');
  btndesc.id = "btneducdesc";
  btndesc.classList.add('more');

  let btndescTxt = document.createTextNode('+');
  btndesc.appendChild(btndescTxt);

  div.appendChild(title);
  div.appendChild(school);
  div.appendChild(location);
  div.appendChild(year);
  div.appendChild(descdiv);
  div.appendChild(btndesc);

  document.querySelector('fieldset.education').appendChild(div);
  document.querySelector('#educ'+index+' #btneducdesc').addEventListener('click', btnClick);
}

function addEducDesc(id) {
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Description');
  input.setAttribute('name', id+".desc");

  document.querySelector('#'+id+' .desc').appendChild(input);
}

function getIndex(id, type) {
  if (type == 1) {
    let index = parseInt(id.replace("exp", "")) + 1;
    return index;
  } else if (type == 2) {
    let index = parseInt(id.replace("educ", "")) + 1;
    return index;
  }
}