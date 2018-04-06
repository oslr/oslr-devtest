import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    var name;
    if(i < 10){
      name = `Student ${i+1}`;
    }else{
      name = `Doctor ${i+1}`;
    }
    return name;
  },

  jobTitle(i){
    var jt;
    if(i < 10){
      jt = "Medical Student";
    }else{
      jt = "FY1 Doctor";
    }
  }
});
